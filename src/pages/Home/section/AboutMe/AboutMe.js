import aboutMe from '../../../../constant/aboutMe'
import './AboutMe.css'

const AboutMe = (props) => {
    return (
        <div {...props} className='full-container jc-center ai-center relative about-me' >
            <span className='typography'>About Me.</span>
            <span className='circle' />
            <div className='card' >
                <div className='card-wrapper' >
                    <h1>about me<span className='cursor-blink' >_</span></h1>
                    {
                        Object.values(aboutMe).map((data, key) =>
                            <h4 className='paragraph' key={key} >{data}</h4>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutMe