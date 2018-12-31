import React from 'react';
import { Query } from 'react-apollo';
import { FETCH_APARTMENT } from '../queries/Apartments';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ApartmentCard from '../components/ApartmentCard';

const Apartment = props => {
  const apartmentId = props.match.params.id;

  return (
    <section>
      <Query query={FETCH_APARTMENT(apartmentId)}>
      {({ data, loading, error}) => {

        if (loading) return <Loading />;

        if (error) return <Error message={error} />;

        const { apartment } = data;

        return (
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="container-fluid">
                  <ApartmentCard withOwner direction="row" apartment={apartment} / >
                </div>
              </div>
            </div>
          </div>
        );
      }}
      </Query>
    </section>
  );
}

export default Apartment;
