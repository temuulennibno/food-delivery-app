import { AuthFooter, AuthHeader } from "../../components/auth-layout";
import { PasswordField, SubmitButton, TextField } from "../../components/auth-form";

export const metadata = {
  title: "Sign up — NomNom",
};

export default function SignupPage() {
  return (
    <>
      <AuthHeader title="Create your account" subtitle="Sign up to explore your favorite dishes." />
      <form className="flex flex-col gap-4" action="/api/auth/signup" method="post">
        <TextField id="email" label="Email" type="email" placeholder="Enter your email address" autoComplete="email" required />
        <PasswordField id="password" label="Password" placeholder="Password" autoComplete="new-password" />
        <PasswordField id="confirm" label="Confirm password" placeholder="Confirm" autoComplete="new-password" />
        <SubmitButton>{"Let's Go"}</SubmitButton>
      </form>
      <AuthFooter prompt="Already have an account?" linkText="Log in" linkHref="/login" />
    </>
  );
}
