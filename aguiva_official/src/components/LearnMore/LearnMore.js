import React from 'react';
import { Wrapper, Title, Description, Link } from './styles';

function LearnMore(props) {
  const { color, side, title, description, link } = props;

  return (
    <Wrapper color={color} side={side}>
      {title && <Title>{title}</Title>}
      <Description>
        {description}
      </Description>
      <Link href={link}>Saiba mais</Link>
    </Wrapper>
  )
}

export default LearnMore;