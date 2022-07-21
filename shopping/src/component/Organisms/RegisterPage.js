import React, { useState } from 'react';
import Logo from '../Atoms/Logo';
import styled from 'styled-components';
import Block from '../Atoms/Block';
import Button from '../Atoms/Button';
const RegisterDiv = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert('비밀번화와 비밀번호 확인이 다름니다.');
        }

        let body = {
            name,
            email,
            password,
        };
    };

    const HandleName = (e) => {
        setName(e.target.value);
    };
    const HandleEmail = (e) => {
        setEmail(e.target.value);
    };
    const HandlePassword = (e) => {
        setPassword(e.target.value);
    };
    const HandleconfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    return (
        <RegisterDiv>
            <Logo />
            <Form onSubmit={handleSubmit}>
                <Block width="400px" height="60px" color="#FEE500">
                    카카오 1초 로그인/회원가입
                </Block>
                <br />
                <label>이름</label>
                <input type="text" placeholder="이름" onChange={HandleName} />
                <label>아이디</label>
                <input
                    type="email"
                    placeholder="아이디"
                    onChange={HandleEmail}
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    placeholder="비밀번호"
                    onChange={HandlePassword}
                />
                <label>비밀번호 확인</label>
                <input
                    type="password"
                    placeholder="비밀번호"
                    onChange={HandleconfirmPassword}
                />
                <Button>회원가입</Button>
            </Form>
        </RegisterDiv>
    );
};

export default RegisterPage;
