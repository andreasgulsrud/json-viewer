import React from 'react'
import './RenderJson.css'

function RenderJson(props) {

    let displayValue = "";
    let childObjects = [];

    if (props.JsonValue === null || props.JsonValue === "") {
        displayValue = "blank"
    } else if (typeof (props.JsonValue) === "object") {
        for(let key in props.JsonValue) {

            childObjects.push(
                <RenderJson 
                    Jsonkey={key.replace(/([A-Z])/g, " $1" ).trim()} 
                    JsonValue={props.JsonValue[key]}
                />
            )
        }
    } else {
        displayValue = props.JsonValue.toString();
    }

    return (
        <main className="renderJson">

            <section className="renderJson__data">
                <p className="renderJson__key">
                    {props.Jsonkey.charAt(0).toUpperCase() + props.Jsonkey.slice(1)}
                </p>
            </section>

            <ul className="renderJson__objects-values">
                <li className="renderJson__list">
                    <p className="renderJson__object">{[childObjects]}</p>
                    <p className="renderJson__value">{displayValue}</p>
                </li>
            </ul>

        </main>
    )
}


export default RenderJson
