import React, { Component } from 'react';
import { Link } from "react-router-dom";
import person from '../assets/sherlock3.jpg';
import "../css/InfoPerson.css";

class infoPerson extends Component {
    componentWillUnmount() {
        this.props.getShowResults()
    }

    render() {
        return (
            <main>
                <img className="imgInfoName" src={person} alt="person" />
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
