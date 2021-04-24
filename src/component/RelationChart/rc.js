
import * as d3 from 'd3';
import './rc.css'

//Forked and extended from https://github.com/xiedajian/relation-chart By xiedajian

function extend(target) {
    var sources = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < sources.length; i += 1) {
        var source = sources[i];
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

function getDis(s, t) {
    return Math.sqrt((s.x - t.x) * (s.x - t.x) + (s.y - t.y) * (s.y - t.y));
}

function getTransform(source, target, _dis) {
    var r;
    if (target.x > source.x) {
        if (target.y > source.y) {
            r = Math.asin((target.y - source.y) / _dis)
        } else {
            r = Math.asin((source.y - target.y) / _dis);
            r = -r;
        }
    } else {
        if (target.y > source.y) {
            r = Math.asin((target.y - source.y) / _dis);
            r = Math.PI - r;
        } else {
            r = Math.asin((source.y - target.y) / _dis);
            r -= Math.PI;
        }
    }
    r = r * (180 / Math.PI);
    return "translate(" + source.x + "," + source.y + ")rotate(" + r + ")";
}

const defaultConfig = {
    width: 1000,
    height: 800,
    nodes: [],
    links: [],
    isHighLight: true,
    isScale: true,
    scaleExtent: [0.5, 1.5],
    chargeStrength: -300,
    collide: 100,
    nodeWidth: 160,
    margin: 20,
    alphaDecay: 0.0228,
    r: 45,
    relFontSize: 12,
    linkSrc: 30,
    linkColor: '#bad4ed',
    strokeColor: '#7ecef4',
    strokeWidth: 3,
}

export default class RelationChart {

    constructor(selector, data, configs = {}) {
        let mapW = parseInt(d3.select(selector).style('width'))
        let mapH = parseInt(d3.select(selector).style('height'))

        let defaultWH = {
            width: mapW,
            height: mapH,
        }
        this.map = d3.select(selector);
        this.config = extend({}, defaultConfig, data, defaultWH, configs);
        this.dependsNode = [];
        this.dependsLinkAndText = [];

        this.initSimulation()
    }

    initSimulation() {
        var that = this;

        this.simulation = d3.forceSimulation(this.config.nodes)
            .force("link", d3.forceLink(this.config.links))
            .force("charge", d3.forceManyBody().strength(this.config.chargeStrength))
            .force("center", d3.forceCenter(this.config.width / 2, this.config.height / 2))
            .force("collide", d3.forceCollide(this.config.collide).strength(0.2).iterations(5))
            .alphaDecay(this.config.alphaDecay)
            .on("tick", () => this.ticked());

        this.SVG = this.map.append("svg")
            .attr("class", "svgclass")
            .attr("width", this.config.width)
            .attr("height", this.config.height)
            .call(d3.zoom().scaleExtent(this.config.scaleExtent).on("zoom", () => {
                if (this.config.isScale) {
                    this.relMap_g.attr("transform", d3.event.transform);
                }
            }))
            // .on('click', () => console.log('画布 click'))
            .on("dblclick.zoom", null);

        this.defs = this.SVG.append('defs');

        this.marker = this.defs
            .append("marker")
            .attr('id', "marker")
            .attr("markerWidth", 10)
            .attr("markerHeight", 10)
            .attr("refX", this.config.r + 3 * this.config.strokeWidth)
            .attr("refY", 4)
            .attr("orient", "auto")
            .attr("markerUnits", "userSpaceOnUse")
            .append("path")
            .attr("d", "M 0 0 8 4 0 8Z")
            .attr("fill", this.config.linkColor);

        this.patterns = this.defs
            .selectAll("pattern.patternclass")
            .data(this.config.nodes)
            .enter()
            .append("pattern")
            .attr("class", "patternclass")
            .attr("id", function (d, index) {
                return 'avatar' + d.role_id;
            })
            .attr('patternUnits', 'objectBoundingBox')
            .attr("x", "0")
            .attr("y", "0")
            .attr("width", "1")
            .attr("height", "1");

        // this.patterns.append("image")
        //     .attr("class", "circle")
        //     .attr("xlink:href", function (d) {
        //         return d.avatar;
        //     })
        //     .attr("src", function (d) {
        //         return d.avatar;
        //     })
        //     .attr("height", this.config.r * 2)
        //     .attr("width", this.config.r * 2)
        //     .attr("preserveAspectRatio", "xMidYMin slice");


        // this.patterns.append("rect")
        //     .attr("x", "0")
        //     .attr("y", 4 / 3 * this.config.r)
        //     .attr("width", 2 * this.config.r)
        //     .attr("height", 2 / 3 * this.config.r)
        //     .attr("fill", "black")
        //     .attr("opacity", "0.5");

        this.patterns.html((d) => d.avatar)

        this.patterns.append("text").attr("class", "nodetext")
            .attr("x", this.config.r * 2).attr("y", (5 / 3 * this.config.r * 2))
            .attr('text-anchor', 'middle')
            // .attr("fill", this.config.strokeColor)
            .attr("font-size", this.config.r / 2)
            .text(function (d) {
                return d.name;
            });

        this.relMap_g = this.SVG.append("g")
            .attr("class", "relMap_g")
            .attr("width", this.config.width)
            .attr("height", this.config.height);

        this.edges = this.relMap_g
            .selectAll("g.edge")
            .data(this.config.links)
            .enter()
            .append("g")
            .attr("class", "edge")
            .on('mouseover', function () {
                d3.select(this).selectAll('path.links').attr('stroke-width', 4);
            })
            .on('mouseout', function () {
                d3.select(this).selectAll('path.links').attr('stroke-width', 1);
            })
            .on('click', function (d) {
                console.log('线click')
            })
            .attr('fill', function (d) {
                var str = '#bad4ed';
                if (d.color) {
                    str = "#" + d.color;
                }
                return str;
            })

        this.links = this.edges.append("path").attr("class", "links")
            .attr("d", d => {
                return "M" + this.config.linkSrc + "," + 0 + " L" + getDis(d.source, d.target) + ",0";
            })
            .style("marker-end", "url(#marker)")

            .attr('stroke', (d) => {
                var str = d.color ? "#" + d.color : this.config.linkColor;
                return this.config.linkColor;
            });

        this.rect_g = this.edges.append("g").attr("class", "rect_g");

        // this.rects = this.rect_g.append("rect")
        //     .attr("x", 40)
        //     .attr("y", -10)
        //     .attr("width", 40)
        //     .attr("height", 20)
        //     .attr("fill", "white")
        //     .attr('stroke', (d) => {
        //         var str = d.color ? "#" + d.color : this.config.linkColor;
        //         return str;
        //     })

        // this.texts = this.rect_g.append("text")
        //     .attr("x", 40)
        //     .attr("y", 5)
        //     .attr("text-anchor", "middle")
        //     .style("font-size", 12).text(d => {
        //         return d.relation
        //     });


        this.circles = this.relMap_g.selectAll("circle.circleclass")
            .data(this.config.nodes)
            .enter()
            .append("circle")
            .attr("class", "circleclass")
            .style("cursor", "pointer")
            .attr("fill", function (d) {
                return ("url(#avatar" + d.role_id + ")");
            })
            .attr("stroke", that.config.strokeColor)
            // .attr("stroke-width", 10)
            // .style("fill", 'red')
            .attr("r", this.config.r * 2)

            .on('mouseover', function (d) {
                d3.select(this).attr('stroke-width', '3');
                // d3.select(this).attr('stroke', that.config.strokeColor);
                d3.select(this).attr('title', 'hello');
                if (that.config.isHighLight) {
                    that.highlightObject(d);
                }
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('stroke-width', 1);
                if (that.config.isHighLight) {
                    that.highlightObject(null);
                }
            })
            .on('click', function (event) {
                event.stopPropagation ? (event.stopPropagation()) : (event.cancelBubble = true);
                event.preventDefault ? (event.preventDefault()) : (event.returnValue = false);
            })
            .on('contextmenu', function (event) {
                event.cancelBubble = true;
                event.returnValue = false;
            })

            .call(d3.drag()
                .on('start', (d) => {
                    d3.event.sourceEvent.stopPropagation();
                    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on('drag', (d) => {
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                })
                .on('end', (d) => {
                    if (!d3.event.active) this.simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }));
    }

    ticked() {
        this.edges.attr("transform", function (d) {
            return getTransform(d.source, d.target, getDis(d.source, d.target))
        });

        this.links.attr("d", d => {
            return "M" + this.config.linkSrc + "," + 0 + " L" + getDis(d.source, d.target) + ",0";
        })

        // this.texts
        //     .attr("x", function (d) {
        //         return getDis(d.source, d.target) / 2
        //     })
        //     .attr("transform", function (d) {

        //         if (d.target.x < d.source.x) {
        //             var x = getDis(d.source, d.target) / 2;
        //             return 'rotate(180 ' + x + ' ' + 0 + ')';
        //         } else {
        //             return 'rotate(0)';
        //         }
        //     });

        // this.rects
        //     .attr("x", function (d) {


        //         return getDis(d.source, d.target) / 2 - d3.select(this).attr('width') / 2
        //     })

        this.circles
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            })
    }

    highlightObject(obj) {
        if (obj) {
            var objIndex = obj.index;
            this.dependsNode = this.dependsNode.concat([objIndex]);
            this.dependsLinkAndText = this.dependsLinkAndText.concat([objIndex]);
            this.config.links.forEach((lkItem) => {
                if (objIndex === lkItem['source']['index']) {
                    this.dependsNode = this.dependsNode.concat([lkItem.target.index]);
                } else if (objIndex === lkItem['target']['index']) {
                    this.dependsNode = this.dependsNode.concat([lkItem.source.index]);
                }
            });

            // this.SVG.selectAll('circle').filter((d) => {
            //     return (this.dependsNode.indexOf(d.index) === -1);
            // }).transition().style('opacity', 0.1);

            this.SVG.selectAll('.edge').filter((d) => {

                return ((this.dependsLinkAndText.indexOf(d.source.index) === -1) && (this.dependsLinkAndText.indexOf(d.target.index) === -1))
            }).transition().style('opacity', 0.1);

        } else {
            this.SVG.selectAll('circle').filter(() => {
                return true;
            }).transition().style('opacity', 1);

            this.SVG.selectAll('.edge').filter((d) => {

                return ((this.dependsLinkAndText.indexOf(d.source.index) === -1) && (this.dependsLinkAndText.indexOf(d.target.index) === -1))
            }).transition().style('opacity', 1);
            this.dependsNode = [];
            this.dependsLinkAndText = [];
        }
    }
}






