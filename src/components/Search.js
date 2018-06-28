import React from 'react'

const Search = ({ handleSearch }) => (
  <input onKeyUp={handleSearch} type="search"/>
)

export default Search