const User = require('../models/User');

exports.approveArtisan = async (req, res) => {
  try {
    const artisan = await User.findById(req.params.artisanId);
    if (!artisan || artisan.role !== 'artisan') {
      return res.status(404).json({ msg: 'Artisan not found' });
    }
    artisan.isApproved = true;
    await artisan.save();
    res.json({ msg: 'Artisan approved' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
