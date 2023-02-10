import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';

const wardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
wardSchema.plugin(toJSON);
wardSchema.plugin(paginate);

const Ward = mongoose.models.Ward || mongoose.model('Ward', wardSchema);

module.exports = Ward;
