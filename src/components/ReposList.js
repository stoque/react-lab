import React from 'react'

const ReposList = ({ title, repos }) => (
  <div>
    <h3>{ title }</h3>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link} target='_blank'>
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default ReposList