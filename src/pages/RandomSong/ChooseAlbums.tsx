import React, { FC } from 'react'
import { Checkbox } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { Field } from 'formik'

interface AlbumContainerProps {
  index: number
}

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
  overflow-y: scroll;
`
const AlbumContainer = styled.div<AlbumContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;
`
const AlbumPreview = styled.div<{ imageSrc: string }>`
  width: 100px;
  height: 100px;
  border-radius: 1.5px;
  background-image: ${(props) => `url(${props.imageSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ChooseAlbums: FC = observer((): JSX.Element => {
  const { TracksStore } = useStore()

  return (
    <AlbumsFiltersBox>
      {TracksStore.albums.map((album, index) => {
        return (
          <AlbumContainer key={album.id} index={index}>
            <Field as={Checkbox} name='albums' value={album.id} />
            <AlbumPreview imageSrc={album.images[0].url} />
          </AlbumContainer>
        )
      })}
    </AlbumsFiltersBox>
  )
})
