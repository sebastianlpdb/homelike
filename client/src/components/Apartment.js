import React from 'react';
import styled from 'styled-components';
import constants from '../constants';
import Amenities from './Amenities';

const ApartmentCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #D1D5DA;
  border-radius: 3px;
  width: 350px;
  padding: 1px;
  position: relative;
`;

const ApartmentImage = styled.img`
  max-width: 100%;
  height: 230px;
`;

const ApartmentPriceContainer = styled.div`
  position: absolute;
  bottom: 110px;
  left: 10px;
  opacity: 0.8;
  background-color: rgba(0,0,0,.7);
  color: #fff;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`;

const ApartmentPeriodContainer = styled.span`
  font-weight: 400;
  line-height: 18px;
  font-size: 14px;
  font-weight: 300;
  font-size: 15px;
`;

const PeriodSeparator = styled.span`
  padding: 0 2px 0 3px;
`;

const ApartmentDetails = styled.div`
  background-color: #fff;
  padding: 8px 10px;
  line-height: 1.5;
`;

const ApartmentTitle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  text-transform: capitalize;
  color: #2c577d;
  font-size: 16px;
  margin-bottom: 6px;
  min-height: 24px;
`;

const ApartmentSize = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  color: #2c577d;
  font-size: 16px;
  margin-bottom: 6px;
  min-height: 24px;
`;

const Apartment = props => {
  console.log(props);
  
  return (
    <ApartmentCard>
      <ApartmentImage src={`${constants.APARTMENTS_BASE_IMAGE_URL}/${props.apartment.images[0]}`} />
      <ApartmentPriceContainer>
        <span>{`${props.apartment.price} ${constants.DEFAULT_CURRENCY}`}</span>
        <ApartmentPeriodContainer>
          <PeriodSeparator>/</PeriodSeparator>
          <span>{constants.DEFAULT_TIME_PERIOD}</span>
        </ApartmentPeriodContainer>
      </ApartmentPriceContainer>
      <ApartmentDetails>
        <ApartmentTitle>{props.apartment.title}</ApartmentTitle>
        <ApartmentSize>{`${props.apartment.size} ${constants.DEFAULT_SIZE_UNIT}`}</ApartmentSize>
        <Amenities amenities={props.apartment.amenities} />
      </ApartmentDetails>
    </ApartmentCard>
  );
};

export default Apartment;