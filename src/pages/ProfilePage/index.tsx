import { Fragment, useState } from "react";
import Button from "../../components/button";
import { useForm } from 'react-hook-form';

import styled from "styled-components";
import Slider from "react-slick";


const Styledfile = styled.div`
 
 
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

type ProfilePageProps = { title: string }

const ProfilePage = ({ title }: ProfilePageProps) => {
    const handleOnclick = () => {
        setClink(clink + 1);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    console.log(errors);

    const onsub = (data: any) => {
        console.log(data);
    };

    var data = [{ name: "nanda", no: "fsdfd", datas: [{ name: "nanda", no: "fsdfd" }, { name: "nanda 2", no: "97897" }] }, { name: "nanda 2", no: "97897", datas: [] }];
    console.log(data);

    const [clink, setClink] = useState(0)
    return (
        <Styledfile>


            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>

            <div>
                {data.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <Styledfile>{item.name}</Styledfile>
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
                    <input type="text" {...register('name', { required: true })} />
                    {errors.name && <span>This field is required</span>}
                    <input {...register('email')} />
                    <input {...register('phone')} />
                    <input type="submit" />
                    {/* <Button type="submit" onclick={handleOnclick} count={clink} title="Get Started" /> */}
                </form>
            </div>
        </Styledfile>
    )
}

export default ProfilePage;