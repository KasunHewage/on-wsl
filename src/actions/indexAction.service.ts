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
          throw new Error("Invalid data were passes!"!, {
            cause: "SERVER_APP",
          });
        default:
          throw new Error("Service failed!", { cause: "SERVER_APP" });
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    logger.error("Service failed | ");
    if (error instanceof Error) {
      if (error.cause === "SERVER_APP") {
        throw new Error(error.message, { cause: error.cause });
      } else {
        throw new Error("Service unavailable!", { cause: "CLIENT_APP" });
      }
    }
    throw new Error("Service unavailable!", { cause: "CLIENT_APP" });
  }
};

export default indexServiceAction;
