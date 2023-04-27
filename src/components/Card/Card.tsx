import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  /* styles here */
`;

interface CardProps {
  // props here
}

const Card: React.FC<CardProps> = () => {
  return (
    <StyledCard>
      {/* content here */}
    </StyledCard>
  );
};

export default Card;
