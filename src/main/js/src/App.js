import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataProvider } from './components/DataProvider';
import { UserProvider } from './components/section/Registration/UserProvider'

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <UserProvider>
          <div className="app">
            <Router>
              <Header />
              <Section />
              <Footer />
            </Router>
          </div>
        </UserProvider>
      </DataProvider>
    )
  }
}

export default App;
