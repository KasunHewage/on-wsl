import { ThreadStatusEnums } from "../enums/threads";

interface ThreadCommonResType {
  statusCode: string;
  statusDescription: string;
}

//  threads by branch id and status =============================================
export interface SingleTrdsByStatusBIdType {
  threadId: number;
  customerId: number | null;
  messageSubjectCategory: string;
  messageSubjectSubCategory: string;
  channelName: string;
  createdUser: string;
  createdDate: string;
  attendedUser: string;
  attendedDate: string | null;
  messageStatus: ThreadStatusEnums | string;
  referenceNumber: string;
}

export interface GetTrdsByStatusBIdReqType {
  page: number;
  limit: number;
  branchId: number;
  status: string;
}

export interface GetTrdsByStatusBIdResType extends ThreadCommonResType {
  pageNo: number;
  pageLimit: number;
  totalRecords: number;
  payload: SingleTrdsByStatusBIdType[];
}

// thread counts by user and branch ========================================
export interface TrdCountsType {
  open: number;
  inProgress: number;
  completed: number;
  declined: number;
}

export interface GetTrdCountByUserBIdResType extends ThreadCommonResType {
  payload: TrdCountsType;
}

// update thread status ================================================
export interface UpdateThreadStatusReqType {
  threadId: number;
  status: ThreadStatusEnums;
  remark: string;
}

export interface UpdateThreadStatusResType extends ThreadCommonResType {}

// get message thread by id ============================================
export interface GetThreadByIdResType extends ThreadCommonResType {
  payload: ThreadByIdPayloadType;
}

export interface ThreadByIdPayloadType {
  id: number;
  referenceNumber: string;
  customerId: number;
  branchId: number;
  messageSubjectCategoryId: number;
  messageSubjectSubCategoryId: number;
  messages: [];
  channelName: string;
  createdUser: string;
  createdDate: string;
  attendedUser: string | null;
  attendedDate: string | null;
  messageStatus: ThreadStatusEnums;
  remark: string;
  fundTransferRequest: ThreadFundTranReqType | null;
  balanceConfirmationRequest: ThreadBalanceConfirmationReqType | null;
}

export interface ThreadFundTranReqType {
  id: number;
  messageThreadId: number;
  fromAccount: string;
  beneficiaryType: string;
  beneficiaryBankId: string;
  beneficiaryAccount: string;
  amount: number;
  currency: string;
  remark: string;
  createdDate: string;
  createdUser: string;
}

export interface ThreadBalanceConfirmationReqType {
  id: number;
  messageThreadId: number;
  accountNo: string;
  purpose: string;
  customPurpose: string;
  periodType: string;
  fromDate: string;
  toDate: string;
  asAtDate: string;
  addressTo: string;
  createdDate: string;
  createdUser: string;
}
