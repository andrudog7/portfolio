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
      <div id="bio" style={{paddingLeft:"15%"}}>
        {/* <Image src={Backdrop} style={{opacity:.5,height:"25vh",width:"98vw"}}></Image> */}
        <figure style={{display:"inline-block",float:"left",marginTop:"50px"}}>
                <Image src={Profile} floated="left" size="medium"></Image>
            </figure>
            <Container text>
            <br></br>
            
            <p>I am a full-stack web developer, specialized in Ruby on Rails, React and Javascript.  I am open to new opportunities where I can use my skills in creating user-friendly applications.  I'm excited to join a team whose mission is to make things a little easier for their clients.  We all could use a little easy these days!</p>
            <p>I write organized code with an emphasis on clarity and usability, making even large-scale applications easy to manage.   
            My attention to detail, ability to debug issues and dedication to producing quality apps make me a valuable asset to any company.
            </p>
            <p>I am a marathon runner who enjoys traveling and experiencing other cultures.  I enjoy coding because it allows me to solve logical problems in a creative way.</p>
            <br></br>
            {/* <h2 className="bio-header" style={{marginTop:"-30px"}}>Let's Connect!</h2> */}
            <p>LET'S CONNECT!</p>
            {Github()}
            {LinkedIn()}
            {Email()}
            {Instagram()}
            <br></br>
            <br></br>
        </Container>
      </div>
    );
  }
}

export default Bio;