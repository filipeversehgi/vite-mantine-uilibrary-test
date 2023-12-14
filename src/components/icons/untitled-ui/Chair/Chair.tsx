import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconBrush1({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.00114 9.99935H5.33447M12.6678 2.66602L12.0011 6.33268M12.0011 6.33268L11.3345 9.99935H10.0011M12.0011 6.33268H5.33447M3.33447 6.33268H5.33447M10.0011 9.99935L11.3345 13.9993M10.0011 9.99935H5.33447M5.33447 9.99935L4.00114 13.9993M5.33447 9.99935V6.33268"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default memo(IconBrush1)
