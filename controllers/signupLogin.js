import asyncHandler from "../middleware/asyncHandler.js";
import signupSchema from "../models/register.js";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await signupSchema.find();
  res.status(200).json({
    success: true,
    data: allUsers,
  });
});
export const createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  const user = await signupSchema.create(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});
