import { makeAutoObservable } from 'mobx'

export interface IAppStore {
  bodyBgc: string
  setBodyBgc(color: string): void
}

export class AppStore implements IAppStore {
  constructor() {
    makeAutoObservable(this)
  }

  bodyBgc = '#f3f3f3'

  setBodyBgc(color: string): void {
    this.bodyBgc = color
  }
}
