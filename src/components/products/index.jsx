import React, {useState, useContext} from "react";
import './styles.css'
import { MdAddShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import { ProductContext } from "../context/productContext";


export const Product = ({product}) =>{
    const {listProductClient, setListProdutClient} = useContext(ProductContext)

    const [amount, setAmount] = useState(0);

    function handleAddProduct() {
       const isOnlist = listProductClient.some(prod => prod.id === product.id);
      
       if(isOnlist){
        const newProduct = listProductClient.map(prod => {
            if(prod.id===product.id){
                return {...prod, amount: amount+1}
            }
            return prod;
        })  
        console.log("TESTE|", newProduct)
        setListProdutClient(newProduct);
       }else {
        const newProduct =  [...listProductClient, {...product, amount: 1}];
        setListProdutClient(newProduct)
       }
     
        if(amount   <= product.stock - 1 ){
            setAmount(amount + 1)
        }else{
            toast.error("Produto sem estoque");
        }
      }

    return(

    <section className="container-product">
        <img src={product.image} alt={product.name} />
        <strong>{product.name}</strong>
        <h2>R${product.price}</h2>
        <button 
            type="button"
            data-testid="add-product-button"
            onClick={() => handleAddProduct()}
        >
        <div data-testid="cart-product-quantity" className="cart-product-button">
            <MdAddShoppingCart size={16} color="#FFF" />
             {amount}
        </div>

        <h3>ADICIONAR AO CARRINHO</h3>
        </button>
    </section>
    );
};