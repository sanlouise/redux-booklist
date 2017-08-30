import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
import map from 'lodash/map'


class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {map(this.props.books, (book) => (
          <li key={book.id}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item"
            > {book.title} </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
