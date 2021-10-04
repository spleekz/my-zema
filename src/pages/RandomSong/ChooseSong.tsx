import React, { FC } from 'react'
import styled from 'styled-components'
import { TrackFilters } from './TrackFilters'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { Checkbox } from '@material-ui/core'

interface AlbumContainerProps {
  index: number
}

const ChooseSongPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  width: 1250px;
  height: 790px;
`
const SongFiltersBox = styled.div`
  padding: 20px;
  width: 73%;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  margin-right: 8px;
`
const SongFiltersTitle = styled.div`
  font-size: 38px;
  font-weight: bold;
`
const Divider = styled.hr`
  margin: 2px;
  border-color: rgba(0, 0, 0, 0.12);
`
const AlbumsFiltersBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 18%;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  margin-left: 8px;
`
const FiltersContainer = styled.div``
const AlbumContainer = styled.div<AlbumContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;
`
const AlbumPreview = styled.img`
  width: 100px;
  border-radius: 3px;
`

export const ChooseSong: FC = observer((): JSX.Element => {
  const { TracksStore } = useStore()
  return (
    <ChooseSongPageContainer>
      <SongFiltersBox>
        <SongFiltersTitle>Выберите, какую песню хотите услышать</SongFiltersTitle>
        <Divider />
        <FiltersContainer>
          <TrackFilters />
        </FiltersContainer>
      </SongFiltersBox>
      <AlbumsFiltersBox>
        {TracksStore.albums
          .filter((al) => al.id_album !== 814405)
          .map((album, index) => {
            return (
              <AlbumContainer key={album.id_album} index={index}>
                <Checkbox />
                <AlbumPreview src={album.cover} />
              </AlbumContainer>
            )
          })}
      </AlbumsFiltersBox>
    </ChooseSongPageContainer>
  )
})
