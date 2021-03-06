import React from "react";
import { SvgXml } from "react-native-svg";

export default function Wardrobe() {

    const Wardrobe =`<svg width="39px" height="42px" viewBox="0 0 39 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>6DDF0B0B-022E-4241-9DAF-062112959AD1</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="UI-KIT" transform="translate(-1416.000000, -586.000000)" stroke="#FFFFFF">
            <g id="icons8-wardrobe" transform="translate(1417.000000, 587.000000)">
                <path d="M0,0 L37,0 L37,4.65116279 L0,4.65116279 L0,0 Z M1.85,5.58139535 L1.85,34.4186047 L35.15,34.4186047 L35.15,5.58139535 M18.5,34.4186047 L18.5,5.58139535 M23.125,16.744186 L23.125,22.3255814 M13.875,16.744186 L13.875,22.3255814 M27.75,34.4186047 C29.6,34.4186047 30.525,35.3488372 30.525,37.2093023 C30.525,38.1395349 30.525,40 30.525,40 L35.15,40 L35.15,34.4186047 M9.25,34.4186047 C7.4,34.4186047 6.475,35.3488372 6.475,37.2093023 C6.475,38.1395349 6.475,40 6.475,40 L1.85,40 L1.85,34.4186047" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>`;

    const WardrobeSvg = () => <SvgXml xml={Wardrobe} width="60%" height="60%"  />;

    return <WardrobeSvg />;
}
