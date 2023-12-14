import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconLandingPage({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1950_124397)">
                <path
                    opacity="0.4"
                    d="M13.4444 1H2.55556C1.69645 1 1 1.69645 1 2.55556V13.4444C1 14.3036 1.69645 15 2.55556 15H13.4444C14.3036 15 15 14.3036 15 13.4444V2.55556C15 1.69645 14.3036 1 13.4444 1Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity="0.4"
                    d="M2.5 5H13.5"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
                <circle cx="12" cy="3" r="1" fill={color} />
                <circle cx="9" cy="3" r="1" fill={color} />
                <path
                    d="M6.00008 10.3333H10.0001M4.66675 8H11.3334"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1950_124397">
                    <rect width={size} height={size} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconLandingPage)
