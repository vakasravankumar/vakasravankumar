const mongoose = require('mongoose');
mongoose.pluralize(null);

const UserSchema = mongoose.Schema({
      tid : { type: String, required: true},
      tage : { type: String, required: true },
      tname : { type: String, required: true },
      taddress : { type: String, required: true },
      tphone : { type: String, required: true },
      temail : { type: String, required: true },
      tdob : { type: String, required: true },

      is_active: { type: Boolean, default: false},
      is_verified: { type: Boolean, default: false},
      is_deleted: { type: Boolean, default: false},
      is_created: { type: Boolean, default: false},
      is_updated: { type: Boolean, default: false},
   
    },{
        timestamps: true
});
module.exports = mongoose.model('topper',UserSchema);