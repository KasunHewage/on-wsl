"use client";
import React, { useEffect, useState } from "react";
import { TblBodyRowTypes, TblHeadRowTypes } from "./ts/tableTypes";
import TableSkeleton from "./TableSkeleton";
import Button from "../button/Button";
import { ChevronDown, ChevronUp } from "@untitled-ui/icons-react";

type TblPropTypes = {
  head: TblHeadRowTypes[];
  body: any[];
  variant?: "default" | "zebra";
};

const Table: React.FC<TblPropTypes> = ({ head, body, variant = "default" }) => {
  const [tblHeadData] = useState<TblHeadRowTypes[]>([...head]);
  const [tblData, setTblData] = useState<TblBodyRowTypes[]>([]);

  useEffect(() => {
    setTblData([...body]);
  }, [body]);

  const sortingHandler = async (key: any) => {
    tblHeadData.forEach((el, i) => {
      if (el.key === key) {
        if (head[i].order === "desc" || head[i].order === undefined) {
          head[i].order = "asc";
        } else {
          head[i].order = "desc";
        }
      } else {
        head[i].order = undefined;
      }
    });
    let sortedTblData: any = tblData.sort((a: any, b: any) => {
      const sortOrder: any = tblHeadData.filter((obj) => obj.key === key);
      const formatedTblData: any = [];
      tblData.map((item: any, i: number) => {
        let singleObj: any = {};
        Object.keys(item).map((key, i) => {
          singleObj[key] = isNaN(parseInt(item[key]))
            ? item[key]
            : parseInt(item[key]);
        });

        formatedTblData.push(singleObj);
      });

      if (typeof a[key] === "string" && typeof b[key] === "string") {
        if (sortOrder[0].order === "asc") {
          return a[key].localeCompare(b[key]);
        } else {
          return b[key].localeCompare(a[key]);
        }
      }

      if (sortOrder[0].order === "asc") {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });

    setTblData([...sortedTblData]);
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className=" bg-gray-50 dark:bg-gray-dark-50 h-11">
                <tr className=" cursor-pointer text-gray-800 dark:text-solid-base">
                  {head.map((el: TblHeadRowTypes, i: number) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-medium"
                    >
                      <div className=" flex items-center justify-between">
                        <p>{el.value}</p>
                        {el.sortable && (
                          <>
                            {el.order === "desc" || el.order === undefined ? (
                              <ChevronDown
                                className=" size-3"
                                onClick={() => sortingHandler(el.key)}
                              />
                            ) : (
                              <ChevronUp
                                className=" size-3"
                                onClick={() => sortingHandler(el.key)}
                              />
                            )}
                          </>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {tblData.length < 1 ? (
                <tbody className="animate-pulse divide-y divide-gray-200">
                  {new Array(10).fill("").map((el: any, i: number) => (
                    <TableSkeleton key={i} columns={tblHeadData.length} />
                  ))}
                </tbody>
              ) : (
                <tbody className=" divide-y divide-gray-200">
                  {tblData.map((el: TblBodyRowTypes | any, i: number) => (
                    <tr
                      key={i}
                      className={` ${
                        variant === "zebra" &&
                        "odd:bg-solid-base even:bg-gray-100 dark:odd:bg-solid-dark-base dark:even:bg-gray-dark-100"
                      } hover:bg-gray-100 dark:hover:bg-gray-dark-100 cursor-pointer h-16 text-gray-700 dark:text-solid-base`}
                    >
                      {Object.keys(el).map((key: any, i: number) => (
                        <td
                          key={i}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                        >
                          {el[key]}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button variant="secondary-filled">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
