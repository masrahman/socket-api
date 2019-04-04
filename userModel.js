var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sessionId: String
});

// Export Contact model
var User = module.exports = mongoose.model('user', contactSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
