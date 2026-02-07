import { UserStore } from '@/application/UserStore';
import { AuthError, AuthErrorKind } from '@/domain/errors/AuthError';

function login(username: string, password: string): boolean {
  const store = UserStore.getInstance();

  const user = store.getItem(username);
  return user && user.password === password;
}

function register(name: string, password: string): boolean {
  const store = UserStore.getInstance();

  if (store.getItem(name)) {
    throw new AuthError(AuthErrorKind.USER_ALREADY_EXISTS, `User with name already exists.`);
  }

  const newUser = { name, password };

  store.setItem(name, newUser);
  return true;
}

export { login, register };