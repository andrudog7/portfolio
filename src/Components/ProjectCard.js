import React from 'react'
import { Grid, Card, Image, Icon} from 'semantic-ui-react';

class ProjectCard extends React.Component {
  render() {
    return (
      <Grid.Column id="project-column">
          <Card centered color="gray" id="project-card" href={this.props.project.url}>
            <Image src={this.props.project.img} wrapped ui={false} size="medium" />
            <Card.Content>
                <Card.Header>{this.props.project.name}</Card.Header>
                <Card.Meta>{this.props.project.logline}</Card.Meta>
                <Card.Description>{this.props.project.descriptions}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={this.props.project.github} style={{paddingRight:"10px"}}><Icon name="github square" size="big" color="black"></Icon>Github </a>
                <a href={this.props.project.blog} style={{paddingRight:"10px"}}><Image avatar size="small" src="https://www.graphicdesignforum.com/uploads/default/original/2X/0/0e58f26a6dd982e7f04d1286defd4320e6d6153b.jpeg"></Image> Blog Post </a>
                <a href={this.props.project.video} style={{paddingRight:"10px"}}><Icon name="youtube" size="big" color="black"></Icon> Demo Video </a>
            </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default ProjectCard;