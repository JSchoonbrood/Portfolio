import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import "./left.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__elements">
        <ul>
          <li>
            <a
              href="https://github.com/JSchoonbrood"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithubAlt className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/JSchoonbrood/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:schoonbrood.jake@gmail.com?subject=Hello!" // {navigator.clipboard.writeText(textToCopy)}}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="icon" />
            </a>
          </li>
        </ul>
        <div className="sidebar-vl"></div>
      </div>
    </div>
  );
};

export default Sidebar;
