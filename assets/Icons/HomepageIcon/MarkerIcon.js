import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function MarkerIcon({ width, height }) {
  const MarkerIcon = `<svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>4792D38A-A6EC-4836-A528-F77FA8189751</title>
    <defs>
        <filter id="filter-1">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.815686 0 0 0 0 0.419608 0 0 0 1.000000 0"></feColorMatrix>
        </filter>
    </defs>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icons8-marker" transform="translate(-23.000000, -301.000000)" filter="url(#filter-1)">
            <g transform="translate(23.000000, 301.000000)">
                <path d="M4.5,0 C2.01471429,0 0,2.09562019 0,4.68070879 C0,7.33266466 2.83114286,11.2470746 4.00242857,12.7522568 C4.25957143,13.0825811 4.74042857,13.0825811 4.99757143,12.7522568 C6.16885714,11.2470746 9,7.33266466 9,4.68070879 C9,2.09562019 6.98528571,0 4.5,0 Z M4.5,6.3523905 C3.61221429,6.3523905 2.89285714,5.60414577 2.89285714,4.68070879 C2.89285714,3.75727182 3.61221429,3.00902708 4.5,3.00902708 C5.38778571,3.00902708 6.10714286,3.75727182 6.10714286,4.68070879 C6.10714286,5.60414577 5.38778571,6.3523905 4.5,6.3523905 Z" id="Shape" fill="#FC3B1B" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>
`;

  const MarkerIconSvg = () => (
    <SvgXml
      xml={MarkerIcon}
      width={(width = normalize(22))}
      height={(height = normalize(22))}
    />
  );

  return <MarkerIconSvg />;
}
