import React from "react";
import { TableSkeletonPropTypes } from "./types/tableTypes";

const TableSkeleton: React.FC<TableSkeletonPropTypes> = ({ columns }) => {
  return (
    <tr className="hover:bg-gray-200 dark:hover:bg-gray-200 cursor-pointer h-16">
      {new Array(columns).fill("").map((el: any, i: number) => (
        <td key={i} className="px-6 py-4">
          <ul className=" space-y-3">
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-dark-200"></li>
          </ul>
        </td>
      ))}
    </tr>
  );
};

export default TableSkeleton;
