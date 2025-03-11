"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductList = ({ products, fetchProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = async (id) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
        fetchProducts();
      };

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        
        <h2 className="text-xl mb-4">Product List</h2>
        <input
          type="text"
          placeholder ="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mb-4"
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} className="flex justify-between items-center mb-2">
              <div>
                <strong>{product.name}</strong> - ${product.price}
                {product.description && <p>{product.description}</p>}
              </div>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white p-1 cursor-pointer">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;
