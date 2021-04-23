import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Scrollbar, Autoplay, Mousewheel, Keyboard } from 'swiper';

import './VideoCarousel.css'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Scrollbar, Autoplay, Mousewheel, Keyboard]);

const VideoCarousel = ({ data }) => {
    return (
        <div className='c-main' >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                autoplay={{ disableOnInteraction: false, delay: 9000 }}
                mousewheel
                keyboard
            >
                {
                    data.video_list.map(({ url, title }, key) => (
                        <SwiperSlide className='c' key={key} >
                            <div className='c-child des-card' >
                                <h3>{title}</h3>
                                <small className='paragraph' >
                                    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </small>
                            </div>
                            <div className='c-child' >
                                <video style={{ width: '100%' }} controls poster='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.designbyday.co.uk%2Fwp-content%2Fuploads%2F2016%2F02%2Ftest-test-test-1.png&f=1&nofb=1' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}

export default VideoCarousel