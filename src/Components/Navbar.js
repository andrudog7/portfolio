import React from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
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
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input
                  transparent
                  icon={{ name: 'search', link: true }}
                  placeholder='Search users...'
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
  
          {this.state.activeItem === "bio" ? <Segment attached="bottom">
              <Bio></Bio>
          </Segment> : null}
        </div>
      )
    }
}

export default Navbar;