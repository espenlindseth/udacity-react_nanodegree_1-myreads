import React, {Component} from 'react'
import Book from './Book.js'
class BookShelf extends Component {
  render () {
    const { shelf, books, modifyShelf } = this.props
    const booksOnShelf = books.filter(book => book.shelf === shelf.key);

    return (
      <div className="bookshelf" key={shelf.key}>
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelf={shelf.key}
                  modifyShelf = {modifyShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf