import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataProvider } from './components/DataProvider';
import { UserProvider } from './components/section/Registration/UserProvider'
import { ScrollToTop } from './components/ScrollToTop'

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
          <ScrollToTop />
            <Header />
            <UserProvider>
              <Section />
            </UserProvider>
            <Footer />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
