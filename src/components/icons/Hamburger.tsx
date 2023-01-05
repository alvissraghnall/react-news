import React from "react";
import { IconProps } from ".";


const HamburgerIcon = ({ w, h }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/­2000/svg"
        width={w ? w : "50"}
        height={h ? h : "50"}
        color="#fff"
        viewBox="0 0 21 21"
    >
        <g
            fill="#fff"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995"></path>
        </g>
    </svg>
);

export default HamburgerIcon;