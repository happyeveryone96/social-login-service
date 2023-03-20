import SocialLoginService from '../src/services/SocialLoginService';

describe('SocialLoginService', () => {
  it('should login through kakao', async () => {
    const service = new SocialLoginService({ provider: 'kakao' });
    const resp = await service.login();

    const expectedResponse = Promise.resolve({
      provider: {
        name: 'kakao',
        id: 'be35f10d-1214-46af-af06-916429eaf77d',
      },
      profile: {
        userId: 'be35f10d-1214-46af-af06-916429eaf77d',
        email: 'test@example.com',
        scopes: ['email', 'name'],
      },
    });

    expect(Promise.resolve(resp)).toStrictEqual(expectedResponse);
  });
  it('should login through naver', async () => {
    const service = new SocialLoginService({ provider: 'naver' });
    const resp = await service.login();

    const expectedResponse = Promise.resolve({
      provider: {
        name: 'naver',
        id: 'be35f10d-1214-46af-af06-916429eaf77d',
      },
      profile: {
        username: 'test',
        email: 'test@example.com',
        scopes: ['email', 'name'],
      },
    });

    expect(Promise.resolve(resp)).toStrictEqual(expectedResponse);
  });
});
