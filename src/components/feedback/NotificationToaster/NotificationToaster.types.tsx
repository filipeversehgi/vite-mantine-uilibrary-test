import { ReactNode } from 'react';

export type NotificationToasterProps = {
  type: NotificationToasterType;
  message: string;
  rightContent: {
    icon?: ReactNode;
    text?: string;
    action: () => void;
  };
};

export type NotificationToasterType = 'success' | 'error';
