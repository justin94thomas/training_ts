import React from 'react';
import { CartItems, Product } from '../../types';
import SliderPayButton from '../../common/SliderButton';

interface Props {
    cartItems: CartItems[];
    removeFromCart: (id: number) => void;
    updateCart: (product: Product, action: string) => void;
}

const Cart: React.FC<Props> = ({ cartItems, removeFromCart, updateCart }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div className='cart-main'>
            <h2 className='cart-header'>Cart</h2>
            <div className='cart-div'>
                {cartItems.length > 0 ? cartItems.map(item => (
                    <div key={item.id} className='cart-item'>
                        <img src={item.image} alt={item.title} className='product-image' />
                        <div className='cart-pricing'>
                            <p className='cart-title'>{item.title}</p>
                            <p>x{item.quantity} = ${item.price * item.quantity}</p>
                            <div className='button-group'>
                                <button onClick={() => updateCart(item, 'add')}>+</button>
                                <button onClick={() => updateCart(item, 'subtract')}>-</button>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                )) : <p>Cart is empty</p>}
            </div>
            <div className='show-payments'>
                <p className='payment-text'>Total Items: {totalItems}</p>
                <p className='payment-text'>Total Amount: ${totalAmount.toFixed(2)}</p>
            <SliderPayButton amount={totalAmount} onConfirm={() => console.log('Payment confirmed')} />
            </div>
        </div>
    );
};

export default Cart;
