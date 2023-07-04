import { Router } from "express";

import { getStore, addStore, deleteStore } from './controllers/storeControllers.js'

const routes = Router()

routes.get('/fakestore', getStore)

routes.post('/fakestore', addStore)

routes.delete('/fakestore/:id', deleteStore)

export default routes