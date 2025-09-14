import { useReducer } from "react";
import Cart from "../Cart/Cart";
import ProductCard from "../ProductCard/ProductCard";
import CardReducer from "../ProductCard/CardReducer";
import Data from "../Data/Data.json";
import { ProductDataContext } from "../ContextDataStore/ProductData";

function handleSorting(e, Products, dispatch) {
  if (e.target.value === "1") {
    dispatch({ type: "popularSort" });
  } else if (e.target.value === "2") {
    dispatch({ type: "newest" });
  } else if (e.target.value === "3") {
    dispatch({ type: "priceAsc" });
  } else if (e.target.value === "4") {
    dispatch({ type: "priceDsc" });
  } else {
    dispatch({ type: "default" });
  }
}

function Main() {
  const [Products, dispatch] = useReducer(CardReducer, {
    Product: [...Data],
    Cart: [],
  });

  return (
    <ProductDataContext.Provider value={{ Products, dispatch }}>
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Products</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select
                  onChange={(e) => handleSorting(e, Products, dispatch)}
                  defaultValue="0"
                  className="border rounded-md px-2 py-1 text-sm"
                >
                  <option value="0">Default</option>
                  <option value="1">Most Popular</option>
                  <option value="2">Newest</option>
                  <option value="3">Price: Low to High</option>
                  <option value="4">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Products */}
              {Products.Product.map((data, index) => (
                <ProductCard key={data.id} data={data} index={index} />
              ))}
            </div>
          </div>
          <Cart />
        </div>
      </main>
    </ProductDataContext.Provider>
  );
}

export default Main;
