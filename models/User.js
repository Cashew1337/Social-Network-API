const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought.js');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            max_length: 15,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                'Please add a valid email address.',
            ]
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual('friendCount')
.get(function () {
    return this.friends;
});

const User = model('user', userSchema);

module.exports = User;