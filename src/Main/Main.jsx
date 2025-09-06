function Main() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by:</span>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="product-grid">
            {/* Product 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 1.png"
                  alt="Gradient Graphic T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Gradient Graphic T-shirt </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(212 pcs left)</span>
                </div>
                <p className="font-bold">$145 </p>
                <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                  Remove from Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 10-1.png"
                  alt="Polo with Tipping Details"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Polo with Tipping Details</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                      <span className="text-gray-300">★</span>
                      <span className="text-gray-300">★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">1/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(320 pcs left)</span>
                </div>
                <p className="font-bold">$180</p>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 10-2.png"
                  alt="Black Striped T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Black Striped T-shirt</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">3/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(420 pcs left)</span>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">$120</p>
                  <p className="text-gray-400 line-through ml-2">$160</p>
                </div>
                <button
                  disabled
                  className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 active:translate-y-1 transition-all active:bg-gray-900"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 7-1.png"
                  alt="Skinny Fit Jeans"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Skinny Fit Jeans</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(20 pcs left)</span>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">$240</p>
                  <p className="text-gray-400 line-through ml-2">$260</p>
                </div>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 8-2.png"
                  alt="Checkered Shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Checkered Shirt</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(20 pcs left)</span>
                </div>
                <p className="font-bold">$180</p>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 8.png"
                  alt="Sleeve Striped T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Sleeve Striped T-shirt</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(20 pcs left)</span>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">$130</p>
                  <p className="text-gray-400 line-through ml-2">$160</p>
                </div>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 7 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 9-1.png"
                  alt="Vertical Striped Shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Vertical Striped Shirt</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(20 pcs left)</span>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">$212</p>
                  <p className="text-gray-400 line-through ml-2">$232</p>
                </div>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 8 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 9-2.png"
                  alt="Courage Graphic T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Courage Graphic T-shirt</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(20 pcs left)</span>
                </div>
                <p className="font-bold">$145</p>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 9 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 9.png"
                  alt="Loose Fit Bermuda Shorts"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Loose Fit Bermuda Shorts</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(10 pcs left)</span>
                </div>
                <p className="font-bold">$80</p>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Section (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

            {/* Cart Item 1  */}
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src="./assets/img/image 9-2.png"
                  alt="Gradient Graphic T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Gradient Graphic T-shirt</h3>
                  <span className="text-red-500 text-sm">×</span>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">$145</p>
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      −
                    </button>
                    <span className="text-sm">1</span>
                    <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Item 2  */}
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src="./assets/img/image 9-2.png"
                  alt="Checkered Shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Checkered Shirt</h3>
                  <span className="text-red-500 text-sm">×</span>
                </div>
                <p className="text-sm text-gray-500">Size: Medium</p>
                <p className="text-sm text-gray-500">Color: Red</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">$180</p>
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      −
                    </button>
                    <span className="text-sm">1</span>
                    <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Item 3 */}
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src="./assets/img/image 9-2.png"
                  alt="Skinny Fit Jeans"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Skinny Fit Jeans</h3>
                  <span className="text-red-500 text-sm">×</span>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: Blue</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">$240</p>
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      −
                    </button>
                    <span className="text-sm">1</span>
                    <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4">Order Summary</h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$565</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount (-20%)</span>
                  <span>-$113</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">$15</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>$467</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex-grow relative">
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                  />
                  <span className="absolute left-3 top-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </span>
                </div>
                <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <a
                href="#"
                className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Go to Checkout
                <span className="inline-block ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
