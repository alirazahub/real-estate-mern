import mongoose from 'mongoose'
const contractorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    inseptions:{
        type: Number,
    },
    office:{
        type: String,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
}
)

const Contractor = mongoose.model('Contractor', contractorSchema)
//User variable is exported as follow is a ES module.
export default Contractor