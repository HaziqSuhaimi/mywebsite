import './Greeting.css'
import bg from  '../../../../asset/images/bg2.jpg'

const Greeting = (props) => {
    return (
        <div {...props} className='full-container jc-center ai-center relative' >
            <img src={bg} alt='my-bg' className='img-bg' />
            <div className='greeting-title-wrapper' >
                <h1 className='greeting-title noselect' >
                    <span>hello there!</span><br />
                    <span>it's me haziq</span>
                    <span className='cursor-blink' >_</span>
                </h1>
            </div>
        </div>
    )
}

export default Greeting