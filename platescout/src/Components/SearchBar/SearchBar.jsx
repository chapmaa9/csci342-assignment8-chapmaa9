import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import './SearchBar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

function renderSortByOptions() {
  return (
    <ul>
    {Object.keys(sortByOptions).map( (optKey) => (
    <li key={sortByOptions[optKey]}> {optKey} </li> ))} 
    </ul>
  );
}


function SearchBar(props) {
    const [term,setTerm] = useState();
    const [location,setLocation] = useState();
    const [sortBy, setSortBy] = useState('best_match');
    useEffect(() => {
        if(term) {
            document.title = 'PlateScout - Searching for ' + term;
        } else {
            document.title = 'PlateScout';
        }
    }, [term]);

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

        const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(term,location,sortBy);
    };

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active' : '';
    }
    
    const renderSortByOptions= () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                </li>
            );
        });
    }
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul className='Searchbar-sort-options'>
                    {renderSortByOptions()}
                </ul>
            </div>

            <div className="SearchBar-fields">
                <input value = {term} onChange={handleTermChange} placeholder="Search Businesses" />
                <input value={location} onChange={handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <button className ='SearchBar-submit' onClick = {handleSearch}>Let's Go</button>
            </div>
        </div>
    );
}
export default SearchBar;
