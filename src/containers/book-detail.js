import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render(){
		if (!this.props.book){
			return(
				<div className="jumbotron text-center">
				<h2>Please select a book</h2>
				</div>
			);	
		}
		return (
			
			<div>
			<h2>Book Details</h2>
			<div>Title: {this.props.book.title}</div>
			<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
