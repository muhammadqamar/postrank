import React from "react";
type colorProps = {
  color: string;
};
export const CloseIcon = ({ color }: colorProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00001 10.2496L5.453 13.7966C5.28208 13.9676 5.07691 14.0499 4.83751 14.0437C4.59811 14.0374 4.39295 13.9488 4.22203 13.7779C4.0511 13.607 3.96564 13.3987 3.96564 13.153C3.96564 12.9074 4.0511 12.6991 4.22203 12.5282L7.75029 8.9999L4.20328 5.45289C4.03235 5.28196 3.95001 5.07368 3.95626 4.82803C3.96251 4.58238 4.0511 4.37409 4.22203 4.20317C4.39295 4.03224 4.60124 3.94678 4.84689 3.94678C5.09254 3.94678 5.30083 4.03224 5.47175 4.20317L9.00001 7.75018L12.547 4.20317C12.718 4.03224 12.9262 3.94678 13.1719 3.94678C13.4175 3.94678 13.6258 4.03224 13.7968 4.20317C13.9677 4.37409 14.0531 4.58238 14.0531 4.82803C14.0531 5.07368 13.9677 5.28196 13.7968 5.45289L10.2497 8.9999L13.7968 12.5469C13.9677 12.7178 14.0531 12.923 14.0531 13.1624C14.0531 13.4018 13.9677 13.607 13.7968 13.7779C13.6258 13.9488 13.4175 14.0343 13.1719 14.0343C12.9262 14.0343 12.718 13.9488 12.547 13.7779L9.00001 10.2496Z"
        fill={color || "#464646"}
      />
    </svg>
  );
};
