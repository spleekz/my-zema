import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export interface IAuthStore {
  access_token: string | null
  expires_in: number | null
  token_type: string | null
  clientId: string
  authUrl: string
  setAuthValues(token: string, time: number, type: string): void
}

export class AuthStore implements IAuthStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['access_token'],
      storage: window.localStorage,
    })
  }

  access_token: string | null = null
  expires_in: number | null = null
  token_type: string | null = null

  get clientId(): string {
    return 'f70e10b60ab646a19c33dd8e3e1d1b72'
  }
  get authUrl(): string {
    return `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
  }

  setAuthValues(token: string, time: number, type: string): void {
    this.access_token = token
    this.expires_in = time
    this.token_type = type
  }
}
