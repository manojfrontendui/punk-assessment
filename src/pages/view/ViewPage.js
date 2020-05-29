import React, { Component } from 'react';
import { getBeerDetails } from "../../service/PunkService";
import "./ViewPage.css";

class ViewPage extends Component {
    beerId = undefined;
    constructor(props) {
        super(props);
        this.beerId = props.location.pathname.split("/").pop();
        this.state = {
            beerDetails: undefined,
            isLoading: false
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true })
        const res = await getBeerDetails(this.beerId);
        this.setState({
            beerDetails: res[0],
            isLoading: false
        })
    }

    render() {
        const { beerDetails, isLoading } = this.state;
        return (
            <>
                {isLoading && (
                    <div className="loading">
                        <p>Beer details are loading</p>
                        <p>Please wait...</p>
                    </div>
                )}
                {!isLoading && beerDetails && (
                    <>
                        <div className="details-header">
                            <button onClick={() => this.props.history.push('/')} className="back-btn">Back</button>
                            <h1 className="beer-name">{beerDetails.name}</h1>
                        </div>
                        <div className="beer-details-page">
                            <div className="beer-image">
                                <img src={beerDetails.image_url} alt={beerDetails.name} />
                            </div>
                            <div className="beer-details">
                                <div className="details">
                                    <label>Tag line</label>
                                    <p>{beerDetails.tagline}</p>
                                </div>
                                <div className="details">
                                    <label>Brewers Tips</label>
                                    <p>{beerDetails.brewers_tips}</p>
                                </div>
                                <div className="details">
                                    <label>Contributed By</label>
                                    <p>{beerDetails.contributed_by}</p>
                                </div>
                                <div className="details">
                                    <label>Description</label>
                                    <p>{beerDetails.description}</p>
                                </div>
                                <div className="d-flex">
                                    <div className="details">
                                        <label>Alcohol by volume</label>
                                        <p>{beerDetails.abv}%</p>
                                    </div>
                                    <div className="details">
                                        <label>First Brewed</label>
                                        <p>{beerDetails.first_brewed}</p>
                                    </div>
                                </div>
                                <div className="details">
                                    <label>Food Pairing</label>
                                    <ul>
                                        {beerDetails.food_pairing.map((food, index) => (
                                            <li key={index}>{food}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </>
        )
    }
}

export default ViewPage;
