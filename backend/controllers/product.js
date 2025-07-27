const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body, artisan: req.user._id });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category, isApproved: true } : { isApproved: true };
  const products = await Product.find(filter).populate("artisan", "name");
  res.json(products);
};

exports.approveProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, { isApproved: true });
  res.json({ msg: "Product approved" });
};