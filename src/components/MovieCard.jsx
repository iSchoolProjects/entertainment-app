import React, {useState} from 'react';

export default function MovieCard({cardDetails:cards=[], trending, category, isBookmarked}) {

  return (
    <>
      <h2>Trending</h2>
      <div className={`section  ${trending ? 'trending' : ''}`}>
        {cards.map((cardDetails, i) => (
          <div className="card" key={i}>
            <div className="card-content">
              <img
                className="trending-img"
                src={trending ? cardDetails?.thumbnail?.trending?.large : cardDetails?.thumbnail?.regular?.large}
                alt=""
              />
              <div className="details-title">
                <div className="movie-details">
                  <p>{cardDetails.year} &#183;</p>
                  <p>
                    {category === 'Movie' ? (
                      <img src="./assets/icon-category-movie.svg" alt="" />
                    ) : (
                      <img src="./assets/icon-category-tv.svg" alt="" />
                    )}

                    {cardDetails.category}
                  </p>
                  <p>&#183; {cardDetails.rating}</p>
                </div>
                <h2>{cardDetails.title}</h2>
              </div>
            </div>
            <div className="bookmark">
              {isBookmarked === 'true' ? (
                <img src="./assets/icon-bookmark-full.svg" alt="" />
              ) : (
                <img src="./assets/icon-bookmark-empty.svg" alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
