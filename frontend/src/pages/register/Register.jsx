import "./Register.css";
import {
  TextInput,
  PasswordInput,
  Paper,
  Container,
  Button,
  Title,
} from "@mantine/core";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useValidatedState } from "@mantine/hooks";

export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const [{ valid }, setEmail] = useValidatedState(
    "",
    (val) => /^\S+@\S+$/.test(val),
    true
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordConfirm.current.value) {
      passwordConfirm.current.setCustomValidity("パスワードが違います。");
    } else {
      try {
        const newUser = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post("/auth/register", newUser);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">MERN</h3>
          <span className="logoDescription">自作SNS</span>
        </div>
        <div className="registerRight">
          <Container size="xl" mx={30}>
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 700,
              })}
            >
              新規登録
            </Title>
            <Paper withBorder shadow="md" p={40} mt={50} radius="md">
              <TextInput
                label="ユーザー名"
                placeholder="you"
                required
                ref={username}
              />
              <TextInput
                label="Eメールアドレス"
                placeholder="you@mantine.dev"
                onChange={(e) => setEmail(e.currentTarget.value)}
                error={!valid}
                required
                ref={email}
              />
              <PasswordInput
                label="パスワード"
                placeholder="Your password"
                required
                mt="md"
                ref={password}
              />
              <PasswordInput
                label="確認用パスワード"
                placeholder="Your password"
                required
                mt="md"
                ref={passwordConfirm}
              />
              <Button fullWidth mt="xl" onClick={(e) => handleSubmit(e)}>
                サインアップ
              </Button>
            </Paper>
          </Container>
        </div>
      </div>
    </div>
  );
};
