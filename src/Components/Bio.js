import React from 'react'
import Running from '../Assets/Running.png'
import { Grid, Card, Image, Icon} from 'semantic-ui-react';

class Bio extends React.Component {
  render() {
    return (
      <div id="bio">
          <br></br><br></br><br></br>
          <h2 className="bio-header" font-weight="strong">Hello, it's nice to meet you!</h2>
        <Image src={Running} style={{opacity:.5,height:"40vh",width:"95vw",top:"-20vh"}}></Image>
        
        <p>Full stack web developer.  I love to run.</p>
      </div>
    );
  }
}

export default Bio;