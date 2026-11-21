
import type { LucideIcon } from 'lucide-react';

import {
    MessageCircleHeart,
    MessagesSquare,
    BookHeart,
    MapPin,
    Heart,
    HeartHandshake,
    Infinity,
    Sparkles,
    Stars,
} from 'lucide-react';

export interface MuseumRoom {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    path: string;
    category: string;
}

export const museumRooms: MuseumRoom[] = [
    {
        id: 1,
        number: '01',
        title: 'El primer mensaje',
        subtitle: 'Donde todo comenzó',
        description:
            'Una pequeña conversación que terminó convirtiéndose en una historia muy especial.',
        icon: MessageCircleHeart,
        path: '/sala/primer-mensaje',
        category: 'Nuestros comienzos',
    },
    {
        id: 2,
        number: '02',
        title: 'Palabras que nos acercaron',
        subtitle: 'Conversaciones inolvidables',
        description:
            'Cada mensaje, cada palabra y cada conversación que nos hizo sentir más cerca.',
        icon: MessagesSquare,
        path: '/sala/conversaciones',
        category: 'Nuestros recuerdos',
    },
    {
        id: 3,
        number: '03',
        title: 'Nueve capítulos de nosotros',
        subtitle: 'Nueve meses de historia',
        description:
            'Nueve pequeños capítulos que representan todo lo que hemos construido juntos.',
        icon: BookHeart,
        path: '/sala/nueve-meses',
        category: 'Nuestra historia',
    },
    {
        id: 4,
        number: '04',
        title: 'Aunque nos separen los kilómetros',
        subtitle: 'Un amor sin fronteras',
        description:
            'Dos lugares diferentes, pero un mismo sentimiento que nos mantiene unidos.',
        icon: MapPin,
        path: '/sala/distancia',
        category: 'Nuestra distancia',
    },
    {
        id: 5,
        number: '05',
        title: 'Mi colección favorita: tú',
        subtitle: 'Todo lo que amo de ti',
        description:
            'Una colección de tus cualidades, tus detalles y todas las cosas que te hacen especial.',
        icon: Heart,
        path: '/sala/coleccion',
        category: 'Mi persona favorita',
    },
    {
        id: 6,
        number: '06',
        title: 'Un encuentro que esperamos',
        subtitle: 'Nuestro primer abrazo',
        description:
            'Un sueño que cada día está un poquito más cerca de hacerse realidad.',
        icon: HeartHandshake,
        path: '/sala/primer-encuentro',
        category: 'Nuestro futuro',
    },
    {
        id: 7,
        number: '07',
        title: 'Nuestra historia todavía no termina',
        subtitle: 'Y lo mejor está por venir',
        description:
            'La última exposición de este museo, pero nunca el final de nuestra historia.',
        icon: Infinity,
        path: '/sala/final',
        category: 'Para siempre',
    },
    {
        id: 8,
        number: '08',
        title: 'Todos los pequeños momentos',
        subtitle: 'Los detalles que guardo en mi corazón',
        description:
            'Esas pequeñas cosas, conversaciones y detalles que hacen que nuestra historia sea única.',
        icon: Sparkles,
        path: '/sala/pequenos-momentos',
        category: 'Nuestros pequeños detalles',
    },
    {
        id: 9,
        number: '09',
        title: 'Todos los sueños que nos esperan',
        subtitle: 'Un futuro lleno de posibilidades',
        description:
            'Todo lo que todavía nos queda por vivir, descubrir y construir juntos.',
        icon: Stars,
        path: '/sala/nuestros-suenos',
        category: 'Nuestros sueños',
    },
];
