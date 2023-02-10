import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';

const resultSchema = mongoose.Schema(
  {
    election_type: {
      type: String,
      required: true,
    },
    party: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Party',
      required: true,
    },
    polling_unit: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'PollingUnit',
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
    accredited: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
resultSchema.plugin(toJSON);
resultSchema.plugin(paginate);

const Results = mongoose.models.Results || mongoose.model('Results', resultSchema);

module.exports = Results;
