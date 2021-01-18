import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Paul Toro",
      headerLinks: [
        { title: 'Home', path: '/'}, 
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Be prepared', 
        subTitle: 'Portfolio pages', 
        text: 'CHeck out my project below',
      },
      about:{
        title:'About Me',
      },
      contact: {
        title: 'Let\'s Chat'
      }
    }
  }

 
render() {
  return (
    <Router>
       <Container className ="p-0 fluid={true}">

    <Navbar className="border-bottom" bg="transparent" expands="lg">
      <Navbar.Brand>Paul Toro</Navbar.Brand>

      <NavBAr.Toggle arial-controls="navgar-toggle"/>
      <Navbar.Collapse id="navbar-toggle">
        <Nav>
          <link className="nav-link" to="/">Home</link>
          <link className="nav-link" to="/about">About</link>
          <link className="nav-link" to="/contact">Contact</link>

        </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    
    
    </Container>
    </Router>
  
  );
 }
}


export default App;
