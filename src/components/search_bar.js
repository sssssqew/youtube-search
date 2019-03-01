import React, { Component } from 'react';
import * as searchActions from 'actions/searchActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(event){
		this.setState({ term: event.target.value });
		// this.props.onSearchTermChange(event.target.value);
		this.props.searchActions.searchVideo(event.target.value)
	}

	render() {
		return (
			<div className="search-bar">
				<input
					style={{ borderRadius: '5px', outline:'none'}}
					value={this.state.term}
					onChange={this.onInputChange}/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	searchActions: bindActionCreators(searchActions, dispatch),
})

export default connect(null, mapDispatchToProps)(SearchBar);