export interface CredencialesUsuario{
  email: string;
  password: string;
}

export interface RespuestaAutenticacion{
  token: string;
  expiracion : Date;
}
