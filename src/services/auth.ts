import api from "./api";

type SignInProps = {
  email: string;
  password: string;
}

export async function signIn(data: SignInProps) {
  return await api.post('/auth/sign-in', data);
}

type RefreshTokenProps = {
  refreshToken: string;
}

export async function refreshToken(data: RefreshTokenProps) {
  return await api.post('/auth/refresh-token', data);
}