import { makeAutoObservable } from 'mobx'
import isDarkColor from 'is-dark-color'

export interface IAppStore {
  bodyBgc: string
  isBodyBgcDark: boolean
  setBodyBgc(color: string): void
}

export class AppStore implements IAppStore {
  constructor() {
    makeAutoObservable(this)
  }

  bodyBgc = '#f3f3f3'

  get isBodyBgcDark(): boolean {
    return isDarkColor(this.bodyBgc)
  }

  setBodyBgc(color: string): void {
    this.bodyBgc = color
  }
}
