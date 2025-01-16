import React from "react";

const Logo = ({ size = 64, primaryColor = "#6b46c1", secondaryColor = "#34d399" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width={size}
            height={size}
            fill="none"
        >
            {/* Outer Globe Circle */}
            <circle
                cx="32"
                cy="32"
                r="30"
                stroke={primaryColor}
                strokeWidth="4"
            />
            {/* Inner Network - Nodes */}
            <circle cx="20" cy="20" r="2" fill={secondaryColor} />
            <circle cx="44" cy="20" r="2" fill={secondaryColor} />
            <circle cx="32" cy="32" r="2" fill={secondaryColor} />
            <circle cx="20" cy="44" r="2" fill={secondaryColor} />
            <circle cx="44" cy="44" r="2" fill={secondaryColor} />

            {/* Connecting Lines */}
            <line x1="20" y1="20" x2="32" y2="32" stroke={secondaryColor} strokeWidth="2" />
            <line x1="32" y1="32" x2="44" y2="20" stroke={secondaryColor} strokeWidth="2" />
            <line x1="20" y1="20" x2="44" y2="44" stroke={secondaryColor} strokeWidth="2" />
            <line x1="20" y1="44" x2="32" y2="32" stroke={secondaryColor} strokeWidth="2" />
            <line x1="44" y1="20" x2="20" y2="44" stroke={secondaryColor} strokeWidth="2" />

            {/* Horizontal Latitude Lines */}
            <ellipse
                cx="32"
                cy="32"
                rx="24"
                ry="10"
                stroke={primaryColor}
                strokeWidth="2"
            />

            {/* Vertical Longitude Lines */}
            <path
                d="M32 8 C24 14, 24 50, 32 56 M32 8 C40 14, 40 50, 32 56"
                stroke={primaryColor}
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
};

export default Logo;
