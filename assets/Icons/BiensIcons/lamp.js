import React from "react";
import { SvgXml } from "react-native-svg";

export default function Lamp() {

    const Lamp =`<svg width="39px" height="44px" viewBox="0 0 39 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>8DAFC09A-4354-421E-8223-6AFDCDD89EE7</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="UI-KIT" transform="translate(-984.000000, -677.000000)" stroke="#FFFFFF">
            <g id="icons8-lamp" transform="translate(985.000000, 678.000000)">
                <path d="M20.2619048,35.875 C20.2619048,28.8645 23.7857143,28.014 23.7857143,23.11575 C23.7857143,20.223875 20.2619048,19.25 20.2619048,19.25 M16.7380952,19.25 C16.7380952,19.25 13.2142857,20.223875 13.2142857,23.11575 C13.2142857,28.014 16.7380952,28.8645 16.7380952,35.875 M37,19.25 L0,19.25 L7.04761905,0 L29.952381,0 L37,19.25 Z M29.952381,38.5 C29.4660952,38.5 7.53390476,38.5 7.04761905,38.5 C6.56133333,38.5 6.16666667,38.892 6.16666667,39.375 L6.16666667,42 L30.8333333,42 L30.8333333,39.375 C30.8333333,38.892 30.4386667,38.5 29.952381,38.5 Z M26.4285714,38.5 L26.4285714,36.75 C26.4285714,36.267 26.0339048,35.875 25.547619,35.875 C25.0613333,35.875 11.9386667,35.875 11.452381,35.875 C10.9660952,35.875 10.5714286,36.267 10.5714286,36.75 L10.5714286,38.5" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>`;

    const LampSvg = () => <SvgXml xml={Lamp} width="60%" height="60%"  />;

    return <LampSvg />;
}
