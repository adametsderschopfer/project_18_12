'use client';

import React, {useMemo, useState} from 'react';
import {Card, Typography} from 'antd';
import Link from 'next/link';
import {ICategory} from "../../types";

interface CategoryCardProps {
  category: ICategory & {
    subCategories: ICategory[];
  };
}

const {Title, Text} = Typography;

const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
  const [isHover, setIsHover] = useState(false);

  const subCategories = useMemo(() => !isHover ? category.subCategories.slice(0, 3) : category.subCategories, [isHover, category.subCategories]);

  return (
    <div className={["relative bg-white"].join(' ')}>
      <Card
        className={[
          'bg-white min-h-[150px]',
          isHover ? 'z-1 w-full shadow-2xl' : '',
        ].join(' ')}
        style={{
          position: isHover ? "absolute" : 'static',
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
          <Title level={4} className={!isHover ? "whitespace-nowrap overflow-ellipsis overflow-hidden" : ''}>
            <Link href={`/catalog/${category.id}`} passHref>
              {category.name}
            </Link>
          </Title>

          <div className="flex flex-col">
            {subCategories.map((subCat) => (
              <Text key={subCat.id} className={!isHover ? "whitespace-nowrap overflow-ellipsis overflow-hidden" : ''}>
                <Link href={`/catalog/${encodeURIComponent(subCat.id)}`} passHref>
                  {subCat.name}
                </Link>
              </Text>
            ))}
          </div>


          {
            !isHover && (
              <div
                className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )
          }
      </Card>
    </div>
  );
};

export default CategoryCard;
