// // import React from 'react';

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
  const handleClick = async () => {
    const response = await fetch('http://localhost:5000/stripe/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();
    console.log(session.session.url);
    // Redirect to Stripe Checkout
    window.location = `${session.session.url}`;
  };

  return (
    <div>
      <h1>Subscription Details</h1>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
};

export default Subscription;
