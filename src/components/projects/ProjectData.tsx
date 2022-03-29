import pdf from "../../resources/PollutionReport.pdf";
import { placeholder, pollution_prediction} from "../../images/index";


const projects = [
  {
    title: "ASD Tuning",
    image: <img src={placeholder} className="image" alt="placeholder"></img>,
    description:
      "A web app for a US based business focused on extracting the most amount of performance from a vehicle through the sale of aftermarket parts and services such as engine management tuning.",
    code: "/",
    live: "/",
    tools: [
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        target="_blank"
      >
        HTML5
      </a>,
      <a href="https://www.typescriptlang.org/" target="_blank">
        TypeScript
      </a>,
      <a href="https://reactjs.org/" target="_blank">
        React
      </a>,
      <a href="https://sass-lang.com/" target="_blank">
        SASS
      </a>,
    ],
    featured: true,
  },
  {
    title: "Engine Logger",
    image: <img src={placeholder} className="image" alt="placeholder"></img>,
    description:
      "A desktop application that provides a user interface to track current and previous jobs for engine builders using a relational database. Having spent time in the industry myself, available information is often conflicting and misinformed. This applcation aims to guide the user through each measurement that should be taken during engine builds and allows the user to be transparent with their customer base.",
    code: "/",
    live: "/",
    tools: [
      <a href="https://www.python.org/" target="_blank">
        Python
      </a>,
      <a href="https://www.sqlite.org/index.html" target="_blank">
        Sqlite3
      </a>,
      <a href="https://www.qt.io/" target="_blank">
        PySide2 (Qt)
      </a>,
    ],
    featured: true,
  },
  {
    title: "Pollution Prediction",
    image: <img src={pollution_prediction} className="image" alt="placeholder"></img>,
    description:
      "Created as part of my third year project @ The University of York. The aim of the overall project was to reduce overall pollution exposure for all methods of transport situated on roads. The project used machine learning to determine pollution levels for roads based on attributes that could be extracted from open-source vehicle routing apps. Artifical data extracted from a live simulation was used as a proof of concept to train and test the machine learning model. The results were promising and showed upto 50% reduction in pollution exposure over existing vehicle routing methods within a 5minute car journey without any significant sacrifice of route quality (majority of the time, route quality was equal or improved",
    code: "/",
    live: <a href={pdf} target="_blank">Report</a>,
    tools: [
      <a href="https://www.python.org/" target="_blank">
        Python
      </a>,
      <a href="https://www.tensorflow.org/" target="_blank">
        Tensorflow
      </a>,
      <a href="https://www.eclipse.org/sumo/" target="_blank">
        Sumo
      </a>,
    ],
    featured: true,
  },
  {
    title: "Bike Rental Prediction",
    image: undefined,
    description:
      "A RMSE Model that predicts the total number of bikes rented per hour given attributes such as weather and previous rental data.",
    code: "/",
    live: "/",
    tools: ["Python", "Tensorflow / Keras"],
    featured: false,
  },
  {
    title: "Folder Security",
    image: undefined,
    description:
      "A simple GUI application able to apply windows security measures on specific folders with relative ease that I first created during my A Levels.",
    code: "/",
    live: "/",
    tools: ["Python", "PyQt4 (Qt)", "Win32 API", "Bcrypt"],
    featured: false,
  },
  {
    title: "Store Management",
    image: undefined,
    description:
      "A full POS system created for my A Level Computer Science project, complete with simple stock predictions, stock tracking, tills & more. Lacking receipt printing and payment implementation due to project restraints.",
    code: "/",
    live: "/",
    tools: ["Python", "PyQt4 (Qt)", "BCrypt", "Matplotlib"],
    featured: false,
  },
];

export default projects;
