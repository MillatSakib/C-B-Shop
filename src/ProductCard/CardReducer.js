function CardReducer(state, action) {
  switch (action.type) {
    case "popularSort":
      return {
        ...state,
        Product: state.Product.toSorted((a, b) => b.rating - a.rating),
      };
    case "newest":
      return {
        ...state,
        Product: state.Product.toSorted((a, b) => b.id - a.id),
      };

    case "priceAsc":
      return {
        ...state,
        Product: state.Product.toSorted((a, b) => a.price - b.price),
      };

    case "priceDsc":
      return {
        ...state,
        Product: state.Product.toSorted((a, b) => b.price - a.price),
      };

    case "default":
      return {
        ...state,
        Product: state.Product.toSorted((a, b) => a.id - b.id),
      };

    case "AddToCart": {
      const cartProduct = state.Product.find(
        (product, index) =>
          product.id === action.payload.productID && state.Product[index]
      );
      return {
        ...state,
        Product: state.Product.map((product) =>
          product.id === action.payload.productID
            ? { ...product, status: "1", quantity: product.quantity - 1 }
            : product
        ),
        Cart: [
          ...state.Cart,
          {
            productID: cartProduct.id,
            imgUrl: cartProduct.imgUrl,
            productname: cartProduct.productname,
            size: cartProduct.size,
            color: cartProduct.color,
            price: cartProduct.price,
            quantity: 1,
          },
        ],
      };
    }

    case "RemoveFromCart": {
      return {
        ...state,
        Product: state.Product.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                status: "0",
                quantity:
                  product.quantity +
                  state.Cart.filter(
                    (not) => not.productID === action.payload
                  )[0].quantity,
              }
            : product
        ),
        Cart: state.Cart.filter((not) => not.productID !== action.payload),
      };
    }

    case "increment": {
      const cart = state.Cart.map((item, index) =>
        index === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const productID = state.Cart[action.payload].productID;
      const quantity = state.Product.find((p) => p.id === productID).quantity;
      if (quantity === 0) {
        console.log(
          "In inventory there have ",
          state.Cart[action.payload].quantity,
          " products."
        );
        return { ...state };
      }

      const products = state.Product.map((p) =>
        p.id === productID ? { ...p, quantity: p.quantity - 1 } : p
      );

      return {
        ...state,
        Cart: cart,
        Product: products,
      };
    }

    case "decrement": {
      const cart = state.Cart.map((item, index) =>
        index === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const productID = state.Cart[action.payload].productID;
      const quantity = state.Cart[action.payload].quantity;
      if (quantity === 1) {
        console.log("You can't by less then one product");
        return { ...state };
      }

      const products = state.Product.map((p) =>
        p.id === productID ? { ...p, quantity: p.quantity + 1 } : p
      );

      return {
        ...state,
        Cart: cart,
        Product: products,
      };
    }

    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default CardReducer;
