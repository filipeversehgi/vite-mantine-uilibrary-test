import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconGift({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="gift-01" clipPath="url(#clip0_1148_2893)">
                <path
                    id="Icon"
                    d="M7.99992 3.99998V14.6666M7.99992 3.99998H5.64278C5.29547 3.99998 4.96239 3.8595 4.7168 3.60946C4.47122 3.35941 4.33325 3.02027 4.33325 2.66665C4.33325 2.31302 4.47122 1.97389 4.7168 1.72384C4.96239 1.47379 5.29547 1.33331 5.64278 1.33331C7.47611 1.33331 7.99992 3.99998 7.99992 3.99998ZM7.99992 3.99998H10.3571C10.7044 3.99998 11.0375 3.8595 11.283 3.60946C11.5286 3.35941 11.6666 3.02027 11.6666 2.66665C11.6666 2.31302 11.5286 1.97389 11.283 1.72384C11.0375 1.47379 10.7044 1.33331 10.3571 1.33331C8.52373 1.33331 7.99992 3.99998 7.99992 3.99998ZM13.3333 7.33331V12.5333C13.3333 13.2801 13.3333 13.6534 13.1879 13.9386C13.0601 14.1895 12.8561 14.3935 12.6052 14.5213C12.32 14.6666 11.9467 14.6666 11.1999 14.6666L4.79992 14.6666C4.05318 14.6666 3.67981 14.6666 3.3946 14.5213C3.14372 14.3935 2.93974 14.1895 2.81191 13.9386C2.66659 13.6534 2.66659 13.28 2.66659 12.5333V7.33331M1.33325 5.06665L1.33325 6.26665C1.33325 6.64001 1.33325 6.8267 1.40591 6.96931C1.46983 7.09475 1.57182 7.19673 1.69726 7.26065C1.83987 7.33331 2.02655 7.33331 2.39992 7.33331L13.5999 7.33331C13.9733 7.33331 14.16 7.33331 14.3026 7.26065C14.428 7.19674 14.53 7.09475 14.5939 6.96931C14.6666 6.8267 14.6666 6.64001 14.6666 6.26665V5.06665C14.6666 4.69328 14.6666 4.50659 14.5939 4.36399C14.53 4.23855 14.428 4.13656 14.3026 4.07264C14.16 3.99998 13.9733 3.99998 13.5999 3.99998L2.39992 3.99998C2.02655 3.99998 1.83987 3.99998 1.69726 4.07264C1.57182 4.13656 1.46983 4.23854 1.40591 4.36399C1.33325 4.50659 1.33325 4.69328 1.33325 5.06665Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1148_2893">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconGift)