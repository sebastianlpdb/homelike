import gql from 'graphql-tag';

export const FETCH_APARTMENTS = gql`
  {
    apartments(active: true) {
      items {
        _id
        owner {
        _id
          email
        } 
        title
        location {
          title
        }
        size
        price
        amenities
        images
      }
    }
  }`
;

export const FETCH_APARTMENT = gql`
  query Apartment($id: String!) {
    apartment(_id: $id) {
      _id
      owner {
        _id
        email
      }
      title
      location {
        title
      }
      size
      price
      images
      amenities
      details {
        rooms
        bedrooms
        floor
        bathrooms
      } 
      services 
    }
  }
`;