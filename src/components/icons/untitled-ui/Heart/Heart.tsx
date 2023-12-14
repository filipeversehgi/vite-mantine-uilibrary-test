import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconHeart({ size = 16, color = '#20242D' }: IconStyleProps) {
    return (
        <svg width={size} height={size + 1} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="heart">
                <path
                    id="Icon"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99511 3.92388C6.66221 2.3656 4.43951 1.94643 2.76947 3.37334C1.09944 4.80026 0.86432 7.18598 2.17581 8.8736C3.26622 10.2767 6.56619 13.2361 7.64774 14.1939C7.76874 14.301 7.82925 14.3546 7.89982 14.3757C7.96141 14.3941 8.02881 14.3941 8.0904 14.3757C8.16097 14.3546 8.22147 14.301 8.34248 14.1939C9.42403 13.2361 12.724 10.2767 13.8144 8.8736C15.1259 7.18598 14.9195 4.78525 13.2207 3.37334C11.522 1.96144 9.32801 2.3656 7.99511 3.92388Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default memo(IconHeart)
