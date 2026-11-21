
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Mail,
    MessageCircle,
    Sparkles,
    Star,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';
import './LittleMomentsPage.css';

const moments = [
    {
        id: 1,
        icon: MessageCircle,
        title: 'Cada conversación',
        description:
            'Porque incluso los días más normales pueden volverse especiales cuando tengo la oportunidad de hablar contigo.',
        detail: 'Una conversación contigo siempre tiene algo especial. ❤️',
    },
    {
        id: 2,
        icon: Mail,
        title: 'Tus mensajes',
        description:
            'Es bonito saber que, aunque estemos lejos, podemos encontrarnos un ratito a través de nuestras palabras.',
        detail: 'A veces un simple mensaje puede alegrarme el día.',
    },
    {
        id: 3,
        icon: Heart,
        title: 'Tu dulzura',
        description:
            'Esa manera tan tuya de ser fue una de las primeras cosas que llamaron mi atención.',
        detail: 'Hay cosas que no necesitan explicación. Tu dulzura es una de ellas.',
    },
    {
        id: 4,
        icon: Star,
        title: 'Los pequeños detalles',
        description:
            'Esos detalles que quizá parecen pequeños, pero que hacen que nuestra historia sea diferente.',
        detail: 'No siempre son necesarias grandes cosas para crear recuerdos bonitos.',
    },
    {
        id: 5,
        icon: Sparkles,
        title: 'Lo que todavía nos espera',
        description:
            'Todavía tenemos muchas conversaciones, experiencias y momentos por descubrir juntos.',
        detail: 'Nuestro álbum todavía tiene muchas páginas en blanco.',
    },
];

function LittleMomentsPage() {
    const navigate = useNavigate();
    const [selectedMoment, setSelectedMoment] = useState<number | null>(null);

    const selected = moments.find(
        (moment) => moment.id === selectedMoment
    );

    return (
        <main className="little-moments-page">
            <MuseumHeader />

            <section className="little-moments-container">
                <header className="little-moments-heading">
                    <span>SALA 08 · NUESTROS PEQUEÑOS TESOROS</span>

                    <h1>
                        Todos los pequeños
                        <br />
                        <em>momentos</em>
                    </h1>

                    <p>
                        A veces son las cosas más sencillas las que
                        terminan ocupando un lugar enorme en nuestro corazón.
                    </p>
                </header>

                <div className="little-moments-intro">
                    <div className="little-moments-intro-icon">
                        <Heart size={27} fill="currentColor" />
                    </div>

                    <p>
                        No necesitamos grandes acontecimientos para
                        construir una historia bonita. También la
                        construimos con cada palabra, cada mensaje
                        y cada pequeño detalle.
                    </p>
                </div>

                <div className="little-moments-grid">
                    {moments.map((moment, index) => {
                        const Icon = moment.icon;
                        const isSelected = selectedMoment === moment.id;

                        return (
                            <button
                                key={moment.id}
                                className={`little-moment-card ${
                                    isSelected ? 'active' : ''
                                }`}
                                onClick={() =>
                                    setSelectedMoment(
                                        isSelected ? null : moment.id
                                    )
                                }
                            >
                                <span className="little-moment-number">
                                    0{index + 1}
                                </span>

                                <div className="little-moment-icon">
                                    <Icon size={24} />
                                </div>

                                <h2>{moment.title}</h2>

                                <p>{moment.description}</p>

                                <span className="little-moment-action">
                                    {isSelected
                                        ? 'Cerrar recuerdo'
                                        : 'Descubrir mensaje'}
                                    <ArrowRight size={15} />
                                </span>
                            </button>
                        );
                    })}
                </div>

                {selected && (
                    <div className="little-moment-reveal">
                        <Sparkles size={25} />

                        <span>UN PEQUEÑO MENSAJE PARA TI</span>

                        <h2>{selected.detail}</h2>

                        <button
                            onClick={() => setSelectedMoment(null)}
                        >
                            Cerrar
                        </button>
                    </div>
                )}

                <section className="little-moments-closing">
                    <Heart size={28} fill="currentColor" />

                    <h2>Lo bonito está en los detalles</h2>

                    <p>
                        Quizá algún día recordemos estos pequeños
                        momentos y nos demos cuenta de que fueron
                        precisamente ellos los que hicieron tan
                        especial nuestra historia.
                    </p>

                    <span>Y todavía nos quedan muchos por vivir.</span>
                </section>

                <nav className="little-moments-navigation">
                    <button onClick={() => navigate('/sala/final')}>
                        <ArrowLeft size={17} />
                        Sala anterior
                    </button>

                    <button onClick={() => navigate('/sala/nuestros-suenos')}>
                        Siguiente Sala
                        <ArrowRight size={17} />
                    </button>
                </nav>
            </section>
        </main>
    );
}

export default LittleMomentsPage;
