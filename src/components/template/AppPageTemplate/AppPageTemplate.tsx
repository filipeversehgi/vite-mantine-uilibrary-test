import { memo } from 'react';

import { Badge, Divider, Flex, Text } from '@mantine/core';

import { PageMetaTemplate } from '@/components/template/PageMetaTemplate';

import { useStyles } from './AppPageTemplate.styles';
import { AppPageTemplateProps } from './AppPageTemplate.types';

function AppPageTemplate({ title, description, badge, children }: AppPageTemplateProps) {
  const { classes } = useStyles();
  return (
    <PageMetaTemplate
      meta={{
        title: title,
        description: description,
      }}
    >
      <Flex align="flex-start" direction="column" gap={48}>
        <Flex style={{ flex: 1 }} direction="row" align="center" mt="sm" gap="sm">
          <Text component="h1" color="blue.6" mt="sm" m={0} className={classes.title}>
            {title}
          </Text>
          {badge && (
            <Badge color="gray" miw={50}>
              {badge}
            </Badge>
          )}
        </Flex>
      </Flex>
      <Text fw={400} mt="sm" color="light.2" className={classes.desc}>
        {description}
      </Text>
      <Divider mb="sm" mt="xl" />
      {children}
    </PageMetaTemplate>
  );
}

export default memo(AppPageTemplate);
