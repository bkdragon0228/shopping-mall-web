import React, { useState } from 'react';
import styled from 'styled-components';
import Block from '../Atoms/Block';
import Logo from '../Atoms/Logo';
import Button from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_action/user_action';

const LoginComponent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h3 {
        left: 0;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: password,
        };

        dispatch(loginUser(body)).then((res) => {
            if (res.payload.loginSuccess) {
                navigate('/');
            } else {
                alert('fail to sign in');
            }
        });
    };

    const HandleEmail = (e) => {
        setEmail(e.target.value);
    };
    const HandlePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <LoginComponent>
            <Logo />
            <br />
            <Form onSubmit={handleSubmit}>
                <Block width="400px" height="60px" color="#FEE500">
                    카카오 1초 로그인/회원가입
                </Block>
                <br />
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
                <Button>로그인</Button>
            </Form>
        </LoginComponent>
    );
};

export default LoginPage;
