import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';
import { PizzaItem } from '../types';
import '../styles/Menu.css';

interface MenuProps {
  toggleCart: () => void;
}

const Menu: React.FC<MenuProps> = ({ toggleCart }) => {
  const { addToCart } = useContext(CartContext);
  
  const menuItems: PizzaItem[] = [
    {
      id: 1,
      name: 'Cheese Pizza',
      description: 'Classic cheese pizza with our signature sauce',
      price: 999,
      image: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Pepperoni Delight',
      description: 'Loaded with pepperoni and extra cheese',
      price: 1199,
      image: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Veggie Supreme',
      description: 'Fresh vegetables on a crispy crust',
      price: 1099,
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Meat Lover',
      description: 'The ultimate combination of premium meats',
      price: 1299,
      image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      name: 'Hawaiian Special',
      description: 'Ham and pineapple on our special sauce',
      price: 1199,
      image: 'https://images.pexels.com/photos/845799/pexels-photo-845799.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      name: 'BBQ Chicken',
      description: 'Grilled chicken with BBQ sauce and red onions',
      price: 1299,
      image: 'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const handleAddToCart = (item: PizzaItem) => {
    addToCart(item);
    toggleCart();
  };

  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>Menu</span>
        <h2>Tasty menu of the week</h2>
      </div>
      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="box" key={item.id}>
            <div className="box-img">
              <img src={item.image} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
            <h3>{item.description}</h3>
            <div className="price-cart">
              <span>₹{item.price}</span>
              <button 
                className="add-to-cart"
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;