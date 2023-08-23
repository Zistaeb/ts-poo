import { ProductMemoryService } from './services/product-memory-service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto1',
  price: 100,
  description: 'descripcion del producto',
  categoryId: 17,
  images: []
})

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'otro nombre'
})

const rta = productService.findOne(productId);
console.log(rta);
