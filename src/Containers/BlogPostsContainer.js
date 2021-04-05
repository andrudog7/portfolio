import React from 'react'
import { Grid} from 'semantic-ui-react';
import BlogPostCard from '../Components/BlogPostCard'

class BlogPostsContainer extends React.Component {
    state = {
        posts: [],
        content: []
    }
    componentDidMount() {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewksmoker")
        .then((res) => res.json())
        .then((data) => {
            let shortenText = (text,startingPoint ,maxLength) => {
                return text.length > maxLength?
                text.slice(startingPoint, maxLength):
                text
            }
            let content = []
            content.push(shortenText(data.items[0].content, 110, 300))
            content.push(shortenText(data.items[1].content, 110, 300))
            content.push(shortenText(data.items[2].content, 178, 300))
            content.push(shortenText(data.items[3].content, 109, 300))
            content.push(shortenText(data.items[4].content, 108, 300))
            content.push(shortenText(data.items[5].content, 160, 300))
            content.push(shortenText(data.items[6].content, 109, 300))
            this.setState({
                posts: data.items,
                content: content
            })
        })
    }

  render() {
    let showBlogPosts = this.state.posts.map((p, index) => <BlogPostCard post={p} content={this.state.content[index]}></BlogPostCard>)
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