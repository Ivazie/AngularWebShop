import { ProductClass } from "../models/product.model";

export class ProductsService {
    private products: ProductClass[] = [
      new ProductClass(1, 'Brigadeiro', 2, 'Sobremesas', 'Chocolate branco e Morango', '../../assets/products-img/Fotos editadas/20231009_153419.jpg '),
      new ProductClass(2, 'Pão de Mel', 4, 'Sobremesas', 'Chocolate e Mel', '../../assets/products-img/Fotos editadas/20231009_153718.jpg'),
      new ProductClass(3, 'Brigadeiro', 2, 'Sobremesas', 'Cholocate e Morango', '../../assets/products-img/Fotos editadas/20231009_154124.jpg'),
      new ProductClass(4, 'Brigadeiro', 12.00, 'Sobremesas', 'Chocolate branco, Ninho e Morango', '../../assets/products-img/Fotos editadas/20231009_154202.jpg'),
      new ProductClass(5, 'Macaroons', 13.00, 'Sobremesas', 'Chocolate, Limão, Morango, Recheado com Nutella ou Doce de leite', '../../assets/products-img/Fotos editadas/20231009_154400.jpg'),
      new ProductClass(6, 'Bolo Kinder', 22.50, 'Bolo de Pote', 'Nutella, Kinder Ovo, Ganache e Chantilly', '../../assets/products-img/Fotos editadas/20231009_154823.jpg'),
      new ProductClass(7, 'Bolo Branco', 17.00, 'Bolo de Pote', 'Doce de Leite, Chantilly e Ninho', '../../assets/products-img/Fotos editadas/20231009_154950.jpg'),
      new ProductClass(8, 'Bolo de Morango', 60.00, 'Bolos', 'Morango, Ninho e Doce de Leite', '../../assets/products-img/Fotos editadas/20231009_155425.jpg'),
      new ProductClass(9, 'Brigadeiro de Morango e Oreo', 2, 'Sobremesas', 'Oreo, Morango, Chocolate e Revestido por Chocolate Branco', '../../assets/products-img/Fotos editadas/DSCF4118.jpg'),
      new ProductClass(10, 'Espetinho de Morango', 15, 'Espetinho Doce', 'Morangos envolvidos em Chocolate', '../../assets/products-img/Fotos editadas/DSCF4124.jpg'),
      new ProductClass(11, 'Brigadeiro Red Velvet ', 3, 'Sobremesas', 'Baunilha e Pasta americana ', '../../assets/products-img/Fotos editadas/DSCF4139.jpg'),
      new ProductClass(12, 'Torta de Morango', 21.00, 'Tortas', 'Nutella, Morango e Amendoim', '../../assets/products-img/Fotos editadas/DSCF4143.jpg'),
      new ProductClass(13, 'Torta de Chocolate', 21.00, 'Tortas', 'Chantilly e Ganache de chocolate', '../../assets/products-img/Fotos editadas/DSCF4147.jpg'),
      new ProductClass(14, 'Taça de Morango', 25, 'Taça', 'Morango, Chantilly, Suspiro e Calda de Caramero', '../../assets/products-img/Fotos editadas/DSCF4153.jpg'),
      new ProductClass(15, 'Brigadeiro', 2, 'Sobremesas', 'Castanha e Chocolate', '../../assets/products-img/Fotos editadas/DSCF4158.jpg'),
      new ProductClass(16, 'Brigadeiro', 2, 'Sobremesas', 'Nutella e Amendoim', '../../assets/products-img/Fotos editadas/DSCF4162.jpg'),
      new ProductClass(17, 'Brigadeiro', 2, 'Sobremesas', 'Nozes e Chocolate', '../../assets/products-img/Fotos editadas/DSCF4166.jpg'),
      new ProductClass(18, 'Beijinho', 2, 'Sobremesas', 'Coco, Ninho e Nutella', '../../assets/products-img/Fotos editadas/DSCF4169.jpg'),
      new ProductClass(20, 'Brigadeiro', 2, 'Sobremesas', 'Brigadeiro tradicional', '../../assets/products-img/Fotos editadas/DSCF4182.jpg'),
      new ProductClass(21, 'Camafeu', 6.00, 'Sobremesas', 'Nozes, Pasta americana e Leite condensado', '../../assets/products-img/Fotos editadas/DSCF4185.jpg'),
      new ProductClass(22, 'Cookie de M&M', 5, 'Cookies', 'Massa de cookie tradicional e M&M', '../../assets/products-img/Fotos editadas/DSCF4196.jpg'),
      new ProductClass(23, 'Cookie de Chocolate', 5, 'Cookies', 'Massa de cookie feita com chocolate e Gotas de chocolate', '../../assets/products-img/Fotos editadas/DSCF4199.jpg'),
      new ProductClass(24, 'Brownie Tradicional', 10.00, 'Brownie', 'Chocolate', '../../assets/products-img/Fotos editadas/DSCF4205.jpg'),
      new ProductClass(25, 'Brownie Recheado', 24.00, 'Brownie', 'Chocolate e Ninho', '../../assets/products-img/Fotos editadas/DSCF4211.jpg'),
      new ProductClass(26, 'Brownie Kinder', 24.00, 'Brownie', 'Chocolate, Ninho e Kinder Ovo', '../../assets/products-img/Fotos editadas/DSCF4216.jpg'),
      new ProductClass(27, 'Brownie com Barrinha', 24, 'Brownie', 'Chocolate, Ninho e Barrinha de BomBom', '../../assets/products-img/Fotos editadas/DSCF4220.jpg'),
      new ProductClass(28, 'Mini Cake de Morango', 22.00, 'Mini Cake', 'Morango, Ninho e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4227.jpg'),
      new ProductClass(29, 'Mini Cake de Amendoim', 22.00, 'Mini Cake', 'Amendoim, Massa do bolo a base de Chocolate, Ganache e acompanha um Brigadeiro de Amendoim', '../../assets/products-img/Fotos editadas/DSCF4231.jpg'),
      new ProductClass(30, 'Mini Cake de Doce de Leite', 22.00, 'Mini Cake', 'Doce de leite, Brigadeiro de Chocolate e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4236.jpg'),
      new ProductClass(31, 'Mini Cake de Paçoca', 22.00, 'Mini Cake', 'Paçoca, Nozes e Massa do Bolo Neutra', '../../assets/products-img/Fotos editadas/DSCF4238.jpg'),
      new ProductClass(32, 'Mini Cake de Brigadeiro', 22.00, 'Mini Cake', 'Brigadeiro, Ganache e Massa do bolo a base de Chocolate e acompanha um Brigadeiro Tradicional', '../../assets/products-img/Fotos editadas/DSCF4244.jpg'),
      new ProductClass(33, 'Mini Cake de Beijinho', 22.00, 'Mini Cake', 'Coco ralado, Ninho, Massa do bolo a base de Chocolate e acompanha um Beijinho', '../../assets/products-img/Fotos editadas/DSCF4246.jpg'),
      new ProductClass(34, 'Mini Cake de Ninho', 22.00, 'Mini Cake', 'Ninho, Doce de Leite, Massa do bolo tradicional e acompanha um Brigadeiro de Ninho ', '../../assets/products-img/Fotos editadas/DSCF4255.jpg'),
      new ProductClass(35, 'Mini Cake de Maracujá', 22.00, 'Mini Cake', 'Maracuja, Ganache, Chantilly e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4258.jpg'),
      new ProductClass(36, 'Mini Cake de Uva Passa', 22.00, 'Mini Cake', 'Uva Passa, Ninho, Leite condensado e Massa do bolo tradicional', '../../assets/products-img/Fotos editadas/DSCF4265.jpg'),
      new ProductClass(37, 'Mini Cake de Castanha', 22.00, 'Mini Cake', 'Castanha, Chocolate amargo, Ninho e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4266.jpg'),
      new ProductClass(38, 'Mini Cake de Morango', 22.00, 'Mini Cake', 'Morango, Ninho, Chocolate branco e Massa do bolo tradicional', '../../assets/products-img/Fotos editadas/DSCF4270.jpg'),
      new ProductClass(39, 'Mini Cake de Nutella', 22.00, 'Mini Cake', 'Nutella, Ninho, Leite em pó e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4285.jpg'),
      new ProductClass(40, 'Mini Cake de Chantilly', 22.00, 'Mini Cake', 'Chantilly, Cholocate Branco e Massa de base tradicional', '../../assets/products-img/Fotos editadas/DSCF4288.jpg'),
    ]

    getProducts() {
      return this.products;
    }

    FilterProductsByCategory(filter: string) {
      return this.products.filter((product) => {
        return product.category == filter;
      })
    }
}