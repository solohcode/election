import mongoose from 'mongoose';
import paginate from './plugins/paginate.plugin';
import toJSON from './plugins/toJSON.plugin';

const reportSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    reporter: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
reportSchema.plugin(toJSON);
reportSchema.plugin(paginate);

const Reports = mongoose.models.Reports || mongoose.model('Reports', reportSchema);

module.exports = Reports;
