import styled from 'vue-styled-components';

export const TabButton = styled.div`
  width: 36px;
  color: ${props => (props.active ? "#b55233" : "rgba(0, 0, 0, 0.3)")};
  background-color: ${props => ( props.active ? "#ffffff" : "#e9ebee")};
  writing-mode: vertical-rl;
  text-orientation: upright;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`
