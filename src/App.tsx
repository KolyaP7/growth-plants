import { useState } from 'react'
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

import ConservationAndStatus from './pages/Encyclopedia/ConservationAndStatus.tsx'
import DevelopmentalBiology from './pages/Encyclopedia/DevelopmentalBiology.tsx'
import EconomicImportance from './pages/Encyclopedia/EconomicImportance.tsx'
import GalleryPage from './pages/Encyclopedia/GalleryPage.tsx'
import LiteratureAndSources from './pages/Encyclopedia/LiteratureAndSources.tsx'
import MorphologyPage from './pages/Encyclopedia/MorphologyPage.tsx'
import RangeAndEcology from './pages/Encyclopedia/RangeAndEcology.tsx'
import TaxonomyPage from './pages/Encyclopedia/TaxonomyPage.tsx'

import { Route, Routes } from 'react-router'

function App() {

  return (
    <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/encyclopedia" element={<EncyclopediaPage_bootstrap></EncyclopediaPage_bootstrap>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>

        {/* Encyclopedia pages */}
        <Route path="/encyclopedia/taxonomy" element={<TaxonomyPage></TaxonomyPage>}></Route>
        <Route path="/encyclopedia/morphology" element={<MorphologyPage></MorphologyPage>}></Route>
        <Route path="/encyclopedia/range-and-ecology" element={<RangeAndEcology></RangeAndEcology>}></Route>
        <Route path="/encyclopedia/developmental-biology" element={<DevelopmentalBiology></DevelopmentalBiology>}></Route>
        <Route path="/encyclopedia/economic-importance" element={<EconomicImportance></EconomicImportance>}></Route>
        <Route path="/encyclopedia/conservation-and-status" element={<ConservationAndStatus></ConservationAndStatus>}></Route>
        <Route path="/encyclopedia/gallery" element={<GalleryPage></GalleryPage>}></Route>
        <Route path="/encyclopedia/literature-and-sources" element={<LiteratureAndSources></LiteratureAndSources>}></Route>

    </Routes>
    
  )
}

export default App
