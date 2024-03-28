import seller from '/src/assets/Images/pngwing 1.png';
import map from '/src/assets/Images/Frame2.png';
import publish from '/src/assets/Images/Frame3.png';
import page from '/src/assets/Images/Frame4.png';

const BestSellerBooks = () => {
    return (
        <div>
            <div>
                <p>Our Best Seller Books</p>
            </div>

            <div className="lg:p-6 p-3 lg:mb-5 lg:mt-5 lg:ml-32 ml-5 mb-5 mt-5 lg:w-[1300px] w-[500px] rounded-2xl border border-solid border-[#13131326]">
                        <div className="flex lg:gap-4 gap-4">
                            <div className="lg:flex justify-center items-center rounded-2xl bg-[#0D0D0D0D] lg:w-[230px]">
                                <img className="lg:mt-0 mt-20" src={seller} alt="" />
                            </div>

                            <div>
                                <p className="text-[#131313] text-2xl font-bold">The Great Gatsby</p>
                                <p className="lg:mb-3 mb-3 text-[#131313CC] text-base font-medium">By: F. Scott Fitzgerald</p>
                                <div className="lg:flex lg:gap-4">
                                    <p className="text-[#131313] text-base font-bold">Tag</p>
                                    <div className='mb-3 lg:mb-6 lg:flex lg:gap-10 rounded-3xl bg-[#17BE0A0D] text-[#23BE0A]'>
                                    
                                    <p>#</p>
                                    
                                    </div>

                                    <div className="mb-3 flex gap-2">
                                        <img className="lg:w-[24px] lg:h-[24px]" src={map} alt="" />
                                        <p className="text-[#131313CC] text-base font-normal">Year of Publishing: 1925</p>
                                    </div>
                </div>
                                        <div className="mb-3 flex gap-5">
                                        <div className="flex gap-2">
                                        <img className="w-[24px] h-[24px]" src={publish} alt="" />
                                        <p className="text-[#131313CC] text-base font-normal">Publisher: Charles Scribners Sons</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className="w-[24px] h-[24px]" src={page} alt="" />
                                        <p className="text-[#131313CC] text-base font-normal">Page: 180</p>
                                    </div>
                                        </div>

                                        <div className="lg:mt-2 lg:mb-5 bg-[#0D0D0D26] lg:h-[1px] lg:w-[867px]">

                                        </div>

                                        <div className="flex lg:gap-4 gap-3 mb-3">
                                            <div className="text-center rounded-3xl bg-[#328EFF26] lg:p-2">
                                                <p className="text-[#328EFF]">Category: Classic Literature</p>
                                            </div>
                                            <div className="text-center rounded-3xl bg-[#FFAC3326] lg:p-2">
                                                <p className="text-[#FFAC33]">Rating: 4.5</p>
                                            </div>
                                            <button className="btn btn-ghost rounded-3xl bg-[#23BE0A] lg:p-2">
                                                <p className="text-[#FFF]">View Details</p>
                                            </button>
                                        </div>


                                    
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default BestSellerBooks;