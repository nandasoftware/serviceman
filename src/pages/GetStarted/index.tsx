import { useState } from "react";
import Button from "../../components/button";
import { Link } from "react-router-dom";

type GetStartedProps = { title: string }

const GetStarted = ({ title }: GetStartedProps) => {
    const handleOnclick = () => {
        setClink(clink + 1);
    };
    const [clink, setClink] = useState(0)
    return (
        <>
            <div className="text-center">
                <div>Your Local Helper</div>
                <p>Have a problem that you can't solved? Don't worry, Lets get started.</p>
                <Link className="text-center" to={`onboarding/${clink}`}>
                  sdfdf
                </Link>
            </div>
        </>
    )
}

export default GetStarted;