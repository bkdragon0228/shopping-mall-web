import React, { useEffect, useRef, useState } from 'react';
import Image from '../Atoms/Image';
import styled, { css } from 'styled-components';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';

const Container = styled.div`
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
`;

const ImageBox = styled.ul`
    margin: 10px 0 0 0;
    padding: 0;
    width: 100%;
    display: flex;
    transition: ${(props) => (!props.count ? '' : 'all 0.5s ease-in-out')};
    transform: ${(props) => 'translateX(-' + props.count * 1000 + 'px)'};
`;
const ImageList = styled.li`
    list-style: none;
`;
const Bullets = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    right: 10px;
    bottom: 10px;
    z-index: 2;
`;
const Label = styled.label`
    display: inline-block;
    border-radius: 50%;
    background-color: rgba(88, 84, 84, 0.55);
    width: 10px;
    height: 10px;
    margin-top: 5px;
    cursor: pointer;
`;

const ImgSlider = () => {
    const TOTAL_SLIDES = 3;
    const imgLength = 1000;
    const IMG = ['images/1.png', 'images/2.png', 'images/3.png', 'images/1.png'];
    const sliders = ['slider1', 'slider2', 'slider3'];
    const [count, setCount] = useState(0);
    const boxListRef = useRef({});

    const bool = useRef(false);
    useEffect(() => {
        const timer = setInterval(
            () => {
                if (count < TOTAL_SLIDES) {
                    bool.current = false;
                    setCount((prev) => prev + 1);
                } else {
                    bool.current = true;
                    setCount(0);
                }
            },
            bool.current ? 0 : 2500
        );

        return () => {
            clearInterval(timer);
        };
    }, [count]);

    const lableHandler = () => {};

    return (
        <>
            <Container>
                {/* <Input type="radio" name="slider" id="slider1" hide />
                <Input type="radio" name="slider" id="slider2" hide />
                <Input type="radio" name="slider" id="slider3" hide /> */}
                {/* <input type="radio" name="slider" id="slider1" checked />
                <input type="radio" name="slider" id="slider2" />
                <input type="radio" name="slider" id="slider3" /> */}
                <ImageBox count={count}>
                    {IMG.map((ele, idx) => (
                        <ImageList key={idx}>
                            <Image src={ele} />
                        </ImageList>
                    ))}
                </ImageBox>
                <Bullets>
                    {sliders.map((e, i) => (
                        <Label onClick={lableHandler} ref={(ref) => (boxListRef.current[i] = ref)} for={e} key={i}>
                            &nbsp;
                        </Label>
                    ))}
                </Bullets>
            </Container>
            {/* <Button onClick={prevSlide}>prev</Button>
            <Button onClick={nextSlide}>next</Button> */}
        </>
    );
};

export default ImgSlider;
