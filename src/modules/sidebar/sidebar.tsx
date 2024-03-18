import type { FC } from 'react';
import Link from 'next/link';
import { SidebarItem, SidebarList } from '@/modules/sidebar/sidebar.styled';
import Image from 'next/image';
import type { ICategories } from '@/shared/services/product-categories/models';

interface SidebarProps {
  sidebar: ICategories[];
}

export const Sidebar: FC<SidebarProps> = ({ sidebar }) => (
  <aside>
    <SidebarList>
      {sidebar.map(({ name, link, imagePath, _id }) => (
        <SidebarItem key={_id}>
          <Link href={`/${link}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_URL || ''}${imagePath}`}
              alt={name}
              width={33}
              height={33}
            />
            {name}
          </Link>
        </SidebarItem>
      ))}
    </SidebarList>
  </aside>
);
