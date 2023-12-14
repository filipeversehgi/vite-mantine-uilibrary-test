import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconEdit2({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_460_10130)">
                <path
                    opacity="0.4"
                    d="M7.33301 2.66663H4.53301C3.4129 2.66663 2.85285 2.66663 2.42503 2.88461C2.0487 3.07636 1.74274 3.38232 1.55099 3.75865C1.33301 4.18647 1.33301 4.74652 1.33301 5.86663V11.4666C1.33301 12.5867 1.33301 13.1468 1.55099 13.5746C1.74274 13.9509 2.0487 14.2569 2.42503 14.4486C2.85285 14.6666 3.4129 14.6666 4.53301 14.6666H10.133C11.2531 14.6666 11.8132 14.6666 12.241 14.4486C12.6173 14.2569 12.9233 13.9509 13.115 13.5746C13.333 13.1468 13.333 12.5867 13.333 11.4666V8.66663"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.33301 9.55031C5.33301 9.22419 5.33301 9.06113 5.36985 8.90768C5.40251 8.77163 5.45638 8.64157 5.52949 8.52228C5.61194 8.38772 5.72725 8.27242 5.95785 8.04182L12.333 1.66665C12.8853 1.11437 13.7807 1.11437 14.333 1.66666C14.8853 2.21894 14.8853 3.11437 14.333 3.66666L7.95786 10.0418C7.72726 10.2724 7.61196 10.3877 7.47741 10.4702C7.35811 10.5433 7.22805 10.5972 7.092 10.6298C6.93855 10.6667 6.77549 10.6667 6.44937 10.6667H5.33301V9.55031Z"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_460_10130">
                    <rect width="16" height="16" fill={color} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconEdit2)
