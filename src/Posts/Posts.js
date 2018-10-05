import React, { Component } from 'react';
import './Posts.scss';
import { truncateText } from '../helpers/parsers';
import { Link } from 'react-router-dom'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://api.tylerdaniel.io/wp-json/wp/v2/posts?_embed');
    const json = await response.json();
    this.setState({
      posts: json
    })
  }

  render() {
    return (
      <div className="Posts">
        {this.state.posts.map((post) => {
        return (
            <Link to={`/post/${post.id}`} key={post.id} >
            <div className="postContainer">
                <h1>{post.title.rendered}</h1>
                <div className="postContents">
                {post._embedded["wp:featuredmedia"] && <img alt="post" src={post._embedded["wp:featuredmedia"][0].source_url} />}
                <div dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered)}}></div>
                </div>
            </div>
            </Link>
        )
        })}
      </div>
    );
  }
}

export default Posts;
