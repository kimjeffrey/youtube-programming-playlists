import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>My App</h1> 
      <div><Link to="/react">React</Link></div>
    </div>
  )
}
