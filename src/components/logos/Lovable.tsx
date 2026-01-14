import React from 'react';

export function LovableLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      style={{ flex: 'none', lineHeight: 1 }}
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lovable</title>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-1 22.49999 -30.45394 -1.3535 14 3)"
          gradientUnits="userSpaceOnUse"
          id="lovable-gradient"
          r="1"
        >
          <stop offset=".25" stopColor="#FE7B02" />
          <stop offset=".433" stopColor="#FE4230" />
          <stop offset=".548" stopColor="#FE529A" />
          <stop offset=".654" stopColor="#DD67EE" />
          <stop offset=".95" stopColor="#4B73FF" />
        </radialGradient>
      </defs>
      <path
        clipRule="evenodd"
        d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z"
        fill="url(#lovable-gradient)"
        fillRule="evenodd"
      />
    </svg>
  );
}


