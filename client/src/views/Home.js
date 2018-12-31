import React from 'react';
import { Query } from 'react-apollo';
import { FETCH_APARTMENTS } from '../queries/Apartments';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ApartmentGrid from '../components/ApartmentGrid';

const Home = props => {
  return (
    <section>
      <Query query={FETCH_APARTMENTS}>
      {({ data, loading, error}) => {

        if (loading) return <Loading />;

        if (error) return <Error message={error} />;

        return (
          <div className="container">
            <ApartmentGrid apartments={data.apartments.items} />
          </div>
        );
      }}
      </Query>
    </section>
  );
}

export default Home;
