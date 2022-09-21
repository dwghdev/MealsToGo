module.exports.payRequest = (req, res, stripe) => {
  console.log(req.body);
  res.send("success");
};
