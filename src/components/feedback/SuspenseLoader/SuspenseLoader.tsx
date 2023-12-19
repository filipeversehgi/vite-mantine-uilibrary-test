import { Suspense } from 'react';

import { GlobalLoader } from '../GlobalLoader';
import { SuspenseLoaderProps } from './SuspenseLoader.types';

function SuspenseLoader({ children, ...globalLoaderProps }: SuspenseLoaderProps) {
  return <Suspense fallback={<GlobalLoader {...globalLoaderProps} />}>{children}</Suspense>;
}

export default SuspenseLoader;
