import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconTable({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="table">
                <path
                    id="Fill"
                    opacity="0.12"
                    d="M14 6V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.7157 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2L5.2 2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2L2 6L14 6Z"
                    fill="black"
                />
                <path
                    id="Icon"
                    d="M2 6L14 6M6 2L6 14M5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.07989 14 5.2V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2C2 4.07989 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.07989 2 5.2 2Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default memo(IconTable)
