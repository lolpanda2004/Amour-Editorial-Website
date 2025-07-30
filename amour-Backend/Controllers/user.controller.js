import { User } from "../models/user.models.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerUser = async(req, res) => {
  try {

    const {username, fullName, email, password} = req.body

    console.log(req.body)
    // check if all details are present or not

    if(!username || !fullName || !email || !password){
      throw new Error("All fields are mandatory!")
    }

    // check if the user is already present
    const isUserPresent = await User.findOne({email})
    console.log("is user avaiable", isUserPresent)

    if(isUserPresent){
      return res
              .status(400)
              .json({
                message : "User is already registered! Please login",
              })
    }

    // hashing password using bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create one user and store in database
    const user = new User({
        fullName : fullName,
        email : email,
        username : username,
        password : hashedPassword
    })

    console.log("User ", user)

    // saving user in database
    await user.save()

    return res
            .status(200)
            .json({
              message : "User registered successfully!",
              success : true,
              data : user
            })
  } 
  catch (error) {
    return res
            .status(500)
            .json({
              message : "Error registering user!",
              success : false
            })
  }
}

const loginUser = async(req, res) => {
  try {
    
    // email based login
    const {email, password} = req.body

    console.log(req.body)

    // if email and password is not present then throw error
    if(!email && !password){
      throw new Error("All fields are required!")
    }

    // check if user is present
    const isUserPresent = await User.findOne({email})

    console.log(isUserPresent)

    if(!isUserPresent){
      return res
              .status(400)
              .json({
                message : "User is not present. Please register!",
                success : false
              })
    }

    // if user is present check password
    const isPasswordValid = await bcrypt.compare(password, isUserPresent.password)

    if(!isPasswordValid){
      throw new Error("Password is incorrect. Please retry!")
    }

    // after password is correct

    console.log(isPasswordValid)

    const token = jwt.sign({
      fullName : isUserPresent.fullName,
      email : isUserPresent.email, 
      username : isUserPresent.username
    }, process.env.TOKEN)

    console.log(token)

    const options = {
      httpOnly : true,
      secure : true
    }

    return res
            .status(200)
            .cookie("token",token, options)
            .json({
              message : "User logged in successfully!!",
              success : true,
              data : isUserPresent
            })

  } 
  catch (error) {
    return res
            .status(500)
            .json({
              message : "Error logging in the user",
              success : false
            })
  }
}

const logoutUser = async(req, res) => {
  try {

    const options = {
      httpOnly : true,
      secure : true
    }
    
    return res
            .status(200)
            .clearCookie("token",options)
            .json({
              message : "User logged out succesfully!",
              success : true
            })

  } 
  catch (error) {
    return res
            .status(500)
            .json({
              message : "Error logging out the user!",
              success : false
            })
  } 
}

export {registerUser, loginUser, logoutUser}