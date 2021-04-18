import { AboutMe, Greeting, HomeBar, Portfolio } from "./section"
import './Home.css'

const sections = [
    {
        id: 0,
        name: "greeting",
        comp: <Greeting />
    },
    {
        id: 1,
        name: "About Me",
        comp: <AboutMe />
    },
    {
        id: 2,
        name: "Portfolio",
        comp: <Portfolio />
    }
]

const Home = () => {
    return (
        <div className='home' >
            <HomeBar sections={sections} />
            {
                sections.map(({ comp }) => comp)
            }
        </div>
    )
}

export default Home