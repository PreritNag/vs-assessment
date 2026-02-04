import "./ProductTable.css";
import ProductRow from "./ProductRow";
const ProductTable = ({ products, onTitleUpdate }) => {
  if (!products || products.length === 0) {
    return (
      <div className="table-empty-state">
        <p>No products available at the moment.</p>
        <p>Please check back later or try refreshing the page.</p>
      </div>
    );
  }
  return (
    <div className="table-wrapper">
      <table className="product-listing">
        <thead>
          <tr>
            <th className="title-header">Product Name</th>
            <th className="brand-header">Brand</th>
            <th className="category-header">Category</th>
            <th className="price-header">Price</th>
            <th className="rating-header">Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            const uniqueKey = `${item.id}-${item.title}-${index}`;

            return (
              <ProductRow
                key={uniqueKey}
                product={item}
                onTitleChange={onTitleUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductTable;
