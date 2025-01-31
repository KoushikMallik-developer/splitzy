import React from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";

const Table = ({ pageSize = 10, showPagination = true, className = "" }) => {
  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Status",
      accessor: "status",
      // Custom cell renderer for status
      cell: (row) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : row.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Role",
      accessor: "role",
    },
    {
      header: "Last Login",
      accessor: "lastLogin",
    },
  ];

  const data = (count = 20) => {
    const statuses = ["Active", "Pending", "Inactive"];
    const roles = ["User", "Admin", "Editor", "Viewer"];

    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      role: roles[Math.floor(Math.random() * roles.length)],
      lastLogin: new Date(
        Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000,
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    }));
  };
  // Ensure data is an array
  const tableData = Array.isArray(data(1000)) ? data(1000) : [];

  const [currentPage, setCurrentPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(pageSize);

  // Calculate pagination values
  const pageCount = Math.max(1, Math.ceil(tableData.length / itemsPerPage));
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  // Reset to first page if current page is out of bounds
  React.useEffect(() => {
    if (currentPage >= pageCount) {
      setCurrentPage(0);
    }
  }, [tableData.length, itemsPerPage]);

  // Pagination handlers
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  const previousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const firstPage = () => setCurrentPage(0);
  const lastPage = () => setCurrentPage(pageCount - 1);

  if (!Array.isArray(columns) || columns.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">No columns configured</div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3 font-medium text-gray-500">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                      {column.accessor
                        ? row[column.accessor]
                        : column.cell?.(row)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showPagination && tableData.length > 0 && (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
          <div className="flex items-center gap-2">
            <select
              className="block py-2 px-3 border rounded-md text-sm"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(0);
              }}
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-700">
              Page {currentPage + 1} of {pageCount}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={firstPage}
              disabled={currentPage === 0}
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-50"
            >
              <AiOutlineDoubleLeft className="w-4 h-4" />
            </button>
            <button
              onClick={previousPage}
              disabled={currentPage === 0}
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-50"
            >
              <AiOutlineLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === pageCount - 1}
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-50"
            >
              <AiOutlineRight className="w-4 h-4" />
            </button>
            <button
              onClick={lastPage}
              disabled={currentPage === pageCount - 1}
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-50"
            >
              <AiOutlineDoubleRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
