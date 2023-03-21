import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

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
    const kakaoLogin = new KakaoLogin();
    const naverLogin = new NaverLogin();

    if (this.provider === 'kakao') {
      const res = await kakaoLogin.login();
      const providerId = res.provider_id;
      const provider = this.provider;
      const { user, scopes } = res.profile;
      const { id, email } = user;
      return { providerId, provider, user: { id }, scopes, email };
    } else if (this.provider === 'naver') {
      const res = await naverLogin.login();
      const providerId = res.provider.id;
      const provider = this.provider;
      const { scopes, email, user_name } = res.profile;
      return { providerId, provider, user: { id: user_name }, scopes, email };
    }
    return LoginErrors.LoginProviderError;
  }
}

export default SocialLoginService;
