import React from 'react'
import Nav from './components/Nav'
import Posts from './components/Posts'
import User from './components/User'
import Post from './components/Post'
import { ThemeProvider } from './contexts/theme'


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
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className="container">
            <Nav />
            <Posts type={'top'}/>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
