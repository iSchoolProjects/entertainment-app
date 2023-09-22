import React, {useState} from 'react';

export default function MovieCard({trending, isBookmarked, category}) {
  const [cardDetails] = useState({
    thumbnail: {
      trending: {
        large: './assets/thumbnails/beyond-earth/trending/large.jpg',
      },
      regular: {
        small: './assets/thumbnails/beyond-earth/regular/small.jpg',
        medium: './assets/thumbnails/beyond-earth/regular/medium.jpg',
        large: './assets/thumbnails/beyond-earth/regular/large.jpg',
      },
    },
    year: '2019',
    category: 'Movie',
    rating: 'PG',
    title: 'Beyond Earth',
    isBookmarked: 'true',
  });
  return (
    <>
      <div className={`section  ${trending ? 'trending' : ''}`}>
        {new Array(15).fill(0).map((_, i) => (
          <div className="card" key={i}>
            <div className="card-content">
              <img
                className="trending-img"
                src={trending ? cardDetails?.thumbnail?.trending?.large : cardDetails?.thumbnail.regular.large}
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
