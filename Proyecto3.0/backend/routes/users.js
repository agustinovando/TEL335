const express = require("express");
const router = express.Router();
const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const saltRounds = 10;

router.delete("/users/:id", async (req, res) => {
  await User.destroy({where: {id: req.params.userId}});
  //await Task.findByIdAndDelete(req.params.id);

  res.send({status: "ok"});
});

// Ruta para crear un nuevo usuario
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Este email ya está en uso, por favor intenta con otro." });
    }
    
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crea un nuevo usuario con los datos proporcionados y guarda en la base de datos
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

// Ruta para hacer login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email incorrecto" });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    console.log('User found:', user.id);

    //res.status(200).json(user);
    // Crear el token de autenticación
    const token = jwt.sign({ userId: user._id }, "app", { expiresIn: '1h' });

    // Enviar el token al cliente
    res.json({ token });

    console.log('Email:', email);
    console.log('pass:', password);
    console.log('User found:', user.id); 
    console.log('Token:', token);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error authenticating user" });
  }
});

module.exports = router;