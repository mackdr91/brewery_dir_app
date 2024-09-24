'use client';
import PacLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "blue",
}
const Spinner = () => {
    return <PacLoader color="#34d399" cssOverride={override} size={150}
    aria-label=" Loading Spinner" />;
}

export default Spinner;