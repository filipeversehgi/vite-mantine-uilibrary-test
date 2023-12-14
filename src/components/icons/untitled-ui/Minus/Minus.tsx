import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconMinus({ size = 20, color = 'white' }: IconStyleProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default memo(IconMinus)
