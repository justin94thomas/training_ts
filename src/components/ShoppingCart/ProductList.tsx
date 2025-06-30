import React from 'react';
import { Product } from '../../types';
import './styles.css';

interface Props {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, addToCart }) => {
    return (<div className='product-list-main'>
        <h2>Products</h2>
        <div className='product-div'>
            {products.map(product => {
                return <div key={product.id} className='product-item'>
                    <img src={product.image} alt={product.title} className='product-image' />
                    <div className='product-pricing'>
                        <p className='product-title'>{product.title}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            })}
        </div>
    </div>)
}

export default ProductList;
