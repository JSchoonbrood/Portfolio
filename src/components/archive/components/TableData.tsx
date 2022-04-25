import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { AiOutlineFolder } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const TableData = [
  {
    id: "1",
    name: "MaxxECU",
    type: <AiOutlineFolder />,
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
    type: <AiOutlineFolder />,
    subRows: [
      { name: "Wheel Diamater Calculator" },
      { name: "Gear Ratio Calculator" },
    ],
  },
];

export const COLUMNS = [
  {
    id: "expander",
    // @ts-ignore
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? <BiDownArrow /> : <BiRightArrow />}
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
          {row.isExpanded ? <BiDownArrow /> : <BiRightArrow />}
        </span>
      ) : null,
  },
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "",
    accessor: "name",
  },
  {
    Header: "",
    accessor: "type",
  },
];

export default TableData;
