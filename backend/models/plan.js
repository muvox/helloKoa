const mongoose = require('mongoose')

const PlanSchema = new mongoose.Schema(
  {
    description: { type: String },
    length: { type: Number },
    price: { type: Number }
  },
  { timestaps: true }
);

const Plan = mongoose.model('Plan', PlanSchema)

module.exports = mongoose.model('Plan')
