import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid bg-gray-200 text-gray-800">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Honey Movies</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Anime</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-4xl font-bold mb-4">Popular on Honey Movies</h1>
          {/* Add your movie or TV show components here */}
        </div>
        <div className="col-md-4">
          <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
          {/* Add your watchlist components here */}
        </div>
      </div>
    </div>
  );
}

export default App;