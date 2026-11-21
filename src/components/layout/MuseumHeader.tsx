import { Heart, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import './MuseumHeader.css';

function MuseumHeader() {
    const navigate = useNavigate();

    return (
        <header className="museum-header">
            <button
                className="museum-header__brand"
                onClick={() => navigate('/')}
            >
                <Heart size={19} />

                <span>THE LOVE MUSEUM</span>
            </button>

            <span className="museum-header__edition">
                NUESTRA HISTORIA · 09 MESES
            </span>

            <button
                className="museum-header__home"
                onClick={() => navigate('/')}
                aria-label="Volver al inicio"
            >
                <Home size={18} />
            </button>
        </header>
    );
}

export default MuseumHeader;