import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imgOne from '../../images/slider/10_cashback_on_bkash_big_banner.jpg'
import imgTwo from '../../images/slider/best_of_tp-link_routers_big_banner.jpg'
import imgThree from '../../images/slider/big_banner_5_.jpg'
import imgFour from '../../images/slider/big_banner_8gb_1_.jpg'
import imgFive from '../../images/slider/big_banner_design.jpg'
import imgSix from '../../images/slider/get_your_gadget_set_copy_big_banner.jpg'
import imgSeven from '../../images/slider/offer_that_can_change_your_living_big_banner.jpg'


const Banner = () => {
    return (
        <div className='w-full lg:w-[80%] border-2 mx-auto'>
            <Carousel autoPlay showThumbs={false} infiniteLoop>
                <div>
                    <img src={imgOne} />
                </div>
                <div>
                    <img src={imgTwo} />
                </div>
                <div>
                    <img src={imgThree} />
                </div>
                <div>
                    <img src={imgFour} />
                </div>
                <div>
                    <img src={imgFive} />
                </div>
                <div>
                    <img src={imgSix} />
                </div>
                <div>
                    <img src={imgSeven} />
                </div>
            </Carousel >
        </div>
    );
};

export default Banner;