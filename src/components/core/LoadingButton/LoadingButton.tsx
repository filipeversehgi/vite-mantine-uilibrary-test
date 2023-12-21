import { ForwardRefRenderFunction, forwardRef, memo } from 'react'

import { Button } from '@mantine/core'

import { LoadingButtonProps } from './LoadingButton.types'

const $LoadingButton: ForwardRefRenderFunction<HTMLButtonElement, LoadingButtonProps> = (
    { isLoading, disabled, children, ...buttonProps },
    ref
) => (
    <Button ref={ref} loading={isLoading} disabled={isLoading || disabled} {...buttonProps}>
        {!isLoading && children}
    </Button>
);

export const LoadingButton = memo(forwardRef($LoadingButton))
