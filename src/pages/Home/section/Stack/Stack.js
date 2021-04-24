import { renderToString } from 'react-dom/server'
import { IoLogoJavascript, DiMongodb, ImStack, GrReactjs, FaNodeJs, FaHtml5, FaCss3, FaReact, FaAndroid, FaApple, SiPostgresql, SiCss3 } from 'react-icons/all'
import { RelationChart } from '../../../../component'
import './Stack.css'

const NODE_SIZE = 20
const ICON_COLOR = '#302f2f'
const DOUBLE_NODE_SIZE = NODE_SIZE * 4
const config = {
    r: NODE_SIZE,
    strokeColor: ICON_COLOR,
    linkColor: ICON_COLOR
}

const SimpletextIcon = ({ size, text, color }) => {
    return (
        <svg height={size} width={size}>
            <text fontSize={size / 3} textAnchor='middle' x="50%" y="60%" fill={color}>{text}</text>
        </svg>
    )
}

const data = {
    nodes: [
        {
            name: "Javascript",
            avatar: renderToString(<IoLogoJavascript size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 0

        }, {
            name: "MERN",
            avatar: renderToString(<SimpletextIcon size={DOUBLE_NODE_SIZE} color={ICON_COLOR} text='MERN' />),
            group: 1,
            role_id: 1
        }, {
            name: "MongoDB",
            avatar: renderToString(<DiMongodb size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 2
        }, {
            name: "ExpressJS",
            avatar: renderToString(<SimpletextIcon size={DOUBLE_NODE_SIZE} color={ICON_COLOR} text='ex' />),
            group: 1,
            role_id: 3
        }, {
            name: "NodeJS",
            avatar: renderToString(<FaNodeJs size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 4
        }, {
            name: "ReactJS",
            avatar: renderToString(<GrReactjs size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 5
        }, {
            name: "Front-End",
            avatar: renderToString(<SimpletextIcon size={DOUBLE_NODE_SIZE} color={ICON_COLOR} text='FE' />),
            group: 1,
            role_id: 6
        }, {
            name: "HTML",
            avatar: renderToString(<FaHtml5 size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 7
        }, {
            name: "CSS",
            avatar: renderToString(<SiCss3 size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 8
        }, {
            name: "Mobile",
            avatar: renderToString(<SimpletextIcon size={DOUBLE_NODE_SIZE} color={ICON_COLOR} text='Mobile' />),
            group: 1,
            role_id: 9
        }, {
            name: "React Native",
            avatar: renderToString(<FaReact size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 10
        }, {
            name: "Android",
            avatar: renderToString(<FaAndroid size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 11
        }, {
            name: "IOS",
            avatar: renderToString(<FaApple size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 12
        }, {
            name: "Back-End",
            avatar: renderToString(<SimpletextIcon size={DOUBLE_NODE_SIZE} color={ICON_COLOR} text='BE' />),
            group: 1,
            role_id: 13
        }, {
            name: "Database",
            avatar: renderToString(<SimpletextIcon size={DOUBLE_NODE_SIZE} color={ICON_COLOR} text='DB' />),
            group: 1,
            role_id: 14
        }, {
            name: "Postgresql",
            avatar: renderToString(<SiPostgresql size={DOUBLE_NODE_SIZE} color={ICON_COLOR} />),
            group: 1,
            role_id: 15
        }
    ],
    links: [
        {
            source: 0,
            target: 1,
            relation: "朋友",
            color: "734646"
        }, {
            source: 1,
            target: 2,
            relation: "lol",
            color: "734646"
        }, {
            source: 1,
            target: 3,
            relation: "lol",
            color: "734646"
        }, {
            source: 1,
            target: 4,
            relation: "lol",
            color: "734646"
        }, {
            source: 1,
            target: 5,
            relation: "lol",
            color: "734646"
        }, {
            source: 0,
            target: 6,
            relation: "lol",
            color: "734646"
        }, {
            source: 6,
            target: 7,
            relation: "lol",
            color: "734646"
        }, {
            source: 6,
            target: 8,
            relation: "lol",
            color: "734646"
        }, {
            source: 6,
            target: 5,
            relation: "lol",
            color: "734646"
        }, {
            source: 0,
            target: 9,
            relation: "lol",
            color: "734646"
        }, {
            source: 9,
            target: 10,
            relation: "lol",
            color: "734646"
        }, {
            source: 10,
            target: 11,
            relation: "lol",
            color: "734646"
        }, {
            source: 10,
            target: 12,
            relation: "lol",
            color: "734646"
        }, {
            source: 0,
            target: 13,
            relation: "lol",
            color: "734646"
        }, {
            source: 13,
            target: 4,
            relation: "lol",
            color: "734646"
        }, {
            source: 0,
            target: 14,
            relation: "lol",
            color: "734646"
        }, {
            source: 14,
            target: 2,
            relation: "lol",
            color: "734646"
        }, {
            source: 14,
            target: 15,
            relation: "lol",
            color: "734646"
        }
    ]
}

const Stack = (props) => {
    return (
        <div {...props} className='full-container jc-center ai-center relative about-me' >
            <span className='typography'>Stack.</span>
            <span className='circle' />
            <div className='card' >
                <div className='rc-wrapper' >
                    <h1 className='rc-title' >stacks<span className='cursor-blink' >_</span></h1>
                    <RelationChart config={config} data={data} />
                </div>
            </div>
        </div>
    )
}

export default Stack