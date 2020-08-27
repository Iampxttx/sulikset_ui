import React, {useState} from 'react'; 

function Search(){
    const initSearch = {title:''}
    cons [addSearch, setSearch] = useState(initSearch);

    const handFilter = (e) => {
        setSearch({[e.target.name]: e.target.value});
        console.log(e.target.value);
        onFilter(e.target.value)
}

    return(
        <p>
            <input type="text"
                name="title"
                style={{padding: "5px"}}
                placeholder = "Hae"
                onChange={handFilter}
                value={addSearch.title}>
            </input>
        </p>
    )
}

export default Search