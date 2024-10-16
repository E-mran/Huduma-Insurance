import React from "react";

interface AlertProp {
  title?: string;
  message: string;
  className?: string;
}

export const SuccessAlert = ({ title, message, className }: AlertProp) => {
  if (title == undefined) title = "Success";
  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 ${
        className && className
      }`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{title}</span> {message}
      </div>
    </div>
  );
};

export const InfoAlert = ({ title, message, className }: AlertProp) => {
  if (title == undefined) title = "Information";
  return (
    <div
      className={`flex items-center p-4 text-sm text-gray-800 border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ${
        className && className
      }`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{title}</span> {message}
      </div>
    </div>
  );
};

export const ErrorAlert = ({ title, message, className }: AlertProp) => {
  if (title == undefined) title = "Error";
  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 ${
        className && className
      }`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{title}</span> {message}
      </div>
    </div>
  );
};

export const WarningAlert = ({ title, message, className }: AlertProp) => {
  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800 ${
        className && className
      }`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{title}</span> {message}
      </div>
    </div>
  );
};

export const RequirementAlert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex mb-4 text-sm text-red-800 bg-transparent dark:text-red-400" role="alert">
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Danger</span>
      <div>
        <span className="font-medium">Ensure that these requirements are met:</span>
        <ul className="mt-1.5 list-disc">
          {children}
          {/* <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li> */}
        </ul>
      </div>
    </div>
  );
};
