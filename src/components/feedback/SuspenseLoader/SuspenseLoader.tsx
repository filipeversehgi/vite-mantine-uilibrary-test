import { Suspense } from 'react'

import { GlobalLoader } from '../GlobalLoader'
import { SuspenseLoaderProps } from './SuspenseLoader.types'

export function SuspenseLoader({ children, ...globalLoaderProps }: SuspenseLoaderProps) {
    return <Suspense fallback={<GlobalLoader {...globalLoaderProps} />}>{children}</Suspense>
}
