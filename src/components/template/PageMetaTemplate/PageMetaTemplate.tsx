import { memo } from 'react'

import { MetaTags } from '@/components/feedback'

import { PageTemplateProps } from './PageMetaTemplate.types'

function PageMetaTemplate({ meta, children }: PageTemplateProps) {
    return (
        <>
            <MetaTags {...meta} />
            {children}
        </>
    )
}

export default memo(PageMetaTemplate)
