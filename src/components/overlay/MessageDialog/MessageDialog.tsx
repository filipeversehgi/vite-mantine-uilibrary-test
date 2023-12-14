import { Grid, Modal } from '@mantine/core'

import { LoadingButton } from '@/components/core'

import { useStyles } from './MessageDialog.styles'
import { MessageDialogProps } from './MessageDialog.types'

function MessageDialog({
    title,
    description,
    opened,
    isLoading = false,
    btnCloseLabel,
    closeFn,
    withCloseButton,
    closeOnClickOutside = true,
    size = 440,
}: MessageDialogProps) {
    const { classes } = useStyles()
    return (
        <Modal
            centered
            size={size}
            title={title}
            opened={opened}
            onClose={closeFn}
            scrollAreaComponent={Modal.NativeScrollArea}
            withCloseButton={withCloseButton}
            closeOnClickOutside={closeOnClickOutside}
            className="modal-no-scroll modal-body-scroll">
            <Grid>
                {description && <Grid.Col span={12}>{description}</Grid.Col>}
                <Grid.Col span={12} mb={0} className={classes.btnCol}>
                    <LoadingButton
                        className={classes.btn}
                        radius="md"
                        disabled={isLoading}
                        isLoading={isLoading}
                        onClick={closeFn}>
                        {btnCloseLabel}
                    </LoadingButton>
                </Grid.Col>
            </Grid>
        </Modal>
    )
}

export default MessageDialog
