import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconEdit({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M11 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V13"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.99997 14.3255C7.99997 13.8363 7.99997 13.5917 8.05523 13.3615C8.10422 13.1574 8.18503 12.9624 8.29469 12.7834C8.41837 12.5816 8.59133 12.4086 8.93723 12.0627L18.5 2.49998C19.3284 1.67155 20.6716 1.67156 21.5 2.49998C22.3284 3.32841 22.3284 4.67156 21.5 5.49998L11.9373 15.0627C11.5914 15.4086 11.4184 15.5816 11.2166 15.7053C11.0376 15.8149 10.8425 15.8957 10.6385 15.9447C10.4083 16 10.1637 16 9.67451 16H7.99997V14.3255Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconEdit)
