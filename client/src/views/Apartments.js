import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { FETCH_APARTMENTS } from '../queries/Apartments';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ApartmentGrid from '../components/ApartmentGrid';
import ApartmentFilters from '../components/ApartmentFilters';

class Apartments extends Component {
  constructor(props) {
    super(props);
    
    const params = new URLSearchParams(window.location.search);

    this.state = {
      price: params.get('price') || '',
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.filterApartments = this.filterApartments.bind(this);
  }

  handlePriceChange(event) {
    this.setState({
      price: event.target.value
    });
  }


  filterApartments(apartments) {
    return apartments.filter(apt => {
      if (this.state.price) {
        return apt.price == this.state.price;
      }

      return true;
    });
  }

  render() {
    const { price } = this.state;

    return (
      <section>
        <Query query={FETCH_APARTMENTS}>
          {({ data, loading, error}) => {

            if (loading) return <Loading />;

            if (error) return <Error message={error} />;

            const filtered = this.filterApartments(data.apartments.items);

            return (
              <div className="container">
                <ApartmentFilters 
                  price={{
                    value: price,
                    onChange: this.handlePriceChange
                  }}
                />
                <ApartmentGrid apartments={filtered} />
              </div>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default Apartments;
