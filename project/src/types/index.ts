export interface PizzaItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends PizzaItem {
  quantity: number;
}