import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ShoppingCart from '../index';
import Cart from '../Cart';

const mockStore = configureMockStore();

describe("Shopping Cart - Index File", () => {
    it("render the shopping component", () => {
        const store = mockStore({ shopping: { products: [] } })
        render(<Provider store={store}>
            <ShoppingCart />
        </Provider>)
    })
    expect(screen.getByTestId('shopping-cart')).toBeInTheDocument();
})

describe("Shopping Cart - Cart", () => {
    const mockData = [
        {
            "id": 1,
            "title": "Mens Casual Premium Slim Fit T-Shirts",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            },
            "quantity": 1
        }
    ]
    const store = mockStore({});
    store.dispatch = jest.fn();
    const handleRemoveCart = (id: number) =>{
        console.log("removed item from cart");
    }
    const updateCart = () =>{
        console.log('cart update')
    }
    it("Check whether data is rendered in cart component", () => {
        render(<Cart cartItems={mockData} removeFromCart={handleRemoveCart} updateCart={updateCart}/>)
        expect(screen.getByText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Remove from cart'));
        expect(store.dispatch).toHaveBeenCalled();
    })
})