import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Apartment from './ApartmentCard';

/**
 * Hacky thing to only add margin-top to wrapped by flex divs
 * Credit: https://stackoverflow.com/questions/30887071/margin-top-only-when-the-flex-item-is-wrapped
 */
const ApartmentsRow = styled.div`
  margin-top: -15px;
`;

const ApartmentCol = styled.div`
  margin-top: 15px;
`;

const ApartmentCardContainer = styled.div`
  width: 350px;
`;

const Apartments = ({ apartments }) => {
  return apartments.map(apartment => {
    return (
      <ApartmentCol className="col-sm" key={apartment._id}>
        <Link to={`/apartments/${apartment._id}`}>
          <ApartmentCardContainer>
            <Apartment direction="column" apartment={apartment} />
          </ApartmentCardContainer>
        </Link>
      </ApartmentCol>
    );
  });
};

const ApartmentGrid = props => {
  return (
    <ApartmentsRow className="row">
      <Apartments apartments={props.apartments} />
    </ApartmentsRow>
  );
};

export default ApartmentGrid;