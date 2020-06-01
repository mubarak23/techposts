import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';
import Home from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFount';
import Posts from './post/Posts';
import PostDetail from './post/PostDetail';
import MainOne from './courses/Posts';
import ManagePost from './post/MangePosts';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import './App.css';
function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/posts' component={Posts} />
        <Route path='/mainone' component={MainOne} />
        <Route path='/manage' component={ManagePost} />
        <Route path='/postDetail/:id' component={PostDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
