import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const HandleCart = (props) => {
  const [cartIds, setCartIds] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      let newData = [];
      data.map((i) => {
        if (cartIds[`${i.id}`]) newData.push({...i, qty: cartIds[`${i.id}`]});
      });
      setCart(newData);
    };
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartIds", JSON.stringify(cartIds));
  }, [cartIds]);

  const addProdact = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      // incerement 1
      const activeId = product.id;
      const newCartIds = { ...cartIds, [activeId]: activeId + 1 };
      setCartIds(newCartIds);

      let newCart = cart;
      newCart.find((x)=> x.id==activeId ? { ...x, qty: x.qty + 1 } : x );
      setCart(newCart);

    } else {
      let newCart = cart;
      newCart.push({...product, qty: 1});
      setCart(newCart);

      const activeId = product.id;
      const newCartIds = { ...cartIds, [activeId]: 1 };
      setCartIds(newCartIds);
    }
  };

  // const product = action.payload;
  // switch (action.type) {
  //   case "ADDITEM":
  //     // check if product is exist
  //     const exist = state.find((x) => x.id === product.id);
  //     if (exist) {
  //       // incerement 1
  //       return state.map((x) =>
  //         x.id === product.id ? { ...x, qty: x.qty + 1 } : x
  //       );
  //     } else {
  //       const product = action.payload;
  //       const activeId = product.id;
  //       const newCartIds = { ...cartIds, [activeId]: 1 };
  //       setCartIds(newCartIds);
  //       return [
  //         ...state,
  //         {
  //           ...product,
  //           qty: 1,
  //         },
  //       ];
  //     }
  //     break;

  //   case "DELITEM":
  //     const exist1 = state.find((x) => x.id === product.id);
  //     if (exist1.qty === 1) {
  //       return state.filter((x) => x.id !== exist1.id);
  //     } else {
  //       return state.map((x) =>
  //         x.id === product.id ? { ...x, qty: x.qty - 1 } : x
  //       );
  //     }
  //     break;

  //   default:
  //     return state;
  //     break;
  // }
  return (
    <CartContext.Provider value={{ cart, addProdact }}>{props.children}</CartContext.Provider>
  );
};

export default HandleCart;
