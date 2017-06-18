// Comments refer to the line above.

import React from 'react'
// import is like require.
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
// import GifModal from './components/GifModal'
import request from 'superagent'
import './styles/app.css'

class App extends React.Component {
  // Creating an App Component that will serve as the parent for the rest of our application

  constructor () {
    super()

    this.state = {
      gifs: []
    }

    // this.handleTermChange = this.handleTermChange.bind(this)
    // this sets the 'this' of handleTermChange to App and not onTermChange
    // but we can also solve this problem by changing the handleTermChange to a fat arrow function and thus not introduce its own this, but t
  }

  handleTermChange = (term) => {
    console.log(term)

    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`
    // regex replaces any spaces in the searchbox with pluses

    request.get(url, (err, res) => {
      this.setState({gifs: res.body.data})
    })
    // put the superagent request here within handleTermChange because it is receiving the term from SearchBar
    // can use ${} to concatenate a variable, but have to use backticks
    // > Since this.setState is being called on onTermChange, but onTermChange did not inherit from React.Component it doesn't work because it didn't inherit R.C's methods.
  }

  render () {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
