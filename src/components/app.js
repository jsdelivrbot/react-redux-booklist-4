import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
export default class App extends Component {
  render() {
    return (
			<div>
      	<div className="jumbotron text-center" style={{'marginTop':'50px'}}>
      		<h1>Library</h1>
      	</div>
			<BookList /> 
			<BookDetail />
			</div>
    );
  }
}
