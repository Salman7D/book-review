import PropTypes from 'prop-types';
import frame from '/src/assets/Images/Frame.png';
import { Link } from 'react-router-dom';


const CartCard = ({cart}) => {
    const {bookName, image, author, category, rating, bookId} = cart;
    return (
        <Link to={`/cart/${bookId}`}>
            
          <div className='lg:ml-0 lg:mb-0 ml-20 mb-5 rounded-2xl border border-solid border-[#13131326] w-[374px] p-6'>
            <div className='rounded-2xl bg-[#F3F3F3] lg:h-[230px] mb-5 lg:mb-6 flex justify-center items-center'>
            <img src={image} alt="" />
            </div>

            <div className='flex lg:mb-5 mb-5 gap-10 rounded-3xl bg-[#17BE0A0D] text-[#23BE0A]'>
              {cart.tags.map((tags, index) => (
              <p key={index}>{tags}</p>
              ))}
              </div>
            
            <p className='lg:mb-2 mb-5 text-[#131313] text-2xl font-bold'>{bookName}</p>
            <p className='lg:mb-5 mb-5'>By: <span className='text-base font-bold text-[#131313CC]'>{author}</span> </p>
            <div className='lg:mb-5 bg-[#13131326] lg:h-[1px] lg:w-[326px]'>

            </div>
            <div className='flex justify-between'>
                <p className='text-[#131313CC] text-base font-medium'>{category}</p>
                <div className='flex gap-2 text-[#131313CC] text-base font-medium'>
                    <p>{rating}</p>
                    <img className='lg:w-[24px] lg:h-[24px]' src={frame} alt="" />
                </div>
            </div>
            

            


          </div>

      
      
        </Link>
    );
};

CartCard.propTypes = {
    cart: PropTypes.object.isRequired
}

export default CartCard;