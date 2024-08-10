"use client";
import store, { RootState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const storeRef: any = useRef<RootState>();
  persistStore(store);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Provider store={storeRef.current}>{children}</Provider>
      ) : (
        <></>
      )}
    </>
  );
}
