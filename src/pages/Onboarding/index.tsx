import { useState } from "react";
import Button from "../../components/button";

type OnboardingProps = { title: string }

const Onboarding = ({ title }: OnboardingProps) => {
    const handleOnclick = () => {
        setClink(clink + 1);
    };
    const [clink, setClink] = useState(0)
    return (
        <>
            <div className="text-center">
                <div>Place any orders and get feedback on them</div>
                <p>Post your order and choose the best offer for you</p>
                <Button onclick={handleOnclick} count={clink} title="Skip" />
                <Button onclick={handleOnclick} count={clink} title="Next" />
            </div>
        </>
    )
}

export default Onboarding;