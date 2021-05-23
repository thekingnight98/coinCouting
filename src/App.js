import './App.css';
import React, { useState } from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


import Bill from './components/Bill';


import 'bootstrap/dist/css/bootstrap.css'
import { I18nProvider, LOCALES } from './I18n';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Counting Machine
          </Navbar.Brand>

          <Nav className="justify-content=end ">
            <Nav.Link>
              <Button onClick={() => setLocale(LOCALES.THAI)}>ENGLISH</Button>
            </Nav.Link>
            <Nav.Link>
              <Button onClick={() => setLocale(LOCALES.ENGLISH)}>THAI</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <Bill />
      </div>
    </I18nProvider>
  );
}

export default App;
