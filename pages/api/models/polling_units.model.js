import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';

const pollingUnitSchema = mongoose.Schema(
  {
    unit: {
      type: String,
      required: true,
    },
    unit_name: {
      type: String,
      required: true,
    },
    ward: {
      type: String,
      required: true,
    },
    local_govt: {
      type: String,
      required: true,
    },
    reg_voters: {
      type: String,
      required: true,
    },
    state: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'States',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
pollingUnitSchema.plugin(toJSON);
pollingUnitSchema.plugin(paginate);

const PollingUnit = mongoose.models.PollingUnit || mongoose.model('PollingUnit', pollingUnitSchema);

module.exports = PollingUnit;
