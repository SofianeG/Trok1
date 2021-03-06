import React from "react";
import { SvgXml } from "react-native-svg";

export default function Jump() {

    const Jump =`<svg width="36px" height="46px" viewBox="0 0 36 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>EB7935C7-7AB5-4F68-A723-6E83759BBF2E</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-1167.000000, -675.000000)" stroke="#FFFFFF">
            <g id="icons8-jump" transform="translate(1168.000000, 676.000000)">
                <path d="M17,0 C14.790861,0 13,1.790861 13,4 C13,6.209139 14.790861,8 17,8 C19.209139,8 21,6.209139 21,4 C21,1.790861 19.209139,0 17,0 Z" id="Path"></path>
                <path d="M33.837,8.21 C33.4,7.195 32.224,6.726 31.21,7.163 L20.961,11 L13.039,11 L2.79,7.163 C1.776,6.727 0.6,7.196 0.163,8.21 C-0.274,9.224 0.196,10.401 1.21,10.837 L13,15.337 L13,21.713 L3.681,31.032 C2.773,31.94 2.773,33.411 3.681,34.319 C4.589,35.227 6.06,35.227 6.968,34.319 L17,24.287 L27.033,34.32 C27.941,35.228 29.412,35.228 30.32,34.32 C31.228,33.412 31.228,31.941 30.32,31.033 L21,21.713 L21,15.337 L32.79,10.837 C33.804,10.401 34.273,9.225 33.837,8.21 Z" id="Path"></path>
                <path d="M3,44 C3,44 9.417,41 17,41 C24.583,41 31,44 31,44 M11,37.777 C11,37.777 13.75,37 17,37 C20.25,37 23,37.777 23,37.777" id="Shape" stroke-linecap="round"></path>
            </g>
        </g>
    </g>
</svg>`;

    const JumpSvg = () => <SvgXml xml={Jump} width="60%" height="60%"  />;

    return <JumpSvg />;
}
