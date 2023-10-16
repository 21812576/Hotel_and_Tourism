const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    hasTicket: {
        type: Boolean,
        required: true,
    },
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
