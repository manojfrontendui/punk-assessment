import React, { Component } from 'react';
import { getBeers } from '../../service/PunkService';
import Beer from '../../components/Home/Beer';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beersList: []
        }
    }

    async componentDidMount() {
        await this.getBeersList();
    }

    getBeersList = async () => {
        const res = await getBeers();
        this.setState({
            beersList: res
        });
    }

    render() {
        const { beersList } = this.state;
        return (
            <div className="beers-container">
                {beersList.map((beer) => <Beer key={beer.id} beer={beer} />)}
            </div>
        )
    }
}

export default HomePage;
