import { AboutMe, Greeting, HomeBar, Portfolio, Social, Stack } from "./section"
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
    },
    {
        id: 3,
        name: "Stacks",
        comp: <Stack />
    },
    {
        id: 4,
        name: "Social",
        comp: <Social />
    }
]

const Home = () => {
    return (
        <div className='home' >
            <HomeBar sections={sections} />
            {
                sections.map(({ comp }, key) => <span key={key} >{comp}</span>)
            }
        </div>
    )
}

export default Home