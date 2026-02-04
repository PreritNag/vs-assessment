import { forwardRef } from "react";
import "./Loader.css";
const Loader = forwardRef(({ isLoading, hasMore }, ref) => {
  if (!hasMore && !isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="end-message">You have reached the end</div>
      </div>
    );
  }
  return (
    <div ref={ref} className="loader-wrapper">
      {isLoading && (
        <div className="loading-text">
          <div className="loading-spinner"></div>
          Loading more products
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
});
Loader.displayName = "Loader";
export default Loader;
