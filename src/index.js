import getGreeting from './greet'

// Files in bin directory are executable
// By default webpack is gonna create a dist directory, where output will go
// We need a compiler/transpiler as part of the process to help transform new javascript code that will run on older browsers
console.log(getGreeting('world'));