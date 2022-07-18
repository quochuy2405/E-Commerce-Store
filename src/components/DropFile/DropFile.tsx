/* eslint-disable @next/next/no-img-element */
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { RiCloseCircleFill } from 'react-icons/ri'
import Styles from '@/components/DropFile/DropFile.module.scss'
import type { DropFile as Types, FileView } from '../Interface'
import { toast, ToastContainer } from 'react-toastify'

function DropFile(props: Types) {
  const { fileImage, setFileImage, size } = props
  const filesCurent = useRef<Array<FileView>>([])

  // set up drop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    showImageCover(acceptedFiles)
  }, [])
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
        if (!validImageTypes.includes(fileType) || size <= filesCurent.current.length) {
          if (size <= filesCurent.current.length) {
            toast.warning('Hết cỡ rồi bà nội =))')
            toast.clearWaitingQueue()
          } else {
            toast.success('Sai định dạng gòi bà =))')
            toast.clearWaitingQueue()
          }
        } else {
          if (file) {
            const preview = URL.createObjectURL(file)
            const path = file.name
            let files = filesCurent.current
            files = [...files, { preview, path, id: Date.now().toString() }]
            filesCurent.current = files
            setFileImage(filesCurent.current)
          }
        }
      }
    }
  }

  // delete image view
  const deleteImage = (id: string) => {
    filesCurent.current = filesCurent.current.filter((e) => e.id !== id)
    setFileImage(filesCurent.current)
  }

  return (
    <>
      <ToastContainer limit={1} autoClose={500} hideProgressBar pauseOnFocusLoss={false} />
      <div {...getRootProps()} className={Styles.DropImage}>
        <input {...getInputProps()} alt="" />

        {!fileImage.length && <b>Kéo thả hoặc chọn {size} ảnh</b>}
        <div className={Styles.viewImage}>
          {fileImage.map((item) => (
            <div key={item?.preview} className={Styles.Image}>
              <RiCloseCircleFill className={Styles.close} onClick={() => deleteImage(item?.id)} />
              <img src={item?.preview} alt={item?.path} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default memo(DropFile)
