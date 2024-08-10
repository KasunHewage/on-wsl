import { ThreadStatusEnums } from "@/actions/inquiry/enums/threads";
import {
  SingleTrdsByStatusBIdType,
  TrdCountsType,
} from "@/actions/inquiry/types/thread";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  currentView: ThreadStatusEnums;
  currentThread: SingleTrdsByStatusBIdType;
  threadCounts: TrdCountsType;
} = {
  currentView: ThreadStatusEnums.OPEN,
  threadCounts: {
    open: 0,
    inProgress: 0,
    completed: 0,
    declined: 0,
  },
  currentThread: {
    threadId: 0,
    customerId: null,
    messageSubjectCategory: "",
    messageSubjectSubCategory: "",
    channelName: "",
    createdUser: "",
    attendedDate: "",
    attendedUser: "",
    createdDate: "",
    messageStatus: "",
    referenceNumber: "",
  },
};

export const inquirySlice = createSlice({
  name: "inquiry",
  initialState: initialState,
  reducers: {
    setCurrentInquiryAct: (state, action) => {
      return (state = {
        ...state,
        currentView: action.payload,
      });
    },
    setCurrentThreadAct: (state, action) => {
      return (state = {
        ...state,
        currentThread: {
          ...action.payload,
        },
      });
    },
    setThreadCountsAct: (status, action) => {
      return (status = {
        ...status,
        threadCounts: {
          ...action.payload,
        },
      });
    },
  },
  selectors: {
    getInquiry: (inquiry) => inquiry,
  },
});

export const { setCurrentInquiryAct, setCurrentThreadAct, setThreadCountsAct } =
  inquirySlice.actions;
export const { getInquiry } = inquirySlice.selectors;

export default inquirySlice.reducer;
