
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    BookHeart,
    Heart,
    Sparkles,
    CalendarDays,
    BookOpen,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';

import './NineMonthsPage.css';

interface Chapter {
    number: string;
    title: string;
    subtitle: string;
    date: string;
    message: string;
    memory: string;
}

const chapters: Chapter[] = [
    {
        number: '01',
        title: 'Donde nació nuestro amor',
        subtitle: 'El comienzo de algo inesperado',
        date: '21 de febrero de 2026',
        message: 'Todo comenzó sin que ninguno de los dos imaginara lo que llegaría a significar el otro. Poco a poco nos fuimos conociendo, descubriendo nuestras formas de ser y dejando que ese cariño tan bonito comenzara a crecer.',
        memory: 'Nunca imaginé que alguien que llegó inesperadamente terminaría ocupando un lugar tan especial en mi corazón.',
    },
    {
        number: '02',
        title: 'Nuestras conversaciones',
        subtitle: 'Palabras que nos acercaron',
        date: '21 de marzo de 2026',
        message: 'Cada conversación era una nueva oportunidad para conocerte un poquito más. Entre mensajes, risas, palabras bonitas y momentos compartidos, hablar contigo comenzó a convertirse en una de mis partes favoritas del día.',
        memory: 'No importaba cuánto habláramos, siempre encontraba una razón para querer seguir conversando contigo.',
    },
    {
        number: '03',
        title: 'Descubriendo nuestro mundo',
        subtitle: 'Dos corazones conociéndose',
        date: '21 de abril de 2026',
        message: 'Fuimos descubriendo nuestras formas de pensar, nuestros gustos, nuestras maneras de demostrar cariño y hasta esos pequeños detalles que nos hacen únicos. Sin darnos cuenta, comenzamos a construir algo que era solamente nuestro.',
        memory: 'Lo más bonito no fue conocerte de golpe, sino tener la oportunidad de descubrirte cada día un poquito más.',
    },
    {
        number: '04',
        title: 'Cada vez más especiales',
        subtitle: 'Un cariño que sigue creciendo',
        date: '21 de mayo de 2026',
        message: 'Con el paso del tiempo te fuiste convirtiendo en alguien indispensable en mi vida. Tu voz, tu dulzura y tu manera de ser hicieron que este sentimiento creciera de una forma que nunca habría imaginado.',
        memory: 'Entre tantas personas en el mundo, qué bonito fue coincidir contigo.',
    },
    {
        number: '05',
        title: 'Aprendiendo a estar juntos',
        subtitle: 'Incluso cuando las cosas no son fáciles',
        date: '21 de junio de 2026',
        message: 'No todo ha sido perfecto. También hemos tenido problemas, diferencias y momentos complicados. Pero algo que quiero valorar de nosotros es que, a pesar de esas dificultades, hemos intentado encontrar soluciones y seguir adelante juntos.',
        memory: 'Porque amar también es aprender, comprender, reconocer nuestros errores y no dejar de intentar construir algo bonito.',
    },
    {
        number: '06',
        title: 'Amándonos a pesar de la distancia',
        subtitle: 'Un amor que no conoce kilómetros',
        date: '21 de julio de 2026',
        message: 'Sé que la distancia puede ser muy difícil y que a veces nos hace falta tenernos cerca. También hemos pasado por momentos que no han sido sencillos, pero aquí seguimos, queriéndonos y demostrando que nuestros sentimientos son más grandes que los kilómetros que nos separan.',
        memory: 'Ojalá pudiera abrazarte cada vez que te extraño, pero mientras llega ese día, quiero seguir eligiéndote y amándote desde aquí.',
    },
    {
        number: '07',
        title: 'Seguimos eligiéndonos',
        subtitle: 'Una historia que no se rinde',
        date: '21 de agosto de 2026',
        message: 'Hemos aprendido que una relación no se construye solamente con momentos bonitos. También necesita paciencia, comprensión, confianza y muchas ganas de seguir adelante. Y yo quiero continuar aprendiendo contigo, porque nuestra historia todavía tiene mucho por vivir.',
        memory: 'No quiero que seamos perfectos; quiero que sigamos creciendo, aprendiendo y cuidando este amor que compartimos.',
    },
    {
        number: '08',
        title: 'Conectados incluso en silencio',
        subtitle: 'Un sentimiento que permanece',
        date: '21 de septiembre de 2026',
        message: 'Sé que no siempre conversamos todos los días y que a veces cada uno tiene sus propios momentos y responsabilidades. Pero eso no significa que deje de sentirte cerca de mí. Hay una conexión emocional que permanece, incluso cuando no estamos hablando.',
        memory: 'Aunque a veces haya silencio entre nuestros mensajes, quiero que sepas que sigues teniendo un lugar muy especial en mi corazón.',
    },
    {
        number: '09',
        title: 'Nueve meses y todavía te amo',
        subtitle: 'Nuestro capítulo más especial',
        date: '21 de noviembre de 2026',
        message: 'Hoy celebramos nueve meses de esta historia que comenzó de una manera inesperada. Sé que últimamente no estamos pasando por nuestro mejor momento y que esta vez ha sido por un error mío. Quiero que sepas que lo reconozco, que lamento haberte hecho sentir mal y que, a pesar de todo, mis sentimientos por ti siguen aquí. No quiero que olvides cuánto te amo.',
        memory: 'Incluso en nuestros días difíciles, quiero seguir demostrando con hechos que te amo. Si algo tengo claro, es que volvería a elegir conocerte y que siempre guardaré un lugar para ti en mi corazón.',
    },
];

function NineMonthsPage() {
    const navigate = useNavigate();

    const [selectedChapter, setSelectedChapter] = useState<Chapter>(
        chapters[8]
    );

    return (
        <main className="nine-months">
            <MuseumHeader />

            <section className="nine-months__hero">
                <button
                    className="nine-months__back"
                    onClick={() => navigate('/museo')}
                >
                    <ArrowLeft size={17} />
                    Volver al museo
                </button>

                <div className="nine-months__heading">
                    <span className="nine-months__eyebrow">
                        <Sparkles size={15} />
                        SALA 03 · NUESTRA HISTORIA
                    </span>

                    <h1>
                        Nueve capítulos
                        <span> de nosotros</span>
                    </h1>

                    <p>
                        Nueve meses, nueve capítulos y una historia
                        que todavía tiene muchísimas páginas
                        por escribir.
                    </p>
                </div>
            </section>

            <section className="nine-months__book">
                <div className="nine-months__book-heading">
                    <BookOpen size={23} />
                    <span>NUESTRO LIBRO DE RECUERDOS</span>
                </div>

                <div className="nine-months__layout">
                    <div className="nine-months__chapters">
                        {chapters.map((chapter) => (
                            <button
                                key={chapter.number}
                                className={`nine-months__chapter ${
                                    selectedChapter.number === chapter.number
                                        ? 'nine-months__chapter--active'
                                        : ''
                                }`}
                                onClick={() => setSelectedChapter(chapter)}
                            >
                                <span>{chapter.number}</span>
                                <div>
                                    <strong>{chapter.title}</strong>
                                    <small>{chapter.subtitle}</small>
                                </div>
                                <Heart size={15} />
                            </button>
                        ))}
                    </div>

                    <article className="nine-months__page">
                        <div className="nine-months__page-top">
                            <span>CAPÍTULO {selectedChapter.number}</span>
                            <BookHeart size={21} />
                        </div>

                        <div className="nine-months__page-content">
                            <span className="nine-months__page-date">
                                <CalendarDays size={14} />
                                {selectedChapter.date}
                            </span>

                            <h2>{selectedChapter.title}</h2>

                            <p className="nine-months__page-subtitle">
                                {selectedChapter.subtitle}
                            </p>

                            <div className="nine-months__page-divider">
                                <span />
                                <Heart size={14} />
                                <span />
                            </div>

                            <p className="nine-months__page-message">
                                {selectedChapter.message}
                            </p>

                            <div className="nine-months__memory">
                                <Sparkles size={17} />
                                <p>{selectedChapter.memory}</p>
                            </div>
                        </div>

                        <div className="nine-months__page-bottom">
                            <span>ESCRITO CON AMOR</span>
                            <span>{selectedChapter.number} / 09</span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="nine-months__closing">
                <Heart size={24} />

                <h2>
                    Nueve meses no son el final,
                    <span> son apenas el comienzo.</span>
                </h2>

                <p>
                    Todavía nos quedan muchos capítulos,
                    muchos recuerdos y muchísimos sueños
                    por cumplir juntos.
                </p>
            </section>

            <footer className="nine-months__footer">
                <button
                    onClick={() => navigate('/sala/conversaciones')}
                >
                    <ArrowLeft size={16} />
                    Sala anterior
                </button>

       

                <button
                    onClick={() => navigate('/sala/distancia')}
                >
                    Siguiente sala
                    <ArrowRight size={16} />
                </button>
            </footer>
        </main>
    );
}

export default NineMonthsPage;
