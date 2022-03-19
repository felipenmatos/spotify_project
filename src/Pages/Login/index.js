import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo_spotify.png";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.png";
import apple from "../../assets/apple.svg";

const Login = () => {

    return (
        <Div>
            <Header>
                <ImgLogo src={logo} alt="Logo"/>
            </Header>
            <DivBody>
                <FacebookButton>
                    <FacebookIcon src={facebook} alt="icone-facebook"/>
                    CONTINUAR COM O FACEBOOK
                </FacebookButton>
                <AppleButton>
                    <AppleIcon src={apple} alt="apple"/>
                    CONTINUAR COM A APPLE
                </AppleButton>
                <GoogleButton>
                    <GoogleIcon src={google} alt="icone-google"/>
                    CONTINUAR COM O GOOGLE
                </GoogleButton>
                <PhoneButton>
                    CONTINUAR COM UM NÚMERO DE TELEFONE
                </PhoneButton>
                <DivStyle>
                    <DivLineLeft></DivLineLeft>
                    <TextDecoration>OU</TextDecoration>
                    <DivLineRight></DivLineRight>
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
                <DivBaseboard></DivBaseboard>
                <LabelBaseboard>Não tem uma conta?</LabelBaseboard>
                <ButtonRegister>INSCREVER-SE NO SPOTIFY</ButtonRegister>
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius:20px;
    border: 0px;
    color: #FFF;
    background-color: #3B5998 ;
    cursor: pointer;
`;

const FacebookIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;
`;

const AppleButton = styled.button`
    width: 400px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius:20px;
    border: 0px;
    color: #FFF;
    background-color: #000;
    cursor: pointer;
`;

const AppleIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;
`;

const GoogleButton = styled.button`
    width: 400px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius:20px;
    border: 1px solid #696969;
    color: #696969;
    background-color: #FFF;
    cursor: pointer;
`;

const GoogleIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const DivLineLeft = styled.div`
    width: 180px;
    border: 1px solid #696969;
`;

const DivLineRight = styled.div`
    width: 180px;
    border: 1px solid #696969;
`;

const TextDecoration = styled.p`
    margin-top: 25px;
    margin-left: 5px;
    margin-right: 5px;
`;

const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`

`;

const InputEmail = styled.input`
    height: 30px;
    margin-top: 10px;
    padding: 5px 10px;
`;

const InputPassword = styled.input`
    height: 30px;
    margin-top: 10px;
    padding: 5px 10px;
`;

const ForgotPassword = styled.label`
    margin-top: 20px;
`;

const DivRemember = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const ButtonToRemember = styled.button`
    margin-right: 20px;
    cursor: pointer;
`;

const LabelPasswordRemember = styled.label`

`;

const ButtonNext = styled.button`
    width: 100px;
    height: 40px;
    margin-top: -25px;
    margin-left: 75%;
    position: relative;
    border-radius: 20px;
    border: 0px;
    background-color: #32cd32;
    font-size: 18px;
`;

const DivBaseboard = styled.div`
    width: 80%;
    margin-top: 20px;
    border: 1px solid #696969;
`;

const LabelBaseboard = styled.label`
    margin-top: 20px;
    font-size: 20px;
`;

const ButtonRegister = styled.button`
    width: 400px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #696969;
    border: 1px solid #696969;
    background-color: #FFF;
    border-radius: 20px;
`;  

export default Login;