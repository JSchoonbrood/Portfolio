import { BiRightArrow, BiDownArrow } from "react-icons/bi";
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
      {
        name: (
          <NavLink to="immosetup" className="link">
            Immobiliser Setup
          </NavLink>
        ),
      },
      { name: "Clutch Slip Logging" },
    ],
  },
  {
    id: "2",
    name: "Calculators",
    subRows: [
      { name: "Wheel Diamater Calculator" },
      { name: "Gear Ratio Calculator" },
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
  },
  {
    id: "expander",
    // @ts-ignore
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}
      </span>
    ),
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
