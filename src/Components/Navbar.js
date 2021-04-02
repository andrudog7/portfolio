import React from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import Bio from './Bio'

class Navbar extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='blog posts'
              active={activeItem === 'blog posts'}
              onClick={this.handleItemClick}
            />
          </Menu>
  
          {this.state.activeItem === "bio" ? <Segment attached="bottom"><Bio></Bio></Segment> : null}
          {this.state.activeItem === "projects" ? <Segment id="projects" attached="bottom"><ProjectsContainer></ProjectsContainer></Segment> : null}
       
        </div>
      )
    }
}

export default Navbar;