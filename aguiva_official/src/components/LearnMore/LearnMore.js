import React from 'react';
import { Wrapper, Title, Description, Link, ArrowLink } from './styles';

const LearnMore = (props) => {
  const { name, color, side, alignSelf, title, description, link } = props;

  return (
    <Wrapper className={name} color={color} side={side} alignSelf={alignSelf}>
      <Title className={name} >{title}</Title>
      <Description>
        {description}
      </Description>
      <Link href={link} color={color}> 
        Saiba mais 
        <ArrowLink className="Arrow"/>
      </Link>
    </Wrapper>
  )
}

export default LearnMore;