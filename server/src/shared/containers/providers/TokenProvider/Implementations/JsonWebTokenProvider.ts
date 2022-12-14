import { sign, verify } from 'jsonwebtoken'
import { jwt } from '../../../../../config/auth'

import { ITokenProvider } from '../Interfaces/ITokenProvider'

export class JsonWebTokenProvider implements ITokenProvider {
  generate(id: string, secret: string): string {
    const token = sign({}, secret, {
      subject: id,
      expiresIn: jwt.expiresIn,
    })

    return token
  }

  verify(token: string, secret: string): string {
    const { sub: id } = verify(token, secret)

    return id as string
  }
}
