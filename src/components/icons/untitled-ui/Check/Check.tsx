import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconCheck({ size = 16, color = '#A6A092' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default memo(IconCheck)