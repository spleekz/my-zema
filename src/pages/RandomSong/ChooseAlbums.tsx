import React, { FC } from 'react'
import { Checkbox } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { Field } from 'formik'

interface AlbumContainerProps {
  index: number
}

const AlbumContainer = styled.div<AlbumContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;
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
const AlbumPreview = styled.img`
  width: 100px;
  border-radius: 1.5px;
`
export const ChooseAlbums: FC = observer((): JSX.Element => {
  const { TracksStore } = useStore()

  return (
    <AlbumsFiltersBox>
      {TracksStore.albums
        .filter((al) => al.id_album !== 814405)
        .map((album, index) => {
          return (
            <AlbumContainer key={album.id_album} index={index}>
              <Field as={Checkbox} name='albums' value={album.id_album} />
              <AlbumPreview src={album.cover} />
            </AlbumContainer>
          )
        })}
    </AlbumsFiltersBox>
  )
})
