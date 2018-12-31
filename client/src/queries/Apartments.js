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
