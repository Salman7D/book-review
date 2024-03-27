import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">

            <p className="text-2xl font-bold lg:mb-5 lg:mt-[300px] lg:ml-[680px]">404 Not Found</p>
            <Link className="lg:p-2 lg:ml-[695px] rounded-2xl bg-black text-white" to="/">Go Back Home</Link>

        </div>
    );
};

export default ErrorPage;