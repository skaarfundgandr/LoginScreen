import { User } from '@/domain/User';

export class UserStore {
  private static instance: UserStore;
  private data: Record<string, User>;

  private constructor() {
    this.data = {};
  }

  public static getInstance(): UserStore {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore();
    }
    return UserStore.instance;
  }

  public setItem(key: string, value: User): void {
    this.data[key] = value;
  }

  public getItem(key: string): User {
    return this.data[key];
  }

  public removeItem(key: string): void {
    delete this.data[key];
  }

  public clear(): void {
    this.data = {};
  }
}