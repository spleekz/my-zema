import { makeAutoObservable } from 'mobx'
import isDarkColor from 'is-dark-color'

export interface IAppStore {
  bodyBgc: string
  defaultBodyBgc: string
  isBodyBgcDark: boolean
  setBodyBgc(color: string): void
  setBodyBgcToDefault(): void
}

export class AppStore implements IAppStore {
  constructor() {
    makeAutoObservable(this)
  }

  bodyBgc: string

  get defaultBodyBgc(): string {
    return '#f3f3f3'
  }
  get isBodyBgcDark(): boolean {
    if (this.bodyBgc) {
      return isDarkColor(this.bodyBgc)
    }
    return false
  }

  setBodyBgc(color: string): void {
    this.bodyBgc = color
  }
  setBodyBgcToDefault(): void {
    this.bodyBgc = this.defaultBodyBgc
  }
}
