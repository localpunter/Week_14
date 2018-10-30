import  React, { Component } from 'react';

class CommentForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text: ''
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: update comments with comments
    const newComment = {author: author, text: text};
    this.props.onCommentSubmit(newComment)

    this.setState({ author: '', text: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />

        <input
          type="text"
          placeholder="Add your comment"
          value={this.state.text}
          onChange={this.handleTextChange}
        />

        <input
          type="submit"
          placeholder="Save comment"
        />
      </form>
    );

  }
}


export default CommentForm;
