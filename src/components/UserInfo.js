import React from 'react'

const UserInfo = ({ userInfo }) => (
  <div>
    <img src={userInfo.avatar} alt="Profile Avtar" style={{
      width: '100px',
      height: '100px'
    }}/>
    <h2>{userInfo.name}</h2>
    <p>{userInfo.login}</p>
    <p>{userInfo.bio}</p>

    <ul>
      <li>Repos: {userInfo.repos}</li>
      <li>Followers: {userInfo.followers}</li>
      <li>Following: {userInfo.following}</li>
    </ul>
  </div>
)

export default UserInfo