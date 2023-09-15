import React from 'react';
import {Outlet, Route, Routes} from 'react-router';
import Home from './components/Home';
import Movies from './components/Movies';

import Sidebar from './components/Sidebar';
import TvSeries from './components/TvSeries';
import Bookmarks from './components/Bookmarks';
/**
 *
 * To be replaced with components
 */
const Header = () => <nav>Header</nav>;

const LogIn = () => <h1>Log in</h1>;
const SignUp = () => <h1>Sign up</h1>;

const NavigationLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <Outlet />
      </main>
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
