import mongoose from 'mongoose'
const salePropertySchema = mongoose.Schema({
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

const SaleProperty = mongoose.model('SaleProperty', salePropertySchema)
//User variable is exported as follow is a ES module.
export default SaleProperty