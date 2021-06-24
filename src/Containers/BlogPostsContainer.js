import React from 'react'
import { Card } from 'semantic-ui-react';
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
            content.push(shortenText(data.items[0].content, 109, 365))
            content.push(shortenText(data.items[1].content, 110, 490))
            content.push(shortenText(data.items[2].content, 110, 460))
            content.push(shortenText(data.items[3].content, 110, 343))
            content.push(shortenText(data.items[4].content, 110, 360))
            content.push(shortenText(data.items[5].content, 110, 337))
            content.push(shortenText(data.items[6].content, 4, 297))
            content.push(shortenText(data.items[7].content, 110, 358))
            content.push(shortenText(data.items[8].content, 110, 349))
            content.push(shortenText(data.items[9].content, 110, 302))
            //content.push(shortenText(data.items[10].content, 109, 299))
            //content.push(shortenText(data.items[11].content, 109, 437))
            //content.push(shortenText(data.items[12].content, 108, 443))
            //content.push(shortenText(data.items[13].content, 160, 462))
            //content.push(shortenText(data.items[14].content, 109, 299))
            this.setState({
                posts: data.items,
                content: content
            })
        })
    }

  render() {
    let showBlogPosts = this.state.posts.map((p, index) => <BlogPostCard post={p} content={this.state.content[index]}></BlogPostCard>)
    return (
        <Card.Group id="bloggroup" doubling stackable itemsPerRow={3}>
            {showBlogPosts}
        </Card.Group>
    );
  }
}

export default BlogPostsContainer;