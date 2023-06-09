const mongoose = require('mongoose')
const { Schema, Types } = mongoose;

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
        thoughts: [{ type: Types.ObjectId, ref: 'Thought' }],
        friends: [{ type: Types.ObjectId, ref: 'User'}],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

const User = mongoose.model('user', userSchema);

module.exports = User;