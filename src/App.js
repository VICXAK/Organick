import Header from './components/Header';
import Nav from './components/Navigation/Nav';
import Hero from './components/Hero/Hero';
import MainHeroContent from './components/Hero/MainHeroContent';
import Main from './components/Main/Main';
import SectionBanner from './components/Section/SectionBanner';
import SectionAbout from './components/Section/SectionAbout';
import SectionCategories from './components/Section/SectionCategories';
import SectionTestimonial from './components/Section/SectionTestimonial';

import './App.scss';

function App() {
    return (
        <div className='App'>
            <Header>
                <Nav />
            </Header>
            <Hero>
                <MainHeroContent />
            </Hero>
            <Main>
                <SectionBanner />
                <SectionAbout />
                <SectionCategories />
                <SectionTestimonial />
            </Main>
        </div>
    );
}

export default App;
