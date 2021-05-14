import React from 'react'

function Search({handleInput,handleSearch}) {
    return (
        <section className="searchbox-wrap">
            <input type="text" className="searchbox" placeholder="Search movie..." onChange={handleInput} onKeyPress={handleSearch}/>

        </section>
    )
}

export default Search
