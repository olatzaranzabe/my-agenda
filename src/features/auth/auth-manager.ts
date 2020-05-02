export class AuthManager {
  isAuthenticated() {
    return sessionStorage.getItem('userInfo') !== null;
  }
}
