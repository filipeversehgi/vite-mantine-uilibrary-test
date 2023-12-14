import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconChair({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M12.7778 14.9999L9 11.2222"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 22.0002C4 22.0002 6.60801 22.3419 7.97485 20.975C9.34168 19.6082 9.34168 17.3921 7.97485 16.0253C6.60801 14.6585 4.39194 14.6585 3.0251 16.0253C1.65827 17.3921 3.0251 20.0002 2 22.0002Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.99995 16.0002C7.50853 15.5088 7.26283 15.2631 7.12391 15.0057C6.79079 14.3887 6.80514 13.6423 7.16173 13.0385C7.31043 12.7868 7.5654 12.5507 8.07534 12.0785L17.9434 2.94141C18.8126 2.13663 20.1624 2.16258 20.9999 3.00017C21.8375 3.83776 21.8635 5.18755 21.0587 6.05671L11.9216 15.9248C11.4494 16.4347 11.2134 16.6897 10.9616 16.8384C10.3578 17.195 9.6114 17.2093 8.99438 16.8762C8.73707 16.7373 8.49136 16.4916 7.99995 16.0002Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconChair)
