import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../redux/actions';
function Movie() {
  const movie = useSelector(state => state.movie);
  const dispatch = useDispatch();
  let movieEl, categoryEL;

  return (
    <div>
      Movie Name :
      <input type="text" ref={(inputEl) => { movieEl = inputEl }} />
      Category Name :
      <input type="text" ref={(inputEl) => { categoryEL = inputEl }} />
      <br />
      <button onClick={() => dispatch(addMovie({ name: movieEl.value, category: categoryEL.value }))}>Add Movie</button>
      <hr/>
      <ul>
        {
            movie.map((value, index) => 
              <li key={index}>
                {value.name} | {value.category} |
                <button onClick={() => dispatch(removeMovie(value))}>Remove Movie</button>
              </li>)
        }
      </ul>
    </div>

  );
}

export default Movie;
