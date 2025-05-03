import './assets/css/Landing.css'
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
            <UseCases/>
            <Testimonials/>
            <Footer/>
        </>
    );
}
export default Landing;