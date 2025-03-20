import React from "react";
import ReactDOM from "react-dom/client"; 

const Title = () => {
    return <h1>This is my title</h1>
}

const HeadingComponent = () => {
    return (
        <div className="container">
            <Title />
            <h2>This is my main container</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);