
import React from 'react';
import data from '../data.json';
import '../App.css';
import './skillSection.css';
import { SocialIcon } from 'react-social-icons';



class SkillSection extends React.Component {
    render() {
        return (
            <div className="fullPage third" >
                <h3>
                    {data.sections[1].title}
                </h3>
                <div className="cards-wrapper">
                    {
                        data.sections[1].items.map(skill => {
                            return (
                                <div className="card">
                                    <div className="image-wrapper">
                                        <img src={skill.content.image} />
                                    </div>
                                    <div className="skill-title-wrapper">
                                        <h4>
                                            {skill.content.title}
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SkillSection;