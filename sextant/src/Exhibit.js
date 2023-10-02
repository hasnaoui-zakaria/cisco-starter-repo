import React from "react";
import './Exhibit.css';

export default function Exhibit () {
    return (
        <div className="Exhibit">
                <h2 className="ExhibitHeading">{this.props.name}</h2>
                <div className="ExhibitContent">
                    {this.props.children}
                </div>
            </div>
        
    )
}