import axios from 'axios';
import { Product } from './models/product-model';

(async  () => {
 /* async function getProducts() {
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //const data = rta.data;
    //code
    return data;
  }*/

  async function getProducts() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data = rta.data as Product[];                 //Tipado forzado
    return data;
  }

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));
})();
