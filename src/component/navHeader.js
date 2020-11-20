import React from 'react';

export default (props) => {
    return (
        <div>
            <button onClick={() => props.setNavTab("CATEGORY")}>category</button>
            <button onClick={() => props.setNavTab("BOOKS")}>books</button>
            <button onClick={() => props.setNavTab("TOPIC")}>topic</button>
        </div>
    )
}
