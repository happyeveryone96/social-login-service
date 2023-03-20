import { SocialLoginProvider } from '@/types/SocialLoginProvider';

interface NaverLoginResponse {
  provider: {
    id: string;
  };
  profile: {
    user_name: string;
    email: string;
    scopes: string[];
  };
}

class NaverLogin implements SocialLoginProvider<NaverLoginResponse> {
  login(): Promise<NaverLoginResponse> {
    return Promise.resolve({
      provider: {
        id: 'be35f10d-1214-46af-af06-916429eaf77d',
      },
      profile: {
        scopes: ['email', 'name'],
        user_name: 'test',
        email: 'test@example.com',
      },
    });
  }
}

export default NaverLogin;
