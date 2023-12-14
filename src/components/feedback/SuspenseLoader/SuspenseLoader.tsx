import { Suspense } from 'react'

import { GlobalLoader } from '@/components/feedback/GlobalLoader'

import { SuspenseLoaderProps } from './SuspenseLoader.types'

function SuspenseLoader({ children }: SuspenseLoaderProps) {
    return <Suspense fallback={<GlobalLoader />}>{children}</Suspense>
}

export default SuspenseLoader
