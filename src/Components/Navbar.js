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
            <Menu.Item
              name='resume'
              active={activeItem === 'resume'}
              onClick={this.handleItemClick}
              href="https://docs.google.com/document/d/1OQUFMrJGQNaVN5cG-IwrwxA2xk6tio8AHbuf-DP6m_M/edit?usp=sharing"
            />
          </Menu>
  
          {this.state.activeItem === "bio" ? <Segment attached="bottom"><Bio></Bio></Segment> : null}
          {this.state.activeItem === "projects" ? <Segment id="projects" attached="bottom"><ProjectsContainer></ProjectsContainer></Segment> : null}
       
        </div>
      )
    }
}

export default Navbar;