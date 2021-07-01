import React from 'react'
import logo from './logo.svg'
import './App.css'
import { backendData } from './fetchData'

const DisplayFiles = ({ filesData }) => {
  function getFileView(file) {
    return (
      <div className="parent-view">
        <h4 key={file.id}>{file.name}</h4>
        {file.children && file.children.length && <div>{file.children.map(child => getFileView(child))}</div>}
      </div>
    )
  }

  return <>{filesData.map(file => getFileView(file))}</>
}

function App() {
  return (
    <div className="App">
      <h1>Hey there</h1>
      <DisplayFiles filesData={backendData} />
    </div>
  )
}

export default App
