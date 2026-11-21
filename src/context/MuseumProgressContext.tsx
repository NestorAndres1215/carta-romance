
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';

const STORAGE_KEY = 'museum_our_love_progress';

const TOTAL_ROOMS = 9;

const ROOM_ROUTES: Record<string, number> = {
    '/sala/primer-mensaje': 1,
    '/sala/conversaciones': 2,
    '/sala/nueve-meses': 3,
    '/sala/distancia': 4,
    '/sala/coleccion': 5,
    '/sala/primer-encuentro': 6,
    '/sala/final': 7,
    '/sala/pequenos-momentos': 8,
    '/sala/nuestros-suenos': 9,
};

interface MuseumProgressContextType {
    visitedRooms: number[];
    completedCount: number;
    totalRooms: number;
    progressPercentage: number;
    remainingRooms: number;
    isRoomVisited: (roomId: number) => boolean;
    markRoomVisited: (roomId: number) => void;
    markRoomVisitedByPath: (pathname: string) => void;
    resetProgress: () => void;
}

interface MuseumProgressProviderProps {
    children: ReactNode;
}

const MuseumProgressContext = createContext<
    MuseumProgressContextType | undefined
>(undefined);

function getSavedProgress(): number[] {
    try {
        const savedProgress = localStorage.getItem(STORAGE_KEY);

        if (!savedProgress) {
            return [];
        }

        const parsedProgress: unknown = JSON.parse(savedProgress);

        if (!Array.isArray(parsedProgress)) {
            return [];
        }

        return [
            ...new Set(
                parsedProgress.filter(
                    (roomId): roomId is number =>
                        typeof roomId === 'number' &&
                        Number.isInteger(roomId) &&
                        roomId >= 1 &&
                        roomId <= TOTAL_ROOMS
                )
            ),
        ].sort((a, b) => a - b);
    } catch {
        return [];
    }
}

export function MuseumProgressProvider({
    children,
}: MuseumProgressProviderProps) {
    const [visitedRooms, setVisitedRooms] = useState<number[]>(
        getSavedProgress
    );

    useEffect(() => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(visitedRooms)
            );
        } catch {
            // El progreso sigue disponible durante la sesión actual.
        }
    }, [visitedRooms]);

    const markRoomVisited = useCallback((roomId: number) => {
        if (
            !Number.isInteger(roomId) ||
            roomId < 1 ||
            roomId > TOTAL_ROOMS
        ) {
            return;
        }

        setVisitedRooms((previousRooms) => {
            if (previousRooms.includes(roomId)) {
                return previousRooms;
            }

            return [...previousRooms, roomId].sort(
                (a, b) => a - b
            );
        });
    }, []);

    const markRoomVisitedByPath = useCallback(
        (pathname: string) => {
            const roomId = ROOM_ROUTES[pathname];

            if (roomId !== undefined) {
                markRoomVisited(roomId);
            }
        },
        [markRoomVisited]
    );

    const isRoomVisited = useCallback(
        (roomId: number) => visitedRooms.includes(roomId),
        [visitedRooms]
    );

    const resetProgress = useCallback(() => {
        setVisitedRooms([]);
    }, []);

    const completedCount = visitedRooms.length;

    const progressPercentage = Math.round(
        (completedCount / TOTAL_ROOMS) * 100
    );

    const remainingRooms = TOTAL_ROOMS - completedCount;

    const contextValue = useMemo(
        () => ({
            visitedRooms,
            completedCount,
            totalRooms: TOTAL_ROOMS,
            progressPercentage,
            remainingRooms,
            isRoomVisited,
            markRoomVisited,
            markRoomVisitedByPath,
            resetProgress,
        }),
        [
            visitedRooms,
            completedCount,
            progressPercentage,
            remainingRooms,
            isRoomVisited,
            markRoomVisited,
            markRoomVisitedByPath,
            resetProgress,
        ]
    );

    return (
        <MuseumProgressContext.Provider value={contextValue}>
            {children}
        </MuseumProgressContext.Provider>
    );
}

export function useMuseumProgress() {
    const context = useContext(MuseumProgressContext);

    if (!context) {
        throw new Error(
            'useMuseumProgress debe utilizarse dentro de MuseumProgressProvider.'
        );
    }

    return context;
}
