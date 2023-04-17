import React from 'react';

const getStarsRepresentation = rate => {
  const starCollection = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      starCollection.push(<span key={i}>&#9733;</span>);
    } else {
      starCollection.push(<span key={i}>&#9734;</span>);
    }
  }

  return starCollection;
};

const Rating = ({ name, rate, content }) => {
  return (
    <div className="ratings__item">
      <h3>{name}</h3>
      <p>{content}</p>
      <div>{getStarsRepresentation(rate)}</div>
    </div>
  );
};

const AverageRating = ({ ratings }) => {
  const averageRating = Math.ceil(ratings.reduce((currRate, rating2) => currRate + rating2.rate, 0) / ratings.length);

  return (
    <div className="ratings__average">
      <h3>{getStarsRepresentation(averageRating)}</h3>
    </div>
  );
};

const RatingsList = ({ ratings }) => {
  return (
    <>
      <AverageRating ratings={ratings} />
      <div className="ratings">
        {ratings.map(rating => (
          <Rating key={rating.name} {...rating} />
        ))}
      </div>
    </>
  );
};

export default RatingsList;
