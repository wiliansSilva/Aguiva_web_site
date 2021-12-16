import React from 'react';
import { Wrapper, Title, Description, Link, ArrowLink } from './styles';

const LearnMore = (props) => {
  const { color, side, alignSelf, title, description, link } = props;

  return (
    <Wrapper color={color} side={side} alignSelf={alignSelf}>
      {title && <Title>{title}</Title>}
      <Description>
        {description}
      </Description>
      <Link href={link} color={color}> 
        Saiba mais 
        <ArrowLink />
      </Link>
    </Wrapper>
  )
}

export default LearnMore;