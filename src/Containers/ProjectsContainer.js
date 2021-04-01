import React from 'react'
import Brunchr from '../Assets/Brunchr.png'
import ProjectCard from '../Components/ProjectCard'
import { Grid} from 'semantic-ui-react';

class ProjectsContainer extends React.Component {
    state = {
        projects: [
            {
                id: 1,
                name: "Brunchr",
                logline: "A web application where users can find and classify brunch spots",
                descriptions: "React - Redux - Thunk - Semantic UI - Ruby on Rails API - PostgreSQL database", 
                url: "https://brunchr.herokuapp.com/", 
                github:"https://github.com/andrudog7/brunchr", 
                blog: "https://andrewksmoker.medium.com/i-thought-i-thunk-until-redux-2ba0061ed9cc",
                video:"https://www.youtube.com/watch?v=USgGqzY2vBk", 
                img: Brunchr
              },
        ]
    }

  render() {
      const showProjects = this.state.projects.map(p => <ProjectCard project={p}></ProjectCard>)
    return (
        <Grid centered container>
            <Grid.Row columns={1}>
                {showProjects} 
            </Grid.Row>
        </Grid>
    );
  }
}

export default ProjectsContainer;