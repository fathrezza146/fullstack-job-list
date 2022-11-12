export type ILoginRequest = {
  username: string,
  password: string,
};

export type ILoginResponse = {
  status: string
  token: string
  type: string
}
