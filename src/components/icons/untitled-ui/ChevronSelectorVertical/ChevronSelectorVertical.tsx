import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconChevronSelectorVertical({ size = 16, color = '#A6A092' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 15L12 20L17 15M7 9L12 4L17 9"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconChevronSelectorVertical)
