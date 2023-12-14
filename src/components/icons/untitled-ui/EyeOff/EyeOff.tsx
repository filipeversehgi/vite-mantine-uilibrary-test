import { memo } from 'react'

import { IconStyleProps } from '@/components/icons/types'

function IconEyeOff({ size = 16, color = '#A6A092' }: IconStyleProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M10.7425 5.09232C11.1489 5.03223 11.5682 5 12 5C17.105 5 20.4549 9.50484 21.5803 11.2868C21.7165 11.5025 21.7846 11.6103 21.8227 11.7767C21.8513 11.9016 21.8513 12.0987 21.8227 12.2236C21.7845 12.3899 21.7159 12.4985 21.5788 12.7156C21.2789 13.1901 20.8217 13.8571 20.2161 14.5805M6.72389 6.71504C4.56182 8.1817 3.09402 10.2194 2.42068 11.2853C2.28386 11.5019 2.21545 11.6102 2.17731 11.7765C2.14867 11.9014 2.14866 12.0984 2.17729 12.2234C2.2154 12.3897 2.2835 12.4975 2.41971 12.7132C3.54511 14.4952 6.89499 19 12 19C14.0584 19 15.8315 18.2676 17.2884 17.2766"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 3L21 21M9.87868 9.87868C9.33579 10.4216 9 11.1716 9 12C9 13.6569 10.3431 15 12 15C12.8284 15 13.5784 14.6642 14.1213 14.1213"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(IconEyeOff)