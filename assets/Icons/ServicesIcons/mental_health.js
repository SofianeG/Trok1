import React from "react";
import { SvgXml } from "react-native-svg";

export default function mental_health() {

    const mental_health =`<svg width="39px" height="42px" viewBox="0 0 39 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>96B37DF1-789D-45F1-B1B1-C95A3DF15F23</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-727.000000, -522.000000)" fill-rule="nonzero" stroke="#FFFFFF">
            <g id="icons8-mental_health" transform="translate(728.000000, 523.000000)">
                <path d="M12.993,40 L12.993,35.369 L10.377,35.902 C7.512,36.488 4.778,34.441 4.536,31.527 L3.992,25.007 L1.096,23.8 C0.094,23.382 -0.304,22.173 0.254,21.241 L3.992,15.01 C4.62,7.455 8.91,0 20.014,0 C31.444,0 37,8.441 37,17.008 C37,20.658 35.652,23.875 33.657,26.623 C31.863,29.09 30.995,32.11 30.995,35.161 L30.995,40 L12.993,40 Z" id="Path"></path>
                <path d="M20,6 C14.4771525,6 10,10.4771525 10,16 C10,21.5228475 14.4771525,26 20,26 C25.5228475,26 30,21.5228475 30,16 C30,10.4771525 25.5228475,6 20,6 Z" id="Path"></path>
                <polygon id="Path" points="18 10 22 10 22 22 18 22"></polygon>
                <polygon id="Path" points="14 14 26 14 26 18 14 18"></polygon>
            </g>
        </g>
    </g>
</svg>
`;

    const mental_healthSvg = () => <SvgXml xml={mental_health} width="60%" height="60%"  />;

    return <mental_healthSvg />;
}

