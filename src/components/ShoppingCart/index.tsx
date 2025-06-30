import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, Product } from './ShopSlice';
import { RootState, AppDispatch } from '../../store';
import { CartItems } from '../../types';
import ProductList from './ProductList';
import Cart from './Cart';
import { icons } from '../../Utils/assets';
import './styles.css'; 

function ShoppingCart() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.shopping);
  const [cart, setCart] = useState<CartItems[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

 const updateCart = (product: Product, action: string) => {
  setCart(prev => {
    return prev.flatMap(item => {
      if (item.id === product.id) {
        if (action === 'add') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === 'subtract') {
          if (item.quantity - 1 <= 0) {
            return [];
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
      }
      return item;
    });
  });
};

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getIcon = (iconName?: string, size: number = 24) => {
      if (!iconName) return null;
      const IconComponent = icons[iconName] as React.ComponentType<{ size?: number }>;
      return React.createElement(IconComponent, { size });
  };

  return (
  <div className="App">
    {loading && <p>Loading products...</p>}
    {error && <p>Error: {error}</p>}
    <div className="shopping-listings">
      <ProductList products={products} addToCart={addToCart} />

      {/* Toggle Button */}
      <button className="drawer-toggle" style={{background: !drawerOpen ? '#007bff': 'red'}} onClick={() => setDrawerOpen(!drawerOpen)}>
        {cart.length > 0 && !drawerOpen && <span className='cart-length'>{cart.length}</span>}
        {drawerOpen ? getIcon('CloseBox', 18) : getIcon('Shopping', 18)}
      </button>

      {/* Backdrop */}
      {drawerOpen && <div className="backdrop" onClick={() => setDrawerOpen(false)} />}

      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <Cart cartItems={cart} removeFromCart={removeFromCart} updateCart={updateCart} />
      </div>
    </div>
  </div>
);

}

export default ShoppingCart;
