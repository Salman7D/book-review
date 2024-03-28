import { Link } from 'react-router-dom';
import book from '/src/assets/Images/pngwing 1.png'

const Hero = () => {
    return (
        <div className="hero rounded-3xl mb-20 bg-[#1313130D] lg:ml-[165px] w-[500px] ml-6 lg:w-[1170px] lg:h-[554px] lg:mb-[100px]">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-14">
                    <img src={book} className="max-w-sm lg:w-[318px] lg:h-[394px]" />
                    <div>
                    <h1 className="lg:mb-[48px] mb-5 text-4xl font-bold text-[#131313]">Books to freshen up <br /> your bookshelf</h1>
                    
                    <Link to="/listedbooks" className="btn btn-ghost rounded-lg bg-[#23BE0A] text-[#FFF] text-xl font-bold">View The List</Link>
                    </div>
                </div>
                </div>
    );
};

export default Hero;