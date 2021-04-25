import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Scrollbar, Autoplay, Mousewheel, Keyboard } from 'swiper';

import './VideoCarousel.css'
import 'swiper/swiper-bundle.min.css'

const ICON_COLOR = '#302f2f'

SwiperCore.use([Scrollbar, Autoplay, Mousewheel, Keyboard]);

const IconBase = ({ Icon, name }) => {
    return (
        <button title={name} className='icon-base' >
            <Icon color={ICON_COLOR} size={20} />
        </button>
    )
}

const VideoCarousel = ({ data }) => {
    const reversed = data.video_list.reverse()
    return (
        <div className='c-main' >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                autoplay={{ disableOnInteraction: false, delay: 10000 }}
                mousewheel
                keyboard
            >
                {
                    reversed.map(({ url, title, des, stacks }, key) => (
                        <SwiperSlide className='c' key={key} >
                            <div className='c-child des-card' >
                                <h3>{title}</h3>
                                <small className='paragraph' >{des}</small>
                                <div>
                                    <br/>
                                    <br/>
                                    {
                                        stacks.map(({ Icon, name }, i) => <IconBase key={i} name={name} Icon={Icon} />)
                                    }
                                </div>
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