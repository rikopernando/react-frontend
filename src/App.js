import React, { Component } from 'react';
import './App.css';
import Books from './components/books'
import BooksCreate from './components/books/create'
import BooksEdit from './components/books/edit'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
				<Router>
          <div className="App">
              <Route exact path="/" component={Books} />
              <Route exact path="/create" component={BooksCreate} />
              <Route exact path="/edit/:id" component={BooksEdit} />
          </div>
        </Router>
    );
  }
}

export default App;
