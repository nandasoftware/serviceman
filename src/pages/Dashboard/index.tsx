import { useState } from "react";
import Button from "../../components/button";

type DashboardProps = { title: string }

const Dashboard = ({ title }: DashboardProps) => {
    const handleOnclick = () => {
        setClink(clink + 1);
    };
    const [clink, setClink] = useState(0)
    return (
        <>
            <div className="text-center">
            Our Services
            </div>
            <ul>
                <li>
                AC Repair
                </li>
                <li>Plumber
                    </li> 
                <li>
                Painter
                </li>
                <li>
                Smart Home
                </li>
            </ul>
        </>
    )
}

export default Dashboard;