import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>Youtube Programming Tutorials</h1> 
      <div className="topic-grid">
        <Link className="topic" to="/playlist/react">
          <img src="/images/React.svg" alt="React logo"/>
          <p>React</p>
        </Link>
        <Link className="topic" to="/playlist/nodejs">
          <img src="/images/Node.js.svg" alt="Nodejs logo"/>
          <p>Nodejs</p>
        </Link>
        <Link className="topic" to="/playlist/projects">
          <img src="/images/Projects.svg" alt="Thought Bubble"/>
          <p>Project Ideas</p>
        </Link>
      </div>
    </div>
  )
}
