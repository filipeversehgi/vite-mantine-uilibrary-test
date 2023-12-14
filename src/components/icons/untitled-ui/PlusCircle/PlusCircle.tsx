import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconPlusCircle({ size = 20, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.99967 4.83333V10.1667M5.33301 7.5H10.6663M14.6663 7.5C14.6663 11.1819 11.6816 14.1667 7.99967 14.1667C4.31778 14.1667 1.33301 11.1819 1.33301 7.5C1.33301 3.8181 4.31778 0.833328 7.99967 0.833328C11.6816 0.833328 14.6663 3.8181 14.6663 7.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconPlusCircle)
