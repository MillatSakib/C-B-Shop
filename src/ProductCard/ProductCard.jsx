import Button from "./Button";

function ProductCard({ data,index }) {
  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={data.imgUrl}
            alt={`Image of ${data.productname}`}
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{data.productname}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center my-1">
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-300">★</span>
              </div>
              <span className="text-xs text-gray-500 ml-1">
                {data.rating}/5
              </span>
            </div>
            <span className="text-xs text-gray-700">
              ({data.quantity} pcs left)
            </span>
          </div>
          <p className="font-bold">${data.price} </p>

          <Button
            itemStatus={data.status ? data.status : "0"}
            productID={data.id}
            index={index}
          />
        </div>
      </div>
    </>
  );
}
export default ProductCard;
