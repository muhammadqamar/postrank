import React from "react";
type props = {
  color: string;
};
export const FeedBack = ({ color }: props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="20/feedback">
        <path
          id="Vector"
          d="M5.43475 12.0009H6.61682C6.74452 12.0009 6.85933 11.9784 6.96123 11.9335C7.06314 11.8885 7.1553 11.8245 7.23773 11.7414L11.8541 7.12594C11.9652 7.01483 12.0208 6.89677 12.0208 6.77177C12.0208 6.64677 11.9652 6.52872 11.8541 6.41761L10.5625 5.14677C10.4514 5.03566 10.3333 4.98011 10.2083 4.98011C10.0833 4.98011 9.96524 5.03566 9.85413 5.14677L5.23865 9.76317C5.15561 9.8456 5.09507 9.93777 5.05702 10.0397C5.01898 10.1416 4.99996 10.2564 4.99996 10.3841V11.5711C4.99996 11.6989 5.0405 11.8024 5.12157 11.8818C5.20264 11.9612 5.30703 12.0009 5.43475 12.0009ZM9.10413 12.0009H14.25C14.4625 12.0009 14.6406 11.9295 14.7843 11.7866C14.9281 11.6437 15 11.4666 15 11.2553C15 11.0441 14.9281 10.8655 14.7843 10.7197C14.6406 10.5739 14.4625 10.5009 14.25 10.5009H10.6041L9.10413 12.0009ZM4.83057 15.1703L3.30313 16.6978C3.02885 16.972 2.71486 17.0347 2.36115 16.8858C2.00743 16.7369 1.83057 16.4696 1.83057 16.0838V3.56073C1.83057 3.0818 1.99903 2.67387 2.33596 2.33694C2.67289 2.00001 3.08082 1.83154 3.55975 1.83154H16.4402C16.9191 1.83154 17.327 2.00001 17.664 2.33694C18.0009 2.67387 18.1694 3.0818 18.1694 3.56073V13.4411C18.1694 13.9201 18.0009 14.328 17.664 14.6649C17.327 15.0019 16.9191 15.1703 16.4402 15.1703H4.83057Z"
          fill={color || "black"}
        />
      </g>
    </svg>
  );
};