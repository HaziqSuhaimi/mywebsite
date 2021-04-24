import { Component } from 'react'
import RC from './rc'

const defaultConfig = {
    width: 100,
    height: 100,
    isHighLight: true,
    isScale: true,
    scaleExtent: [0.4, 1.5],
    chargeStrength: -300,
    collide: 90,
    nodeWidth: 100,
    margin: 20,
    alphaDecay: 0.0228,
    r: 45,
    relFontSize: 12,
    linkSrc: 30,
    linkColor: '#909090',
    strokeColor: '#909090',
    strokeWidth: 3
}

const defaultData = {
    nodes: [
        {
            name: "路人甲",
            avatar: "./img/140646844806.jpg",
            role_id: 0,
            group: 1,
        },
        {
            name: "路人甲",
            avatar: "./img/140646844806.jpg",
            role_id: 1,
            group: 1,
        }],
    links: [
        {
            source: 0,
            target: 1,
            relation: "朋友",
            color: "734646"
        }]
}


class RelationChart extends Component {
    constructor({ data = defaultData, config, ...props }) {
        super()
        this.data = data
        this.config = { ...defaultConfig, ...config }
        this.onWindowResize = null
        this.handleOnWindowResize = () => {
            const svgEl = document.querySelector('.svgclass')
            const { clientHeight, clientWidth } = document.documentElement
            svgEl.setAttribute('width', clientWidth)
            svgEl.setAttribute('height', clientHeight)
        }
    }

    componentDidMount() {
        const element = document.querySelector('#map')
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        new RC(element, this.data, { ...this.config, width, height })

        this.onWindowResize = window.addEventListener('resize', this.handleOnWindowResize)
    }

    componentWillUnmount() {
        if (this.onWindowResize) {
            window.removeEventListener('resize', this.handleOnWindowResize)
        }
    }

    render() {
        return <div {...this.props} style={{ height: '100%', width: '100%', position: 'relative', ...this.props.style }} id="map" />
    }
}

export default RelationChart