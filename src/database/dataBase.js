import mongoose from "mongoose";

async function connectStore(){
    mongoose.connect('mongodb+srv://maa7vini:ma102030@cluster0.abdg6nx.mongodb.net/?retryWrites=true&w=majority')
}

export default connectStore