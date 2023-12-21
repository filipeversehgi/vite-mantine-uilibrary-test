import { memo, useContext } from 'react'

import { Divider, Text, UnstyledButton } from '@mantine/core'

import { TranslationContext } from '@/components/core/TranslationContext';
import { IconXClose } from '@/components/icons/untitled-ui';

import classes from './NotificationToaster.module.css';
import { NotificationToasterProps } from './NotificationToaster.types'

function $NotificationToaster({ type, message, rightContent }: NotificationToasterProps) {
    const { dialogs: t } = useContext(TranslationContext)
    return (
        <>
            <div className={`bg-${type}`} />
            <div className="notification">
                <span className="message">{message}</span>
                <Divider orientation="vertical" ml="lg" mr="lg" style={{ height: 24 }} />
                <UnstyledButton className={classes.closeBtn} onClick={rightContent.action}>
                    {rightContent.icon ? rightContent.icon : <IconXClose color="white" />}
                    <Text color="white" fw={600}>
                        {rightContent.text ? rightContent.text : t.close}
                    </Text>
                </UnstyledButton>
            </div>
        </>
    )
}

export const NotificationToaster = memo($NotificationToaster)
