import react from 'react'
import { useState } from 'react'

const SEARCH_PATH = '/api/yelp/businesses/search';

async function searchBusinesses(term,location,sortBy) {
   // return [business,business];


    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });
    const res = await fetch(SEARCH_PATH + '?' + params);
    if(!res.ok) {
        throw new Error('yelp request failed (' + res.status + ') ');
    }

    //convert response to JSON
    //Return the businesses array mapped into the format used by the Business component
    const test = await res.json();
    console.log(test.businesses);
    return test.businesses;
    
}
export default searchBusinesses;