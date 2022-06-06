import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const TableData = [
  {
    id: "0",
    name: "Programming Projects",
    subRows: [
      { name: "Portfolio", linkType: "external", link: "https://www.jschoonbrood.dev/"},
      { name: "Pollution Prediction", linkType: "external", link: "https://github.com/JSchoonbrood/Predicting-Pollution"},
      { name: "Engine Logger", linkType: "external", link: "https://github.com/JSchoonbrood/Engine-Logger"},
      { name: "Bike Rental Prediction", linkType: "external", link: "https://github.com/JSchoonbrood/Bike-Rental-Prediction"},
      { name: "Folder Security", linkType: "external", link: ""},
      { name: "Store Management", linkType: "external", link: ""},
      { name: "Transport Data", linkType: "external", link: "https://github.com/JSchoonbrood/Transport-Data"},
      { name: "Game Machine", linkType: "external", link: "https://github.com/JSchoonbrood/Game-Machine"},
    ],
  },
  {
    id: "1",
    name: "MaxxECU",
    subRows: [
      { name: "Immobiliser Setup", linkType: "internal" },
      { name: "Clutch Slip Logging", linkType: "internal" },
    ],
  },
  {
    id: "2",
    name: "Calculators",
    subRows: [
      { name: "Wheel Diamater Calculator", linkType: "internal" },
      { name: "Gear Ratio Calculator", linkType: "internal" },
      { name: "Bosch ME7 KRKTE Calculator", linkType: "internal" },
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
    Cell: ({ row }) => {
      // Code to automatically link collapsible rows (depth > 0)
      const data = row.original;
      if (row.depth === 0) {
        return <span>{data.name}</span>;
      } else if (data.linkType === "internal") {
        const link_address = data.name.replace(/\s/g, "-").toLowerCase(); // Replaces whitespace in link address with hyphens
        return (
          <NavLink to={"/archive/" + link_address} className="table__body-link">
            {data.name}
          </NavLink>
        );
      } else {
        return <a href={data.link} className="table__body-link">{data.name}</a>;
      }
    },
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
