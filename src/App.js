import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
    <MemoryRouter>
      <Container className="p-3">
        <Card style={{ width:'18rem '}}>
          <Card.Body>
            Current Page is{' '}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            Navigate to{' '}
            <Button className="custom-btn-toolbar">
              <LinkContainer to="/">
                <Button>Home</Button>
              </LinkContainer>
              <LinkContainer to="/about">
                <Button>About</Button>
              </LinkContainer>
              <LinkContainer to="/users">
                <Button>Users</Button>
              </LinkContainer>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </MemoryRouter>
);

export default App;
