const mongoose = require('mongoose');

const  { ObjectId }  = mongoose.SchemaTypes;

const userSchema = new mongoose.Schema({
  // userId: { type: ObjectId, index: true, required: true, auto: true },
  name: { type: String, trim: true },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  countries: [{
    type: String,
    enum: [
      'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr',
      'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my',
      'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th',
      'tr', 'tw', 'ua', 'us', 've', 'za',
    ],
    default: 'us',
  }],
  languages: [{
    type: String,
    enum: [
      'ar', 'de', 'en', 'es', 'fr', 'he', 'it',
      'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh',
    ],
    default: 'en',
  }],
  articles: [{ type : ObjectId, ref: 'Article' }],
  following: [{ type : ObjectId, ref: 'User' }],
  library: [{
    _id: { type: ObjectId, index: true, required: true, auto: true },
    source: { id: String, name: String },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: { type:Date, default: Date.now },
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;