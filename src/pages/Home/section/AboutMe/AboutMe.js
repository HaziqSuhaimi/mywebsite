import './AboutMe.css'

const AboutMe = (props) => {
    return (
        <div {...props} className='full-container jc-center ai-center relative about-me' >
            <span className='typography'>About Me.</span>
            <span className='circle'/>
            <div className='card' >
                <div className='card-wrapper' >
                    <h1>about me<span className='cursor-blink' >_</span></h1>
                    <h4 className='paragraph' >
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h4>
                    <h4 className='paragraph' >
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default AboutMe