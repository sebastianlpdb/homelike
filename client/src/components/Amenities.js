import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Amenity = styled.span`
  padding-right: 5px;
  text-stroke: .6px #FFFFFF;
  color: #5cb85c;
`;

const Amenities = props => {
  const amenities = props.amenities.slice(0, props.limit);
  
  return amenities.map(amenity => {
    return (
      <Amenity>
        <i></i>
        <span>{amenity}</span>
      </Amenity>
    );
  })
}

Amenities.propTypes = {
  limit: PropTypes.number,
  amenities: PropTypes.arrayOf(PropTypes.string)
};

Amenities.defaultProps = {
  limit: 3,
  amenities: []
};

export default Amenities;