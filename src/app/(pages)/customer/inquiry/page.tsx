"use client";
import React, { useEffect, useState } from "react";
import { fetchTblData } from "@/actions/actions";
import {
  TblBodyRowTypes,
  TblHeadRowTypes,
} from "@/components/common/table/types/tableTypes";
import TableHeader from "@/components/common/table/TableHeader";
import Table from "@/components/common/table/Table";
import Pagination from "@/components/common/pagination/Pagination";

type TblDataTypes = {
  name: string;
  age: number | string;
  address: string;
};

let tblHeadRow: TblHeadRowTypes[] = [
  {
    key: "name",
    value: "Name",
    width: undefined,
    align: undefined,
    sortable: true,
  },
  {
    key: "age",
    value: "Age",
    width: undefined,
    align: undefined,
    sortable: true,
  },
  {
    key: "address",
    value: "Address",
    width: undefined,
    align: undefined,
    sortable: undefined,
  },
  // TODO : make action
  {
    key: "action",
    value: "Action",
    width: undefined,
    align: undefined,
    sortable: undefined,
  },
];

const Page = () => {
  const [tblBody, setTblBody] = useState<TblBodyRowTypes[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const pageSize = 10;

  useEffect(() => {
    setTimeout(() => fetchDataHandler(currentPage), 3000);
  }, [currentPage]);

  const fetchDataHandler = async (getPage: number) => {

    const {
      data,
      status,
      page,
      total,
      current,
    }: {
      data: TblDataTypes[];
      status: string;
      page: number;
      total: number;
      current: number;
    } = await fetchTblData({
      page: getPage,
      limit: pageSize,
    });

    setTotalPages(Math.ceil(total / pageSize));

    const tableData: any =
      data.length > 0 &&
      data.map((el: TblDataTypes, i: number) => ({
        name: el.name,
        age: el.age,
        address: el.address,
      }));

    setTblBody([...tableData]);
  };

  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <TableHeader />
      <Table head={tblHeadRow} body={tblBody} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Page;
