import React from 'react'
import Nav from './components/Nav'
import Posts from './components/Posts'
import User from './components/User'
import Post from './components/Post'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />

              <Route
                exact
                path='/'
                render={(props) => (
                <Posts {...props} type={'top'}/>
              )}/>
              <Route
                path='/new'
                render={(props) => (
                <Posts {...props} type={'new'}/>
              )}/>
              <Route path='/post' component={Post}/>
              <Route path='/user' component={User}/>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App;
