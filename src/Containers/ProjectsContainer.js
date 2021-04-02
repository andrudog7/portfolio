import React from 'react'
import Brunchr from '../Assets/Brunchr.png'
import Brunch_madness from '../Assets/Brunch_madness.png'
import ProjectCard from '../Components/ProjectCard'
import Racetracker from '../Assets/Racetracker.png'
import { Grid} from 'semantic-ui-react';

class ProjectsContainer extends React.Component {
    state = {
        projects: [
            {
                id: 1,
                name: "Brunchr",
                logline: "A web application where users can find and classify brunch spots",
                descriptions: "React | Redux | Thunk | Semantic UI | Integrates Yelp API | Ruby on Rails API | PostgreSQL database", 
                url: "https://brunchr.herokuapp.com/", 
                github:"https://github.com/andrudog7/brunchr", 
                blog: "https://andrewksmoker.medium.com/i-thought-i-thunk-until-redux-2ba0061ed9cc",
                video:"https://www.youtube.com/watch?v=USgGqzY2vBk", 
                img: Brunchr
            },
            {
                id: 2,
                name: "Brunch Madness",
                logline: "A game where players act as a waiter during a busy brunch period",
                descriptions: "Javascript | Ruby on Rails API | PostgreSQL database | Responsive vanilla CSS", 
                url: "https://andrudog7.github.io/brunch_madness/", 
                github:"https://github.com/andrudog7/brunch_madness", 
                blog: "https://andrewksmoker.medium.com/is-javascript-actually-fun-ction-bbc4838cf097",
                video:"https://www.youtube.com/watch?v=zTKAwrfdwOw&t", 
                img: Brunch_madness
            },
            {
                id: 3,
                name: "RACETRACKER",
                logline: "A web application for runners to record official race data and interact with other runners",
                descriptions: "Ruby on Rails | PostgreSQL database | OAuth | HTML | Responsive vanilla CSS", 
                url: "https://race-tracker-2.herokuapp.com/", 
                github:"https://github.com/andrudog7/RaceTracker", 
                blog: "https://andrewksmoker.medium.com/hidden-away-behind-the-rails-magic-9aca0ec80536",
                video:"https://www.youtube.com/watch?v=4cRLzBoNPYA&t", 
                img: Racetracker
            }
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