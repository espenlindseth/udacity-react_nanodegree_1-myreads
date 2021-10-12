import React, {Component} from 'react'
import { Link }  from 'react-router-dom'
import BookShelf from './BookShelf.js'

class ListBooks extends Component {

  render () {
    const {books, bookShelves, modifyShelf} = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookShelves.map(shelf => (
            <BookShelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              modifyShelf = {modifyShelf}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </Link>
        </div>
      </div>
    )}
  }

export default ListBooks

