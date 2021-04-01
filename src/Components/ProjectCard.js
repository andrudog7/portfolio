import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react';

class ProjectCard extends React.Component {
  render() {
    return (
      <Grid.Column id="project-column">
          <Card centered color="red" id="project-card">
            <Image src={this.props.project.img} wrapped ui={false} size="medium" />
            <Card.Content>
                <Card.Header>{this.props.project.name}</Card.Header>
                <Card.Meta>{this.props.project.logline}</Card.Meta>
                <Card.Description>{this.props.project.descriptions}</Card.Description>
            </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default ProjectCard;