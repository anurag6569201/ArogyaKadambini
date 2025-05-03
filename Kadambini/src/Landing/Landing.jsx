import './assets/css/Landing.css'
import Features from './Components/Features';
import Footer from './Components/Footer';
import Front from './Components/Front';
import HowItWorks from './Components/HowItWorks';
import Testimonials from './Components/Testimonials';
import UseCases from './Components/UseCases';


function Landing() {
    return (
        <>
            <Front />
            <HowItWorks />
            <Features/>
            <UseCases/>
            <Testimonials/>
            <Footer/>
        </>
    );
}
export default Landing;