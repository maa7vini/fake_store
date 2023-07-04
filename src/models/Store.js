import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    productImage: {
        type: String,
        required: true
    }
})

export default mongoose.model('Store', storeSchema)