const mongoose = require('mongoose');
mongoose.pluralize(null);

const CustomerSchema = mongoose.Schema({
      cid : { type: String, required: true},
      cadhar : { type: String, required: true },
      cpan : { type: String, required: true },
      cname : { type: String, required: true },
      cdob : { type: String, required: true },

      is_active: { type: Boolean, default: false},
      is_verified: { type: Boolean, default: false},
      is_deleted: { type: Boolean, default: false},
      is_created: { type: Boolean, default: false},
      is_updated: { type: Boolean, default: false},
   
    },{
        timestamps: true
});
module.exports = mongoose.model('customer',CustomerSchema);