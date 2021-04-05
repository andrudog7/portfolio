import React from 'react'
import { Grid} from 'semantic-ui-react';
import BlogPostCard from '../Components/BlogPostCard'

class BlogPostsContainer extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewksmoker")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                posts: data.items
            })
        })
    }

  render() {
      let showBlogPosts = this.state.posts.map(p => <BlogPostCard post={p}></BlogPostCard>)
     return (
        <Grid centered container>
            <Grid.Row columns={3}>
              {showBlogPosts}  
            </Grid.Row>
        </Grid>
    );
  }
}

export default BlogPostsContainer;