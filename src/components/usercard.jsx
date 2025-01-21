// eslint-disable-next-line no-unused-vars
import React from 'react';

const Usercard = () => {
  const profilePhoto = "./Screenshot 2024-08-26 125015.png"
  const name = 'JoRobert';
  const email = 'jorobert@example.com';
  const phone = '+919788886969';
  const address = 'no.37, Main Cross, Main Road, Main Nagar, Mangalore';


  return (
    <div>
      <img src={profilePhoto} alt="Profile"/>
      <h2>{name}</h2>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
    </div>
  );
};

export default Usercard;
