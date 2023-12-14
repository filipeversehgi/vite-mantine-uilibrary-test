import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconAlertTriangle({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M2.39043 18.0983L10.6153 3.89171C11.0699 3.10655 11.2972 2.71396 11.5937 2.58211C11.8524 2.4671 12.1476 2.4671 12.4063 2.58211C12.7028 2.71396 12.9301 3.10654 13.3847 3.89171L21.6096 18.0983C22.0658 18.8863 22.2939 19.2803 22.2602 19.6037C22.2308 19.8857 22.083 20.142 21.8536 20.3088C21.5907 20.5 21.1354 20.5 20.2249 20.5H3.77511C2.86459 20.5 2.40933 20.5 2.14637 20.3088C1.91701 20.142 1.76924 19.8857 1.73984 19.6037C1.70612 19.2803 1.93423 18.8863 2.39043 18.0983Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 9V13M12 17H12.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconAlertTriangle)
