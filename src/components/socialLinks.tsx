import React from "react";

const twitterIcon = (
  <svg
    className="h-6 w-6 text-black dark:text-white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const instagramIcon = (
  <svg
    className="h-6 w-6 text-black dark:text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const facebookIcon = (
  <svg
    className="h-6 w-6 text-black dark:text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

interface SocialLinksProps {
  className?: string;
}
const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={`flex gap-4 ${className ? className : ""}`}>
      <a href="https://www.twitter.com/Identity254_Ke" target="_blank">
        {twitterIcon}
      </a>
      <a href="https://www.instagram.com/Identity254kenya" target="_blank">
        {instagramIcon}
      </a>
      <a href="https://www.facebook.com/Identity254Ltd" target="_blank">
        {facebookIcon}
      </a>
    </div>
  );
};

export default SocialLinks;
