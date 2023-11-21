import { useState } from "react";
import Button from "../../components/button";
import { useForm } from 'react-hook-form';


type ProfilePageProps = { title: string }

const ProfilePage = ({ title }: ProfilePageProps) => {
    const handleOnclick = () => {
        setClink(clink + 1);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [clink, setClink] = useState(0)
    return (
        <>
            <div className="text-center">
                <div></div>
                <p></p>
                <p></p>
                

                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <input {...register('name')} value="Nandakumar" />
                    {errors.names && <p>Email is required.</p>}
                    <input {...register('email')} value="nanda.software@gmail.com"/>
                    {errors.email && <p>Email is required.</p>}
                    <input {...register('phone', { pattern: /\d+/ })} />
                    {errors.phone && <p>Please enter phone number.</p>}
                    <Button onclick={handleOnclick} count={clink} title="Get Started" />
                </form>
            </div>
        </>
    )
}

export default ProfilePage;