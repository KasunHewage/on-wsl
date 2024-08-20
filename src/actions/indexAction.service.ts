"use server";

import logger from "@/utils/logger";

interface IndexServicePropTypes {
  baseUrl?: string;
  endpoint: string;
  method: "POST" | "GET" | "DELETE" | "PATCH" | "PUT";
  cache?:
    | "default"
    | "force-cache"
    | "no-cache"
    | "no-store"
    | "only-if-cached"
    | "reload";
  body?: any;
  headers?: any;
  props?: RequestInit;
}

const indexServiceAction = async ({
  baseUrl = "http://localhost:3000/api",
  endpoint,
  method,
  cache,
  body,
  headers,
  props,
}: IndexServicePropTypes) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      cache: cache ? cache : "no-cache",
      method,
      ...(body && { body: JSON.stringify(body) }),
      ...(headers && { headers: { ...headers } }),
      ...props,
    });
    if (!response.ok) {
      switch (response.status) {
        case 500:
          throw new Error("Service failed!", { cause: "SERVER_APP" });
        case 400:
          throw new Error("Invalid data were passes!", {
            cause: "SERVER_APP",
          });
        default:
          throw new Error("Failed to connect the server!", {
            cause: "CLIENT_APP",
          });
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.cause === "SERVER_APP") {
        logger.error(`${error.cause} | ${error.message}`);
        throw new Error(error.message, { cause: error.cause });
      } else {
        logger.error(`${error.cause} | ${error.message}`);
        throw new Error("Service unavailable!", { cause: "CLIENT_APP" });
      }
    }
    logger.error("CLIENT_APP | Failed to connect the server!");
    throw new Error("Failed to connect the server!", { cause: "CLIENT_APP" });
  }
};

export default indexServiceAction;
