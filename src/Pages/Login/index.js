import React from "react";
import styled from "styled-components"

const Login = () => {

    return (
        <Div>
            <Header>
                <ImgLogo />
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

`;

const Header = styled.div`

`;

const ImgLogo = styled.img`

`;

const DivBody = styled.div`

`;

const FacebookButton = styled.button`

`;

const AppleButton = styled.button`

`;

const GoogleButton = styled.button`

`;

const PhoneButton = styled.button`

`;

const DivStyle = styled.div`

`;

const DivLine = styled.div`

`;

const TextDecoration = styled.p`

`;

const Form = styled.form`

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