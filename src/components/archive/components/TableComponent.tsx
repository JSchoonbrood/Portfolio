import { tab } from "@testing-library/user-event/dist/tab";
import React, { useMemo } from "react";
import { useTable, useExpanded } from "react-table";
import TableData, { COLUMNS } from "./TableData";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TableData, []);
  const initialState = { hiddenColumns: ["id"] };

  // @ts-ignore
  const tableInstance = useTable({ columns, data, initialState }, useExpanded);

  const {
    getTableProps,
    getTableBodyProps,
    // headerGroups,
    rows,
    prepareRow,
    state: { expanded },
  } = tableInstance;

  // @ts-expect-error
  const handleClick = (row) => {
    console.info(row);
    let state = false;
    console.log(expanded);
    if (expanded[row.index]) {
      state = false;
    } else {
      state = true;
    }
    tableInstance.toggleRowExpanded(row.index, state);
  }

  return (
    <div>
      <table {...getTableProps()} className="table">
        {/* <thead className="table__header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table__header-row">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead> */}
        <tbody {...getTableBodyProps()} className="table__body">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={
                  "table__body-row" + (row.depth === 1 ? " expanded" : "")
                }
                onClick={() => handleClick(row)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
