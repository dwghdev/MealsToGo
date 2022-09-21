module.exports.payRequest = (req, res, stripeClient) => {
  const { token, amount, name }= JSON.parse(req.body);

  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      res.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      res.status(400);
      res.send(e);
    });
};
