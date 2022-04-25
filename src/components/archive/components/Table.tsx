import React, { useMemo } from "react";
import { useTable, useExpanded } from "react-table";
import TableData, { COLUMNS } from "./TableData";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TableData, []);
  const initialState = { hiddenColumns: ['id'] };

  // @ts-ignore
  const tableInstance = useTable({ columns, data, initialState }, useExpanded);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
  } = tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
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
