import React from 'react'

const Actions = ({ handleSearchRepos }) => (
  <div>
    <button onClick={handleSearchRepos}>Repos</button>
    <button>Starreds</button>
  </div>
)

export default Actions