import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, EffectFade, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated } from 'react-spring'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// my styles
import './TopSlider.css';
// images
import lk1 from '../../../assets/images/lk1.jpg';
import lk2 from '../../../assets/images/lk2.jpg';
import lk3 from '../../../assets/images/lk3.jpg';

const TopSlider = () => {
    const [on, set] = useState(true);

    const Text2 = () => {
        const props = useSpring({ opacity: 1, from: { opacity: 0 } });
        return <animated.div style={props}><h3 className='text-[24px]'>New products 2018</h3></animated.div>;
    };

    const props = useSpring({
        to: { translateY: '0' },
        from: { translateY: '100%' },
        reset: true,
        delay: 20,
    })
    const props2 = useSpring({
        to: { translateY: '0' },
        from: { translateY: '100%' },
        reset: true,
        delay: 20,
    })
    return (
        <div>
            <Swiper
                className='swiper-main-cont overflow-x-hidden'
                // install Swiper modules
                modules={[Navigation, Virtual, Pagination, Scrollbar, EffectFade, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                speed={800}
                loop
                pagination={{ clickable: true }}
                onSlideChange={() => set(!on)}
            > 
                <SwiperSlide className='max-h-[400px] md:max-h-[inherit]'>
                        <img className='w-full h-full object-cover' src={lk1} alt="" />
                    <div className='text-content absolute left-12 top-[25%]'>
                        <animated.div style={props}>
                            <Text2 key={on} />
                        </animated.div>
                        <animated.div style={props2}>
                            <h1 className='text-[#503527] text-[32px] md:text-[64px] font-bold'>
                                <span className='text-[#00ade5]'>LEO'S</span>
                                PREMIUM<br /> Furniture
                            </h1>
                        </animated.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='max-h-[400px] md:max-h-[inherit]'>
                    <img className='w-full h-full object-cover' src={lk2} alt="" />
                    <div className='text-content absolute right-[4rem] top-[35%]'>
                        <animated.div style={props}>
                            <h3 className='text-[24px]'>Bedroom Furniture</h3>
                        </animated.div>
                        <animated.div style={props2}>
                            <p className='text-[#7d7d7d] text-xs hidden md:block'>Modern and Exclusive design bedroom furniture.</p>
                        </animated.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='max-h-[400px] md:max-h-[inherit]'>
                    <img className='w-full h-full object-cover' src={lk3} alt="" />
                    <div className='text-content absolute left-12 top-[25%]'>
                        <animated.div style={props}>
                            <h3 className='text-[24px]'>LED CHANDELIERS</h3>
                        </animated.div>
                        <animated.div style={props2}>
                            <h1 className='text-[#503527] text-[32px] md:text-[64px] font-bold'>Modern<br />  and
                                <span className='text-[#00ade5]'>Classic</span>
                            </h1>
                        </animated.div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default React.memo(TopSlider);