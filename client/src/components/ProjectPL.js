import React, { useEffect, useState } from 'react'
import VideoPanel from './VideoPanel'

export default function ProjectPL() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getPlaylist()
      .then(res => setPlaylist(res))
      .catch(err => console.log(err))
  }, [])

  async function getPlaylist() {
    const res = await fetch('/backend/projects');
    const data = await res.json();

    return data.items;
  }

  return (
    <div className="video-grid">
      <h1>Project Ideas Playlist</h1>
      {playlist.map(item => (
        <VideoPanel key={item.etag} title={item.snippet.title} image={item.snippet.thumbnails.medium.url} videoId={item.snippet.resourceId.videoId} />
      ))}
    </div>
  )
}
