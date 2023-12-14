import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconBankNote({ size = 16, color = '#A6A092' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M19.5322 18.2401C20.562 18.438 21.0769 18.5369 21.3319 18.4472C21.5914 18.3559 21.7251 18.2454 21.8637 18.0079C22 17.7743 22 17.3199 22 16.4111V5.66274C22 5.48274 22 5.39274 21.9405 5.22809C21.9049 5.12939 21.7663 4.91682 21.6904 4.84437C21.5638 4.72351 21.5199 4.70415 21.4321 4.66544C20.7731 4.37476 19.4487 4 17 4C13 4 10 6 7 6C6.04348 6 5.18862 5.89834 4.46783 5.75985C3.43803 5.56198 2.92314 5.46305 2.66806 5.55281C2.40859 5.64412 2.2749 5.75456 2.13628 5.99214C2 6.2257 2 6.68009 2 7.58885L2 18.3373C2 18.5173 2 18.6073 2.05947 18.7719C2.09512 18.8706 2.23369 19.0832 2.3096 19.1556C2.43624 19.2765 2.48012 19.2958 2.56788 19.3346C3.22687 19.6252 4.55129 20 7 20C11 20 14 18 17 18C17.9565 18 18.8114 18.1017 19.5322 18.2401Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 11V15M18 9V13M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconBankNote)
