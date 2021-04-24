import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMail } from 'react-icons/io5'
import './Social.css'

const LOGO_SIZE = 70
const ICON_COLOR = '#302f2f'

const Social = (props) => {
    return (
        <div {...props} className='full-container jc-center ai-center relative about-me' >
            <span className='typography-opp'>Social.</span>
            <span className='circle-opp' />
            <div className='card' >
                <div className='rc-wrapper' >
                    <div className='full-parent d-flex jc-center ai-center' style={{flexWrap:'wrap'}} >
                        <a target='_blank' href='https://www.instagram.com/_hahahaziq_/?hl=en'  >
                            <IoLogoInstagram color={ICON_COLOR} className='social-btn' size={LOGO_SIZE} />
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/haziqsuhaimi' >
                            <IoLogoLinkedin color={ICON_COLOR} className='social-btn' size={LOGO_SIZE} />
                        </a>
                        <a target='_blank' href='https://github.com/haziqsuhaimi' >
                            <IoLogoGithub color={ICON_COLOR} className='social-btn' size={LOGO_SIZE} />
                        </a>
                        <a target='_blank' href='mailto:haziqisme93@gmail.com' >
                            <IoMail color={ICON_COLOR} className='social-btn' size={LOGO_SIZE} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social