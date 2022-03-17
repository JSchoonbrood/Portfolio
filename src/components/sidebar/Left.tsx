import React from 'react'
import { VscGithubAlt } from 'react-icons/vsc'
import { FiLinkedin } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import './left.scss'

const left = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__elements">
            <ul>
                <li><a href="#"><VscGithubAlt /></a></li>
                <li><a href="#"><FiLinkedin /></a></li>
                <li><a href="#"><AiOutlineMail /></a></li>
            </ul>
            <div className="sidebar-vl"></div>

        </div>
    </div>
  )
}

export default left