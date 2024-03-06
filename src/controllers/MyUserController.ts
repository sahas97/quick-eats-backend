import { Request, Response, NextFunction } from "express";
import User from "../models/user";

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (!currentUser)
      return res.status(404).json({
        message: "User not Found",
      });
    res.json(currentUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const createCurrentUser = async (req: Request, res: Response) => {
  // 1.check if user exist
  // 2.create the user if doesn't exist
  // 3.return the user object to the calling client
  try {
    //object destructring
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) return res.status(200).send();

    //get the whole object and save it
    const newUser = new User(req.body);
    await newUser.save();

    // convert document object to javascript object
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error crating user",
    });
  }
};

const updateCurrentuser = async (req: Request, res: Response) => {
  try {
    //object destructuring
    const { name, addressLine1, city, country } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not Found",
      });
    }

    (user.name = name), (user.addressLine1 = addressLine1), (user.city = city);
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating user",
    });
  }
};

export default {
  createCurrentUser,
  updateCurrentuser,
  getCurrentUser,
};
