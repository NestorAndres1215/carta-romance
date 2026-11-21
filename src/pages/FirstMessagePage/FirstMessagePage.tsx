
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    MessageCircleHeart,
    Sparkles,
    CalendarHeart,
    Mic,
    Smartphone,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';

import './FirstMessagePage.css';

function FirstMessagePage() {
    const navigate = useNavigate();

    return (
        <main className="first-message">
            <MuseumHeader />

            <section className="first-message__hero">
                <button
                    className="first-message__back"
                    onClick={() => navigate('/museo')}
                >
                    <ArrowLeft size={17} />
                    Volver al museo
                </button>

                <div className="first-message__heading">
                    <span className="first-message__eyebrow">
                        <Sparkles size={15} />
                        SALA 01 · NUESTROS COMIENZOS
                    </span>

                    <h1>
                        El primer
                        <span> mensaje</span>
                    </h1>

                    <p>
                        No estaba buscando a alguien,
                        pero llegaste tú. Y sin darme cuenta,
                        comenzamos a escribir una historia
                        que hoy significa muchísimo para mí.
                    </p>
                </div>
            </section>

            <section className="first-message__exhibition">
                <div className="first-message__museum-label">
                    <span>PIEZA N.º 001</span>
                    <span>EL INICIO DE NOSOTROS</span>
                </div>

                <div className="first-message__letter">
                    <div className="first-message__letter-decoration">
                        <Heart size={25} strokeWidth={1.2} />
                    </div>

                    <span className="first-message__letter-label">
                        UN RECUERDO PARA SIEMPRE
                    </span>

                    <h2>
                        No te estaba buscando,
                        <br />
                        pero qué bonito fue encontrarte.
                    </h2>

                    <div className="first-message__letter-divider">
                        <span />
                        <Heart size={14} />
                        <span />
                    </div>

                    <p>
                        Te escribí sin imaginar que
                        llegarías a convertirte en una
                        persona tan importante para mí.
                    </p>

                    <p className="first-message__letter-note">
                        A veces la vida nos sorprende
                        poniendo en nuestro camino
                        a alguien que termina cambiándolo todo.
                    </p>

                    <span className="first-message__letter-signature">
                        Y esa persona fuiste tú.
                    </span>
                </div>

                <div className="first-message__caption">
                    <MessageCircleHeart size={17} />
                    <span>
                        Así comenzó nuestra historia.
                    </span>
                </div>
            </section>

            <section className="first-message__story">
                <div className="first-message__story-heading">
                    <span>NUESTRO PRIMER CAPÍTULO</span>
                    <h2>Cómo empezó todo...</h2>
                    <p>
                        Hay pequeños momentos que terminan
                        convirtiéndose en grandes recuerdos.
                    </p>
                </div>

                <div className="first-message__timeline">
                    <article className="first-message__timeline-item">
                        <span className="first-message__timeline-icon">
                            <MessageCircleHeart size={19} />
                        </span>

                        <div>
                            <span>EL PRIMER MENSAJE</span>
                            <h3>Un mensaje sin estar buscando a nadie.</h3>
                            <p>
                                Te escribí sin buscarte y,
                                sin saberlo, estaba dando
                                el primer paso hacia alguien
                                que se volvería muy especial
                                en mi vida.
                            </p>
                        </div>
                    </article>

                    <article className="first-message__timeline-item">
                        <span className="first-message__timeline-icon">
                            <Mic size={19} />
                        </span>

                        <div>
                            <span>LO QUE ME LLAMÓ LA ATENCIÓN DE TI</span>
                            <h3>Tu voz, tu forma de ser y tu dulzura.</h3>
                            <p>
                                Fueron esas pequeñas cosas
                                las que comenzaron a hacerte
                                diferente para mí. Tu voz,
                                tu manera de ser y esa dulzura
                                que tanto me gusta de ti.
                            </p>
                        </div>
                    </article>

                    <article className="first-message__timeline-item">
                        <span className="first-message__timeline-icon">
                            <Smartphone size={19} />
                        </span>

                        <div>
                            <span>NUESTRAS CONVERSACIONES</span>
                            <h3>De aquella primera conversación a WhatsApp.</h3>
                            <p>
                                Después compartimos nuestros
                                números y comenzamos a tener
                                un espacio más nuestro para
                                seguir conociéndonos.
                            </p>
                        </div>
                    </article>

                    <article className="first-message__timeline-item">
                        <span className="first-message__timeline-icon">
                            <CalendarHeart size={19} />
                        </span>

                        <div>
                            <span>EL DÍA QUE CAMBIÓ TODO</span>
                            <h3>Te pedí que fueras mi novia.</h3>

                            <div className="first-message__special-date">
                             
                                <span> Un sábado 21 de febrero de 2026, a las 11:00 p. m.</span>
                            </div>

                            <p>
                                Esa noche te hice una de las
                                preguntas más importantes
                                de mi vida. Y así comenzó
                                oficialmente nuestro
                                camino como pareja.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="first-message__closing">
                <Heart size={23} strokeWidth={1.3} />

                <p>
                    Si pudiera volver a aquel primer mensaje,
                    <span> volvería a escribirte.</span>
                </p>

                <span>
                    Porque entre tantas casualidades,
                    qué suerte la mía de haberte encontrado.
                </span>
            </section>

            <footer className="first-message__footer">
                <button onClick={() => navigate('/museo')}>
                    <ArrowLeft size={16} />
                    Regresar al recorrido
                </button>



                <button
                    onClick={() => navigate('/sala/conversaciones')}
                >
                    Siguiente sala
                    <ArrowRight size={16} />
                </button>
            </footer>
        </main>
    );
}

export default FirstMessagePage;
