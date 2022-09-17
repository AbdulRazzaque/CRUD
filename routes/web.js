import express from 'express'

const router= express.Router()

import {getAllDoc,createDoc,editDoc,updateDocById,DeleteDocById} from '../controller/homeController.js'
router.get('/', getAllDoc),
router.post('/', createDoc),
router.get('/edit/:id',editDoc)
router.post('/updateDocById/:id',updateDocById)
router.post('/DeleteDocById/:id',DeleteDocById)



export default router