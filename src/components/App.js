import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFount';
import CoursePage from './courses/CoursesPage';
import Courses from './courses/Courses';
import Posts from './post/Posts';
import MainOne from './courses/Posts';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/course' component={CoursePage} />
        <Route path='/courses' component={Courses} />
        <Route path='/posts' component={Posts} />
        <Route path='/mainone' component={MainOne} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
