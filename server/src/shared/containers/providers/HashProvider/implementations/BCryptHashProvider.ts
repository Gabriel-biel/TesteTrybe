import { IHashProvider } from '../interfaces/IHashProvider'
import { compare, hash } from 'bcrypt'

export class BCryptHashProvider implements IHashProvider {
  async generateHash(password: string): Promise<string> {
    return hash(password, 10)
  }

  async compareHash(password: string, hashed: string): Promise<boolean> {
    return compare(password, hashed)
  }
}
