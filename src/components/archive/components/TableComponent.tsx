import React, { useEffect, useMemo } from "react";
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


  useEffect(() => {
    tableInstance.toggleRowExpanded(["0"], true);
  }, [tableInstance])
  
  const handleClick = (row: any) => {
    console.log(typeof row);
    let state;
    if (row.depth === 0) {
      // Stops collapsing row bug when clicking rows with depth
      if (expanded[row.index]) {
        state = false;
      } else {
        state = true;
      }
      tableInstance.toggleRowExpanded(row.index, state);
    }
  };

  return (
    <div>
      <table {...getTableProps()} className="table noselect">
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
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      onClick={() => handleClick(row)}
                    >
                      {cell.render("Cell")}
                    </td>
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
