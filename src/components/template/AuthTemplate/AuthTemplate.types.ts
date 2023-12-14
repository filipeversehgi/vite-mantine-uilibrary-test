export type AuthTemplateProps = {
    title: string
    children: React.ReactNode
    subTitle?: string
}

export type AuthTemplateActionProps = {
    text: string
    action?: {
        text: string
        to: string
    }
}

export type AuthTemplateMessageProps = {
    text: string
}

export type AuthTemplateButtonProps = {
    onClick: () => void
    isLoading?: boolean
    width?: number
    children: React.ReactNode
}
