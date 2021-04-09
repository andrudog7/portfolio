import React from 'react'
import { Card, Image} from 'semantic-ui-react';

class BlogPostCard extends React.Component {
  render() {
    return (
      <Card color="gray" id="blog-card" href={this.props.post.link}>
        <Image src={this.props.post.thumbnail} wrapped ui={false} size="medium" />
        <Card.Content>
          <Card.Header>{this.props.post.title}</Card.Header>
          <Card.Meta>{this.props.post.categories.map(c => c + " | ")}</Card.Meta><br></br>
          <Card.Description>{this.props.content}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>{this.props.post.author} - {this.props.post.pubDate}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default BlogPostCard;