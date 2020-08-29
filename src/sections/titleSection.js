import React from 'react';
import data from '../data.json';
import '../App.css';
import './titleSection.css';
import { SocialIcon } from 'react-social-icons';
import DownIcon from '../components/downIcon';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class TitlesSection extends React.Component {
    state = {
        color: 'white'
    }
    changeColor = () => {
        this.setState({
            color: this.state.color === 'white' ? 'pink' : 'white'
        })


    }
    render() {
        return (
            <div className="fullPage first">
            <h1
                style={{ color: this.state.color, cursor: 'pointer', marginTop: '150px' }}
                onMouseOver={() => { this.changeColor() }}
                onMouseLeave={() => { this.changeColor() }}>
                {data.title}
            </h1>
            <div>
                <h2 >
                    {data.subtitle}
                </h2>
            </div>
            <div className="icons-wrapper">
                {Object.keys(data.links).map(key => {
                    return (
                        <div className="icon">
                            <SocialIcon url={data.links[key]} />
                        </div>
                    )
                })}
            </div>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                <DownIcon icon={data.icons.down} />
            </Link>

                <Element name="about" className="element" />

            </div>
        )
    }
}

export default TitlesSection;