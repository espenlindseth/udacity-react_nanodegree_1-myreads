import React from 'react'
import { Route }  from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

const bookShelves = [
  { key: 'currentlyReading', title: 'Currently Reading' },
  { key: 'wantToRead', title: 'Want to Read' },
  { key: 'read', title: 'Read' }
]

class BooksApp extends React.Component {
  state = {
    books: []
  }

  modifyShelf = (modifiedBook, shelf) => {
    BooksAPI.update(modifiedBook, shelf).then(response => {
      modifiedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== modifiedBook.id)
          .concat(modifiedBook)
      }));
    });
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks
            modifyShelf = {this.modifyShelf}
          /> 
        )}/>

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            bookShelves = {bookShelves}
            modifyShelf = {this.modifyShelf}
          /> 
        )}/>

      </div>
    )}
  }

export default BooksApp
