const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) cart = new Cart({ user: req.user._id, items: [] });

  const itemIndex = cart.items.findIndex(item => item.product == productId);
  if (itemIndex > -1) cart.items[itemIndex].quantity++;
  else cart.items.push({ product: productId, quantity: 1 });

  await cart.save();
  res.json(cart);
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
  res.json(cart);
};