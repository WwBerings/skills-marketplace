import React from 'react';

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height="1em"
      style={{ flex: 'none', lineHeight: 1 }}
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Vercel</title>
      <path d="M12 0l12 20.785H0L12 0z" />
    </svg>
  );
}


