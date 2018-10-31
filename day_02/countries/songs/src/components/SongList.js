import React from 'react';
import Song from './Song';


class SongList extends React.Component {
  render() {
    const songNodes = this.props.songs.map((song) => {
      return (
        <Song
          key={song.id["im:id"]}
          artist={song["im:artist"].label}
          title={song.title.label}
        />
      )
    });

    return (
      <div className="song-list">
        <ol>
          {songNodes}
        </ol>
      </div>
    )

  }



}

export default SongList;
