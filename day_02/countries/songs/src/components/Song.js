import React from 'react';


class Song extends React.Component {
  render() {
    return (
      <div>
        <li>
          {this.props.title}
        </li>
      </div>
    )
  }
}

export default Song;
