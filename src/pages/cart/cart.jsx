import { useContext, useState, useEffect } from "react";
import { MdAddCircleOutline , MdDelete , MdRemoveCircleOutline} from "react-icons/md";
import { ProductContext } from "../../components/context/productContext";
import "./styles.css";

export const Cart = () => {
    const[total, setTotal] = useState(0)
    const {listProductClient, setListProdutClient} = useContext(ProductContext);


    useEffect(()=> {
        const newTotal = listProductClient.reduce((previousValue, currentValue) => {
           return previousValue + currentValue.amount*currentValue.price
        }, 0)
       
        setTotal(newTotal)
    },[listProductClient]) 

    function handleDelete(id){

        const newListProduct = listProductClient.filter(prod => {
            if(prod.id!==id){
                return prod;
            }
        })

        setListProdutClient(newListProduct)
        
    }
    function handleAdd(id){
        const newListProduct = listProductClient.map(prod => {
            if(prod.stock <= prod.amount ){
                return prod;
            }
            if(prod.id===id){
                return {...prod, amount: prod.amount + 1};
            }
            return prod;
        })
        setListProdutClient(newListProduct);
    }
    function  handleDecremente(id){
        const newListProduct = listProductClient.map(prod =>{
            if(prod.amount <= 0){
                return prod;
            }
            if(prod.id===id){
                return {...prod, amount: prod.amount -1}
            }
            return prod;
        })
        setListProdutClient(newListProduct);
    }
    
    return(     
    <section className="container-cart">
        <h1 className="titulo" id="carrinho">Carrinho</h1>
        <table>
        <thead>
            <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
            </tr>
        </thead>
       <tbody>
            {listProductClient.map((product) => {
            return (
                <tr key={product.id} data-testid="product">
                <td>
                    <img src={product.image} alt={product.name} />
                </td>
                <td>
                    <strong>{product.name}</strong>
                    <span>R${product.price}</span>
                </td>
                <td>
                    <div className="content-infos-prod">
                    <button
                        type="button"
                        data-testid="decrement-product"
                        disabled={product.amount <= 1}
                        onClick={() => handleDecremente(product.id)}
                    >
                        <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                        type="text"
                        data-testid="product-amount"
                        readOnly
                        value={product.amount}
                    />
                    <button
                        type="button"
                        data-testid="increment-product"
                        onClick={() => handleAdd(product.id)}
                    >
                        <MdAddCircleOutline size={20} />
                    </button>
                    </div>
                </td>
                <td>
                    <strong>R${product.price*product.amount}</strong>
                </td>
                <td>
                    <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleDelete(product.id)}
                    >
                    <MdDelete size={20} />
                    </button>
                </td>
                </tr>
            );
            })}
        </tbody>
        </table>
        <footer>
            <a href="/resume">
            <button type="button" className="botao" id="finalizar">Finalizar pedido</button></a>

            <div className="div-total">
            <span>TOTAL: </span>
            <strong>R$ {total}</strong>
            </div>
         </footer>
    </section>
    );
};