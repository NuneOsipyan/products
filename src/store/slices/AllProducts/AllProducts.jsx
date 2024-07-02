import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProducts } from './productsSlice'; 
import './AllProducts.css';

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products_data.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="home">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} className='imgs' />
            <span>{product.title}</span>
            <NavLink to={`/product/${product.id}`}>
              <button>View Details</button>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
