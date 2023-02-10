import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';

const partySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
partySchema.plugin(toJSON);
partySchema.plugin(paginate);

const Party = mongoose.models.Party || mongoose.model('Party', partySchema);

module.exports = Party;
