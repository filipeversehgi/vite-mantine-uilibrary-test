import React, { createContext } from 'react'

export type ITranslations = {
    forms: {
        optional: string
    }
    dialogs: {
        cancel: string
        upload: string
        close: string
        emptyMessage: string
    }
    dropZone: {
        requirements: string
        or: string
        max: string
        tryAgain: string
        clickToUpload: string
        orDragAndDrop: string
    }
}

export const DefaultTranslations: ITranslations = {
    forms: {
        optional: 'Optional',
    },
    dialogs: {
        cancel: 'Cancel',
        upload: 'Upload',
        close: 'Close',
        emptyMessage: 'Empty Message',
    },
    dropZone: {
        requirements: 'Requirements: ',
        or: 'or',
        max: 'max',
        tryAgain: 'Try Again',
        clickToUpload: 'Click to Upload',
        orDragAndDrop: 'or Drag and Drop',
    },
}

export const TranslationContext = createContext<ITranslations>(DefaultTranslations)

export function TranslationProvider({
    children,
    translation = DefaultTranslations,
}: {
    children: React.ReactNode
    translation?: ITranslations
}) {
    return <TranslationContext.Provider value={translation}>{children}</TranslationContext.Provider>
}
