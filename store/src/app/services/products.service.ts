import { ProductClass } from "../models/product.model";

export class ProductsService {
    private products: ProductClass[] = [
      new ProductClass(1, 'Brigadeiro', 1, 'Sobremesas', 'Chocolate branco e Morango', '../../assets/products-img/Fotos editadas/20231009_153419.jpg '),
      new ProductClass(2, 'Pão de Mel', 1, 'Sobremesas', 'Chocolate e Mel', '../../assets/products-img/Fotos editadas/20231009_153718.jpg'),
      new ProductClass(3, 'Brigadeiro', 1, 'Sobremesas', 'Cholocate e Morango', '../../assets/products-img/Fotos editadas/20231009_154124.jpg'),
      new ProductClass(4, 'Brigadeiro', 1, 'Sobremesas', 'Chocolate branco, Ninho e Morango', '../../assets/products-img/Fotos editadas/20231009_154202.jpg'),
      new ProductClass(5, 'Macaroons', 1, 'Sobremesas', 'Chocolate, Limão, Morango, Recheado com Nutella ou Doce de leite', '../../assets/products-img/Fotos editadas/20231009_154400.jpg'),
      new ProductClass(6, 'Bolo Kinder', 1, 'Bolo de Pote', 'Nutella, Kinder Ovo, Ganache e Chantilly', '../../assets/products-img/Fotos editadas/20231009_154823.jpg'),
      new ProductClass(7, 'Bolo Branco', 1, 'Bolo de Pote', 'Doce de Leite, Chantilly e Ninho', '../../assets/products-img/Fotos editadas/20231009_154950.jpg'),
      new ProductClass(8, 'Bolo de Morango', 1, 'Bolos', 'Morango, Ninho e Doce de Leite', '../../assets/products-img/Fotos editadas/20231009_155425.jpg'),
      new ProductClass(9, 'Brigadeiro de Morango e Oreo', 1, 'Sobremesas', 'Oreo, Morango, Chocolate e Revestido por Chocolate Branco', '../../assets/products-img/Fotos editadas/DSCF4118.jpg'),
      new ProductClass(10, 'Espetinho de Morango', 1, 'Espetinho Doce', 'Morangos envolvidos em Chocolate', '../../assets/products-img/Fotos editadas/DSCF4124.jpg'),
      new ProductClass(11, 'Brigadeiro Red Velvet ', 1, 'Sobremesas', 'Baunilha e Pasta americana ', '../../assets/products-img/Fotos editadas/DSCF4139.jpg'),
      new ProductClass(12, 'Torta de Morango', 1, 'Tortas', 'Nutella, Morango e Amendoim', '../../assets/products-img/Fotos editadas/DSCF4143.jpg'),
      new ProductClass(13, 'Torta de Chocolate', 1, 'Tortas', 'Chantilly e Ganache de chocolate', '../../assets/products-img/Fotos editadas/DSCF4147.jpg'),
      new ProductClass(14, 'Taça de Morango', 1, 'Taça', 'Morango, Chantilly, Suspiro e Calda de Caramero', '../../assets/products-img/Fotos editadas/DSCF4153.jpg'),
      new ProductClass(15, 'Brigadeiro', 1, 'Sobremesas', 'Castanha e Chocolate', '../../assets/products-img/Fotos editadas/DSCF4158.jpg'),
      new ProductClass(16, 'Brigadeiro', 1, 'Sobremesas', 'Nutella e Amendoim', '../../assets/products-img/Fotos editadas/DSCF4162.jpg'),
      new ProductClass(17, 'Brigadeiro', 1, 'Sobremesas', 'Nozes e Chocolate', '../../assets/products-img/Fotos editadas/DSCF4166.jpg'),
      new ProductClass(18, 'Beijinho', 1, 'Sobremesas', 'Coco, Ninho e Nutella', '../../assets/products-img/Fotos editadas/DSCF4169.jpg'),
      new ProductClass(19, 'Brigadeiro', 1, 'Sobremesas', 'description', '../../assets/products-img/Fotos editadas/DSCF4182.jpg'),
      new ProductClass(20, 'Brigadeiro', 1, 'Sobremesas', 'Brigadeiro tradicional', '../../assets/products-img/Fotos editadas/DSCF4185.jpg'),
      new ProductClass(21, 'Camafeu', 1, 'Sobremesas', 'Nozes, Pasta americana e Leite condensado', '../../assets/products-img/Fotos editadas/DSCF4196.jpg'),
      new ProductClass(22, 'Cookie de M&M', 1, 'Cookies', 'Massa de cookie tradicional e M&M', '../../assets/products-img/Fotos editadas/DSCF4199.jpg'),
      new ProductClass(23, 'Cookie de Chocolate', 1, 'Cookies', 'Massa de cookie feita com chocolate e Gotas de chocolate', '../../assets/products-img/Fotos editadas/DSCF4205.jpg'),
      new ProductClass(24, 'Brownie Tradicional', 1, 'Brownie', 'Chocolate', '../../assets/products-img/Fotos editadas/DSCF4211.jpg'),
      new ProductClass(25, 'Brownie Recheado', 1, 'Brownie', 'Chocolate e Ninho', '../../assets/products-img/Fotos editadas/DSCF4216.jpg'),
      new ProductClass(26, 'Brownie Kinder', 1, 'Brownie', 'Chocolate, Ninho e Kinder Ovo', '../../assets/products-img/Fotos editadas/DSCF4220.jpg'),
      new ProductClass(27, 'Brownie com Barrinha', 1, 'Brownie', 'Chocolate, Ninho e Barrinha de BomBom', '../../assets/products-img/Fotos editadas/DSCF4227.jpg'),
      new ProductClass(28, 'Mini Cake de Morango', 1, 'Mini Cake', 'Morango, Ninho e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4231.jpg'),
      new ProductClass(29, 'Mini Cake de Amendoim', 1, 'Mini Cake', 'Amendoim, Massa do bolo a base de Chocolate, Ganache e acompanha um Brigadeiro de Amendoim', '../../assets/products-img/Fotos editadas/DSCF4236.jpg'),
      new ProductClass(30, 'Mini Cake de Doce de Leite', 1, 'Mini Cake', 'Doce de leite, Brigadeiro de Chocolate e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4238.jpg'),
      new ProductClass(31, 'Mini Cake de Paçoca', 1, 'Mini Cake', 'Paçoca, Nozes e Massa do Bolo Neutra', '../../assets/products-img/Fotos editadas/DSCF4244.jpg'),
      new ProductClass(32, 'Mini Cake de Brigadeiro', 1, 'Mini Cake', 'Brigadeiro, Ganache e Massa do bolo a base de Chocolate e acompanha um Brigadeiro Tradicional', '../../assets/products-img/Fotos editadas/DSCF4246.jpg'),
      new ProductClass(33, 'Mini Cake de Beijinho', 1, 'Mini Cake', 'Coco ralado, Ninho, Massa do bolo a base de Chocolate e acompanha um Beijinho', '../../assets/products-img/Fotos editadas/DSCF4255.jpg'),
      new ProductClass(34, 'Mini Cake de Ninho', 1, 'Mini Cake', 'Ninho, Doce de Leite, Massa do bolo tradicional e acompanha um Brigadeiro de Ninho ', '../../assets/products-img/Fotos editadas/DSCF4258.jpg'),
      new ProductClass(35, 'Mini Cake de Maracujá', 1, 'Mini Cake', 'Maracuja, Ganache, Chantilly e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4265.jpg'),
      new ProductClass(36, 'Mini Cake de Uva Passa', 1, 'Mini Cake', 'Uva Passa, Ninho, Leite condensado e Massa do bolo tradicional', '../../assets/products-img/Fotos editadas/DSCF4266.jpg'),
      new ProductClass(37, 'Mini Cake de Castanha', 1, 'Mini Cake', 'Castanha, Chocolate amargo, Ninho e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4270.jpg'),
      new ProductClass(38, 'Mini Cake de Morango', 1, 'Mini Cake', 'Morango, Ninho, Chocolate branco e Massa do bolo tradicional', '../../assets/products-img/Fotos editadas/DSCF4285.jpg'),
      new ProductClass(39, 'Mini Cake de Nutella', 1, 'Mini Cake', 'Nutella, Ninho, Leite em pó e Massa do bolo a base de Chocolate', '../../assets/products-img/Fotos editadas/DSCF4288.jpg'),
      new ProductClass(40, 'Mini Cake de Chantilly', 1, 'Mini Cake', 'Chantilly, Cholocate Branco e Massa de base tradicional', '../../assets/products-img/Fotos editadas/DSCF4291.jpg'),
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