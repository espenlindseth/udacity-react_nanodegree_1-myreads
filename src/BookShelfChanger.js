import React, {Component} from 'react'

class BookShelfChanger extends Component {

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    this.props.modifyShelf(this.props.book, value);
  }

  render () {    
    const currentShelf = this.props.shelf.key ? this.props.shelf.key : 'none'

    return(
      <div className="book-shelf-changer">
        <select defaultValue={currentShelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
