export type SocialLoginProviders = 'kakao' | 'naver';

interface User {
  id: number | string;
}

export enum LoginErrors {
  // naver, kakao 이외의 다른 provider가 넘어왔을 경우 발생하는 에러
  LoginProviderError,
}

export interface SocialLoginResponse {
  providerId: string;
  provider: string;
  user?: User;
  scopes?: string[];
  email?: string | null;
}

class SocialLoginService {
  private readonly provider: SocialLoginProviders;

  constructor({ provider }: { provider: SocialLoginProviders }) {
    this.provider = provider;
  }

  async login(): Promise<LoginErrors | SocialLoginResponse> {
    return LoginErrors.LoginProviderError;
  }
}

export default SocialLoginService;
