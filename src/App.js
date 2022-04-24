import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { backendData } from './fetchData'
import TicTacToe from './components/TicTacToe'

const FileDisplayView = ({ file, children }) => {
  const [expanded, setExpanded] = useState(true)
  console.log('rendering !!!')
  const handleClick = event => {
    setExpanded(!expanded)
    event.stopPropagation()
  }

  return (
    <div className="parent-view" onClick={handleClick}>
      <h4 key={file.id}>{file.name}</h4>
      {expanded && children}
    </div>
  )
}

const DisplayFiles = ({ filesData }) => {
  function getFileView(file) {
    return (
      <FileDisplayView file={file}>
        {file.children && file.children.length && <div>{file.children.map(child => getFileView(child))}</div>}
      </FileDisplayView>
    )
  }

  return <>{filesData.map(file => getFileView(file))}</>
}

function App() {
  return (
    <div className="App">
      <TicTacToe/>
    </div>
  )
}

export default App
