import React from 'react';
import {Outlet, Route, Routes} from 'react-router';
import MovieCard from './components/MovieCard';

/**
 *
 * To be replaced with components
 */
const Header = () => <nav>Header</nav>;
const Sidebar = () => <aside>Aside</aside>;

const Home = () => <MovieCard trending></MovieCard>;
const Movies = () => <h1>Movies</h1>;
const TvSeries = () => <h1>Tv Series</h1>;
const Bookmarks = () => <h1>Bookmarks</h1>;
const LogIn = () => <h1>Log in</h1>;
const SignUp = () => <h1>Sign up</h1>;

const NavigationLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" Component={NavigationLayout}>
        <Route index Component={Home} />
        <Route path="/movies" Component={Movies} />
        <Route path="/tv-series" Component={TvSeries} />
        <Route path="/bookmarks" Component={Bookmarks} />
      </Route>
      <Route path="/sign-in" Component={LogIn} />
      <Route path="/sign-up" Component={SignUp} />
    </Routes>
  );
}

export default App;
