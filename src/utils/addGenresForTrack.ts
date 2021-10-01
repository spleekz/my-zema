import { ITrack, Tracks } from '../API/TracksApi'
import { FilterValues, ITrackWithGenres } from '../stores/TracksStore'

export const addGenresForTracks = (track: ITrack): ITrackWithGenres => {
  const trackWithGenre: ITrackWithGenres = {
    ...track,
    genres: [],
  }

  let genres: Array<FilterValues> = []

  const id = track.id_track

  if (id === Tracks.ARIVEDERCHI) {
    genres = ['popular', 'drama', 'medium', 'words', 'makeCalm']
  } else if (id === Tracks.AVSTRALIA_LIVE) {
    genres = ['live', 'dream', 'slow']
  } else if (id === Tracks.BEZ_SHANSOV) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.BLYZ) {
    genres = ['slow', 'drama', 'melody', 'makeCalm']
  } else if (id === Tracks.BLYZ_LIVE) {
    genres = ['slow', 'drama', 'melody', 'makeCalm', 'live']
  } else if (id === Tracks.BRIZGI_LIVE) {
    genres = ['happy', 'energetic', 'fast', 'live']
  } else if (id === Tracks.CHAIKA) {
    genres = ['happy', 'fast', 'makeCalm', 'lite']
  } else if (id === Tracks.DAI_MNE_RYKY) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.DENGI) {
    genres = ['lite', 'medium', 'words']
  } else if (id === Tracks.DENGI_LIVE) {
    genres = ['lite', 'medium', 'words', 'live']
  } else if (id === Tracks.DISHI) {
    genres = ['lite', 'slow', 'happy']
  } else if (id === Tracks.DOKAZANO) {
    genres = ['happy', 'fast', 'words', 'makeCalm', 'lite']
  } else if (id === Tracks.DOM) {
    genres = ['lite', 'happy', 'dream', 'slow']
  } else if (id === Tracks.DRYG) {
    genres = ['sad', 'drama', 'slow']
  } else if (id === Tracks.DSHOZEF) {
    genres = ['drama', 'slow', 'melody']
  } else if (id === Tracks.ESLI_BI) {
    genres = ['sad', 'slow']
  } else if (id === Tracks.GLAVNOE) {
    genres = ['happy', 'sad', 'medium', 'melody']
  } else if (id === Tracks.GLAVNOE_LIVE) {
    genres = ['happy', 'sad', 'medium', 'melody', 'live']
  } else if (id === Tracks.GORA) {
    genres = ['drama', 'slow', 'melody']
  } else if (id === Tracks.GORA_LIVE) {
    genres = ['drama', 'slow', 'melody', 'live']
  } else if (id === Tracks.GOROD) {
    genres = ['happy', 'lite', 'fast', 'makeCalm']
  } else if (id === Tracks.GOSPODA) {
    genres = ['drama', 'melody', 'fast']
  } else if (id === Tracks.HOCHESH) {
    genres = ['popular', 'drama', 'dream', 'slow', 'words', 'melody']
  } else if (id === Tracks.HOCHESH_LIVE) {
    genres = ['popular', 'drama', 'dream', 'slow', 'words', 'melody', 'live']
  } else if (id === Tracks.INTERESNO_LIVE) {
    genres = ['lite', 'medium', 'makeCalm', 'melody', 'live']
  } else if (id === Tracks.ISKALA) {
    genres = ['popular', 'fast', 'energetic', 'words']
  } else if (id === Tracks.ISKALA_LIVE) {
    genres = ['popular', 'fast', 'energetic', 'words', 'live']
  } else if (id === Tracks.ITOGI) {
    genres = ['popular', 'fast', 'words', 'melody', 'makeCalm', 'lite']
  } else if (id === Tracks.IZ_GOLOVI_LIVE) {
    genres = ['energetic', 'medium', 'live']
  } else if (id === Tracks.JIM_BEAM) {
    genres = ['lite', 'slow']
  } else if (id === Tracks.KOFEVINO) {
    genres = ['happy', 'drama', 'medium', 'words', 'makeCalm']
  } else if (id === Tracks.KOFEVINO_LIVE) {
    genres = ['happy', 'drama', 'medium', 'words', 'makeCalm', 'live']
  } else if (id === Tracks.KOGDA_SNEG_NACHNETSYA) {
    genres = ['drama', 'energetic', 'slow']
  } else if (id === Tracks.KRASOTA) {
    genres = ['sad', 'drama', 'dream', 'slow']
  } else if (id === Tracks.KTO) {
    genres = ['happy', 'lite', 'fast']
  } else if (id === Tracks.KYVIROK) {
    genres = ['fast', 'energetic', 'words']
  } else if (id === Tracks.KYVIROK_LIVE) {
    genres = ['fast', 'energetic', 'words', 'live']
  } else if (id === Tracks.LAMPOCHKI) {
    genres = ['popular', 'dream', 'slow', 'words', 'melody', 'makeCalm', 'lite', 'live']
  } else if (id === Tracks.LKSS_LIVE) {
    genres = ['energetic', 'slow', 'words', 'melody', 'live']
  } else if (id === Tracks.LONDON) {
    genres = ['popular', 'dream', 'slow', 'makeCalm']
  } else if (id === Tracks.MACHO) {
    genres = ['popular', 'medium', 'drama', 'words', 'melody']
  } else if (id === Tracks.MACHO_LIVE) {
    genres = ['popular', 'medium', 'drama', 'words', 'melody', 'live']
  } else if (id === Tracks.MAECHKI) {
    genres = ['popular', 'drama', 'dream', 'lite', 'slow', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.MALCHIK) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.MALISH) {
    genres = ['energetic', 'drama', 'medium', 'melody']
  } else if (id === Tracks.MECHTOY) {
    genres = ['drama', 'dream', 'medium', 'melody']
  } else if (id === Tracks.MINUS_STO_SOROK) {
    genres = ['popular', 'happy', 'medium', 'lite', 'makeCalm']
  } else if (id === Tracks.MI_RAZBIVAEMSYA) {
    genres = ['sad', 'drama', 'slow', 'melody']
  } else if (id === Tracks.MI_RAZBIVAEMSYA_LIVE) {
    genres = ['sad', 'drama', 'slow', 'melody', 'live']
  } else if (id === Tracks.NEBOMOREOBLAKA) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.NEBOMOREOBLAKA_LIVE) {
    genres = ['energetic', 'medium', 'words', 'live']
  } else if (id === Tracks.NENAVISHY) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.NEPOSHLOE) {
    genres = ['popular', 'dream', 'drama', 'slow', 'energetic', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.NE_OTPUSKAY) {
    genres = ['drama', 'medium']
  } else if (id === Tracks.OSHYSHENIA) {
    genres = ['dream', 'slow']
  } else if (id === Tracks.P) {
    genres = ['energetic', 'medium', 'melody']
  } else if (id === Tracks.PARANOJYA) {
    genres = ['dream', 'words', 'melody', 'medium', 'makeCalm']
  } else if (id === Tracks.PESNYA) {
    genres = ['dream', 'sad', 'drama', 'melody']
  } else if (id === Tracks.PMML) {
    genres = ['popular', 'medium', 'drama', 'dream', 'words', 'melody']
  } else if (id === Tracks.PMML_LIVE) {
    genres = ['popular', 'medium', 'drama', 'dream', 'words', 'melody', 'live']
  } else if (id === Tracks.POCHEMY) {
    genres = ['popular', 'happy', 'lite', 'fast', 'makeCalm', 'words']
  } else if (id === Tracks.POHORONILA) {
    genres = ['sad', 'slow', 'melody']
  } else if (id === Tracks.POVESITSYA) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.PRIPEVOCHKA) {
    genres = ['happy', 'fast', 'medium', 'lite']
  } else if (id === Tracks.PROGYLKA) {
    genres = ['popular', 'medium', 'dream', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.PROGYLKA_LIVE) {
    genres = ['popular', 'medium', 'dream', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.RAKETI) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.RASSVETI) {
    genres = ['drama', 'dream', 'medium', 'melody']
  } else if (id === Tracks.RAZNIE) {
    genres = ['happy', 'lite', 'medium', 'words', 'makeCalm']
  } else if (id === Tracks.REKA) {
    genres = ['sad', 'drama', 'slow', 'melody']
  } else if (id === Tracks.REKA_LIVE) {
    genres = ['sad', 'drama', 'slow', 'melody', 'energetic', 'live']
  } else if (id === Tracks.ROMASHKI) {
    genres = ['popular', 'lite', 'happy', 'fast', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.RUMBA) {
    genres = ['happy', 'lite', 'medium']
  } else if (id === Tracks.SAMOLET) {
    genres = ['sad', 'drama', 'dream', 'slow']
  } else if (id === Tracks.SHALFEY) {
    genres = ['happy', 'dream', 'energetic', 'melody', 'medium']
  } else if (id === Tracks.SHKALYAT_DATCHIKI) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.SIGARETI) {
    genres = ['drama', 'dream', 'slow']
  } else if (id === Tracks.SINOPTIK) {
    genres = ['energetic', 'lite', 'medium', 'words']
  } else if (id === Tracks.SKANDAL) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.SKANDAL_LIVE) {
    genres = ['energetic', 'fast', 'live']
  } else if (id === Tracks.SKAZKI) {
    genres = ['drama', 'dream', 'slow', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.SNEG) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.SOZRELA) {
    genres = ['happy', 'lite', 'medium', 'words']
  } else if (id === Tracks.SPASIBO) {
    genres = ['dream', 'slow', 'melody']
  } else if (id === Tracks.SPASIBO_LIVE) {
    genres = ['dream', 'slow', 'melody', 'live']
  } else if (id === Tracks.SPID) {
    genres = ['popular', 'happy', 'dream', 'medium', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.TAK_I_OSTAVIM) {
    genres = ['drama', 'dream', 'slow', 'melody']
  } else if (id === Tracks.TISICHYA_LET) {
    genres = ['sad', 'drama', 'energetic', 'slow', 'melody']
  } else if (id === Tracks.TRAFIK) {
    genres = ['energetic', 'drama', 'medium', 'words', 'melody']
  } else if (id === Tracks.VOSKRESENYE) {
    genres = ['happy', 'energetic', 'medium']
  } else if (id === Tracks.VOZMI_MENYA) {
    genres = ['lite', 'dream', 'slow', 'makeCalm']
  } else if (id === Tracks.VO_MNE) {
    genres = ['lite', 'dream', 'slow']
  } else if (id === Tracks.VO_MNE_LIVE) {
    genres = ['lite', 'dream', 'slow', 'live']
  } else if (id === Tracks.V_METRO) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.WEBGIRL) {
    genres = ['drama', 'dream', 'slow', 'melody']
  } else if (id === Tracks.YA_POLYBILA_VAS) {
    genres = ['drama', 'medium', 'melody']
  } else if (id === Tracks.ZA_BILETI_LIVE) {
    genres = ['happy', 'lite', 'medium', 'words', 'makeCalm', 'live']
  } else if (id === Tracks.ZEMFIRA) {
    genres = ['drama', 'slow', 'makeCalm']
  } else if (id === Tracks.ZERO) {
    genres = ['lite', 'slow', 'makeCalm']
  } else if (id === Tracks.ZHIT_V_TVOEJ_GOLOVE) {
    genres = ['drama', 'slow']
  } else if (id === Tracks.ZHIT_V_TVOEJ_GOLOVE_LIVE) {
    genres = ['drama', 'slow', 'live']
  } else if (id === Tracks.ZHYZHA) {
    genres = ['drama', 'dream', 'slow', 'melody', 'makeCalm']
  } else if (id === Tracks.ZNAK_BESKONECHNOST) {
    genres = ['popular', 'drama', 'dream', 'energetic', 'slow', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.ZNAK_BESKONECHNOST_LIVE) {
    genres = ['popular', 'drama', 'dream', 'energetic', 'slow', 'words', 'melody', 'makeCalm', 'live']
  }

  trackWithGenre.genres = genres
  return trackWithGenre
}
