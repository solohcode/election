import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';

const lgaSchema = mongoose.Schema(
  {
    state: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'State',
      required: true,
    },
    lga_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lgaSchema.plugin(toJSON);
lgaSchema.plugin(paginate);

const Lga = mongoose.models.Lga || mongoose.model('Lga', lgaSchema);

module.exports = Lga;
