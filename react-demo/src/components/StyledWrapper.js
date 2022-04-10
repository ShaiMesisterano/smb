import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor}; 
  fontSize: ${props => props.theme.fontSize};
  padding: 20px;
`;

export default StyledWrapper;