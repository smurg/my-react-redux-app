import React, { Component } from 'react';
import './App.css';
import ImagesPage from './Components/images/ImagesPage';
import HomePage from './Components/home/HomePage';
import AboutPage from './Components/about/AboutPage';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/nav/Navbar';

// this app will handle the template wrapping all pages!
class App extends Component {

  componentDidMount() {
    // The componentDidMount() lifecycle method is the best place to fetch data.
  }
  
  render() {
    return (
      <div className="container-fluid">
        <header className="App-header">
          <h1 className="App-title">Welcome to React App</h1>
          <Navbar></Navbar>
        </header>
        <div className="main">
          <Switch>
            <Route exact path='/'component={HomePage}></Route>
            <Route path='/about' component={AboutPage}></Route>
            <Route path='/images' component={ImagesPage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
/* react-router: 
    <Switch>:
      is unique in that it renders a route exclusively. 
      The <Switch> will iterate over its children elements (the routes) 
      and only render the first one that matches the current pathname.
    <Route>:
    The <Route> component is the main building block of React Router. 
      Anywhere that you want to only render content based on the location’s pathname, you should use a <Route> element.
      A <Route> expects a path prop, which is a string that describes the pathname that the route matches 
          — for example, <Route path='/roster'/> should match a pathname that begins with /roster
      When the current location’s pathname is matched by the path, the route will render a React element.
        The element rendered by the <Route> will be passed a number of props. 
        These will be the match object, the current location object, and the history object (the one created by our router)
      
      Routes have three props that can be used to define what should be rendered when the route’s path matches. 
      Only one should be provided to a <Route> element.

          - component — A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement).
          - render — A function that returns a React element. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.
          - children — A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location. 
    
    <Link>:
    Finally, our application needs a way to navigate between pages. If we were to create links 
    using anchor elements, clicking on them would cause the whole page to reload. 
      React Router provides a <Link> component to prevent that from happening. When clicking a <Link>, 
      the URL will be updated and the rendered content will change without reloading the page.
         <header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/something'>Something</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
            </nav>
          </header>
*/
export default App;
