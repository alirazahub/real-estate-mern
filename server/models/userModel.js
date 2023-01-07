import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    username:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
}
)

const User = mongoose.model('User', userSchema)
//User variable is exported as follow is a ES module.
export default User