import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

import './WelcomePage.css';

function WelcomePage() {
    const navigate = useNavigate();

    const handleEnterMuseum = () => {
        navigate('/museo');
    };

    return (
        <main className="welcome">

            <header className="welcome__header">
                <div className="welcome__logo">
                    <Heart size={18} />

                    <span>THE LOVE MUSEUM</span>
                </div>

                <span className="welcome__edition">
                    SPECIAL EDITION · 09 MONTHS
                </span>
            </header>

            <section className="welcome__content">

                <div className="welcome__ornament">
                    <Sparkles size={17} />

                    <span>A STORY WRITTEN WITH LOVE</span>

                    <Sparkles size={17} />
                </div>

                <p className="welcome__subtitle">
                    UN LUGAR DONDE VIVEN NUESTROS RECUERDOS
                </p>

                <h1 className="welcome__title">
                    El Museo de
                    <span>Nuestro Amor</span>
                </h1>

                <div className="welcome__divider">
                    <span />
                    <Heart size={19} />
                    <span />
                </div>

                <p className="welcome__description">
                    Nuestra historia comenzó con un mensaje,
                    creció entre conversaciones y hoy se
                    convierte en una de las historias más
                    bonitas que quiero conservar.
                </p>

                <p className="welcome__dedication">
                    Para ti, mi amor. Por nuestros nueve meses
                    y por todos los que todavía nos esperan.
                </p>

                <button
                    className="welcome__button"
                    onClick={handleEnterMuseum}
                >
                    <span>Comenzar el recorrido</span>

                    <ArrowRight size={18} />
                </button>

                <span className="welcome__footer">
                    MADE WITH LOVE · JUST FOR YOU
                </span>

            </section>

            <footer className="welcome__bottom">
                <span>EST. OUR LOVE STORY</span>

                <Heart size={14} />

                <span>FOREVER & ALWAYS</span>
            </footer>

            <div className="welcome__decoration welcome__decoration--left">
                ✿
            </div>

            <div className="welcome__decoration welcome__decoration--right">
                ✿
            </div>

        </main>
    );
}

export default WelcomePage;