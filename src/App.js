import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage, MoviesPage, MovieDetailsPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            {/* <Route path="cast" element={<Cast />} /> */}
            <Route path="cast" element={<div>Cast</div>} />
            {/* <Route path="reviews" element={<Reviews />} /> */}
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
