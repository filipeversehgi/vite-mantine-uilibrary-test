import { ReactNode } from 'react';

export type NotificationToasterProps = {
  type: NotificationToasterType;
  message: string;
  rightContent: {
    icon?: ReactNode;
    text?: string;
    action: () => void;
  };
  t: {
    close: string;
  };
};

export type NotificationToasterType = 'success' | 'error';
