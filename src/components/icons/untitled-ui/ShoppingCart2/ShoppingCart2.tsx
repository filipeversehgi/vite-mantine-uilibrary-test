import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconShoppingCart2({ size = 16, color = 'white' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="shopping-cart-02">
                <path
                    id="Accent"
                    opacity="0.4"
                    d="M4.33325 11.3333H11.5527C12.186 11.3333 12.5027 11.3333 12.7608 11.2189C12.9883 11.1181 13.183 10.9555 13.323 10.7497C13.4817 10.5163 13.5384 10.2047 13.6517 9.58162L14.5522 4.62874C14.5914 4.41278 14.6111 4.30481 14.5807 4.22049C14.5541 4.14652 14.5022 4.08434 14.4342 4.04492C14.3567 4 14.2469 4 14.0274 4H3.33325"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Icon"
                    d="M1.33313 1.33301H2.21073C2.37253 1.33301 2.45342 1.33301 2.51885 1.36256C2.57651 1.38861 2.62557 1.43053 2.6603 1.48343C2.69969 1.54344 2.71231 1.62335 2.73754 1.78316L4.59539 13.5495C4.62062 13.7093 4.63324 13.7892 4.67263 13.8493C4.70735 13.9022 4.75641 13.9441 4.81408 13.9701C4.8795 13.9997 4.9604 13.9997 5.12219 13.9997H12.6665"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default memo(IconShoppingCart2)
