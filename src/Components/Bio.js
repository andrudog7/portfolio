import React from 'react'
import Backdrop from '../Assets/backdrop.png'
import Profile from '../Assets/profile2.png'
import Github from './Github'
import LinkedIn from './LinkedIn'
import Instagram from './Instagram'
import Email from './Email'
import { Container, Image, Header} from 'semantic-ui-react';

class Bio extends React.Component {
  render() {
    return (
      <div id="bio">
        <Image src={Backdrop} style={{opacity:.5,height:"30vh",width:"98vw"}}></Image>
        <Container text>
            <br></br><br></br>
            <h2 className="bio-header" style={{marginTop:"-30px"}}>Nice to Meet You!</h2>
            <figure style={{display:"inline-block",float:"left",marginTop:"0px"}}>
                <figcaption>ANDREW SMOKER</figcaption><br></br>
                <Image src={Profile} circular floated="left" size="medium"></Image>
            </figure>
            <p>I am a full-stack web developer, specialized in Ruby on Rails, React and Javascript.  I am open to new opportunities where I can use my skills in creating user-friendly applications.  I'm excited to join a team who's mission is to make things a little easier for their clients.  We all could use a little easy these days!</p>
            <p>I strive to write organized code with an emphasis on clarity and usability, making even large applications easy to manage.   
            My attention-to-detail, ability to debug issues and dedication to producing quality apps make me a valuable team member to future employers.
            </p>
            <p>I am a marathon runner who enjoys traveling and experiencing other cultures.  I enjoy coding because it allows me to solve logical problems in a creative way.</p>
            <br></br><br></br>
            <h2 className="bio-header" style={{marginTop:"-30px"}}>Let's Connect!</h2>
            {Github()}
            {LinkedIn()}
            {Email()}
            {Instagram()}
        </Container>
      </div>
    );
  }
}

export default Bio;