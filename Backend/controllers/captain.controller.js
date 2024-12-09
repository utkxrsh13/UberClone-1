const captainModel = require("../models/captain.model");
const captainService = require('../services/captain.service')
module.exports.registerCaptain = async (req, res, next) => {
  const { validationResult } = require("express-validator");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isCaptainExisted = await captainModel.findOne({email});
  if(isCaptainExisted){
    return res.status(400).json({message:"Captain already exist"})
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.gerenateAuthToken();
  return res.status(201).json({ token, captain });
};
