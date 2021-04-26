import React, { useEffect, useState } from 'react'

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
    <div>
      <h1>{playlist.length > 0 && 'success'}</h1>
    </div>
  )
}
