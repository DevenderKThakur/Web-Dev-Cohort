import User from "../model/user.model.js";

import crypto from "crypto";

import nodemailer from "nodemailer";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User is not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    console.log(token);

    user.verificationToken = token;

    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email",
      text: `Please click on the following link ${process.env.BASE_URI}/api/v1/users/verify${token}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "User registered succesfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered ",
      success: false,
      error: error,
    });
  }
};

const verifyUser = async (req, res) => {
  
};

export { registerUser };
