console.log("Sanity check!");

fetch("/config/")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // Initialize Stripe.js
    const stripe = Stripe(data.publicKey);

    document.querySelector("#submitBtn").addEventListener("click", () => {
      // Get Checkout Session ID

      fetch("/create-checkout-session/")
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log("data: ", data);
          // Redirect to Stripe Checkout
          return stripe.redirectToCheckout({ sessionId: data.sessionId });
        })
        .catch((res) => {
          console.log("res", res);
        });
    });
  });
