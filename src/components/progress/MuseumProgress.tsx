import { useMuseumProgress } from '../../context/MuseumProgressContext';

import './MuseumProgress.css';

function MuseumProgress() {
    const {
        visitedRooms,
        completedCount,
        totalRooms,
        progressPercentage,
        remainingRooms,
        isRoomVisited,
    } = useMuseumProgress();

    return (
        <section className="museum-progress">
            <div className="museum-progress__header">
                <div className="museum-progress__information">
                    <span className="museum-progress__eyebrow">
                        EL RECORRIDO DE NUESTRO AMOR
                    </span>

                    <h2 className="museum-progress__title">
                        Tu recorrido por el museo
                    </h2>

                    <p className="museum-progress__description">
                        Cada sala guarda una pequeña parte de nuestra historia.
                    </p>
                </div>

                <div className="museum-progress__counter">
                    <span className="museum-progress__counter-number">
                        {completedCount}
                        <span>/{totalRooms}</span>
                    </span>

                    <span className="museum-progress__counter-label">
                        Salas descubiertas
                    </span>
                </div>
            </div>

            <div className="museum-progress__bar-container">
                <div className="museum-progress__bar-information">
                    <span>Progreso del recorrido</span>

                    <span className="museum-progress__percentage">
                        {progressPercentage}%
                    </span>
                </div>

                <div
                    className="museum-progress__bar"
                    role="progressbar"
                    aria-label="Progreso del recorrido del museo"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progressPercentage}
                >
                    <div
                        className="museum-progress__bar-fill"
                        style={{
                            width: `${progressPercentage}%`,
                        }}
                    />
                </div>
            </div>

            <div className="museum-progress__rooms">
                {Array.from({ length: totalRooms }, (_, index) => {
                    const roomNumber = index + 1;
                    const visited = isRoomVisited(roomNumber);

                    return (
                        <div
                            key={roomNumber}
                            className={`museum-progress__room ${
                                visited
                                    ? 'museum-progress__room--visited'
                                    : ''
                            }`}
                            title={`Sala ${String(roomNumber).padStart(2, '0')}: ${
                                visited ? 'Descubierta' : 'Pendiente'
                            }`}
                        >
                            <span className="museum-progress__room-number">
                                {String(roomNumber).padStart(2, '0')}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="museum-progress__footer">
                <span>
                    {completedCount === totalRooms
                        ? 'Has descubierto todas las salas de nuestro museo.'
                        : `Te ${
                              remainingRooms === 1
                                  ? 'queda una sala'
                                  : `quedan ${remainingRooms} salas`
                          } por descubrir.`}
                </span>

                <span className="museum-progress__visited-count">
                    {visitedRooms.length} de {totalRooms}
                </span>
            </div>
        </section>
    );
}

export default MuseumProgress;