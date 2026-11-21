
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    MapPin,
    Plane,
    Sparkles,
    Mail,
    Infinity,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';

import './DistancePage.css';

function DistancePage() {
    const navigate = useNavigate();

    return (
        <main className="distance">
            <MuseumHeader />

            <section className="distance__hero">
                <button
                    className="distance__back"
                    onClick={() => navigate('/museo')}
                >
                    <ArrowLeft size={17} />
                    Volver al museo
                </button>

                <div className="distance__heading">
                    <span className="distance__eyebrow">
                        <Sparkles size={15} />
                        SALA 04 · NUESTRA DISTANCIA
                    </span>

                    <h1>
                        Aunque nos separen
                        <span> los kilómetros</span>
                    </h1>

                    <p>
                        Puede que nuestros caminos estén
                        en lugares diferentes, pero hay
                        algo que siempre consigue unirnos:
                        todo lo que sentimos el uno por el otro.
                    </p>
                </div>
            </section>

            <section className="distance__map-section">
                <div className="distance__section-heading">
                    <span>UN MISMO SENTIMIENTO</span>
                    <h2>Dos lugares, un solo corazón</h2>
                    <p>
                        Un mapa que representa la distancia
                        que algún día convertiremos en un abrazo.
                    </p>
                </div>

                <div className="distance__map">
                    <div className="distance__map-decoration distance__map-decoration--one" />
                    <div className="distance__map-decoration distance__map-decoration--two" />
                    <div className="distance__map-decoration distance__map-decoration--three" />

                    <div className="distance__location distance__location--left">
                        <div className="distance__pin">
                            <MapPin size={23} />
                        </div>
                        <span>MI LUGAR</span>
                        <strong>San Martin de Porres</strong>
                        <small>Donde espero por ti</small>
                    </div>

                    <svg
                        className="distance__route"
                        viewBox="0 0 500 180"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M 20 125 C 130 15, 340 165, 480 45"
                            fill="none"
                            stroke="#b78a82"
                            strokeWidth="2.5"
                            strokeDasharray="7 8"
                        />
                    </svg>

                    <div className="distance__route-heart">
                        <Heart size={25} fill="currentColor" />
                    </div>

                    <div className="distance__location distance__location--right">
                        <div className="distance__pin">
                            <MapPin size={23} />
                        </div>
                        <span>TU LUGAR</span>
                        <strong>San Rosa</strong>
                        <small>Donde comienza mi sonrisa</small>
                    </div>

                    <div className="distance__map-footer">
                        <Plane size={17} />
                        <span>UN CAMINO QUE ALGÚN DÍA RECORREREMOS</span>
                    </div>
                </div>

                <p className="distance__map-note">
                    Dos ciudades diferentes, pero siempre
                    presentes en el mismo corazón.
                </p>
            </section>

            <section className="distance__message">
                <div className="distance__message-icon">
                    <Heart size={25} />
                </div>

                <span>LO QUE LA DISTANCIA NO PUEDE CAMBIAR</span>

                <h2>
                    No importa cuántos kilómetros
                    <br />
                    haya entre nosotros...
                </h2>

                <p>
                    Porque puedo estar lejos de ti y aun así
                    encontrarte en mis pensamientos, en mis
                    conversaciones favoritas y en esos
                    pequeños momentos del día en los que
                    deseo tenerte cerca.
                </p>

                <p>
                    Quizás todavía no podamos compartir
                    un abrazo cada vez que lo necesitamos,
                    pero eso no significa que lo que sentimos
                    sea menos especial.
                </p>

                <strong>
                    La distancia nos separa por ahora,
                    pero no cambia lo importante que eres para mí.
                </strong>
            </section>

            <section className="distance__dream">
                <div className="distance__dream-decoration">
                    <Infinity size={35} />
                </div>

                <span>NUESTRO SUEÑO</span>

                <h2>
                    Un día el mapa dejará
                    <span> de tener kilómetros entre nosotros.</span>
                </h2>

                <p>
                    Y podremos cambiar los mensajes por
                    abrazos, las despedidas por encuentros
                    y las ganas de estar juntos por momentos
                    que podamos vivir de verdad.
                </p>

                <div className="distance__dream-footer">
                    <Mail size={19} />
                    <span>
                        Ese día será uno de nuestros recuerdos favoritos.
                    </span>
                </div>
            </section>

            <section className="distance__closing">
                <Heart size={23} />

                <p>
                    No necesito que estés cerca para
                    saber cuánto significas para mí.
                </p>

                <span>
                    Aunque hoy nos separen kilómetros,
                    mi cariño siempre encuentra el camino hacia ti.
                </span>
            </section>

            <footer className="distance__footer">
                <button
                    onClick={() => navigate('/sala/nueve-meses')}
                >
                    <ArrowLeft size={16} />
                    Sala anterior
                </button>


                <button
                    onClick={() => navigate('/sala/coleccion')}
                >
                    Siguiente sala
                    <ArrowRight size={16} />
                </button>
            </footer>
        </main>
    );
}

export default DistancePage;
