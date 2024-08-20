import { XClose } from "@untitled-ui/icons-react";
import React, { useState } from "react";
import Badge from "../badge/Badge";

const ChipInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValList, setInputValList] = useState<string[]>([]);
  return (
    <div className=" flex flex-row items-center gap-1 rounded-full p-2 border-[2px] border-gray-100">
      {inputValList.map((el: string, i: number) => (
        <Badge
          key={i}
          badgeType="outlined"
          badgeSubType="rounded"
          badgeColor="warning"
        >
          {el}
          <XClose
            className="size-3"
            onClick={() => {
              let afterDel = [...inputValList];
              afterDel = inputValList.filter((item: string) => item != el);
              setInputValList(afterDel);
            }}
          />
        </Badge>
      ))}
      <input
        className="outline-none focus:outline-none bg-transparent"
        type="text"
        placeholder="Text..."
        id="chipinput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setInputValList([...inputValList, inputValue]);
            setInputValue("");
          }
        }}
      />
    </div>
  );
};

export default ChipInput;
