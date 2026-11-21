
import { Routes, Route } from 'react-router-dom';

import { MuseumProgressProvider } from './context/MuseumProgressContext';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import MuseumMapPage from './pages/MuseumMapPage/MuseumMapPage';
import NineMonthsPage from './pages/NineMonthsPage/NineMonthsPage';
import DistancePage from './pages/DistancePage/DistancePage';
import HerCollectionPage from './pages/HerCollectionPage/HerCollectionPage';
import FirstMeetingPage from './pages/FirstMeetingPage/FirstMeetingPage';
import FinalPage from './pages/FinalPage/FinalPage';
import FirstMessagePage from './pages/FirstMessagePage/FirstMessagePage';
import ConversationsPage from './pages/ConversationsPage/ConversationsPage';
import LittleMomentsPage from './pages/LittleMomentsPage/LittleMomentsPage';
import FutureDreamsPage from './pages/FutureDreamsPage/FutureDreamsPage';

function App() {
    return (
        <MuseumProgressProvider>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<WelcomePage />} />

                <Route path="/museo" element={<MuseumMapPage />} />

                <Route
                    path="/sala/primer-mensaje"
                    element={<FirstMessagePage />}
                />

                <Route
                    path="/sala/conversaciones"
                    element={<ConversationsPage />}
                />

                <Route
                    path="/sala/nueve-meses"
                    element={<NineMonthsPage />}
                />

                <Route
                    path="/sala/distancia"
                    element={<DistancePage />}
                />

                <Route
                    path="/sala/coleccion"
                    element={<HerCollectionPage />}
                />

                <Route
                    path="/sala/primer-encuentro"
                    element={<FirstMeetingPage />}
                />

                <Route
                    path="/sala/final"
                    element={<FinalPage />}
                />

                <Route
                    path="/sala/pequenos-momentos"
                    element={<LittleMomentsPage />}
                />

                <Route
                    path="/sala/nuestros-suenos"
                    element={<FutureDreamsPage />}
                />
            </Routes>
        </MuseumProgressProvider>
    );
}

export default App;
