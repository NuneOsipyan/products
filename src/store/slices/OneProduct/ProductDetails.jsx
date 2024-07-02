import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from './oneProductSlice'; 
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product_data.product);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  return (
    <div>
      {product && (
        <div className='one'>
          <h2>{product.title}</h2>
          <img src={product.image} />
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
