import React from 'react'
import ReactDOM from 'react-dom'

function GreetSomeone({greeting, subject}) {
  return (
    <div>
      {greeting} {subject}!
    </div>
  )
}

function App() {
  const [greeting, setGreeting] = React.useState('HELLO')

  function handleGreetingChange(event) {
    const input = event.target
    const newGreeting = input.value.toUpperCase()
    setGreeting(newGreeting)
  }

  return (
    <form>
      <div>
        <label htmlFor="greeting">Greeting: </label>
        <input id="greeting" onChange={handleGreetingChange} value={greeting} />
      </div>
      <div>
        <GreetSomeone greeting={greeting} subject="Nancy" />
      </div>
    </form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))