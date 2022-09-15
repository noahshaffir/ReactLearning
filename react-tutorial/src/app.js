import React, { Component } from 'react'
import Table from './table.js'
import Tablee from './tablee.js'
/*
class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
*/
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return (
      <div className='container'>
        <Tablee characterData={characters} />
      </div>
    )
  }
}
export default App

/*
the point of doing table and tablee is so you can see both ways
*/