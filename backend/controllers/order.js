const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const order = new Order({ ...req.body, user: req.user._id });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  await Order.findByIdAndUpdate(req.params.id, { status });
  res.json({ msg: "Status updated" });
};

const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createPaymentOrder = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  const order = await instance.orders.create(options);
  res.json(order);
};