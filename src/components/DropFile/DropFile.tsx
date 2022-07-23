/* eslint-disable @next/next/no-img-element */
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { RiCloseCircleFill } from 'react-icons/ri'
import { BsImages } from 'react-icons/bs'
import Styles from '@/components/DropFile/DropFile.module.scss'
import type { DropFile as Types, FileView } from '../Interface'
import { toast, ToastContainer } from 'react-toastify'

function DropFile(props: Types) {
  const { fileImages, setFileImages, size, index } = props

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
            toast.warning('Hết cỡ rồi bà nội =))')
            toast.clearWaitingQueue()
          } else {
            toast.error('Sai định dạng gòi bà =))')
            toast.clearWaitingQueue()
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
    <div className={Styles.DropImage}>
      <ToastContainer limit={1} autoClose={500} hideProgressBar pauseOnFocusLoss={false} />
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
