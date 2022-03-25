import placeholder from "./../../images/placeholder.png";

const projects = [
  {
    title: "ASD Tuning",
    image: placeholder,
    description:
      "A web app for a US based business focused on extracting the most amount of performance from a vehicle through the sale of aftermarket parts and services such as engine management tuning.",
    code: "/",
    live: "/",
    tools: ["HTML5", "SASS", "TS", "React"],
    featured: true,
  },
  {
    title: "Engine Logger",
    image: placeholder,
    description:
      "A desktop application that provides a user interface to track current and previous jobs for engine builders using a relational database. Having spent time in the industry myself, available information is often conflicting and misinformed. This applcation aims to guide the user through each measurement that should be taken during engine builds and allows the user to be transparent with their customer base.",
    code: "/",
    live: "/",
    tools: ["Python", "Sqlite3", "Pyside2 (Qt)"],
    featured: true,
  },
  {
    title: "Pollution Prediction",
    image: placeholder,
    description:
      "Created as part of my third year project @ The University of York. The aim of the overall project was to reduce overall pollution exposure for all methods of transport situated on roads. The project used machine learning to determine pollution levels for roads based on attributes that could be extracted from open-source vehicle routing apps. Artifical data extracted from a live simulation was used as a proof of concept to train and test the machine learning model. The results were promising and showed upto 50% reduction in pollution exposure over existing vehicle routing methods within a 5minute car journey without any significant sacrifice of route quality (majority of the time, route quality was equal or improved",
    code: "/",
    live: "/",
    tools: ["Python", "Tensorflow", "SUMO"],
    featured: true,
  },
];

export default projects;
