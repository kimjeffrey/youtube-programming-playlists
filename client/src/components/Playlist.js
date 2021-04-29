import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoPanel from './VideoPanel'

export default function ReactPL() {
  const {topic} = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    getPlaylist()
      .then(res => setPlaylist(res))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if(topic) {
      if(topic === 'projects') {
        setPlaylistName('Project Ideas');
      } else {
        setPlaylistName(topic.charAt(0).toUpperCase() + topic.slice(1));
      }
    }
  }, [topic])

  async function getPlaylist() {
    const res = await fetch(`/backend/${topic}`);
    const data = await res.json();

    return data.items;
  }

  return (
    <div className="video-grid">
      <h1>{playlistName} Playlist</h1>
      {playlist.map(item => (
        <VideoPanel key={item.etag} title={item.snippet.title} image={item.snippet.thumbnails.medium.url} videoId={item.snippet.resourceId.videoId} />
      ))}
    </div>
  )
}
