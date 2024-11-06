import User from "../models/user.model.js";

export const signup = async (req, res) => {
  console.log("req body", req.body);
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log("user:", user);

    res.status(201).json({
      user,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("Login route called");
};

export const logout = async (req, res) => {
  res.send("Logout route called");
};
