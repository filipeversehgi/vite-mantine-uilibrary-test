import { Grid, Modal, Flex } from '@mantine/core'

import { LoadingButton } from '@/components/core'

import { useStyles } from './ConfirmDialog.styles'
import { ConfirmDialogProps } from './ConfirmDialog.types'

function ConfirmDialog({
    title,
    children,
    isLoading = false,
    cancel,
    confirm,
    size = 440,
    ...props
}: ConfirmDialogProps) {
    const { classes } = useStyles()

    return (
        <Modal
            centered
            size={size}
            title={title}
            scrollAreaComponent={Modal.NativeScrollArea}
            className="modal-no-scroll modal-body-scroll"
            {...props}>
            <Grid>
                {children && (
                    <Grid.Col data-autofocus span={12}>
                        {children}
                    </Grid.Col>
                )}
                <Grid.Col span={12}>
                    <Flex mih={50} gap="md" justify="flex-end" align="center" direction="row" wrap="wrap">
                        <LoadingButton
                            variant="subtle"
                            radius="md"
                            disabled={isLoading}
                            isLoading={false}
                            onClick={() => cancel?.action()}
                            className={`subtle ${classes.btn}`}>
                            {cancel?.text}
                        </LoadingButton>
                        <LoadingButton
                            className={classes.btn}
                            radius="md"
                            disabled={isLoading}
                            isLoading={isLoading}
                            onClick={() => confirm?.action()}>
                            {confirm?.text}
                        </LoadingButton>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Modal>
    )
}

export default ConfirmDialog
