import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const TableData = [
  {
    id: "0",
    name: "Programming Projects",
    subRows: [
      { name: "Portfolio" },
      { name: "Pollution Prediction" },
      { name: "Engine Logger" },
      { name: "Bike Rental Prediction" },
      { name: "Folder Security" },
      { name: "Store Management" },
      { name: "Transport Data" },
      { name: "Game Machine" },
    ],
  },
  {
    id: "1",
    name: "MaxxECU",
    subRows: [
      { name: "Immobiliser Setup" },
      { name: "Clutch Slip Logging" },
    ],
  },
  {
    id: "2",
    name: "Calculators",
    subRows: [
      { name: "Wheel Diamater Calculator" },
      { name: "Gear Ratio Calculator" },
      { name: "Bosch ME7 KRKTE Calculator" },
    ],
  },
];

export const COLUMNS = [
  
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "",
    accessor: "name",
    // @ts-ignore
    Cell: ({row}) => { // Code to automatically link collapsible rows (depth > 0)
      const data = row.original;
      if (row.depth === 0) {
        return (
          <span>
            {data.name}
          </span>
        )
      } else {
        const link_address = data.name.replace(/\s/g, "-").toLowerCase(); // Replaces whitespace in link address with hyphens
        return (
          <NavLink to={"/archive/"+link_address} className="table__body-link">
            {data.name}
          </NavLink>
        )
      }
    }
  },
  {
    id: "expander",
    // Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
    //   <span {...getToggleAllRowsExpandedProps()}>
    //     {isAllRowsExpanded ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}
    //   </span>
    // ),
    // @ts-ignore
    Cell: ({ row }) =>
      row.canExpand ? (
        <span
          {...row.getToggleRowExpandedProps({
            style: {},
          })}
        >
          {row.isExpanded ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}
        </span>
      ) : null,
  },
];

export default TableData;
