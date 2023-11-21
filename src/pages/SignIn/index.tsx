import { useState } from "react";
import Button from "../../components/button";

type SigninProps = { title: string }

const Signin = ({ title }: SigninProps) => {
    const handleOnclick = () => {
        setClink(clink + 1);
    };
    const [clink, setClink] = useState(0)
    return (
        <>
            <div className="text-center"> 
                <Button onclick={handleOnclick} count={clink} title="Log in with Google" />
            </div>
        </>
    )
}

export default Signin;