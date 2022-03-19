import React from "react";
import styled from "styled-components"
import logo from "../../assets/logo_spotify.png"

const Login = () => {

    return (
        <Div>
            <Header>
                <ImgLogo src={logo} alt="Logo"/>
            </Header>
            <DivBody>
                <FacebookButton>CONTINUAR COM O FACEBOOK</FacebookButton>
                <AppleButton>CONTINUAR COM A APPLE</AppleButton>
                <GoogleButton>CONTINUAR COM O GOOGLE</GoogleButton>
                <PhoneButton>CONTINUAR COM UM NÚMERO DE TELEFONE</PhoneButton>
                <DivStyle>
                    <DivLine></DivLine>
                    <TextDecoration>OU</TextDecoration>
                    <DivLine></DivLine>
                </DivStyle>
                <Form>
                    <Label>Endereço de e-mail ou nome de usuário</Label>
                    <InputEmail />
                    <Label>Senha</Label>
                    <InputPassword />
                    <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
                    <DivRemember>
                        <ButtonToRemember></ButtonToRemember>
                        <LabelPasswordRemember>Lembrar de mim</LabelPasswordRemember>
                    </DivRemember>
                    <ButtonNext>Entrar</ButtonNext>
                </Form>
                <DivBaseboard>
                    <LabelBaseboard>Não tem uma conta?</LabelBaseboard>
                    <ButtonRegister></ButtonRegister>
                </DivBaseboard>
            </DivBody>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100vh 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #696969 ;
`;

const ImgLogo = styled.img`
    width: 130px;
    height: 40px;
`;

const DivBody = styled.div`
    width: 500px;
    height: 100vh 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const FacebookButton = styled.button`
    width: 400px;
    height: 40px;
    margin-top: 10px;
    border-radius:20px;
    border: 0px;
    color: #FFF;
    background-color: #3B5998 ;
    cursor: pointer;
`;

const AppleButton = styled.button`
    width: 400px;
    height: 40px;
    margin-top: 10px;
    border-radius:20px;
    border: 0px;
    color: #FFF;
    background-color: #000;
    cursor: pointer;
`;

const GoogleButton = styled.button`
    width: 400px;
    height: 40px;
    margin-top: 10px;
    border-radius:20px;
    border: 1px solid #696969;
    color: #696969;
    background-color: #FFF;
    cursor: pointer;
`;

const PhoneButton = styled.button`
    width: 400px;
    height: 40px;
    margin-top: 10px;
    border-radius:20px;
    border: 1px solid #696969;
    color: #696969;
    background-color: #FFF;
    cursor: pointer;
`;

const DivStyle = styled.div`

`;

const DivLine = styled.div`

`;

const TextDecoration = styled.p`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`

`;

const InputEmail = styled.input`

`;

const InputPassword = styled.input`

`;

const ForgotPassword = styled.label`

`;

const DivRemember = styled.div`

`;

const ButtonToRemember = styled.button`

`;

const LabelPasswordRemember = styled.label`

`;

const ButtonNext = styled.button`

`;

const DivBaseboard = styled.div`

`;

const LabelBaseboard = styled.label`

`;

const ButtonRegister = styled.button`

`;

export default Login;