import { notifications } from '@mantine/notifications';

import { NotificationToaster } from '@/components/feedback';
import { NotificationToasterType } from '@/components/feedback/NotificationToaster/NotificationToaster.types';

function show(id: string, type: NotificationToasterType, message: string) {
  notifications.show({
    id,
    message: (
      <NotificationToaster
        type={type}
        message={message}
        rightContent={{
          action: () => {
            notifications.hide(id);
          },
        }}
      />
    ),
  });
}

function showDefaultException(id = 'generic-exception') {
  const type: NotificationToasterType = 'error';
  const message = t('exceptions:default').toString();

  show(id, type, message);
}

export const Notification = { show, showDefaultException };
