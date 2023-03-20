## Social Login Service

### 개요
1. 소셜 로그인 서비스는 소셜 로그인을 제공하는 서비스를 말한다. (본 과제에서는 Kakao, Naver)
2. Naver, Kakao는 각각의 로그인 서비스를 제공하는데, 이를 이용하여 로그인을 구현한다.
3. `SocialLoginService` 의 `login()` 함수를 구현해야 한다.

### 구현해야 할 것
1. `SocialLoginService` 를 상속받는 `KakaoLoginService`, `NaverLoginService`의 `login()` 함수를 호출 했을 때 각각의 Response 스펙이 다른데 이를 통일시켜서 리턴해야 한다. (`SocialLoginResponse` 참조)
   - 주의해야할 점은 반드시 `KakaoLoginService`, `NaverLoginService` 의 코드를 수정하지 않는다
   - `login()` 함수에서 kakao, naver를 제외한 다른 소셜 로그인 서비스를 호출하면 안된다. (`LoginProviderError` 리턴해야 함)  
2. 테스트 코드 작성
