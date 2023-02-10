import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';
const bcrypt = require('bcryptjs');

const stateSchema = mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
    },
    total_lga: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
stateSchema.plugin(toJSON);
stateSchema.plugin(paginate);

const States = mongoose.models.States || mongoose.model('States', stateSchema);

module.exports = States;
