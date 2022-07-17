import type { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader'
import Dropzone from 'react-dropzone-uploader'
import Styles from '@/components/DropFile/DropFile.module.scss'
import { useState } from 'react'
// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
const Layout = ({ input, previews, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
    </div>
  )
}

const DropFile = () => {
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({
    url: 'https://httpbin.org/post'
  })

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    allFiles.forEach((f) => f.remove())
  }

  return (
    <div className={Styles.dropFile}>
      <Dropzone
        key={'a'}
        getUploadParams={getUploadParams}
        LayoutComponent={Layout}
        inputContent={<>aaaaa</>}
      />
    </div>
  )
}
export default DropFile
