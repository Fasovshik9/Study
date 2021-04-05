import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/InfoPerson.css";
import Slider from "./Slider";

class infoPerson extends Component {
    componentDidMount() {
        this.props.addPersons()
    }

    componentWillUnmount() {
        this.props.getShowResults()
    }

    render() {
        return (
            <main>
                { this.props.images.length===0 ? null : <Slider slides={this.props.images} />}
                <h1>Biology</h1>
                <section>
                    <h2>Biography</h2>
                    <p>{this.props.biography}</p>
                </section>
                <section>
                    <h2>Legacy</h2>
                    <p>{this.props.legacy}</p>
                </section>
                <section>
                    <h2>Finances</h2>
                    <p>{this.props.finances}</p>
                </section>
                <Link className="link" to="/">
                    Come Back
                </Link>
            </main>
        );
    }
}

export default infoPerson;
