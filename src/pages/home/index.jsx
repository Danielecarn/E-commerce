import React, {useEffect, useState, useContext} from "react";
import { api } from "../../services/api";
import { Product } from "../../components/products";
import { ProductContext } from "../../components/context/productContext";
import { Header } from "../../components/header";
import './styles.css'

export const Home = () =>{

    const[listProduct, setListProdutc] = useState([])

    const {listProductClient, setListProdutClient} = useContext(ProductContext)

    async function getApi() {
        const {data} = await api.get("/product");
        //console.log(data)
        setListProdutc(data);
    }

    useEffect(()=>{
        getApi();

    },[]);

    return(
        <section className="container-home">
            <Header qtdItem={listProductClient.length}/>
          <div className="content-home">
          {
                listProduct?.map(product=>{
                    return(
                        <Product product={product}/>
                    )
                })
            }
          </div>
        
        </section>
    );
};
