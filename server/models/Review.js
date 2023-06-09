const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    parkCode: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    versionKey: false
  }
)

reviewSchema.virtual('Created').get(function () {
  return this.createdAt.toLocaleString()
})

reviewSchema.virtual('Updated').get(function () {
  return this.updatedAt.toLocaleString()
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
