import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconPhone({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M12 17.5H12.01M12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="5"
                y="2"
                width="14"
                height="20"
                rx="2"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconPhone)
