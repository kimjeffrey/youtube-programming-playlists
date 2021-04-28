import React from 'react'

export default function VideoPanel({title, image, videoId}) {
  return (
    <div className="video-panel">
      <a href={`https://www.youtube.com/watch?v=${videoId}`}>
        <img src={image} alt=""/>
        <p>{title}</p>
      </a>
    </div>
  )
}
