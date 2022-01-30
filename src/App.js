import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled.jsx';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
