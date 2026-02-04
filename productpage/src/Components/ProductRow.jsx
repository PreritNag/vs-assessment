import { useState } from "react";
const ProductRow = ({ product, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(product.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onTitleChange(product.id, editedTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(product.title);
    setIsEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSave();
    } else if (event.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <tr className="product-row">
      <td className="title-cell">
        {isEditing ? (
          <div className="edit-container">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus
              className="edit-input"
              aria-label="Edit product title"
            />
            <div className="edit-actions">
              <button
                onClick={handleSave}
                className="save-btn"
                aria-label="Save changes"
              >
                ✓
              </button>
              <button
                onClick={handleCancel}
                className="cancel-btn"
                aria-label="Cancel editing"
              >
                ✗
              </button>
            </div>
          </div>
        ) : (
          <div className="title-display">
            <span>{product.title}</span>
            <button
              onClick={handleEditClick}
              className="edit-btn"
              aria-label={`Edit ${product.title}`}
              title="Click to edit product title"
            >
              Edit
            </button>
          </div>
        )}
      </td>
      <td className="brand-cell">{product.brand || "Unknown"}</td>
      <td className="category-cell">{product.category}</td>
      <td className="price-cell">${product.price.toFixed(2)}</td>
      <td className="rating-cell">
        <span className="rating-stars">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </span>
        <span className="rating-value">({product.rating.toFixed(1)})</span>
      </td>
    </tr>
  );
};

export default ProductRow;
