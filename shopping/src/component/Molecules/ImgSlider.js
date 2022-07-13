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
    const TOTAL_SLIDES = 2;
    const IMG = ['images/1.png', 'images/2.png', 'images/3.png'];
    const [curruntIdx, setCurrentIdx] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (curruntIdx >= TOTAL_SLIDES) {
            setCurrentIdx(0);
        } else {
            setCurrentIdx((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (curruntIdx === 0) {
            setCurrentIdx(TOTAL_SLIDES);
        } else {
            setCurrentIdx((prev) => prev - 1);
        }
    };

    useEffect(() => {
        console.log(curruntIdx);
        slideRef.current.style.transition = `all 0.5s ease-in-out`;
        slideRef.current.style.transform = `translateX(-${curruntIdx}000px)`;
    }, [curruntIdx]);

    return (
        <>
            <Container>
                <Input type="radio" name="slider" id="slider1" />
                <Input type="radio" name="slider" id="slider2" />
                <Input type="radio" name="slider" id="slider3" />
                <ImageBox ref={slideRef}>
                    {IMG.map((ele, idx) => (
                        <ImageList key={idx}>
                            <Image src={ele} />
                        </ImageList>
                    ))}
                </ImageBox>
                <Bullets>
                    <Label for="slider1">&nbsp;</Label>
                    <Label for="slider2">&nbsp;</Label>
                    <Label for="slider3">&nbsp;</Label>
                </Bullets>
            </Container>
            <Button onClick={prevSlide}>prev</Button>
            <Button onClick={nextSlide}>next</Button>
        </>
    );
};

export default ImgSlider;