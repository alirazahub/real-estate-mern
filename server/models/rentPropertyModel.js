import mongoose from 'mongoose'
const RentPropertySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location:{
        type: num,
    },
    type:{
        type: String,
    },
    price:{
        type: Number,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
}
)

const RentProperty = mongoose.model('RentProperty', RentPropertySchema)
//User variable is exported as follow is a ES module.
export default RentProperty