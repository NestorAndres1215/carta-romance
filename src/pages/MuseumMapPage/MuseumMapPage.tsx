import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

import MuseumHeader from "../../components/layout/MuseumHeader";
import MuseumRoomCard from "../../components/gallery/MuseumRoomCard";

import { museumRooms, type MuseumRoom } from "../../data/museumData";

import "./MuseumMapPage.css";

function MuseumMapPage() {
    const navigate = useNavigate();

    const [selectedRoom, setSelectedRoom] = useState<MuseumRoom>(museumRooms[0]);

    const SelectedIcon = selectedRoom.icon;

    const handleEnterRoom = () => {
        navigate(selectedRoom.path);
    };

    return (
        <main className="museum-map">
            <MuseumHeader />

            <section className="museum-map__intro">
                <span className="museum-map__eyebrow">
                    <Sparkles size={14} />
                    BIENVENIDA A NUESTRO MUSEO
                </span>

                <h1>
                    Cada sala guarda
                    <span> un pedacito de nosotros.</span>
                </h1>

                <p>
                    Este pequeño museo fue creado para ti. Aquí encontrarás recuerdos,
                    palabras, sentimientos y sueños que forman parte de nuestra historia.
                </p>

                <div className="museum-map__dedication">
                    <Heart size={15} />

                    <span>Con amor, para mi persona favorita.</span>
                </div>
            </section>

            <section className="museum-map__exhibition">
                <div className="museum-map__section-heading">
                    <div>
                        <span>EL RECORRIDO</span>

                        <h2>Explora nuestras salas</h2>
                    </div>

                    <span className="museum-map__room-count">09 EXPOSICIONES</span>
                </div>

                <div className="museum-map__grid">
                    {museumRooms.map((room) => (
                        <MuseumRoomCard
                            key={room.id}
                            room={room}
                            selected={selectedRoom.id === room.id}
                            onSelect={setSelectedRoom}
                        />
                    ))}
                </div>
            </section>

            <section className="museum-map__preview">
                <div className="museum-map__preview-icon">
                    <SelectedIcon size={34} strokeWidth={1.3} />
                </div>

                <div className="museum-map__preview-content">
                    <span>EXPOSICIÓN SELECCIONADA · {selectedRoom.number}</span>

                    <h2>{selectedRoom.title}</h2>

                    <p>{selectedRoom.description}</p>
                </div>

                <button className="museum-map__enter" onClick={handleEnterRoom}>
                    Visitar sala
                    <ArrowRight size={17} />
                </button>
            </section>

            <footer className="museum-map__footer">
                <Heart size={13} />

                <span>NUESTRA HISTORIA APENAS ESTÁ COMENZANDO</span>
            </footer>
        </main>
    );
}

export default MuseumMapPage;
