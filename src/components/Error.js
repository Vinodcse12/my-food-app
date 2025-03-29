import { useRouteError  } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div className="">
            <h1>Error</h1>
            <h2>Page not Found</h2>
            <h3>{err.status}</h3>
        </div>
    )
};

export default Error;