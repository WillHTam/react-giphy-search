import React from 'react'

class SearchBar extends React.Component {
  // constructor () {
  //   super()
  //   this.state = { term: '' }
  // }
  // constructor automatically runs when the class is initialized
  // this.state lets us access this.state within the constructor, since the class is a subclass of React.Component
  // Initial state is an empty string. this.state = { term: ''} lets the application know it needs to be aware of our search term

  onInputChange (term) {
    // this.setState({term})
    // initialize state with this.state, but when signalling to rerender, use this.setState()
    // only use this.state in a class constructor
    this.props.onTermChange(term)
    // here we tell React that everytime it notices a change in input, it should fire an onChange event and pass the value (the search term) to onInputChnage()
  }

  render () {
    return (
      <div className='search'>
        <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
    // every time the input is updated, the onChange will fire
    // this is equivalent to
    // function (event) { this.onInputChange(event.target.value) }
  }
}

export default SearchBar
// this line makes SearchBar avaialable to import by other pieces of the applicaton
