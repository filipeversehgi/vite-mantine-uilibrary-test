import { CRUDTemplateProps } from './CRUDTemplate.types'

function CRUDTemplate({ children }: CRUDTemplateProps) {
    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default CRUDTemplate
