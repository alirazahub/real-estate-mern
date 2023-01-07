import express from 'express'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import {verifyUser} from '../middleware/verifyUser.js'
import Contractor from '../models/contractorModel.js';

const router = express.Router();

//Add new Contractor
router.post(
    '/addContractor',
    verifyUser,
    asyncHandler(async (req, res) => {
        const {
            name,
            inseptions,
            office,
            image
        } = req.body
        try {
            const contractor = await Contractor.create({
                name,
                inseptions,
                office,
                image
            })
            res.status(201).json({msg: 'Contractor Added Successfully', contractor});
        } catch (error) {
            res.status(500).json({ msg:error })
        }
    })
)
//Get all Contractors
router.get(
    '/getContractors',
    verifyUser,
    asyncHandler(async (req, res) => {
        try {
            const contractors = await Contractor.find({})
            res.status(201).json({msg: 'Contractors Fetched Successfully', contractors});
        } catch (error) {
            res.status(500).json({ msg:error })
        }
    })
)
//Delete Contractor
router.delete(
    '/deleteContractor/:id',
    verifyUser,
    asyncHandler(async (req, res) => {
        try {
            const contractor = await Contractor.findById(req.params.id)
            if(contractor){
                await contractor.remove()
                res.status(201).json({msg: 'Contractor Deleted Successfully'});
            }else{
                res.status(404).json({msg: 'Contractor not found'});
            }
        } catch (error) {
            res.status(500).json({ msg:error })
        }
    })
)
//Update Contractor
router.put(
    '/updateContractor/:id',
    verifyUser,
    asyncHandler(async (req, res) => {
        const {
            name,
            inseptions,
            office,
            image
        } = req.body
        try {
            const contractor = await Contractor.findById(req.params.id)
            if(contractor){
                contractor.name = name
                contractor.inseptions = inseptions
                contractor.office = office
                contractor.image = image
                const updatedContractor = await contractor.save()
                res.status(201).json({msg: 'Contractor Updated Successfully', updatedContractor});
            }else{
                res.status(404).json({msg: 'Contractor not found'});
            }
        } catch (error) {
            res.status(500).json({ msg:error })
        }
    })
)

            
export default router;