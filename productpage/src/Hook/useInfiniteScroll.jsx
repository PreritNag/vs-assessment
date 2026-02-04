import { useEffect, useCallback } from "react";
const useInfiniteScroll = (loaderRef, fetchCallback, hasMore, isLoading) => {
  const stableFetchCallback = useCallback(fetchCallback, [fetchCallback]);
  useEffect(() => {
    if (!loaderRef?.current || isLoading || !hasMore) {
      return;
    }
    const intersectionObserver = new IntersectionObserver(
      (observedEntries) => {
        const [targetEntry] = observedEntries;
        if (targetEntry && targetEntry.isIntersecting) {
          console.log("Loader in view, fetching more...");
          stableFetchCallback();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      },
    );
    const currentLoader = loaderRef.current;
    intersectionObserver.observe(currentLoader);
    return () => {
      if (currentLoader) {
        intersectionObserver.unobserve(currentLoader);
      }
      intersectionObserver.disconnect();
    };
  }, [loaderRef, stableFetchCallback, hasMore, isLoading]);
  return null;
};

export default useInfiniteScroll;
