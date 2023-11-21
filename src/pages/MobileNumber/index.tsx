import { useState } from "react";
import Button from "../../components/button";

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
                <Button onclick={handleOnclick} count={clink} title="Get Started" />
            </div>
        </>
    )
}

export default GetStarted;