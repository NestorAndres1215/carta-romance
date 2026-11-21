
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Heart,
    MapPin,
    MessageCircle,
    Sparkles,
    Star,

    CalendarHeart,
    Infinity,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';
import './FutureDreamsPage.css';

const dreams = [
    {
        id: 1,
        icon: MapPin,
        title: 'Nuestro primer encuentro',
        description: 'Ese día que todavía esperamos con tanta ilusión.',
        message:
            'Quiero que algún día podamos mirarnos frente a frente y descubrir cómo se siente tenernos cerquita.',
    },
    {
        id: 2,
        icon: Heart,
        title: 'Nuestro primer abrazo',
        description: 'Ese abrazo que tantas veces hemos imaginado.',
        message:
            'Quiero abrazarte muy fuerte y que por un momento todos esos kilómetros desaparezcan.',
    },
    {
        id: 3,
        icon: MessageCircle,
        title: 'Miles de conversaciones',
        description: 'Seguir compartiendo nuestras vidas.',
        message:
            'Quiero seguir escuchando tus historias, contarte las mías y descubrir cada día algo nuevo de ti.',
    },
    {
        id: 4,
        icon: Star,
        title: 'Nuevos recuerdos',
        description: 'Crear momentos que algún día recordaremos con una sonrisa.',
        message:
            'Todavía nos esperan muchas experiencias, risas y recuerdos que ni siquiera imaginamos.',
    },
    {
        id: 5,
        icon: CalendarHeart,
        title: 'Muchos aniversarios más',
        description: 'Celebrar todo lo que vayamos construyendo.',
        message:
            'Me hace ilusión pensar en todos los aniversarios que todavía podríamos celebrar juntos.',
    },
    {
        id: 6,
        icon: Infinity,
        title: 'Una historia sin terminar',
        description: 'Seguir escribiendo nuestra propia historia.',
        message:
            'No quiero que nuestra historia se quede en estas nueve salas. Quiero que todavía tenga muchísimas páginas.',
    },
];

function FutureDreamsPage() {
    const navigate = useNavigate();
    const [selectedDream, setSelectedDream] = useState<number | null>(null);

    const selected = dreams.find(
        (dream) => dream.id === selectedDream
    );

    return (
        <main className="future-dreams-page">
            <MuseumHeader />

            <section className="future-dreams-container">
                <header className="future-dreams-heading">
                    <span>SALA 09 · NUESTRO PORVENIR</span>

                    <h1>
                        Todos los sueños
                        <br />
                        <em>que nos esperan</em>
                    </h1>

                    <p>
                        Nueve meses son solamente el comienzo.
                        Todavía hay muchas cosas bonitas que
                        nos gustaría vivir.
                    </p>
                </header>

                <section className="future-dreams-intro">
                    <Sparkles size={30} />

                    <h2>Hay tanto que todavía queremos vivir...</h2>

                    <p>
                        Algunos momentos todavía existen solamente
                        en nuestra imaginación. Pero eso no les
                        quita lo especiales que pueden llegar a ser.
                    </p>
                </section>

                <div className="future-dreams-grid">
                    {dreams.map((dream, index) => {
                        const Icon = dream.icon;
                        const isSelected = selectedDream === dream.id;

                        return (
                            <button
                                key={dream.id}
                                className={`future-dream-card ${isSelected ? 'selected' : ''
                                    }`}
                                onClick={() =>
                                    setSelectedDream(
                                        isSelected ? null : dream.id
                                    )
                                }
                            >
                                <span className="future-dream-number">
                                    0{index + 1}
                                </span>

                                <div className="future-dream-icon">
                                    <Icon size={25} />
                                </div>

                                <h3>{dream.title}</h3>

                                <p>{dream.description}</p>

                                <span className="future-dream-link">
                                    Descubrir sueño
                                    <Sparkles size={15} />
                                </span>
                            </button>
                        );
                    })}
                </div>

                {selected && (
                    <article className="future-dream-reveal">
                        <Heart size={28} fill="currentColor" />

                        <span>UN DESEO PARA NUESTRO FUTURO</span>

                        <h2>{selected.title}</h2>

                        <p>{selected.message}</p>

                        <button onClick={() => setSelectedDream(null)}>
                            Cerrar mensaje
                        </button>
                    </article>
                )}

                <section className="future-dreams-letter">
                    <div className="future-letter-decoration">
                        <Heart size={24} fill="currentColor" />
                    </div>

                    <span>UNA ÚLTIMA REFLEXIÓN</span>

                    <h2>Lo mejor de nuestra historia...</h2>

                    <p>
                        Quizá no sabemos cuándo llegará nuestro
                        próximo gran momento, ni qué sorpresas
                        nos esperan en el camino.
                    </p>

                    <p>
                        Pero me gusta pensar que todavía tenemos
                        mucho por descubrir, muchas cosas por
                        contarnos y muchos motivos para sonreír.
                    </p>

                    <p className="future-letter-highlight">
                        Estas nueve salas guardan una pequeña
                        parte de nuestra historia. El resto
                        todavía está esperando ser escrito.
                    </p>
                </section>

                <div className="future-dreams-ending">
                    <div className="future-ending-hearts">
                        <Heart size={20} fill="currentColor" />
                        <Heart size={32} fill="currentColor" />
                        <Heart size={20} fill="currentColor" />
                    </div>

                    <h2>
                        Y si pudiera pedir un deseo...
                    </h2>

                    <p>
                        Sería que la vida nos permita seguir
                        compartiendo muchos capítulos más.
                    </p>

                    <span>Esta historia continúa... ❤️</span>
                </div>

                <nav className="future-dreams-navigation">
                    <button
                        onClick={() => navigate('/sala/pequenos-momentos')}
                    >
                        <ArrowLeft size={17} />
                        Sala anterior
                    </button>

                    <button onClick={() => navigate('/museo')}>
                        Volver al museo
                        <ArrowLeft size={17} />
                    </button>
                </nav>
            </section>
        </main>
    );
}

export default FutureDreamsPage;
