import Product from "../Models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, image, description, price, barCode, status } = req.body;
  const newProduct = new Product({
    name,
    image,
    description,
    price,
    barCode,
    status,
  });
  const saveProduct = await newProduct.save();
  res.json(saveProduct);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.json(product);
};
