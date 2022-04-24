import { sortOrders } from './sort-orders';

export type Order = {
  city: string;
  favorite: boolean;
  id: number;
  name: string;
  price: number;
};

export async function fetchOrders() {
  const response = await fetch('https://api.npoint.io/b63af24a30ecf4fad015');
  const data: Order[] = await response.json();

  return sortOrders(data);
}
