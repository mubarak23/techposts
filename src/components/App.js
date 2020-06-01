import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { Route, Switch, useHistory, BrowserRouter } from 'react-router-dom';
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
import { reducer, intialState } from './../redux/reducers/userReducer';
import './App.css';
export const userContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(userContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
    } else {
      history.push('/signin');
    }
  }, []);

  return (
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
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className='container-fluid'>
          <Header />
          <Routing />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
