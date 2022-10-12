import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Text,
  Container,
  Group,
  Button,
  Title,
} from "@mantine/core";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../dispatch";
import { AuthContext } from "../../state/AuthContext";
import "./Login.css";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERN</h3>
          <span className="logoDescription">自作SNS</span>
        </div>
        <div className="loginRight">
          <Container size="xl" mx={30}>
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 700,
              })}
            >
              ログイン
            </Title>
            <Paper withBorder shadow="md" p={40} mt={50} radius="md">
              <TextInput
                type="email"
                label="Eメールアドレス"
                placeholder="you@mantine.dev"
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
              <Group position="apart" mt="md">
                <Checkbox label="ログイン情報を保存する" />
                <Anchor
                  onClick={(event) => event.preventDefault()}
                  href="#"
                  size="sm"
                >
                  パスワードを忘れましたか？
                </Anchor>
              </Group>
              <Button fullWidth mt="xl" onClick={(e) => handleSubmit(e)}>
                サインイン
              </Button>
            </Paper>
            <Text color="dimmed" size="sm" align="center" mt={5}>
              登録はまだですか？{" "}
              <Anchor component={Link} to="/register" size="sm">
                アカウントを新規作成する
              </Anchor>
            </Text>
          </Container>
        </div>
      </div>
    </div>
  );
};
