import React from 'react';
import Category from 'components/category';
import Card from 'components/card/Card';

import { GridPageContainer, Content } from 'styles/page.styles';

import CategoriesJSONData from './data.json';

export default function Home() {
  return (
    <GridPageContainer>
      {CategoriesJSONData.categories.map(category => (
        <Category key={category.id}>
          <Category.Title>{category.name}</Category.Title>
          {category.items.map(item => (
            <Card
              key={item.id}
              image={process.env.PUBLIC_URL + item.image}
              title={item.name}
              content={item.description}
            />
          ))}
        </Category>
      ))}
    </GridPageContainer>
  );
}
