import React from 'react';
import InputText from './InputText';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

const ApartmentFilters = props => {
  return (
    <FiltersContainer className="row">
      <div className="col-sm">
        <label htmlFor="price">Price: </label>
        <InputText id="price" color="#000" value={props.price.value} onChange={props.price.onChange} />
      </div>
    </FiltersContainer>
  );
}

export default ApartmentFilters;