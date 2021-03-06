import React from "react";
import { SvgXml } from "react-native-svg";

export default function food() {

    const food =`<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>7E10FCF7-68FB-476A-A15B-553715296126</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-509.000000, -704.000000)" stroke="#FFFFFF">
            <g id="icons8-food" transform="translate(510.000000, 705.000000)">
                <path d="M40,0 L40,15 C40,17.7616667 37.7616667,20 35,20 L35,40 M35,0 L35,11.6666667 M30,0 L30,11.6666667 M21.6666667,40 C17.4,40 15,38.3333333 15,35 C15,33.26 15,29.5625 15,26.4158333 C20.7058333,25.2575 25,20.2141667 25,14.1666667 C25,13.0108333 25,0 25,0 L0,0 C0,0 0,13.0108333 0,14.1666667 C0,20.2141667 4.29416667,25.2575 10,26.4158333 C10,29.5625 10,33.26 10,35 C10,38.3333333 7.6,40 3.33333333,40" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>
`;

    const foodSvg = () => <SvgXml xml={food} width="60%" height="60%"  />;

    return <foodSvg />;
}

