import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreationForm from './components/CreationForm';
import PostView from './components/PostView';
import MainPage from './components/MainPage';
import PostsProvider from './components/PostsProvider';


function App() {

  return (

      <PostsProvider>
        <div className="App">
        <Router>
          <Switch>
            <Route path="/posts/new" component={CreationForm} />
            <Route path="/posts/:id" component={PostView} />
            <Route path="/" exact component={MainPage} />
          </Switch>
        </Router>  
        </div>
      </PostsProvider>

  );
}

export default App;
