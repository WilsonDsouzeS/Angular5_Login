interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'DPxoTRJR2dBzhKdJOlbJL_zXvm_Ct9TX',
  domain: 'wils.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
