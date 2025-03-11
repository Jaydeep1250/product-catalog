import { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || price <= 0) {
      setError('Name is required and price must be a positive number');
      return;
    }
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, { name, price, description });
      setName('');
      setPrice('');
      setDescription('');
      setError('');
      onProductAdded();  // Refresh the product list
    } catch (err) {
      setError('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <p className="text-red-500">{error}</p>}
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 mr-2" />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required className="border p-2 mr-2" />
      <input type="text" placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 mr-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer">Add Product</button>
    </form>
  );
};

export default ProductForm;
