import DropFile from '@/components/DropFile'
import Styles from '@/components/BodyTree/Categories/AddCategory/AddCategory.module.scss'
import { InputAbove } from '@/components/HPComponents/Input'
import type { FileView } from '@/components/Interface'
import { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { StatusTag } from '@/components/HPComponents'
import { FcNext } from 'react-icons/fc'
import { useParams } from 'react-router-dom'

function AddCategory() {
  const { slug, opt } = useParams()
  const [fileImages, setFileImages] = useState<Array<FileView>>([])

  return (
    <>
      <div className={Styles.bar}>
        <div className={Styles.routeLink}>
          <StatusTag title={'admin'} type={'success'} />
          {slug && <FcNext />}
          <StatusTag title={slug?.toString() || ''} type={'warning'} />
          {opt && <FcNext />}
          <StatusTag title={opt?.toString() || ''} type={'error'} />
        </div>
        <div className={Styles.btnAddVariant}>
          <p>Add Attribute</p>
        </div>
      </div>
      <div className={Styles.addCategory}>
        <div className={Styles.formInput}>
          <div className={Styles.flex1}>
            <InputAbove
              value={''}
              type="text"
              name="Name"
              textInvalid="Nhập tên sản phẩm"
              key="Name"
              title="Product Name"
              handelChange={(e) => {
                console.log('')
              }}
              invalid={true}
              isRequired={true}
            />
            <InputAbove
              value={''}
              type="text"
              name="Name"
              textInvalid="Nhập tên sản phẩm"
              key="Name"
              title="Product Name"
              handelChange={(e) => {
                console.log('')
              }}
              invalid={true}
              isRequired={true}
            />
            <InputAbove
              value={''}
              type="text"
              name="Name"
              textInvalid="Nhập tên sản phẩm"
              key="Name"
              title="Product Name"
              handelChange={(e) => {
                console.log('')
              }}
              invalid={true}
              isRequired={true}
            />
            <InputAbove
              value={''}
              type="text"
              name="Name"
              textInvalid="Nhập tên sản phẩm"
              key="Name"
              title="Product Name"
              handelChange={(e) => {
                console.log('')
              }}
              invalid={true}
              isRequired={true}
            />
          </div>
          <div className={Styles.flex1}>
            <p className={Styles.titleUpload}>Upload Image</p>
            <DropFile
              index={0}
              key={'add category'}
              fileImages={fileImages}
              setFileImages={setFileImages}
              size={1}
              width={100}
              height={70}
            />
          </div>
        </div>
        <div className={Styles.groupButtons}>
          <div className={Styles.buttonSubmit}>
            <BsPlusLg size={10} />
            <p>Add</p>
          </div>
          <div className={Styles.buttonCancel}>
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCategory
