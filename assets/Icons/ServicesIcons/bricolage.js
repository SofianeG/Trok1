import React from "react";
import { SvgXml } from "react-native-svg";

export default function Do_It_Yourself() {

    const Do_It_Yourself =`<svg width="38px" height="37px" viewBox="0 0 38 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>394F1AE8-0840-4A81-8C2B-54FE4C06B796</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-37.000000, -707.000000)" stroke="#FFFFFF">
            <path d="M39,736.5 L75,736.5 M75,743.5 L39,743.5 M39,729.5 L75,729.5 M44.5,729 L44.5,715 M56,715 L40,715 C38.895,715 38,714.104232 38,712.998284 L38,710.001716 C38,708.895768 38.895,708 40,708 L52.744,708 C52.964,708 53.178,708.072062 53.352,708.206177 L56.608,710.702316 C56.855,710.891478 57,711.185731 57,711.496997 L57,713.999142 C57,714.551616 56.552,715 56,715 Z" id="Shape"></path>
        </g>
    </g>
</svg>`;

    const Do_It_Yourself_Svg = () => <SvgXml xml={Do_It_Yourself} width="60%" height="60%"  />;

    return <Do_It_Yourself_Svg />;
}
