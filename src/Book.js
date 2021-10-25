import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends Component {
  render () {
    const { book, shelf, modifyShelf } = this.props
    const bookCover = book.imageLinks ? book.imageLinks.thumbnail : require('./icons/unknown-book.png')
    return(
          <div className="book" key={book.id}>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
              <BookShelfChanger
                book = {book}
                shelf = {shelf}
                modifyShelf = {modifyShelf}
              />
            </div>
            <div className="book-title">{book.title ? book.title : 'No Title Listed'}</div>
            <div className="book-authors">{book.authors ? book.authors.join(' & ') : 'No Author Listed'}</div>
          </div>
    )
  }
}

export default Book
