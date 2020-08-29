import React from 'react';
// import data from './data.json'
import './App.css';
// import { SocialIcon } from 'react-social-icons';
// import FullPage from './components/fullpage'
import TitlesSection from './sections/titleSection'
import AboutSection from './sections/aboutSection'
import SkillSection from './sections/skillSection'
import './font.css'
import SnowStorm from 'react-snowstorm';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SnowStorm />
        <div className="navigation" />
        <TitlesSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
  // function App() {

}

export default App;
