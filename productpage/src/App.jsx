// App.jsx
import { useEffect, useRef, useState } from "react";
import { getProducts } from "./api/product";
import ProductTable from "./Components/ProductTable";
import LoadingIndicator from "./Components/Loader";
import useInfiniteScroll from "./Hook/useInfiniteScroll";
import "./App.css";

const ITEMS_PER_PAGE = 10;
function ProductCatalogApp() {
  const [productItems, setProductItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);

  const loaderRef = useRef(null);
  // Initial data load
  useEffect(() => {
    let isActive = true;

    const loadInitialProducts = async () => {
      try {
        setIsLoading(true);
        const result = await getProducts(ITEMS_PER_PAGE, 0);

        if (isActive && result.products) {
          setProductItems(result.products);
          setPageOffset(ITEMS_PER_PAGE);
          setCanLoadMore(result.products.length === ITEMS_PER_PAGE);
        }
      } catch (err) {
        if (isActive) {
          setErrorMessage({
            title: "Unable to load products",
            description: err.message,
          });
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadInitialProducts();

    return () => {
      isActive = false;
    };
  }, []);

  const loadAdditionalProducts = async () => {
    if (isLoading || !canLoadMore) return;

    try {
      setIsLoading(true);
      // Delay to simulate loading
      await new Promise((resolve) => setTimeout(resolve, 500));

      const result = await getProducts(ITEMS_PER_PAGE, pageOffset);

      if (result.products) {
        setProductItems((prev) => [...prev, ...result.products]);
        setPageOffset((prev) => prev + ITEMS_PER_PAGE);
        const hasMore = result.products.length === ITEMS_PER_PAGE;
        setCanLoadMore(hasMore);
      }
    } catch (err) {
      setErrorMessage({
        title: "Failed to load more items",
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useInfiniteScroll(loaderRef, loadAdditionalProducts, canLoadMore, isLoading);

  const handleProductUpdate = (productId, newTitle) => {
    setProductItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, title: newTitle } : item,
      ),
    );
  };

  const retryLoading = () => {
    setErrorMessage(null);
    loadAdditionalProducts();
  };

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <h1 className="app-title">📦 Product Catalog</h1>
        <p className="app-description">
          Browse through our product collection. You can edit product names by
          clicking the edit button. The list automatically loads more items as
          you scroll down.
          {productItems.length > 0 && (
            <span className="item-count">
              {" "}
              ({productItems.length} products)
            </span>
          )}
        </p>
      </header>

      {errorMessage && (
        <div className="error-notification">
          <h3>{errorMessage.title}</h3>
          <p>{errorMessage.description}</p>
          <button onClick={retryLoading} className="retry-button">
            Try Again
          </button>
        </div>
      )}

      {productItems.length === 0 && !isLoading && !errorMessage ? (
        <div className="empty-state">
          <p>No products found in the catalog.</p>
        </div>
      ) : (
        <ProductTable
          products={productItems}
          onTitleUpdate={handleProductUpdate}
        />
      )}

      <LoadingIndicator
        ref={loaderRef}
        isLoading={isLoading}
        hasMore={canLoadMore}
      />
    </div>
  );
}

export default ProductCatalogApp;
