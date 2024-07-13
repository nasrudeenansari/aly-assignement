import React from "react";

export const LightBoxesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="heart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
      />
    </svg>
  );
};

export const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="cart-shopping"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"
      />
    </svg>
  );
};

export const DropDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="chevron-down"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={18}
      {...props}
    >
      <path
        fill="currentColor"
        d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
      />
    </svg>
  );
};

export const ImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="image"
      className="svg-inline--fa fa-image fa-lg "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={18}
      {...props}
    >
      <path
        fill="currentColor"
        d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
      />
    </svg>
  );
};
export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="magnifying-glass"
      className="svg-inline--fa fa-magnifying-glass fa-fw"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={20}
    >
      <path
        fill="currentColor"
        d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"
      />
    </svg>
  );
};
export const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="camera"
      className="svg-inline--fa fa-camera "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={20}
    >
      <path
        fill={props.fill}
        d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
      />
    </svg>
  );
};

export const PrevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-left"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={8}
    >
      <path
        fill={props.fill}
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
      />
    </svg>
  );
};
export const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={8}
    >
      <path
        fill={props.fill}
        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
      />
    </svg>
  );
};
export const ImagesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      className="bi bi-images"
      fill="currentColor"
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
    </svg>
  );
};

export const AddIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={20}
    >
      <g>
        <g id="Icon-Plus" transform="translate(28.000000, 278.000000)">
          <path
            d="M4-222.1c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9s23.9,10.7,23.9,23.9     C27.9-232.8,17.2-222.1,4-222.1L4-222.1z M4-267.3c-11.7,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3     S15.7-267.3,4-267.3L4-267.3z"
            id="Fill-38"
            fill="white"
          />
          <polygon
            id="Fill-39"
            points="-8.7,-247.4 16.7,-247.4 16.7,-244.6 -8.7,-244.6    "
            fill="white"
          />
          <polygon
            id="Fill-40"
            fill="white"
            points="2.6,-258.7 5.4,-258.7 5.4,-233.3 2.6,-233.3    "
          />
        </g>
      </g>
    </svg>
  );
};
export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      className="feather feather-download"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={18}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1={12} x2={12} y1={15} y2={3} />
    </svg>
  );
};
