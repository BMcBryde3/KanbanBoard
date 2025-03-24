import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const loggedUser = localStorage.getItem('token');
    return loggedUser;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const decodedToken = jwtDecode<JwtPayload>(token);
    return decodedToken.exp && decodedToken.exp < Date.now()
    
    
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('token') || '';

  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('token', idToken);
    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('token');
    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
