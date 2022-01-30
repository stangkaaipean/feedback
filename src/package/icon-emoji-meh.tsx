import React from 'react'

export default function IconEmojiMeh({ size = 34, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="#000000"
      viewBox="0 0 256 256"
      {...props}
    >
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
      <line
        x1="88"
        y1="160"
        x2="168"
        y2="160"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <circle cx="92" cy="108" r="12" />
      <circle cx="164" cy="108" r="12" />
    </svg>
  )
}