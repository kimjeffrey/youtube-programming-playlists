import React, { useEffect, useState } from 'react'
import VideoPanel from './VideoPanel'

export default function ReactPL() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getPlaylist()
      .then(res => setPlaylist(res))
      .catch(err => console.log(err))
  }, [])

  async function getPlaylist() {
    const res = await fetch('/backend/react');
    const data = await res.json();
    console.log(data);

    return data.items;
  }

  return (
    <div className="video-grid">
      <h1>React Playlist</h1>
      {playlist.map(item => (
        <VideoPanel key={item.etag} title={item.snippet.title} image={item.snippet.thumbnails.medium.url} videoId={item.snippet.resourceId.videoId} />
      ))}
    </div>
  )
}
