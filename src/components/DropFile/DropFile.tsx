/* eslint-disable @next/next/no-img-element */
import Styles from '@/components/DropFile/DropFile.module.scss'
import { useSnackbar } from 'notistack'
import { memo } from 'react'
import { useDropzone } from 'react-dropzone'
import { BsImages } from 'react-icons/bs'
import { RiCloseCircleFill } from 'react-icons/ri'
import type { DropFile as Types } from '../Interface'

function DropFile(props: Types) {
  const { enqueueSnackbar } = useSnackbar()
  const { fileImages, setFileImages, size, index, width, height } = props

  // set up drop
  const onDrop = (acceptedFiles: File[]) => {
    showImageCover(acceptedFiles)
  }
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: true
  })

  // show image view
  const showImageCover = async (acceptedFiles: File[]) => {
    if (acceptedFiles) {
      const file: File = acceptedFiles[0]
      if (file) {
        const fileType = file['type']
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']
        if (!validImageTypes.includes(fileType) || size <= fileImages.length) {
          if (size <= fileImages.length) {
            enqueueSnackbar('Alo Quá tải r', { variant: 'warning' })
          } else {
            enqueueSnackbar('Sai định dạng gòi bà =))', { variant: 'warning' })
          }
        } else {
          if (file) {
            const preview = URL.createObjectURL(file)
            const path = file.name
            setFileImages([...fileImages, { preview, path, id: Date.now().toString() }])
          }
        }
      }
    }
  }

  // delete image view
  const deleteImage = (id: string) => {
    setFileImages(fileImages.filter((e) => e.id !== id))
  }

  return (
    <div className={Styles.DropImage} style={{ width: `${width}%`, height: `${height}%` }}>
      <div className={Styles.viewImage}>
        <div className={Styles.Image}>
          <RiCloseCircleFill
            className={`${Styles.close} ${fileImages[index] && Styles.isImage}`}
            onClick={() => deleteImage(fileImages[index]?.id)}
          />
          {fileImages[index] && (
            <img src={fileImages[index]?.preview} alt={fileImages[index]?.path} />
          )}
        </div>
      </div>
      <div {...getRootProps()} className={Styles.DropIn}>
        <input {...getInputProps()} alt="input" id="inputDrop" />

        {fileImages[index] ? (
          <></>
        ) : (
          <>
            <BsImages size={40} />
            <b>
              Kéo thả hoặc chọn ảnh cho vị trí {index + 1} hoặc
              <label htmlFor="inputDrop" className={Styles.buttonOpenFile}>
                click to open browse
              </label>
            </b>
          </>
        )}
      </div>
    </div>
  )
}
export default memo(DropFile)
