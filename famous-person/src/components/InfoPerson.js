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
                    <h2>Physiology</h2>
                    <p>{this.props.physiology}</p>
                </section>
                <section>
                    <h2>Natural abilities</h2>
                    <p>{this.props.abilities}</p>
                </section>
                <section>
                    <h2>Behavior</h2>
                    <p>{this.props.behavior}</p>
                </section>
                <Link className="link" to="/">
                    Come Back
                </Link>
            </main>
        );
    }
}

export default infoPerson;
