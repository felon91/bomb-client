import type { FC } from 'react';
import { Fragment } from 'react';
import { Container } from '@/shared/components/container.styled';
import {
  BreadcrumbsCurrent,
  BreadcrumbsElement,
  BreadcrumbsLink,
  BreadcrumbsSeparator,
} from '@/shared/components/breadcrumbs/breadcrumbs.styled';
import { Indents } from '@/shared/types/types';

export interface Crumb {
  name: string;
  link: string;
}

interface BreadcrumbsProps {
  crumbs?: Crumb[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs }) => {
  if (!crumbs) {
    return null;
  }

  return (
    <Container maxWidth="1170px" padding={Indents['16px']}>
      <BreadcrumbsElement>
        {crumbs.map(({ name, link }, index) => {
          const lastItem = crumbs?.length - 1 === index;

          if (lastItem) {
            return <BreadcrumbsCurrent key={index}>{name}</BreadcrumbsCurrent>;
          }

          return (
            <Fragment key={index}>
              <BreadcrumbsLink href={link}>{name}</BreadcrumbsLink>
              <BreadcrumbsSeparator>&gt;</BreadcrumbsSeparator>
            </Fragment>
          );
        })}
      </BreadcrumbsElement>
    </Container>
  );
};
