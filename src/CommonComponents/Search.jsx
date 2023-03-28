import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Search() {
  return (
    <div className='search'>
      <form className='searchForm'>
        <input prefix={<FiSearch size={20}/>} placeholder='Find your friend...'/>
      </form>
    </div>
  )
}

export default Search