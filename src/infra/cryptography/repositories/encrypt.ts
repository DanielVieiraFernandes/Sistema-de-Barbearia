export abstract class Encrypt {
  abstract encrypt(sub: string, role: string): Promise<string>;
}
