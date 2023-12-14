import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconArrowNarrowLeft({ size = 20, color = 'white' }: IconStyleProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 9 16" fill="none">
            <path d="M8 15L1 8L8 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default memo(IconArrowNarrowLeft)
