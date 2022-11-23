import { container } from 'tsyringe'
import { JsonWebTokenProvider } from './Implementations/JsonWebTokenProvider'

container.registerSingleton('TokenProvider', JsonWebTokenProvider)
