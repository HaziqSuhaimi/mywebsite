import { useEffect, useState } from "react"
import { IoArrowUp } from 'react-icons/io5'
import './HomeBar.css'

const HomeBar = ({ sections = [] }) => {
    const [scrollTo, setScrollTo] = useState(0)
    const screenH = window.innerHeight

    useEffect(() => {
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        })
    }, [scrollTo])

    const handleGoToSection = (id) => {
        setScrollTo(screenH * id)
    }

    return (
        <div className='navbar' >
            <div className='navbar-wrapper container' >
                <h1 onClick={() => handleGoToSection(0)} className='home-btn' >
                    <span className='cursor-blink' >_</span>
                    <span className='btn' >hahahaziq</span>

                </h1>
                <div className='section-tab-wrapper' >
                    {
                        sections.slice(1).map(({ name, id: key }) =>
                            <span className={scrollTo === screenH * key ? 'section-tab-focus' : 'section-tab'} onClick={() => handleGoToSection(key)} key={key}>{name}</span>
                        )
                    }
                </div>
            </div>
            {
                scrollTo > 0 &&
                <button className='scroll-to-top-btn' onClick={() => handleGoToSection(0)} >
                    <IoArrowUp color='white' size={25} />
                </button>
            }
        </div>
    )
}

export default HomeBar