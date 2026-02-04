const API_BASE_URL = "https://dummyjson.com/products";
export const getProducts = async (pageSize = 10, skipCount = 0) => {
  const requestUrl = `${API_BASE_URL}?limit=${pageSize}&skip=${skipCount}`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const apiResponse = await fetch(requestUrl, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });
    clearTimeout(timeoutId);
    if (!apiResponse.ok) {
      throw new Error(`HTTP error! status: ${apiResponse.status}`);
    }
    const responseData = await apiResponse.json();
    if (!responseData.products || !Array.isArray(responseData.products)) {
      throw new Error("Invalid response structure from API");
    }
    return responseData;
  } catch (networkError) {
    console.error("Network request failed:", networkError);
    throw new Error(
      networkError.name === "AbortError"
        ? "Request timed out. Please check your connection."
        : `Failed to fetch products: ${networkError.message}`,
    );
  }
};
export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`);
    if (!response.ok) throw new Error("Product not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
