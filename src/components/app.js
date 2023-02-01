
import Navbar from './navbar';
import Rocket from './rocket';
import AboutMeSection from './about-me-section';
import ProjectSection from './project-section';
import EducationSection from './education-section';
import CareerSection from './career-section';
const App = (props) => {

    return(
        <>
        <Navbar />
        <Rocket />
        <AboutMeSection />
        <ProjectSection />
        <EducationSection />
        <CareerSection />
        </>
    )
}

export default App;