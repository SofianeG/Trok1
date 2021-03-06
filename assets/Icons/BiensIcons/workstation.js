import React from "react";
import { SvgXml } from "react-native-svg";

export default function Workstation() {

    const Workstation =`<svg width="42px" height="30px" viewBox="0 0 42 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>D5B2CC72-9C28-44B4-8C0A-0D4042CC5A34</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-1164.000000, -594.000000)">
            <g id="icons8-workstation" transform="translate(1165.000000, 595.000000)">
                <path d="M39.3958333,0 L11.6041667,0 C11.2706667,0 11,0.266893617 11,0.595744681 L11,21.4468085 C11,21.7756596 11.2706667,22.0425532 11.6041667,22.0425532 L39.3958333,22.0425532 C39.7293333,22.0425532 40,21.7756596 40,21.4468085 L40,0.595744681 C40,0.266893617 39.7293333,0 39.3958333,0 Z M22.4791667,22.0425532 L28.5208333,22.0425532 L28.5208333,25.6170213 L22.4791667,25.6170213 L22.4791667,22.0425532 Z M30.9375,25.6170213 L20.0625,25.6170213 C19.0613958,25.6170213 18.25,26.4171064 18.25,27.4042553 L18.25,28 L32.75,28 L32.75,27.4042553 C32.75,26.4171064 31.9386042,25.6170213 30.9375,25.6170213 Z" id="Shape" stroke="#FFFFFF"></path>
                <path d="M5.2,14 C4.5372583,14 4,14.5596441 4,15.25 C4,15.9403559 4.5372583,16.5 5.2,16.5 C5.8627417,16.5 6.4,15.9403559 6.4,15.25 C6.4,14.5596441 5.8627417,14 5.2,14 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                <path d="M13,23.8 L13,26.8 C13,27.463 12.41825,28 11.7,28 L1.3,28 C0.58175,28 0,27.463 0,26.8 L0,2.2 C0,1.537 0.58175,1 1.3,1 L9.75,1 M8.75,6.4 L2.25,6.4 M8.75,8.8 L2.25,8.8 M8.75,11.2 L2.25,11.2" id="Shape" stroke="#FFFFFF"></path>
                <polygon id="Path" stroke="#FFFFFF" points="2 25 10 25 10 28 2 28"></polygon>
            </g>
        </g>
    </g>
</svg>`;

    const WorkstationSvg = () => <SvgXml xml={Workstation} width="60%" height="60%"  />;

    return <WorkstationSvg />;
}
