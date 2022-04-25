import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const TableData = [
  {
    id: "1",
    name: "MaxxECU",
    lastModified: "Today",
    subRows: [
      {name: <NavLink to="immosetup">Immobiliser Setup</NavLink>},
      {name: "Clutch Slip Logging"}
    ],
  },
  {
    id: "2",
    name: "Calculators",
    lastModified: "Today",
    subRows: [
      {name: "Wheel Diamater Calculator"},
      {name: "Gear Ratio Calculator"}
    ],
  },
];

export const COLUMNS = [
  {
    id: "expander",
    // @ts-ignore
    Header: ({getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? <BiDownArrow /> : <BiRightArrow />}
      </span>
    ),
    // @ts-ignore
    Cell: ({row}) =>
    row.canExpand ? (
      <span
        {...row.getToggleRowExpandedProps({
          style: {
            // expanded styles
          },
        })}>
        {row.isExpanded ? <BiDownArrow /> : <BiRightArrow />}
      </span>
    ) : null,
  },
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Last Modified",
    accessor: "lastModified",
  },
];

export default TableData;
