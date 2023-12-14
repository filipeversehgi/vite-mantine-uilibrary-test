import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconCheckSquareBroken({ size = 16, color = '#A6A092' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="check-square-broken">
                <path
                    id="Icon"
                    d="M6.00024 7.33333L8.00024 9.33333L14.6669 2.66667M10.6669 2H5.20024C4.08014 2 3.52009 2 3.09226 2.21799C2.71594 2.40973 2.40998 2.71569 2.21823 3.09202C2.00024 3.51984 2.00024 4.07989 2.00024 5.2V10.8C2.00024 11.9201 2.00024 12.4802 2.21823 12.908C2.40998 13.2843 2.71594 13.5903 3.09226 13.782C3.52009 14 4.08014 14 5.20024 14H10.8002C11.9203 14 12.4804 14 12.9082 13.782C13.2845 13.5903 13.5905 13.2843 13.7823 12.908C14.0002 12.4802 14.0002 11.9201 14.0002 10.8V8"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default memo(IconCheckSquareBroken)
