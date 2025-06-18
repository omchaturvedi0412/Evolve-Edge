import { useNavigate } from 'react-router-dom';
import './AfterFaq.css';

function AfterFaq() {
    const navigate = useNavigate();

    const handleEnquireClick = () => {
        navigate('/contact');
    };

    return (
        <div className='mainContainer'>
            <div className='container'>
                <p className='firstPara Para'>
                    At the heart of it all is simplicity – a design that's not just eye-catching but guides visitors with ease.
                    By weaving together the principles of clean design, transparent project presentations, and a professional look,
                    we can create a web design portfolio that not only catches the eye but also leaves a lasting impression on
                    potential clients and collaborators.
                </p>
            </div>
            <div className='containBread'>
                <div className='bread breadOne'></div>
                <div className='bread breadTwo'></div>
            </div>
            <div className='collabrateContainer'>
                <p className='Para collabrate'>
                    Let's Collaborate with us {'>'}
                    <span className='deco deco-left'></span>
                    <span className='deco deco-right'></span>
                </p>
            </div>
            <div className='lastContainer'>
                <p className='Para lastPara'>
                    Ready to bring your project to life? Our team of experts is here to help. Request a quote today
                    to get started or begin a conversation to learn more about our services.
                    We pride ourselves on delivering high-quality work at reasonable cost. Don't wait – let's get started!
                </p>
                <div className='buttonContainer'>
                    <button className='enquire' onClick={handleEnquireClick}>
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AfterFaq;