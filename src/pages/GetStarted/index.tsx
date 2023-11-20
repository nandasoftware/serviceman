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
            <div>asdfsdfdfsdf  89+8 {title}</div>
            <Button onclick={handleOnclick} count={clink} title="click here" />
        </>
    )
}

export default GetStarted;