import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from './error.controller'

const create = async (req, res, next) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    }
    catch(error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error)
        })
    }
 }
 
const list = (req, res) => { }
const userByID = (req, res, next, id) => {}
const read = (req, res) => {}
const update = (req, res, next) => {}
const remove = (req, res, next) => {}

export default {create, userByID, read, list, remove, update}