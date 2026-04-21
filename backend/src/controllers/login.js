const Login = require("../models/login");

// For real apps, use bcrypt to compare hashed passwords!

exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    console.log("Registering customer:", req.body);
    // Check if user already exists
    const existingUser = await Login.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }
    // Create new user
    const newUser = new Login({ email, password, role });
    await newUser.save();
    res.status(201).json({ message: "Registration successful", user: { email: newUser.email, role: newUser.role } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // In production, use bcrypt.compare(password, user.password)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Success: you can generate a token here if needed
    res.json({
      message: "Login successful",
      user: { email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

