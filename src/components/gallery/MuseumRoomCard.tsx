import type { MuseumRoom } from '../../data/museumData';

import './MuseumRoomCard.css';

interface MuseumRoomCardProps {
    room: MuseumRoom;
    selected: boolean;
    onSelect: (room: MuseumRoom) => void;
}

function MuseumRoomCard({
    room,
    selected,
    onSelect,
}: MuseumRoomCardProps) {
    const Icon = room.icon;

    return (
        <button
            className={`room-card ${selected ? 'room-card--selected' : ''}`}
            onClick={() => onSelect(room)}
            aria-pressed={selected}
        >
            <div className="room-card__top">
                <span className="room-card__number">
                    {room.number}
                </span>

                <Icon size={23} strokeWidth={1.5} />
            </div>

            <div className="room-card__content">
                <span className="room-card__category">
                    {room.category}
                </span>

                <h3>{room.title}</h3>

                <p>{room.subtitle}</p>
            </div>

            <div className="room-card__bottom">
                <span>EXPLORAR EXPOSICIÓN</span>

                <span className="room-card__arrow">
                    ↗
                </span>
            </div>
        </button>
    );
}

export default MuseumRoomCard;