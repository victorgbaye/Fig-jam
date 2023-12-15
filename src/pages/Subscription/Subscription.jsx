// // import React from 'react';

import { useSelector } from "react-redux";

// const Subscription = () => {
//   const handleClick = async () => {
//     const response = await fetch('/create-checkout-session', {
//       method: 'POST',
//     });

//     const session = await response.json();

//     // Redirect to Stripe Checkout
//     window.location = `https://checkout.stripe.com/pay/${session.sessionId}`;
//   };

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <button onClick={handleClick}>Checkout</button>
//     </div>
//   );
// };

// export default Subscription;

// import React from 'react';

const Subscription = () => {
  const {user} = useSelector(store =>store.user)
  const { email } = user
  // const handleClick = async () => {
  //   const response = await fetch('http://localhost:5000/stripe/create-checkout-session', {
  //     method: 'POST',
  //   });

  //   const session = await response.json();
  //   console.log(session.session.url);
  //   // Redirect to Stripe Checkout
  //   window.location = `${session.session.url}`;
  // };
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Include the email in the request body
      });

      const session = await response.json();
      console.log(session.session.url);
      // Redirect to Stripe Checkout
      window.location = `${session.session.url}`;
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };


  return (
    <div>
      <h1>Subscription Details</h1>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
};

export default Subscription;
