
import React from 'react';
import data from '../data.json';
import '../App.css';
import './aboutSection.css';
import { SocialIcon } from 'react-social-icons';



class AboutSection extends React.Component {
    render() {
        return (
            <div className="fullPage second" >
                <h3>
                    {data.sections[0].title}
                </h3>
                <div className="paragragh">
                    <div>
                        {data.sections[0].items.map(p=>{
                            return(
                                <p>
                                    {p.content}
                                </p>
                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutSection;