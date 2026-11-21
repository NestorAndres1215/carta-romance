
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    MapPin,
    Sparkles,
    HandHeart,
    Mail,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';
import './FirstMeetingPage.css';

function FirstMeetingPage() {
    const navigate = useNavigate();

    return (
        <main className="meeting-page">
            <MuseumHeader />

            <section className="meeting-container">
                <div className="meeting-heading">
                    <span className="meeting-eyebrow">
                        SALA 06 · NUESTRO FUTURO
                    </span>

                    <h1>
                        Un encuentro
                        <br />
                        <span>que esperamos</span>
                    </h1>

                    <p>
                        Hay momentos que todavía no hemos vivido,
                        pero que ya ocupan un lugar especial en
                        nuestro corazón.
                    </p>
                </div>

                <div className="meeting-artwork">
                    <div className="meeting-artwork-decoration decoration-one">
                        <Sparkles size={24} />
                    </div>

                    <div className="meeting-artwork-decoration decoration-two">
                        <Heart size={22} />
                    </div>

                    <div className="meeting-postcard">
                        <div className="postcard-top">
                            <span>UN DÍA ESPECIAL</span>
                            <Heart size={19} />
                        </div>

                        <div className="postcard-illustration">
                            <div className="postcard-sun" />

                            <div className="postcard-hill hill-one" />
                            <div className="postcard-hill hill-two" />

                            <div className="postcard-person person-one">
                                <span />
                            </div>

                            <div className="postcard-person person-two">
                                <span />
                            </div>

                            <div className="postcard-heart">
                                <Heart size={30} fill="currentColor" />
                            </div>
                        </div>

                        <div className="postcard-bottom">
                            <span>POR FIN, FRENTE A FRENTE</span>
                            <span>♡</span>
                        </div>
                    </div>

                    <div className="meeting-floating-note">
                        <Heart size={15} fill="currentColor" />
                        <span>Un abrazo pendiente</span>
                    </div>
                </div>

                <article className="meeting-letter">
                    <div className="meeting-letter-icon">
                        <Mail size={24} />
                    </div>

                    <span className="meeting-letter-label">
                        UNA PROMESA PARA EL FUTURO
                    </span>

                    <h2>
                        Todavía no sé cuándo será...
                    </h2>

                    <p>
                        No sabemos qué día llegará ese momento,
                        ni cuántos días más tendremos que esperar.
                        Pero sé que hay algo que deseo muchísimo:
                        poder tenerte frente a mí.
                    </p>

                    <p>
                        Quiero dejar de imaginar cómo sería abrazarte
                        y poder hacerlo de verdad. Mirarte a los ojos,
                        sonreír contigo y disfrutar de esos pequeños
                        momentos que tantas veces hemos imaginado.
                    </p>

                    <p className="meeting-letter-highlight">
                        Porque después de tantos kilómetros,
                        conversaciones y momentos compartidos,
                        nuestro primer encuentro será un recuerdo
                        que siempre llevaré conmigo.
                    </p>

                    <div className="meeting-letter-signature">
                        Con todo mi cariño,
                        <strong>Alguien que espera ese abrazo ❤️</strong>
                    </div>
                </article>

                <section className="meeting-date">
                    <div className="meeting-date-icon">
                        <MapPin size={25} />
                    </div>

                    <span>LA FECHA QUE ESPERAMOS</span>

                    <h2>Algún día, muy pronto...</h2>

                    <p>
                        Aún no conocemos la fecha, pero tenemos
                        un motivo muy bonito para esperarla.
                    </p>

                    <div className="meeting-date-decoration">
                        <span />
                        <Heart size={17} fill="currentColor" />
                        <span />
                    </div>
                </section>

                <section className="meeting-wish">
                    <HandHeart size={30} />

                    <h2>Lo primero que quiero hacer...</h2>

                    <p>
                        Abrazarte muy fuerte, sin importar cuánto
                        tiempo hayamos esperado. Quiero que ese
                        abrazo diga todo lo que las palabras no
                        pudieron expresar durante la distancia.
                    </p>

                    <span>Ese abrazo que todavía nos debemos.</span>
                </section>

                <div className="meeting-closing">
                    <p>
                        Algunos encuentros se hacen esperar,
                        pero eso no significa que sean menos especiales.
                    </p>

                    <Heart size={24} fill="currentColor" />
                </div>

                <nav className="meeting-navigation">
                    <button
                        className="meeting-nav-button"
                        onClick={() => navigate('/sala/coleccion')}
                    >
                        <ArrowLeft size={18} />
                        Sala anterior
                    </button>

                    <button
                        className="meeting-nav-button meeting-nav-next"
                        onClick={() => navigate('/sala/final')}
                    >
                        Siguiente Sala
                        <ArrowRight size={18} />
                    </button>
                </nav>
            </section>
        </main>
    );
}

export default FirstMeetingPage;
