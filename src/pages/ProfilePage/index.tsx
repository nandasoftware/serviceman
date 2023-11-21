import { Fragment, useState } from "react";
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

    console.log(errors);

    const onsub = (data: any) => {
        console.log(data);
    };

    var data = [{ name: "nanda", no: "fsdfd", datas: [{ name: "nanda", no: "fsdfd" }, { name: "nanda 2", no: "97897" }] }, { name: "nanda 2", no: "97897", datas: [] }];
    console.log(data);

    const [clink, setClink] = useState(0)
    return (
        <>

            <div>
                {data.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div>{item.name}</div>
                            <div>{item.no}</div>
                            {item.datas.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div>{item.name}</div>
                                        <div>{item.no}</div>
                                    </Fragment>
                                )
                            })}
                        </Fragment>
                    )
                })}
            </div>

            <div className="text-center">
                <form onSubmit={handleSubmit((data) => onsub(data))}>
                    <input type="text" {...register('name', { required: true, minLength: 3 })} />
                    {errors.name && <span>This field is required</span>}
                    <input {...register('email')} />
                    <input {...register('phone')} />
                    <input type="submit" />
                    {/* <Button type="submit" onclick={handleOnclick} count={clink} title="Get Started" /> */}
                </form>
            </div>
        </>
    )
}

export default ProfilePage;