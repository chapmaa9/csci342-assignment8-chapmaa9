import { useState } from 'react'
import SearchBar from '../Components/SearchBar/SearchBar.jsx'
import BusinessList from '../Components/BusinessList/BusinessList.jsx' 
import Navigation from '../Components/Navigation/Navigation.jsx'
import Subscription from '../Components/Subscription/Subscription.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import searchYelp from '../util/yelp';
import searchBusinesses from '../util/yelp'
import './HomePage.css';




export default function HomePage() {
    const [businesses,setBusinesses] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const searchYelp = async (term, location, sortBy) => {
        setLoading(true);
        setError(null);
        try {
            const data = await searchBusinesses(term,location,sortBy);
            setBusinesses(data);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    return (
    <div className="HomePage">
        <>
            <SearchBar searchYelp= {searchYelp}/>
            {Loading && <p className="HomePage-status">Loading.. </p>}
            {error && <p className="HomePage-status HomePage-status--error">{error}</p>}
            {!Loading && !error && <BusinessList businesses={businesses} />}
            <Subscription/>
            <Footer/>
        </> 
    </div>
    );
}