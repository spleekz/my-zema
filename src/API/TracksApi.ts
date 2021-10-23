import axios from 'axios'
import { leaveKeysInObject } from '../utils/leaveKeysInObject'

export enum Tracks {
  TISICHYA_LET = '1ICrlgbLVlja548h8HpSUY',
  MINUS_STO_SOROK = '0HOPH3OrEmGDfmdzgIYvEU',
  JIM_BEAM = '58RwT5GYBpkWbB2bLIoznq',
  ZERO = '7Dwoi3yZTWz94SZRdThfbZ',
  WEBGIRL = '1M1r8qwFY002sUNSguEB6t',
  AVSTRALIA = '5uDBztc8HWbUlMqCZV29xW',
  ANTANANARIVY = '23pHbdJ1YjtVzpXBglUTbP',
  AH = '3AmZoviJwVmnJ30Sw4aJuw',
  BEZ_SHANSOV = '4wSPU3lQJigw2QCB2LYChU',
  BLYZ = '6vstIU6XaC4Bp14Ixzk0Sm',
  V_METRO = '1nd85U5ihcVoLD1Xyfr4Gz',
  VO_MNE = '3LnM1GTwrO0ZzxU4enIf00',
  VOZMI_MENYA = '6NRJqOZa6tHgNx6yqRkwSx',
  VOSKRESENYE = '3gyo2UJ0mY3Gfyd4bkrXdk',
  GARAJI = '6m1L4DXWDnQa3U1pz6PDa7',
  GORA = '2yPtBvDgjUuseO08xBU08v',
  GOROD = '2rN2rG4wT2ObXkITTAvawH',
  GOSPODA = '4skzOq9GFrmSPJmBCaVuFP',
  GYDBAY = '2oyOWZf198yQKVenAXrdci',
  DENGI = '32pkhdZuc54IH7msbQ8GXV',
  DLYA_TEBYA = '6HQV2zdusTI55QyOrrRp2C',
  DOKAZANO = '52O1hG0ruFh6yyqW4ZLD8T',
  DOM = '68RvOd2eyLuYPsHWuLvswx',
  DAI_MNE_RYKY = '1r8QG7iPgm1v5G6ueUqLhO',
  DRYG = '3HL2nNBne3UjrmxhLpX08d',
  DISHI = '3p3bLiYrKFrrJp8TwDaChi',
  ESLI_BI = '0Mc7B37uR1OaMctghuOUWI',
  ZHIT_V_TVOEJ_GOLOVE = '11dCcDNNcSXn3UhTJ9pfEz',
  ZHYZHA = '6KPN11lsaJMVJhHRUtZlYP',
  IZ_GOLOVI = '3IONUedzBYqPKoCe2ReO72',
  INTERESNO = '6DjsexIF92TBUjgtZAYfto',
  ISKALA = '3NHSz1GyC5IeK1soZSjIIX',
  ITOGI = '01vCFWAEasqytGMhMLfF1b',
  KOFEVINO = '2WeaXysEA13jfQb8h9SZBD',
  KYVIROK = '1a52TVysPJV0gvkVZMJqaC',
  KRASOTA = '0iZXj02uBNvCOIlUm58oXG',
  LONDON = '5x7Wawn4LE5rCbCDgiBgsu',
  MALCHIK = '7tqpB2qEUmLpLhnqeYAxN1',
  MI_RAZBIVAEMSYA = '3zWIZUWyk7R6ZYQQ8ypcvl',
  MALISH = '0sXoIM0oiTj0tap1bPfwcx',
  MELODRAMA = '78H5d7bgnyT4cbacUcTBXJ',
  NE_OTPUSKAY = '1NilyZxr2KLeBp0XQ9ofce',
  NE_STRELYAJTE = '6uNXBPmcy35MmAKB8RilFR',
  NENAVISHY = '1xmvHuxAH1O2xOdkAOf4IQ',
  NEBOMOREOBLAKA = '4GKUDq0llhGn66s2e4ioiq',
  PMML = '50KDdx4HMcNxGXLAbxiHUf',
  PETARDI = '3SnTBFXbbwisD1Ext0a720',
  POHORONILA = '0vBMcEQwDbGNOqi9iPs5Ny',
  POCELYI = '3WfTXdktOTvIAt9MMW7ER5',
  POVESITSYA = '5Nog64GvkuXN95jD636d9U',
  POCHTA = '5PhZGKBLkd5wLoxttLa0XH',
  PROGYLKA = '1iccv1diVUfq0cCTU2nSEs',
  RASSVETI = '1E2lCdlQLgaPubFj03Aud9',
  REKA = '325jYxTd1ld4hkrCatxKQY',
  RAZNIE = '0JMXvZHiQqfeKTSsHOVRXp',
  SIGARETI = '59x7VqL1vwXb0dcAJ1MiOl',
  SNEG_NACHNETSYA = '0yePWhvs2VM8QTnknLFd9Y',
  SOZRELA = '7e6rTvCwCVYa3slpVUttJn',
  SPASIBO = '6MEhSHs7T3Dzj6Ur0hkKPg',
  SAMOLET = '2AZ85rZ33O2Vu4kqNJJGw5',
  TAK_I_OSTAVIM = '4gSG6d1ApPOESDUlP7hHx2',
  HOCHESH = '4wwqUoX7OweabhkpP2kaTS',
  CHAIKA = '1qaLSTUiZxGujbL0tuBkow',
  SHKALYAT_DATCHIKI = '0Jw1oXG8gZAuozDY4faoQ4',
  YA_POLYBILA_VAS = '58r0gLHw4UMoxI65i59y0D',
  ABJYS = '5MDb5JmfMV7KoQxuilj13X',
  ARIVEDERCHI = '5NHsnQXXOxC0Orkp58XLpg',
  GLAVNOE = '3qmampe6N3f6pd2mXFavbl',
  ZHDI_MENYA = '45TuT9yZgo8pfhKXqCXa9k',
  ZEMFIRA = '1Ai4FApGDLUD1ZUXkNITtU',
  KAMON = '53ONOQSikHAKtRqF6L0YRh',
  KRIM = '6hq3iGYqAbDEbkjosIIuLU',
  KTO = '2TKKNmublzw3e5i9u6Q6kE',
  MAECHKI = '20A5T7cdTk0XuNWeImCKru',
  MAMA = '7yP7a7N0SkGIwKBReDN2Ap',
  MACHO = '2QEDmqz7viaO7ttwEzQUBN',
  MECHTOY = '09FBPZGIz7j71SVyz1KYOG',
  NEPOSHLOE = '6n93raPSY5fwrinTGWTFJj',
  OK = '1xBafw3FSHFitHV5H29WHF',
  OSTIN = '0wyJL0HJwDZaLYd4GlYyqX',
  OSHYSHENIA = '6ZpejpxMHZEv1rpoc7GjE8',
  PALTO = '0UTEPvJNpUVX5vxoliswNt',
  PARANOJYA = '4EAPS3Y6IzjQZsy5lekvQE',
  PESNYA = '7whJLzgR7eZmCSh2waDA8q',
  POCHEMY = '6RqIn2HfI8zlIUwh4u54rZ',
  PRIPEVOCHKA = '6u8R5AarNlrNYKtl9ge6CY',
  R = '2np9OXVDL2DoaJhS86SDHP',
  RAKETI = '5Wg0Jc60Z21C3ILj4Pcj0z',
  ROMASHKI = '3cU0nO8u9S6INZPnwQAsy7',
  RUMBA = '50vluPB0eN3GLeW6afTFGa',
  SINOPTIK = '6jGbLXmlg7mCu8h1e6GGez',
  SKAZKI = '0yuZzxRN3GTNzhnXRiL5fe',
  SKANDAL = '4HNpcOs0oATn1KdFRKGQ21',
  SNEG = '5ypuWzb4RBFv0TWfhfClFu',
  SNEG_IDET = '4OmHmSn0uzTwAPklMtXv6T',
  SPID = '7pdfbemAJb5NS16o4Sp7zT',
  TABLETKI = '3zE5NSVtZB4FcpGa1kedMX',
  TOM = '4CUiUHngaWJDRraLwNEWge',
  TRAFIK = '1DFwwH9jNThQW5HMX3HVip',
  SHALFEY = '2m92bIJ2iQzB2Q4HyNYeJr',
  ETIM_LETOM = '36AgnAgHvFUtZzudwKolkY',
  ZNAK_BESKONECHNOST = '1zWoGo3R1tAsgsnyPeZkw6',
}

export interface ITrack {
  id: string
  name: string
  uri: string
  explicit: boolean
  album_id: string
  album_name: string
  album_images: Array<IAlbumImage>
}
interface IAlbumImage {
  width: number
  url: string
}
export interface IAlbum {
  id: string
  name: string
  album_group: string
  images: Array<IAlbumImage>
  total_tracks: number
}

interface IAllAlbumsResponse {
  items: Array<IAlbum>
}
interface IAlbumTracksResponse {
  items: Array<ITrack>
}

interface ITracksApi {
  loadAllAlbums(token: string): Promise<Array<IAlbum>>
  loadAlbumSongs(album: IAlbum, token: string): Promise<Array<ITrack>>
}

export const TracksApi: ITracksApi = {
  loadAllAlbums: (token: string) => {
    return axios
      .get<IAllAlbumsResponse>(`https://api.spotify.com/v1/artists/6oO3QiWdVj5FZQwbdRtsRh/albums`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        const result = leaveKeysInObject(res.data, ['items'])
          .items.map((al) =>
            leaveKeysInObject(al, ['album_group', 'id', 'images', 'name', 'total_tracks'])
          )
          .filter((al) => {
            return (
              (al.album_group === 'album' || (al.album_group === 'single' && al.total_tracks > 1)) &&
              al.id !== '20La0eiJlTWkyVfTEpBVEb' &&
              al.id !== '7pIje9FA3QOvKFYcXG6KDA'
            )
          })
        return result
      })
  },
  loadAlbumSongs: (album: IAlbum, token: string) => {
    return axios
      .get<IAlbumTracksResponse>(`https://api.spotify.com/v1/albums/${album.id}/tracks`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        res.data.items.forEach((track) => {
          track.album_id = album.id
          track.album_images = album.images
          track.album_name = album.name
        })
        const result = leaveKeysInObject(res.data, ['items']).items.map((t) =>
          leaveKeysInObject(t, [
            'album_id',
            'album_images',
            'album_name',
            'explicit',
            'id',
            'name',
            'uri',
          ])
        )
        return result
      })
  },
}
