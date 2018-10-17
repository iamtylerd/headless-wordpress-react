import React, { Component } from 'react';
import './Post.scss';
import { formatDate } from '../helpers/parsers';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
      isLoading: true
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://api.tylerdaniel.io/wp-json/wp/v2/posts/${this.props.match.params.id}?_embed`);
    const json = await response.json();
    this.setState({
      post: json,
      isLoading: false
    })
  }



  render() {
    const {post} = this.state;
    if (this.state.isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (post.data && post.data.status === 404) {
        return (
            <h1>Post does not exist.</h1>
        )
    }
    return (
        <div>
            <div className="singlePostContainer">
                <h1>{post.title.rendered}</h1>
                <div className="singlePostContents">
                {post._embedded["wp:featuredmedia"] && <img alt="post" src={post._embedded["wp:featuredmedia"][0].source_url} />}
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
                </div>
            </div>
            <div className="postFooter">
                <span>{post._embedded.author[0].name}</span>
                <span className="postDate">{formatDate(post.date)}</span>
            </div>
        </div>
    );
  }
}

export default Post;
