//Compartilhamento de estados
import { createContext, useState } from "react"; 

export const ProductContext = createContext({});

export function ProductProvider({children}){
    const[listProductClient, setListProdutClient] = useState([]);

    return (
        <ProductContext.Provider
          value={{ listProductClient, setListProdutClient}}
        >
          {children}
        </ProductContext.Provider>
      );
}