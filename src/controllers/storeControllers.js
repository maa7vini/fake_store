import Store from "../models/Store.js";

async function getStore(req, res){
    const store = await Store.find()

    return res.status(201).json(store)
}

async function addStore(req, res){
    const store = req.body

    const newStore = await Store.create(store)

    return res.status(200).json(newStore)
}

async function deleteStore(req, res){
    const id = req.params.id

    await Store.findByIdAndDelete({_id: id})

    return res.status(200).json({response: 'Store deleted'})
}

export { getStore, addStore, deleteStore }