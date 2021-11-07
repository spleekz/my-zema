import { ITrack, Tracks } from '../API/TracksApi'
import { FilterValues, ITrackWithGenres } from '../stores/TracksStore'

export const addGenresForTracks = (track: ITrack): ITrackWithGenres => {
  const trackWithGenre: ITrackWithGenres = {
    ...track,
    genres: [],
  }

  let genres: Array<FilterValues> = []

  const id = track.id

  if (id === Tracks.ARIVEDERCHI) {
    genres = ['popular', 'drama', 'medium', 'words', 'makeCalm', 'energetic']
  } else if (id === Tracks.BEZ_SHANSOV) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.BLYZ) {
    genres = ['slow', 'dream', 'energetic', 'melody', 'makeCalm']
  } else if (id === Tracks.CHAIKA) {
    genres = ['happy', 'fast', 'makeCalm', 'lite']
  } else if (id === Tracks.DAI_MNE_RYKY) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.DENGI) {
    genres = ['lite', 'medium', 'words']
  } else if (id === Tracks.DISHI) {
    genres = ['lite', 'slow', 'makeCalm']
  } else if (id === Tracks.DOKAZANO) {
    genres = ['happy', 'fast', 'words', 'makeCalm', 'lite']
  } else if (id === Tracks.DOM) {
    genres = ['lite', 'happy', 'dream', 'slow']
  } else if (id === Tracks.DRYG) {
    genres = ['sad', 'drama', 'slow', 'melody']
  } else if (id === Tracks.ESLI_BI) {
    genres = ['sad', 'slow']
  } else if (id === Tracks.GLAVNOE) {
    genres = ['happy', 'sad', 'medium', 'melody']
  } else if (id === Tracks.GORA) {
    genres = ['drama', 'slow', 'melody']
  } else if (id === Tracks.GOROD) {
    genres = ['happy', 'lite', 'fast', 'makeCalm']
  } else if (id === Tracks.GOSPODA) {
    genres = ['drama', 'melody', 'fast']
  } else if (id === Tracks.HOCHESH) {
    genres = ['popular', 'drama', 'dream', 'slow', 'words', 'melody']
  } else if (id === Tracks.ISKALA) {
    genres = ['popular', 'fast', 'energetic', 'words']
  } else if (id === Tracks.ITOGI) {
    genres = ['popular', 'fast', 'melody', 'makeCalm', 'lite']
  } else if (id === Tracks.JIM_BEAM) {
    genres = ['lite', 'slow']
  } else if (id === Tracks.KOFEVINO) {
    genres = ['drama', 'medium', 'words', 'makeCalm']
  } else if (id === Tracks.KRASOTA) {
    genres = ['sad', 'drama', 'melody', 'slow']
  } else if (id === Tracks.KTO) {
    genres = ['happy', 'lite', 'fast']
  } else if (id === Tracks.KYVIROK) {
    genres = ['fast', 'energetic', 'words']
  } else if (id === Tracks.LONDON) {
    genres = ['popular', 'dream', 'slow', 'makeCalm']
  } else if (id === Tracks.MACHO) {
    genres = ['popular', 'medium', 'drama', 'words', 'melody']
  } else if (id === Tracks.MAECHKI) {
    genres = ['popular', 'drama', 'dream', 'lite', 'slow', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.MALCHIK) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.MALISH) {
    genres = ['energetic', 'drama', 'medium', 'melody', 'lite']
  } else if (id === Tracks.MECHTOY) {
    genres = ['drama', 'dream', 'medium', 'melody']
  } else if (id === Tracks.MINUS_STO_SOROK) {
    genres = ['popular', 'happy', 'medium', 'lite', 'makeCalm']
  } else if (id === Tracks.MI_RAZBIVAEMSYA) {
    genres = ['sad', 'drama', 'slow', 'melody']
  } else if (id === Tracks.NEBOMOREOBLAKA) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.NENAVISHY) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.NEPOSHLOE) {
    genres = ['popular', 'dream', 'sad', 'slow', 'energetic', 'melody', 'makeCalm']
  } else if (id === Tracks.NE_OTPUSKAY) {
    genres = ['drama', 'medium']
  } else if (id === Tracks.OSHYSHENIA) {
    genres = ['dream', 'slow']
  } else if (id === Tracks.R) {
    genres = ['energetic', 'medium', 'melody']
  } else if (id === Tracks.PARANOJYA) {
    genres = ['dream', 'words', 'melody', 'medium', 'makeCalm']
  } else if (id === Tracks.PESNYA) {
    genres = ['dream', 'sad', 'melody', 'slow']
  } else if (id === Tracks.PMML) {
    genres = ['popular', 'medium', 'drama', 'dream', 'words', 'melody']
  } else if (id === Tracks.POCHEMY) {
    genres = ['popular', 'happy', 'lite', 'fast', 'makeCalm', 'words']
  } else if (id === Tracks.POHORONILA) {
    genres = ['sad', 'slow', 'melody']
  } else if (id === Tracks.POVESITSYA) {
    genres = ['energetic', 'medium', 'words']
  } else if (id === Tracks.PRIPEVOCHKA) {
    genres = ['happy', 'fast', 'medium', 'lite']
  } else if (id === Tracks.PROGYLKA) {
    genres = ['popular', 'medium', 'dream', 'energetic', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.RAKETI) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.RASSVETI) {
    genres = ['drama', 'dream', 'medium', 'melody']
  } else if (id === Tracks.RAZNIE) {
    genres = ['happy', 'lite', 'medium', 'words', 'makeCalm']
  } else if (id === Tracks.REKA) {
    genres = ['sad', 'drama', 'slow', 'melody']
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
    genres = ['drama', 'dream', 'sad', 'slow']
  } else if (id === Tracks.SINOPTIK) {
    genres = ['energetic', 'lite', 'medium', 'words']
  } else if (id === Tracks.SKANDAL) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.SKAZKI) {
    genres = ['drama', 'dream', 'lite', 'slow', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.SNEG) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.SNEG_NACHNETSYA) {
    genres = ['drama', 'energetic', 'slow']
  } else if (id === Tracks.SOZRELA) {
    genres = ['happy', 'lite', 'medium', 'words']
  } else if (id === Tracks.SPASIBO) {
    genres = ['dream', 'slow', 'melody']
  } else if (id === Tracks.SPID) {
    genres = ['popular', 'happy', 'medium', 'words', 'makeCalm']
  } else if (id === Tracks.TAK_I_OSTAVIM) {
    genres = ['drama', 'dream', 'slow', 'melody']
  } else if (id === Tracks.TISICHYA_LET) {
    genres = ['sad', 'drama', 'energetic', 'slow', 'melody']
  } else if (id === Tracks.TRAFIK) {
    genres = ['energetic', 'drama', 'medium', 'melody']
  } else if (id === Tracks.VOSKRESENYE) {
    genres = ['happy', 'energetic', 'medium']
  } else if (id === Tracks.VOZMI_MENYA) {
    genres = ['lite', 'dream', 'slow', 'makeCalm']
  } else if (id === Tracks.VO_MNE) {
    genres = ['lite', 'dream', 'slow']
  } else if (id === Tracks.V_METRO) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.WEBGIRL) {
    genres = ['drama', 'dream', 'slow', 'melody']
  } else if (id === Tracks.YA_POLYBILA_VAS) {
    genres = ['drama', 'medium', 'melody']
  } else if (id === Tracks.ZEMFIRA) {
    genres = ['sad', 'drama', 'slow', 'makeCalm']
  } else if (id === Tracks.ZERO) {
    genres = ['happy', 'lite', 'slow', 'makeCalm']
  } else if (id === Tracks.ZHIT_V_TVOEJ_GOLOVE) {
    genres = ['drama', 'slow', 'popular']
  } else if (id === Tracks.ZHYZHA) {
    genres = ['drama', 'dream', 'sad', 'slow', 'melody', 'makeCalm']
  } else if (id === Tracks.ZNAK_BESKONECHNOST) {
    genres = ['popular', 'drama', 'dream', 'energetic', 'slow', 'words', 'melody', 'makeCalm']
  } else if (id === Tracks.PETARDI) {
    genres = ['energetic', 'fast']
  } else if (id === Tracks.GARAJI) {
    genres = ['energetic', 'fast', 'words']
  } else if (id === Tracks.IZ_GOLOVI) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.AVSTRALIA) {
    genres = ['dream', 'slow']
  } else if (id === Tracks.INTERESNO) {
    genres = ['lite', 'dream', 'medium', 'makeCalm', 'melody']
  } else if (id === Tracks.POCELYI) {
    genres = ['happy', 'lite', 'medium', 'melody', 'words', 'makeCalm']
  } else if (id === Tracks.DLYA_TEBYA) {
    genres = ['happy', 'lite', 'medium']
  } else if (id === Tracks.ANTANANARIVY) {
    genres = ['happy', 'lite', 'energetic', 'medium']
  } else if (id === Tracks.NE_STRELYAJTE) {
    genres = ['sad', 'slow', 'melody']
  } else if (id === Tracks.TABLETKI) {
    genres = ['slow', 'energetic', 'words', 'popular']
  } else if (id === Tracks.OK) {
    genres = ['sad', 'slow', 'energetic']
  } else if (id === Tracks.ETIM_LETOM) {
    genres = ['energetic', 'medium']
  } else if (id === Tracks.PALTO) {
    genres = ['popular', 'lite', 'makeCalm', 'slow', 'dream', 'melody']
  } else if (id === Tracks.KAMON) {
    genres = ['energetic', 'slow', 'melody']
  } else if (id === Tracks.TOM) {
    genres = ['drama', 'sad', 'medium']
  } else if (id === Tracks.ZHDI_MENYA) {
    genres = ['sad', 'slow', 'drama', 'popular']
  } else if (id === Tracks.ABJYS) {
    genres = ['dream', 'slow', 'melody', 'words', 'popular']
  } else if (id === Tracks.OSTIN) {
    genres = ['dream', 'slow', 'melody', 'makeCalm']
  } else if (id === Tracks.MAMA) {
    genres = ['sad', 'medium']
  } else if (id === Tracks.KRIM) {
    genres = ['slow', 'energetic', 'dream', 'drama', 'melody']
  } else if (id === Tracks.SNEG_IDET) {
    genres = ['lite', 'dream', 'slow', 'makeCalm', 'melody']
  } else if (id === Tracks.AH) {
    genres = ['lite', 'dream', 'slow', 'makeCalm', 'melody', 'popular']
  } else if (id === Tracks.POCHTA) {
    genres = ['fast', 'happy', 'lite', 'words', 'makeCalm', 'makeCalm', 'popular']
  } else if (id === Tracks.MELODRAMA) {
    genres = ['drama', 'medium']
  } else if (id === Tracks.GYDBAY) {
    genres = ['sad', 'slow', 'dream', 'drama', 'melody']
  }

  trackWithGenre.genres = genres
  return trackWithGenre
}
