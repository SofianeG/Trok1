import React from "react";
import { SvgXml } from "react-native-svg";

export default function FacebookIcon() {

    const FacebookIcon =`<svg width="11px" height="20px" viewBox="0 0 11 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>C82A0FB3-C2DA-49C4-814F-E4D73FD1CBB0</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1-Log-in" transform="translate(-103.000000, -534.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="icons8-facebook_f" transform="translate(103.000000, 534.000000)">
                <path d="M10.525,7 L7,7 L7,5 C7,3.968 7.084,3.318 8.563,3.318 L10.431,3.318 L10.431,0.138 C9.522,0.044 8.608,-0.002 7.693,-6.25e-05 C4.98,-6.25e-05 3,1.657 3,4.699 L3,7 L0,7 L0,11 L3,10.999 L3,20 L7,20 L7,10.997 L10.066,10.996 L10.525,7 Z" id="Path"></path>
            </g>
        </g>
    </g>
</svg>`;

    const FacebookIconSvg = () => <SvgXml xml={FacebookIcon} width="11px" height="20px"  />;

    return <FacebookIconSvg />;
}
