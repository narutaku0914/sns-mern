import "./Register.css";
import {
  TextInput,
  PasswordInput,
  Paper,
  Container,
  Button,
  Title,
} from "@mantine/core";

export const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">MERN</h3>
          <span className="logoDescription">Real SNS</span>
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
              <TextInput label="ユーザー名" placeholder="you" required />
              <TextInput
                label="Eメールアドレス"
                placeholder="you@mantine.dev"
                required
              />
              <PasswordInput
                label="パスワード"
                placeholder="Your password"
                required
                mt="md"
              />
              <PasswordInput
                label="確認用パスワード"
                placeholder="Your password"
                required
                mt="md"
              />
              <Button fullWidth mt="xl">
                登録
              </Button>
            </Paper>
          </Container>
        </div>
      </div>
    </div>
  );
};
