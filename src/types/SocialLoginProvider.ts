export interface SocialLoginProvider<T> {
  login(): Promise<T>;
}
