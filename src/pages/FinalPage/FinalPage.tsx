
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Mail,
    Sparkles,
    Gift,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';

import './FinalPage.css';

function FinalPage() {
    const navigate = useNavigate();

    const [letterOpened, setLetterOpened] = useState(false);
    const [surpriseOpened, setSurpriseOpened] = useState(false);

    const openLetter = () => {
        setLetterOpened(true);
    };

    const openSurprise = () => {
        setSurpriseOpened(true);
    };

    return (
        <main className="final-page">
            <MuseumHeader />

            <section className="final-container">
                <header className="final-heading">
                    <span className="final-eyebrow">
                        SALA 07 · EL FINAL ES SOLO EL PRINCIPIO
                    </span>

                    <h1>
                        Nuestra historia
                        <br />
                        <span>todavía no termina</span>
                    </h1>

                    <p>
                        Llegaste al final de este pequeño museo,
                        pero todavía nos quedan muchísimas páginas
                        por escribir juntos.
                    </p>
                </header>

                {!letterOpened ? (
                    <section className="final-envelope-section">
                        <div className="envelope-decoration">
                            <Sparkles size={24} />
                        </div>

                        <div className="final-envelope">
                            <div className="envelope-paper">
                                <Mail size={38} />
                                <span>Una carta para ti</span>
                            </div>

                            <div className="envelope-flap" />

                            <div className="envelope-body">
                                <div className="envelope-seal">
                                    <Heart size={27} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <h2>Hay algo que quiero decirte...</h2>

                        <p>
                            He guardado unas palabras especialmente
                            para ti. Abre este sobre y descubre
                            lo que quiero que sepas.
                        </p>

                        <button
                            className="final-primary-button"
                            onClick={openLetter}
                        >
                            <Mail size={18} />
                            Abrir mi carta
                        </button>
                    </section>
                ) : (
                    <section className="final-letter-section">
                        <div className="final-letter">
                            <div className="final-letter-top">
                                <Heart size={25} fill="currentColor" />
                                <span>PARA TI, CON TODO MI AMOR</span>
                                <Heart size={25} fill="currentColor" />
                            </div>


                            <h2>Mi amor:</h2>

                            <p>
                                Si pudiera volver al momento en que
                                nuestras vidas se cruzaron, volvería
                                a escribirte sin pensarlo.
                            </p>

                            <p>
                                No te estaba buscando, pero llegaste
                                a mi vida de una manera inesperada.
                                Y poco a poco, tu voz, tu forma de ser
                                y esa dulzura que te caracteriza
                                comenzaron a convertirse en algo
                                muy especial para mí.
                            </p>

                            <p>
                                Después llegaron nuestros números,
                                las conversaciones por WhatsApp
                                y tantos momentos compartidos a
                                través de una pantalla.
                            </p>

                            <p>
                                Y nunca voy a olvidar aquel sábado
                                21 de febrero, a las 11 de la noche,
                                cuando te pedí que fueras mi novia.
                                Desde entonces comenzó una historia
                                que hoy seguimos construyendo.
                            </p>

                            <p>
                                Hoy celebramos nueve meses de esta
                                aventura. Sé que la distancia no
                                siempre es fácil y que todavía tenemos
                                pendiente ese primer encuentro,
                                pero me hace ilusión pensar en todo
                                lo que aún nos espera.
                            </p>

                            <p>
                                También sé que no soy perfecto y que
                                cometo errores. Sé que hace unos días
                                hice algo que pudo lastimarte y quiero
                                que sepas que de verdad lo lamento.
                                No quiero justificar mis acciones,
                                sino aprender de ellas y demostrarte
                                con hechos que puedo hacerlo mejor.
                            </p>

                            <p>
                                A pesar de los momentos difíciles,
                                de los problemas y de los días en los
                                que las cosas no salen como esperamos,
                                quiero que nunca dudes de lo mucho
                                que te amo. Eres una persona demasiado
                                especial para mí y no quiero dejar de
                                cuidar lo bonito que hemos construido.
                            </p>

                            <p className="final-letter-highlight">
                                Gracias por llegar a mi vida,
                                por ser tú y por formar parte
                                de esta historia tan bonita.
                                Aunque a veces cometa errores,
                                mi amor por ti es sincero y
                                quiero aprender a demostrártelo
                                cada día de una mejor manera.
                            </p>

                            <p>
                                No sé exactamente qué nos espera
                                mañana, pero sí sé que quiero seguir
                                creando recuerdos contigo, seguir
                                conociéndote y seguir escribiendo
                                capítulos a tu lado.
                            </p>

                            <p>
                                Quiero que sepas que te amo muchísimo.
                                Para mí eres mi otra mitad, esa persona
                                con quien quiero compartir tantos
                                momentos que todavía nos faltan vivir.
                                No quiero perder lo que tenemos y
                                deseo que podamos seguir superando
                                juntos las dificultades.
                            </p>

                            <p>
                                Si pudiera regresar al principio,
                                volvería a escribirte, volvería a
                                conocerte poco a poco y volvería
                                a elegirte. Porque entre tantas
                                personas, tuve la suerte de
                                encontrarte a ti.
                            </p>

                            <div className="final-letter-signature">
                                <span>Con todo mi amor,</span>
                                <strong>
                                    El que tuvo la suerte de encontrarte ❤️
                                </strong>
                            </div>


                            <div className="final-letter-footer">
                                <Heart size={18} fill="currentColor" />
                                <span>NUESTROS NUEVE MESES</span>
                                <Heart size={18} fill="currentColor" />
                            </div>
                        </div>

                        {!surpriseOpened ? (
                            <div className="final-surprise">
                                <div className="final-surprise-icon">
                                    <Gift size={32} />
                                </div>

                                <h2>Pero todavía hay algo más...</h2>

                                <p>
                                    No quería terminar este recorrido
                                    sin dejarte una última sorpresa.
                                </p>

                                <button
                                    className="final-primary-button"
                                    onClick={openSurprise}
                                >
                                    <Sparkles size={18} />
                                    Descubrir sorpresa
                                </button>
                            </div>
                        ) : (
                            <div className="final-surprise-revealed">
                                <div className="surprise-hearts">
                                    <Heart size={24} fill="currentColor" />
                                    <Heart size={35} fill="currentColor" />
                                    <Heart size={24} fill="currentColor" />
                                </div>

                                <span>MI ÚLTIMO MENSAJE PARA TI</span>

                                <h2>
                                    Mi lugar favorito
                                    <br />
                                    siempre será a tu lado.
                                </h2>

                                <p>
                                    Feliz aniversario de nueve meses,
                                    mi amor. Esto no es el final de
                                    nuestra historia. Es solamente
                                    una pequeña celebración de todo
                                    lo que hemos vivido y de todo
                                    lo que todavía nos falta vivir.
                                </p>

                                <strong>Te quiero muchísimo. ❤️</strong>
                            </div>
                        )}
                    </section>
                )}

                <footer className="final-footer">
                    <div className="final-footer-decoration">
                        <span />
                        <Heart size={18} fill="currentColor" />
                        <span />
                    </div>

                    <p>
                        Fin del recorrido...
                        <br />
                        <strong>pero no de nuestra historia.</strong>
                    </p>
                </footer>

                <footer className="final-navigation">
                    <button
                        onClick={() => navigate('/sala/primer-encuentro')}
                    >
                        <ArrowLeft size={16} />
                        Regresar al recorrido
                    </button>



                    <button
                        onClick={() => navigate('/sala/pequenos-momentos')}
                    >
                        Siguiente sala
                        <ArrowRight size={16} />
                    </button>
                </footer>
            </section>
        </main>
    );
}

export default FinalPage;
