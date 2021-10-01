import axios from 'axios'
import { leaveKeysInObject } from '../utils/leaveKeysInObject'

export enum Tracks {
  V_METRO = 10626035,
  GOSPODA = 10626041,
  KOGDA_SNEG_NACHNETSYA = 10626040,
  MALCHIK = 10626039,
  MI_RAZBIVAEMSYA = 10626038,
  DOM = 10626037,
  VOSKRESENYE = 10626036,
  VOZMI_MENYA = 10626046,
  TISICHYA_LET = 10626045,
  SPASIBO = 10626044,
  YA_POLYBILA_VAS = 10626043,
  VO_MNE = 10626042,
  DSHOZEF = 11728524,
  ISKALA = 1453244,
  DOKAZANO = 1453243,
  PMML = 1453242,
  NE_OTPUSKAY = 1453241,
  LONDON = 1453240,
  SIGARETI = 1453239,
  NENAVISHY = 1453238,
  GOROD = 1453237,
  RASSVETI = 1453236,
  HOCHESH = 1453235,
  SOZRELA = 1453234,
  ZERO = 1453233,
  SHKALYAT_DATCHIKI = 1453232,
  MECHTOY = 5639629,
  OSHYSHENIA = 5639628,
  P = 5639627,
  GLAVNOE = 5639626,
  WEBGIRL = 5639625,
  KTO = 5639624,
  SHALFEY = 5639623,
  PESNYA = 5639622,
  MACHO = 5639621,
  ZNAK_BESKONECHNOST = 5639620,
  SKAZKI = 5639619,
  TRAFIK = 5639618,
  PARANOJYA = 5639617,
  CHAIKA = 9225250,
  BEZ_SHANSOV = 9225249,
  DENGI = 9225248,
  KYVIROK = 9225247,
  KOFEVINO = 9225246,
  ESLI_BI = 9225245,
  ZHIT_V_TVOEJ_GOLOVE = 9225244,
  GORA = 9225253,
  POHORONILA = 9225252,
  REKA = 9225251,
  MINUS_STO_SOROK = 526709,
  RAKETI = 526708,
  ARIVEDERCHI = 526707,
  PRIPEVOCHKA = 526706,
  ZEMFIRA = 526705,
  NEPOSHLOE = 526704,
  SKANDAL = 526703,
  RUMBA = 526702,
  SPID = 526701,
  MAECHKI = 526700,
  ROMASHKI = 526699,
  SINOPTIK = 526698,
  SNEG = 526697,
  POCHEMY = 526696,
  MALISH = 2870248,
  DAI_MNE_RYKY = 2870247,
  KRASOTA = 2870246,
  PROGYLKA = 2870245,
  JIM_BEAM = 2870244,
  ZHYZHA = 2870243,
  POVESITSYA = 2870242,
  BLYZ = 2870241,
  RAZNIE = 2870240,
  DRYG = 2870239,
  SAMOLET = 2870238,
  TAK_I_OSTAVIM = 2870237,
  ITOGI = 2870236,
  DISHI = 2870235,
  NEBOMOREOBLAKA = 2870234,
  LAMPOCHKI = 2870558,
  SPASIBO_LIVE = 2870557,
  ZNAK_BESKONECHNOST_LIVE = 2870556,
  PMML_LIVE = 2870555,
  KOFEVINO_LIVE = 2870554,
  VO_MNE_LIVE = 2870553,
  NEBOMOREOBLAKA_LIVE = 2870552,
  IZ_GOLOVI_LIVE = 2870551,
  MI_RAZBIVAEMSYA_LIVE = 2870550,
  PROGYLKA_LIVE = 2870549,
  KYVIROK_LIVE = 2870548,
  ISKALA_LIVE = 2870547,
  BRIZGI_LIVE = 2870546,
  BLYZ_LIVE = 2870545,
  LKSS_LIVE = 2870544,
  HOCHESH_LIVE = 2870543,
  DENGI_LIVE = 2870542,
  INTERESNO_LIVE = 2870541,
  AVSTRALIA_LIVE = 2870540,
  GLAVNOE_LIVE = 2870539,
  SKANDAL_LIVE = 2870538,
  ZA_BILETI_LIVE = 2870537,
  GORA_LIVE = 2870536,
  ZHIT_V_TVOEJ_GOLOVE_LIVE = 2870535,
  MACHO_LIVE = 2870534,
  REKA_LIVE = 2870533,
}

export interface IAlbum {
  album: string
  id_album: number
  cover: string
}
export interface ITrack {
  albumName: string
  albumImage: string
  id_track: Tracks
  track: string
}
interface IAllAlbumsResponse {
  result: {
    albums: Array<IAlbum>
  }
}
interface IAlbumTracksResponse {
  result: {
    album: string
    cover: string
    tracks: Array<ITrack>
  }
}

interface ITracksApi {
  loadAllAlbums(): Promise<Array<IAlbum>>
  loadAlbumSongs(albumId: number): Promise<Array<ITrack>>
}

export const TracksApi: ITracksApi = {
  loadAllAlbums: () => {
    return axios
      .get<IAllAlbumsResponse>(
        `https://api.happi.dev/v1/music/artists/22976/albums?apikey=c1daf3EdSn0uqoCNEb0lJZC4oFEzSBeKnmze4rCYe34uev977TGPRjVn`
      )
      .then((res) => {
        const resData = leaveKeysInObject(res.data, ['result'])
        resData.result = leaveKeysInObject(res.data.result, ['albums'])
        resData.result.albums = resData.result.albums.map((album) =>
          leaveKeysInObject(album, ['album', 'id_album', 'cover'])
        )
        return resData.result.albums.filter((al) => al.id_album !== 511694 && al.id_album !== 38633)
      })
  },
  loadAlbumSongs: (albumId: number) => {
    return axios
      .get<IAlbumTracksResponse>(
        `https://api.happi.dev/v1/music/artists/22976/albums/${albumId}/tracks?apikey=c1daf3EdSn0uqoCNEb0lJZC4oFEzSBeKnmze4rCYe34uev977TGPRjVn`
      )
      .then((res) => {
        const resData = leaveKeysInObject(res.data, ['result'])
        resData.result = leaveKeysInObject(res.data.result, ['tracks', 'album', 'cover'])
        resData.result.tracks = resData.result.tracks.map((track) => {
          track.albumName = resData.result.album
          track.albumImage = resData.result.cover
          return leaveKeysInObject(track, ['id_track', 'track', 'albumName', 'albumImage'])
        })
        return resData.result.tracks
      })
  },
}
