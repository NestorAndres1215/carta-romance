
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    MessageCircle,
    MessagesSquare,
    Sparkles,
    Mail,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';

import './ConversationsPage.css';

const conversationMessages = [
    {
        id: 1,
        author: 'Tú',
        message: 'No sabía que aquel mensaje que te escribí sin buscarte terminaría convirtiéndose en el comienzo de una historia tan bonita.',
        time: 'Donde todo comenzó ❤️',
        type: 'mine',
    },
    {
        id: 2,
        author: 'Ella',
        message: 'Sin darnos cuenta, empezamos a compartir un poquito más de nosotros en cada conversación.',
        time: 'Dos corazones conociéndose 💗',
        type: 'hers',
    },
    {
        id: 3,
        author: 'Tú',
        message: 'Y entre mensajes, tu voz, tu dulzura y tu forma de ser fueron haciendo que cada día me gustara un poquito más tenerte en mi vida.',
        time: 'Mi conversación favorita eres tú ❤️',
        type: 'mine',
    },
];
function ConversationsPage() {
    const navigate = useNavigate();

    return (
        <main className="conversations">
            <MuseumHeader />

            <section className="conversations__hero">
                <button
                    className="conversations__back"
                    onClick={() => navigate('/museo')}
                >
                    <ArrowLeft size={17} />
                    Volver al museo
                </button>

                <div className="conversations__heading">
                    <span className="conversations__eyebrow">
                        <Sparkles size={15} />
                        SALA 02 · NUESTROS RECUERDOS
                    </span>

                    <h1>
                        Palabras que
                        <span> nos acercaron</span>
                    </h1>

                    <p>
                        No siempre necesitamos estar cerca
                        para sentirnos acompañados.
                        A veces, unas palabras tuyas
                        pueden hacer que la distancia
                        se sienta un poquito más pequeña.
                    </p>
                </div>
            </section>

            <section className="conversations__exhibition">
                <div className="conversations__section-heading">
                    <span>EXPOSICIÓN N.º 002</span>
                    <h2>Nuestro pequeño mundo de mensajes</h2>
                    <p>
                        Dos personas, dos lugares y un montón
                        de palabras que fueron creando algo nuestro.
                    </p>
                </div>

                <div className="conversations__chat">
                    <div className="conversations__chat-header">
                        <div className="conversations__chat-avatar">
                            <Heart size={21} />
                        </div>

                        <div>
                            <strong>Nuestro pequeño mundo</strong>
                            <span>Una conversación especial</span>
                        </div>

                        <Heart
                            className="conversations__chat-heart"
                            size={20}
                        />
                    </div>

                    <div className="conversations__chat-body">
                        <span className="conversations__chat-date">
                            ALGUNAS PALABRAS DE NUESTRA HISTORIA
                        </span>

                        {conversationMessages.map((item) => (
                            <div
                                key={item.id}
                                className={`conversations__message conversations__message--${item.type}`}
                            >
                                <span>{item.author}</span>
                                <p>{item.message}</p>
                                <small>{item.time}</small>
                            </div>
                        ))}

                        <div className="conversations__chat-ending">
                            <Heart size={15} />
                            <span>Y todavía tenemos mucho por contarnos...</span>
                        </div>
                    </div>
                </div>

                <p className="conversations__disclaimer">
                    Esta es una recreación simbólica. Más adelante
                    podremos reemplazarla por fragmentos reales
                    que quieras compartir.
                </p>
            </section>

            <section className="conversations__words">
                <div className="conversations__section-heading">
                    <span>PEQUEÑOS DETALLES</span>
                    <h2>Palabras que guardo</h2>
                    <p>
                        Porque hay mensajes que no se olvidan,
                        aunque pase el tiempo.
                    </p>
                </div>

                <div className="conversations__words-grid">
                    <article className="conversations__word-card">
                        <MessageCircle size={23} />
                        <h3>Tu voz</h3>
                        <p>
                            Una de las primeras cosas que
                            llamó mi atención y que hizo
                            que quisiera conocerte más.
                        </p>
                    </article>

                    <article className="conversations__word-card">
                        <Heart size={23} />
                        <h3>Tu dulzura</h3>
                        <p>
                            Esa manera tan bonita que tienes
                            de ser y que hace que seas
                            tan especial para mí.
                        </p>
                    </article>

                    <article className="conversations__word-card">
                        <Mail size={23} />
                        <h3>Tus mensajes</h3>
                        <p>
                            Esas pequeñas palabras que,
                            incluso desde lejos, consiguen
                            hacerme sentir cerca de ti.
                        </p>
                    </article>
                </div>
            </section>

            <section className="conversations__letter">
                <div className="conversations__letter-icon">
                    <MessagesSquare size={27} />
                </div>

                <span>UNA CARTA PARA TI</span>

                <h2>
                    Aunque solo sean palabras
                    <br />
                    en una pantalla...
                </h2>

                <p>
                    Quiero que sepas que detrás de cada
                    mensaje hay alguien que piensa en ti,
                    que disfruta conocerte y que encuentra
                    en nuestras conversaciones una forma
                    muy bonita de sentirse cerca de ti.
                </p>

                <p>
                    Tal vez no podamos compartir todos
                    los momentos en persona todavía,
                    pero me encanta que podamos construir
                    nuestra historia con cada conversación.
                </p>

                <strong>Gracias por cada palabra, mi amor.</strong>
            </section>

            <footer className="conversations__footer">
                <button
                    onClick={() => navigate('/sala/primer-mensaje')}
                >
                    <ArrowLeft size={16} />
                    Sala anterior
                </button>


                <button
                    onClick={() => navigate('/sala/nueve-meses')}
                >
                    Siguiente sala
                    <ArrowRight size={16} />
                </button>
            </footer>
        </main>
    );
}

export default ConversationsPage;
