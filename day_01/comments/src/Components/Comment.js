import  React, {Component} from 'react';


class Comment extends Component {



  render() {
    return (
      <div>
      <h3>{this.props.children}</h3>
      <p>{this.props.author}</p>

    </div>
    )

  }
}


export default Comment;
