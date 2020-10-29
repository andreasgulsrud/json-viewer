import React from 'react'
import RenderJson from './RenderJson'
import SbmTestTwo from './SbmTestTwo.json'

function ProtoReader() {

    const rootObjects = [];

    for(let key in SbmTestTwo) {
        rootObjects.push(
            <RenderJson
                Jsonkey={key.replace(/([A-Z])/g, " $1" ).trim()}
                JsonValue={SbmTestTwo[key]}
            />
        )
    }

    return (
        <div className="protoReader">
            <div className="protoReader__rootObjects">
                {rootObjects}
            </div>
        </div>
    )
}

export default ProtoReader
