import React, { useContext} from "react";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo1.png";
import { ProductContext } from "../context/productContext";
import './styles.css'

export const Header = ({qtdItem=0}) => {

 
  return (
    <section className="container-header">
      <Link to="/">
       <img src={Logo}/>
      </Link>

      <Link to="/cart" className="link-cart">
        <div className="link-to-card">
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {qtdItem>1 ? `${qtdItem} itens` : 
               `${qtdItem} item` } 
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Link>
    </section>
  );
};
