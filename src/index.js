import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js'
import App from './App'
import './styles.css'

// put component into html page
ReactDOM.render(<App />, document.getElementById('app'))

// Files in bin directory are executable
// By default webpack is gonna create a dist directory, where output will go
// We need a compiler/transpiler as part of the process to help transform modern javascript code that will run on older browsers
