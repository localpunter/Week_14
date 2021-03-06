import React, {Component} from 'react';
import CommentList from "../Components/CommentList";

class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1,
          author: "Beth Fraser",
          text: "I love JS more each day."
        },
        { id: 2,
          author: "Alan Russell",
          text: "Just wait until we add the form. It's gonna be so good."
        }
      ]

    }
  }

render() {
  return (
    <div className="comment-box">
      <h2>Comments</h2>
      <CommentList data={this.state.data}/>
    </div>
  )
}
}


export default CommentBox;
