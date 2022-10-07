import pdf from "../../../resources/PollutionReport.pdf";
import { pollution_prediction, engine_logger, asdtuningusa, jschoonbrood } from "../../../images/index";
import { VscGithubAlt, VscFilePdf, VscLinkExternal } from "react-icons/vsc";

const projects = [
  {
    title: "ASDTuningUSA",
    image: <img src={asdtuningusa} className="image" alt="placeholder"></img>,
    description:
      "A web app built in Typescript React and hosted on wordpress (headless cms).",
    live: (
      <a
        href="https://www.asdtuningusa.com"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscLinkExternal />
      </a>
    ),
    tools: [
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        Typescript
      </a>,
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        React
      </a>,
      <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
        Styled-Components
      </a>,
      <a href="https://wordpress.com/" target="_blank" rel="noreferrer">
        Wordpress
      </a>,
    ],
    featured: true,
    status: false,
  },
  {
    title: "JSchoonbrood.Dev",
    image: <img src={jschoonbrood} className="image" alt="placeholder"></img>,
    description:
      "The current site you're on.",
    live: (
      <a
        href="https://www.jschoonbrood.dev"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscLinkExternal />
      </a>
    ),
    tools: [
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        Typescript
      </a>,
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        React
      </a>,
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
      SASS
    </a>,
    ],
    featured: true,
    status: false,
  },
  {
    title: "Engine Logger",
    image: <img src={engine_logger} className="image" alt="placeholder"></img>,
    description:
      "A desktop application for noting engine building specifications, measurements and data using a local relational database.",
    code: (
      <a
        href="https://github.com/JSchoonbrood/Engine-Logger"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubAlt />
      </a>
    ),
    live: (
      <a href="/" className="link" target="_blank" rel="noreferrer">
        <VscLinkExternal />
      </a>
    ),
    tools: [
      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        Python
      </a>,
      <a
        href="https://www.sqlite.org/index.html"
        target="_blank"
        rel="noreferrer"
      >
        Sqlite3
      </a>,
      <a href="https://www.qt.io/" target="_blank" rel="noreferrer">
        PySide2 (Qt)
      </a>,
    ],
    featured: true,
    status: false,
  },
  {
    title: "Pollution Prediction",
    image: (
      <img src={pollution_prediction} className="image" alt="placeholder"></img>
    ),
    description:
      "A pollution-based routing method aimed at tackling pollution exposure using a neural network based on traffic data. Initial results showed upto a 41.7% reduction in exposure without any significant reduction in route quality.",
    code: (
      <a
        href="https://github.com/JSchoonbrood/Predicting-Pollution"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubAlt />
      </a>
    ),
    live: (
      <a href={pdf} target="_blank" rel="noreferrer" className="link">
        <VscFilePdf />
      </a>
    ),
    tools: [
      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        Python
      </a>,
      <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">
        Tensorflow
      </a>,
      <a href="https://www.eclipse.org/sumo/" target="_blank" rel="noreferrer">
        Sumo
      </a>,
    ],
    featured: true,
    status: true,
  },
  {
    title: "Bike Rental Prediction",
    image: undefined,
    description:
      "A RMSE Model that predicts the total number of bikes rented per hour given attributes such as weather and previous rental data.",
    code: (
      <a
        href="https://github.com/JSchoonbrood"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubAlt />
      </a>
    ),
    live: (
      <a href="/" className="link" target="_blank" rel="noreferrer">
        <VscLinkExternal />
      </a>
    ),
    tools: ["Python", "Tensorflow / Keras"],
    featured: false,
    status: true,
  },
  {
    title: "Folder Security",
    image: undefined,
    description:
      "A simple GUI application able to apply windows security measures on specific folders with relative ease that I first created during my A Levels.",
    code: (
      <a
        href="https://github.com/JSchoonbrood"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubAlt />
      </a>
    ),
    live: (
      <a href="/" className="link" target="_blank" rel="noreferrer">
        <VscLinkExternal />
      </a>
    ),
    tools: ["Python", "PyQt4 (Qt)", "Win32 API", "Bcrypt"],
    featured: false,
    status: true,
  },
  {
    title: "Store Management",
    image: undefined,
    description:
      "A full POS system created for my A Level Computer Science project, complete with simple stock predictions, stock tracking, tills & more. Lacking receipt printing and payment implementation due to project restraints.",
    code: (
      <a
        href="https://github.com/JSchoonbrood"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubAlt />
      </a>
    ),
    live: (
      <a href="/" className="link" target="_blank" rel="noreferrer">
        <VscLinkExternal />
      </a>
    ),
    tools: ["Python", "PyQt4 (Qt)", "BCrypt", "Matplotlib"],
    featured: false,
    status: true,
  },
];

export default projects;
