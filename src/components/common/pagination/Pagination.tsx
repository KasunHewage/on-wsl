import { ChevronLeft, ChevronRight } from "@untitled-ui/icons-react";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage === 1) {
        endPage = Math.min(totalPages - 1, currentPage + 2);
      }

      if (currentPage === totalPages) {
        startPage = Math.max(2, currentPage - 2);
      }

      if (startPage > 2) {
        pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav className="flex items-center gap-x-7 pl-7 py-5 justify-end">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        type="button"
        className="size-11 flex justify-center items-center bg-brand-50 dark:bg-brand-dark-50 text-brand-600 dark:text-brand-dark-600 py-2 px-3 text-sm rounded-full active:bg-brand-100 dark:active:bg-brand-dark-100 disabled:pointer-events-none"
        aria-current="page"
      >
        <ChevronLeft className=" size-4" />
      </button>
      <div className="flex items-center gap-x-2">
        {pages.map((page, index) => (
          <div
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
          >
            <button
              type="button"
              className={`size-11 flex justify-center items-center dark:bg-gray-dark-50 text-gray-400 dark:text-gray-dark-400 py-2 px-3 text-sm rounded-full disabled:pointer-events-none ${
                page === currentPage
                  ? "bg-brand-600 dark:bg-brand-dark-600 text-solid-base dark:text-solid-base"
                  : "bg-gray-50"
              }`}
              aria-current="page"
            >
              {page}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        type="button"
        className="size-11 flex justify-center items-center bg-brand-50 dark:bg-brand-dark-50 text-brand-600 dark:text-brand-dark-600 py-2 px-3 text-sm rounded-full active:bg-brand-100 dark:active:bg-brand-dark-100 disabled:pointer-events-none"
      >
        <span aria-hidden="true" className="sr-only">
          Next
        </span>
        <ChevronRight className=" size-3" />
      </button>
    </nav>
  );
};

export default Pagination;
