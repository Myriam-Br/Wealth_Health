import React from "react";
import { useDispatch } from "react-redux";
import { searchArray } from "../features/listSlice";


function SearchBar() {
    const dispatch = useDispatch()
    function valueInput(e) {
        dispatch(searchArray(e.toLowerCase()))    
    }
    
    return (
    <div className="input-form">
        <label htmlFor='search_bar'>Search :</label>
        <input
        type='text'
        id='search_bar'
        onChange = {(e) => valueInput(e.target.value)}
        />
    </div>)
}


export default SearchBar