import React from "react";

const sampleChannelImage =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/cd921fcd-53fc-4b1d-be23-0787bc36b756-profile_image-70x70.png";

const sampleChannelImage2 =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/nymn-profile_image-d52821b50793580f-70x70.jpeg";

const sampleChannelImage3 =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-70x70.jpeg";
const Online = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="none"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

const TwitchLogo = () => {
  return (
    <img
      className="h-6 w-6"
      src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"
      alt="twitch logo"
    />
  );
};

const OfflineIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="none"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

const ProfileImage = ({ className = "w-6 h-6 rounded-full" }) => {
  return (
    <img
      className={className}
      src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-70x70.png"
      alt="profile"
    />
  );
};

const BitsIcon = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="none"
      fill="currentColor"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
      />
    </svg>
  );
};

const MusicIcon = () => {
  return (
    <svg
      stroke="none"
      fill="currentColor"
      width="24px"
      height="24px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
    >
      <g>
        <path
          fillRule="evenodd"
          d="M18 4.331a2 2 0 00-2.304-1.977l-9 1.385A2 2 0 005 5.716v7.334A2.5 2.5 0 106.95 16H7V9.692l9-1.385v2.743A2.5 2.5 0 1017.95 14H18V4.33zm-2 0L7 5.716v1.953l9-1.385V4.33z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export {
  sampleChannelImage,
  sampleChannelImage2,
  TwitchLogo,
  sampleChannelImage3,
  Online,
  OfflineIcon,
  ProfileImage,
  BitsIcon,
  MusicIcon
};
