"use server";

import { v4 as uuidv4 } from "uuid";
import indexServiceAction from "../indexAction.service";
import {
  GetTrdCountByUserBIdResType,
  GetTrdsByStatusBIdReqType,
  GetTrdsByStatusBIdResType,
  UpdateThreadStatusReqType,
} from "./types/thread";

export const threadsByStatusBranchIdAction = async ({
  branchId,
  limit,
  page,
  status,
}: GetTrdsByStatusBIdReqType) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response: GetTrdsByStatusBIdResType = await indexServiceAction({
      baseUrl: process.env.SVR_MESSAGE_API_PATH,
      endpoint: `messageThread/${branchId}/${status}?pageNo=${page}&pageLimit=${limit}`,
      method: "GET",
      headers: {
        "X-Request-ID": uuidv4(),
        Channel: process.env.APP_CHANNEL || "SVR APP",
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getThreadCountByUserBIdAction = async ({
  branchId,
  userName,
}: {
  branchId: number;
  userName: string;
}) => {
  try {
    const response: GetTrdCountByUserBIdResType = await indexServiceAction({
      baseUrl: process.env.SVR_MESSAGE_API_PATH,
      endpoint: `messageThread/${branchId}/count?username=${userName}`,
      method: "GET",
      headers: {
        "X-Request-ID": uuidv4(),
        Channel: process.env.APP_CHANNEL || "SVR APP",
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateThreadStatus = async ({
  threadId,
  status,
  remark,
}: UpdateThreadStatusReqType) => {
  try {
    const response: GetTrdCountByUserBIdResType = await indexServiceAction({
      baseUrl: process.env.SVR_MESSAGE_API_PATH,
      endpoint: `messageThread/update/${threadId}?status=${status}&remark=${remark}`,
      method: "POST",
      headers: {
        "X-Request-ID": uuidv4(),
        Channel: process.env.APP_CHANNEL || "SVR APP",
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getMessageThreadById = async ({
  threadId,
}: {
  threadId: number;
}) => {
  try {
    const response = await indexServiceAction({
      baseUrl: process.env.SVR_MESSAGE_API_PATH,
      endpoint: `messageThread/${threadId}`,
      method: "GET",
      headers: {
        "X-Request-ID": uuidv4(),
        Channel: process.env.APP_CHANNEL || "SVR APP",
      },
    });

    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};
