import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFF;
  opacity: 0.7;
`;

const Loading = () => (
  <Overlay>
    <ReactLoading type="bars" color="#000" height={'20%'} width={'20%'} />
  </Overlay>
);

export default Loading;