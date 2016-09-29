import React, { Component } from 'react';

export default class App extends Component {
	constructor(props){
	  super(props);
	  this.state = {
	  	comment: '',
	  	nextId: 3
	  }
	}

  onReviewChange = function(e){
  	this.setState({
  		comment: e.target.value
  	})
  }

  addReview = function (event) {
  	event.preventDefault();
  	if (this.state.comment) {
  		console.log(this.state.comment);
  		this.props.reviews.push({
  			text: this.state.comment,
  			id: this.state.nextId
  		});
  		this.state.nextId += 1;

  		this.setState({comment: ""});
  	};
  }

  render() {
  return (
    <div className="comment-block">
        <h3 className="comment-block__title">Comments</h3>
        <div>
        	{this.props.reviews.map(function(review, index){
        		return (
        			<p className="comment-block__text" key={review.id}>{review.text} </p>
        		);
        	}.bind(this))}
        </div>
        <form>
            <h4 className="comment-block__trigger">leave your comment</h4>
            <textarea onChange={this.onReviewChange.bind(this)}value={this.state.comment} placeholder="your comment..." className="comment-block__textarea" type="text"/>
            <input value="submit" className="comment-block__btn" onClick={this.addReview.bind(this)} type="submit" />
        </form>
    </div>
    );
}
}