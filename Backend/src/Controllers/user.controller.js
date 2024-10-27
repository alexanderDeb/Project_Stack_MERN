import User from "../Models/user.model.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  const userDeleted = {
    name: user.name,
    phone: user.phone,
    email: user.email,
    status: false,
  };
  const userEdit = await User.findOneAndUpdate(req.params.id, userDeleted, {
    new: true,
  });
  if (!userEdit) return res.status(404).json({ message: "Usuario no Borrado" });
  res.json(userEdit);
};

export const createUser = async (req, res) => {
  const { name, email, phone, status } = req.body;
  const NewUser = new User({
    name: name,
    phone: phone,
    email: email,
    status: status,
  });
  const saveUser = await NewUser.save();
  res.json(saveUser);
};

export const login = async (req, res) => {
  const query = { email: req.params.email };
  const user = await User.findOne(query);
  if (!user) return res.status(400).json({ message: "Usuario no encontrado" });
  else return res.status(200).json(user);
};
