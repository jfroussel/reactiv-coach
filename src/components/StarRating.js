import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      name:'george',
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2 className="text-muted small">{this.state.name}'s Rankings: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarRating;
