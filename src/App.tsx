import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HomePage from './pages/HomePage.tsx'
import ContactsPage from './pages/ContactsPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import EncyclopediaPage_bootstrap from './pages/EncyclopediaPage.bootstrap.tsx';
import EncyclopediaPage from './pages/EncyclopediaPage.tsx'
import ShopPage from './pages/ShopPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import AccountPage from './pages/AccountPage.tsx'

import ConservationAndStatus from './pages/Encyclopedia/ConservationAndStatus.tsx'
import DevelopmentalBiology from './pages/Encyclopedia/DevelopmentalBiology.tsx'
import EconomicImportance from './pages/Encyclopedia/EconomicImportance.tsx'
import GalleryPage from './pages/Encyclopedia/GalleryPage.tsx'
import LiteratureAndSources from './pages/Encyclopedia/LiteratureAndSources.tsx'
import MorphologyPage from './pages/Encyclopedia/MorphologyPage.tsx'
import RangeAndEcology from './pages/Encyclopedia/RangeAndEcology.tsx'
import TaxonomyPage from './pages/Encyclopedia/TaxonomyPage.tsx'

import type { User } from './types.tsx';


import { Route, Routes } from 'react-router';
import { useState } from 'react';

function App() {

    const [ user, setUser ] = useState<User | null>(null);
    const [ ColorTheme, SetColorTheme ] = useState("light");

    const handleThemeButton = () => {
            if (ColorTheme == "light") {
                SetColorTheme("dark");
            } else{
                SetColorTheme("light");
            }
        }

    const handleLogin = async (
        login: string,
        password: string
    ): Promise<void> => {

        try {

            const response = await fetch(
                'http://localhost:8080/api/auth/login',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        login,
                        password
                    })
                }
            );

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            const data: { user: User } = await response.json();

            setUser(data);
            console.log("user: ", data);

        } catch (error) {

            console.error('Login error:', error);

            throw error;
        }
    };

    return (
    <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<HomePage user={user}></HomePage>}></Route>
        <Route path="/contacts" element={<ContactsPage user={user} ColorTheme={ColorTheme}></ContactsPage>}></Route>
        <Route path="/blog" element={<BlogPage user={user}></BlogPage>}></Route>
        <Route path="/encyclopedia" element={<EncyclopediaPage_bootstrap></EncyclopediaPage_bootstrap>}></Route>
        <Route path="/shop" element={<ShopPage user={user}></ShopPage>}></Route>
        <Route path="/shop" element={<ShopPage user={user}></ShopPage>}></Route>

        <Route path="/login" element={<LoginPage user={user} handleLogin={handleLogin}></LoginPage>}></Route>

        {/* Encyclopedia pages */}
        <Route path="/encyclopedia/taxonomy" element={<TaxonomyPage></TaxonomyPage>}></Route>
        <Route path="/encyclopedia/morphology" element={<MorphologyPage></MorphologyPage>}></Route>
        <Route path="/encyclopedia/range-and-ecology" element={<RangeAndEcology></RangeAndEcology>}></Route>
        <Route path="/encyclopedia/developmental-biology" element={<DevelopmentalBiology></DevelopmentalBiology>}></Route>
        <Route path="/encyclopedia/economic-importance" element={<EconomicImportance></EconomicImportance>}></Route>
        <Route path="/encyclopedia/conservation-and-status" element={<ConservationAndStatus></ConservationAndStatus>}></Route>
        <Route path="/encyclopedia/gallery" element={<GalleryPage></GalleryPage>}></Route>
        <Route path="/encyclopedia/literature-and-sources" element={<LiteratureAndSources></LiteratureAndSources>}></Route>

        <Route path="/account" element={<AccountPage user={user} ColorTheme={ColorTheme} handleThemeButton={handleThemeButton}></AccountPage>}></Route>
    </Routes>
    
    )
}

export default App
