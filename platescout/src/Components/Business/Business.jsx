import React from 'react'
import './Business.css'

function Business({business}) {
  return (
    <div className="Business" style={{boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08', borderRadius: '4px'}} >
      <div className="image-container">
        <img src={business.image_url} alt=''/>
      </div>
      <h2> {business.name} </h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.location.address1}</p>
          <p>{business.location.city}</p>
          <p>{business.location.state} {business.zip_code}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.catagory}</h3>
          <h3 className="rating"> {business.rating} stars</h3>
          <p>{business.review_count} reviews</p>
        </div>
      </div>
    </div> 
  );
}

export default Business;
