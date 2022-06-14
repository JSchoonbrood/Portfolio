import { default as uoy } from "../../../images/uoy.jpg";
import { default as qa } from "../../../images/qa.jpg";

const EducationData = [
  {
    name: "University of York",
    qualification: "Bachelors of Engineering in Computer Science",
    grade: "First Class Honours (76%)",
    years: "2018-2021",
    desc: "",
    notableAchievements: [
      "Artificial Intelligence (96%)",
      "Systems (89%)",
      "Final Year Project (79%)",
      "Workshop Assistant for York AI Society",
    ],
    image: <img src={uoy} alt="University of York Crest"></img>
  },
  {
    name: "Queensbury Academy",
    qualification: "A Levels",
    grade: null,
    years: "2016-2018",
    desc: "ABB - Computer Science, Mathematics, Physics",
    notableAchievements: [
      "Self-taught Computer Science for two years due to shortage of faculty",
      "Travelled between two schools to study Maths & Physics"
    ],
    image: <img src={qa} alt="Queensbury Academy Crest"></img>
  },
];

export default EducationData;
