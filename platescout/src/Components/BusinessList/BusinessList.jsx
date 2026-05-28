import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business.jsx'
function BusinessList({businesses}) {
  return (

    <div className='BusinessList' >
      <ul className = "BusinessList">{businesses.map((business,index) => (<li key = {business.id}>{<Business business= {business}/>}</li>))}</ul>
    </div>
  );
}
export default BusinessList;
