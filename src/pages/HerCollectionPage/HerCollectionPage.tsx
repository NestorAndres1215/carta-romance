
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Sparkles,
    Mic,
    Smile,
    Flower2,
    Star,
    Gift,
    Gem,
    Crown,
    Infinity,
} from 'lucide-react';

import MuseumHeader from '../../components/layout/MuseumHeader';

import './HerCollectionPage.css';

const reasons = [
    {
        number: '01',
        title: 'Tu voz',
        description: 'Porque fue una de las primeras cosas que llamaron mi atención y que hicieron que quisiera seguir conociéndote.',
        icon: Mic,
    },
    {
        number: '02',
        title: 'Tu forma de ser',
        description: 'Porque tienes una manera tan tuya de ser que poco a poco consiguió conquistarme.',
        icon: Smile,
    },
    {
        number: '03',
        title: 'Tu dulzura',
        description: 'Porque hay algo en tu manera de tratarme que hace que te sienta todavía más especial.',
        icon: Flower2,
    },
    {
        number: '04',
        title: 'Tu manera de hacerme sonreír',
        description: 'Porque incluso desde lejos puedes convertir un momento cualquiera en uno bonito.',
        icon: Star,
    },
    {
        number: '05',
        title: 'Tus pequeños detalles',
        description: 'Porque son esas pequeñas cosas las que hacen que cada día encuentre más motivos para quererte.',
        icon: Gift,
    },
    {
        number: '06',
        title: 'Tu esencia',
        description: 'Porque no necesito que seas alguien diferente. Me encanta que seas tú.',
        icon: Gem,
    },
    {
        number: '07',
        title: 'Tu cariño',
        description: 'Porque cada muestra de cariño hace que esta historia sea todavía más nuestra.',
        icon: Heart,
    },
    {
        number: '08',
        title: 'Todo lo que eres',
        description: 'Porque eres mucho más que una lista de cualidades. Eres esa persona que llegó a mi vida y se volvió importante.',
        icon: Crown,
    },
    {
        number: '09',
        title: 'Simplemente tú',
        description: 'Porque entre tantas personas, me alegra muchísimo que nuestros caminos se hayan encontrado.',
        icon: Infinity,
    },
];

function HerCollectionPage() {
    const navigate = useNavigate();

    return (
        <main className="her-collection">
            <MuseumHeader />

            <section className="her-collection__hero">
                <button
                    className="her-collection__back"
                    onClick={() => navigate('/museo')}
                >
                    <ArrowLeft size={17} />
                    Volver al museo
                </button>

                <div className="her-collection__heading">
                    <span className="her-collection__eyebrow">
                        <Sparkles size={15} />
                        SALA 05 · MI PERSONA FAVORITA
                    </span>

                    <h1>
                        Mi colección
                        <span> favorita: tú</span>
                    </h1>

                    <p>
                        Si tuviera que crear una colección
                        con todas las cosas bonitas que
                        existen, tú serías mi exposición favorita.
                    </p>
                </div>
            </section>

            <section className="her-collection__featured">
                <div className="her-collection__featured-icon">
                    <Heart size={29} />
                </div>

                <span>PIEZA PRINCIPAL DE LA COLECCIÓN</span>

                <h2>
                    Una persona
                    <br />
                    extraordinariamente especial.
                </h2>

                <p>
                    No eres una colección de cosas perfectas.
                    Eres una persona con una esencia única,
                    con una voz que me encanta, una dulzura
                    que me enamora y una forma de ser
                    que me hace feliz de haberte conocido.
                </p>

                <strong>Y esa persona eres tú, mi amor.</strong>
            </section>

            <section className="her-collection__gallery">
                <div className="her-collection__section-heading">
                    <span>MI EXPOSICIÓN FAVORITA</span>
                    <h2>Nueve razones para elegirte</h2>
                    <p>
                        Nueve pequeñas piezas de una colección
                        que nunca terminaría de completar.
                    </p>
                </div>

                <div className="her-collection__grid">
                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <article
                                key={reason.number}
                                className="her-collection__card"
                            >
                                <div className="her-collection__card-top">
                                    <span>{reason.number}</span>
                                    <Icon size={25} strokeWidth={1.5} />
                                </div>

                                <h3>{reason.title}</h3>

                                <p>{reason.description}</p>

                                <div className="her-collection__card-bottom">
                                    <Heart size={13} />
                                    <span>UNA DE MIS RAZONES FAVORITAS</span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="her-collection__letter">
                <div className="her-collection__letter-icon">
                    <Heart size={25} />
                </div>

                <span>UNA DEDICATORIA PARA TI</span>

                <h2>
                    No necesito una colección
                    <br />
                    de cosas extraordinarias.
                </h2>

                <p>
                    Porque para mí, lo extraordinario
                    fue encontrarte sin estar buscándote.
                    Fue descubrir tu voz, tu dulzura,
                    tu manera de ser y darme cuenta
                    de lo especial que eres.
                </p>

                <p>
                    Si alguien me preguntara cuál es
                    mi colección favorita, no tendría
                    que pensarlo demasiado.
                </p>

                <strong>Mi colección favorita siempre serás tú.</strong>
            </section>

            <section className="her-collection__closing">
                <Sparkles size={22} />

                <h2>
                    No existe otra pieza
                    <span> que pueda ocupar tu lugar.</span>
                </h2>

                <p>Con cariño, para la persona que hace especial mi historia.</p>
            </section>

            <footer className="her-collection__footer">
                <button onClick={() => navigate('/sala/distancia')}>
                    <ArrowLeft size={16} />
                    Sala anterior
                </button>



                <button
                    onClick={() => navigate('/sala/primer-encuentro')}
                >
                    Siguiente sala
                    <ArrowRight size={16} />
                </button>
            </footer>
        </main>
    );
}

export default HerCollectionPage;
