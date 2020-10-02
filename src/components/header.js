import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
    return (
        <div className="container-fluid bg-dark p-2 d-flex justify-content-around">
            <h1 className="text-light">Youtube-Clone</h1>
            <a href="https://www.github.com/paarth17032000" target="blank">
                <FaGithub className="text-white"/>
            </a>
        </div>
    )
}
