import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
			<div>
      	<div className="jumbotron text-center" style={{'margin-top':'50px'}}>
      		<h2>Library</h2>
      	</div>
			<BookList /> 
			</div>
    );
  }
}
