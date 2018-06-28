import  React, { Component } from 'react'
import AppContainer from './components/AppContainer'
import { getUserInfo, getRepos } from './services/Github'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      userInfo: null,
      repos: []
    }
  }

  handleSearch (event) {
    event.preventDefault()
    if (event.keyCode === 13) {
      const username = event.target.value
      getUserInfo(username)
        .then((res) => {
          this.setState({
            username,
            repos: [],
            userInfo: {
              avatar: res.data.avatar_url,
              name: res.data.name,
              login: res.data.login,
              bio: res.data.bio,
              repos: res.data.public_repos,
              followers: res.data.followers,
              following: res.data.following
            }
          })
        })
    }
  }

  handleSearchRepos () {
    if (this.state.repos.length !== 0) return
    getRepos(this.state.username)
      .then((res) => {
        this.setState({
          repos: res.data
        })
      })
  }

  render () {
    return (
      <AppContainer
        handleSearch={(e) => this.handleSearch(e)}
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        handleSearchRepos={(e) => this.handleSearchRepos(e)}
      />
    )
  }
}

export default App