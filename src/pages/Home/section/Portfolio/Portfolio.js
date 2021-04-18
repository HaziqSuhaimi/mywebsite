import { VideoCarousel } from '../../../../component'
import MyProjects from '../../../../constant/MyProjects'
import './Portfolio.css'

const Portfolio = (props) => {
    return (
        <div {...props} className='full-container jc-center ai-center relative about-me' >
            <span className='typography-opp'>Projects.</span>
            <span className='circle-opp' />
            <div className='card' >
                <div className='c-wrapper' >
                    <h1 >previous projects<span className='cursor-blink' >_</span></h1>
                    <VideoCarousel data={MyProjects} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio