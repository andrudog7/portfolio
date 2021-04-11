import React from 'react'
import { Tab } from 'semantic-ui-react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import BlogPostsContainer from '../Containers/BlogPostsContainer'
import Bio from './Bio'
import {Switch, Route, NavLink} from "react-router-dom"

class Navbar extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const panes = [
        {
          menuItem: {
            as: NavLink,
            id: "tab1",
            content: "Bio",
            to: "/bio",
            exact: true,
            key: "bio"
          },
          pane: (
            <Route
              path="/bio"
              exact
              render={() => (
                <Tab.Pane>
                  <Bio></Bio>
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab2",
            content: "Projects",
            to: "/projects",
            exact: true,
            key: "projects"
          },
          pane: (
            <Route
              path="/projects"
              exact
              render={() => (
                <Tab.Pane>
                  <ProjectsContainer></ProjectsContainer>
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab3",
            content: "Blog Posts",
            to: "/blog_posts",
            exact: true,
            key: "blogs"
          },
          pane: (
            <Route
              path="/blog_posts"
              exact
              render={() => (
                <Tab.Pane>
                  <BlogPostsContainer></BlogPostsContainer>
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            id: "tab4",
            content: "Resume",
            href: "https://drive.google.com/file/d/1oIW9e_8UQYkt5phVERrCTAyzRqUwOeFk/view?usp=sharing",
          }
        }
      ];
  
      return (
        <div>
          <Switch>
            <Tab renderActiveOnly={false} activeIndex={-1} panes={panes} />
          </Switch>
        </div>
      )
    }
}

export default Navbar;