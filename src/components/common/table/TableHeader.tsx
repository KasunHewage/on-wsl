import React from "react";
import Button from "../button/Button";
import TextInput from "../input/TextInput";
import { FilterLines, User01 } from "@untitled-ui/icons-react";

const TableHeader = () => {
  return (
    <div className=" pb-7 flex items-center justify-between">
      <div>
        <p className=" text-sm text-gray-500 dark:text-gray-dark-500 font-medium">
          Showing 16 results
        </p>
      </div>
      <div className=" flex items-center gap-2">
        {/* <span className=" bg-gray-50 dark:bg-gray-dark-50 text-gray-300 dark:text-gray-dark-300 rounded-full w-56 py-2 px-4">
          Search
        </span> */}
        <TextInput placeholder="Search here..." rounded="rounded-full">
          <User01 className=" size-4" />
        </TextInput>
        <Button variant="grey-filled">
          <FilterLines className=" size-4" />
          <p>Filters</p>
        </Button>
        <Button>
          <p>Generate</p>
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;
