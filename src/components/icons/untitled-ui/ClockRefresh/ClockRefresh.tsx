import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconClockRefresh({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="clock-refresh">
                <path
                    id="Accent"
                    opacity="0.4"
                    d="M13.6356 8.59526C13.4504 10.3352 12.4645 11.9657 10.8332 12.9075C8.12287 14.4723 4.65719 13.5437 3.09238 10.8334L2.92572 10.5447M2.36419 7.40479C2.54939 5.66486 3.53525 4.03438 5.16658 3.09253C7.8769 1.52773 11.3426 2.45635 12.9074 5.16668L13.0741 5.45535M2.32886 12.044L2.81689 10.2226L4.63826 10.7107M11.3616 5.28936L13.1829 5.77739L13.671 3.95603"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Icon"
                    d="M8 5V8L9.66667 9"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default memo(IconClockRefresh)
