import React from 'react'
import UserInfo from './UserInfo'
import Actions from './Actions'
import ReposList from './ReposList'
import Search from './Search'

const AppContainer = ({ handleSearch, userInfo, repos, handleSearchRepos }) => (
  <div>
    <Search
      handleSearch={handleSearch}
    />
    { userInfo && <UserInfo userInfo={userInfo} /> }
    { userInfo && <Actions handleSearchRepos={handleSearchRepos} /> }
    { !!repos.length && 
      <ReposList
        title='Repos'
        repos={repos}
      />
    }
    
    { !!repos.length && 
      <ReposList
        title='Starreds'
        repos={repos}
      /> 
    }
  </div>
)

export default AppContainer