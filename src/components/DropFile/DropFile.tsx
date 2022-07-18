/* eslint-disable @next/next/no-img-element */
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { RiCloseCircleFill } from 'react-icons/ri'
import { BsImages } from 'react-icons/bs'
import Styles from '@/components/DropFile/DropFile.module.scss'
import type { DropFile as Types, FileView } from '../Interface'
import { toast, ToastContainer } from 'react-toastify'

function DropFile(props: Types) {
  const { fileImage, setFileImage, size } = props

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
        if (!validImageTypes.includes(fileType) || size <= fileImage.length) {
          if (size <= fileImage.length) {
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
            setFileImage([...fileImage, { preview, path, id: Date.now().toString() }])
          }
        }
      }
    }
  }

  // delete image view
  const deleteImage = (id: string) => {
    setFileImage(fileImage.filter((e) => e.id !== id))
  }

  return (
    <div className={Styles.DropImage}>
      <ToastContainer limit={1} autoClose={500} hideProgressBar pauseOnFocusLoss={false} />
      <div className={Styles.viewImage}>
        {fileImage.map((item) => (
          <div key={item?.preview} className={Styles.Image}>
            <RiCloseCircleFill className={Styles.close} onClick={() => deleteImage(item?.id)} />
            <img src={item?.preview} alt={item?.path} />
          </div>
        ))}
      </div>
      <div {...getRootProps()} className={Styles.DropIn}>
        <input {...getInputProps()} alt="input" id="inputDrop" />

        <BsImages size={40} />
        <b>Kéo thả hoặc chọn {size} ảnh</b>
      </div>
      <label htmlFor="inputDrop" className={Styles.buttonOpenFile}>
        Open file Brower
      </label>
    </div>
  )
}
export default memo(DropFile)
