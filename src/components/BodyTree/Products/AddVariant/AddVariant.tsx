import DropFile from '@/components/DropFile'
import { Dialog, StatusTag, Table } from '@/components/HPComponents'
import { InputAbove, InputNumber } from '@/components/HPComponents/Input'
import { KeyValue } from '@/components/HPComponents/Interface'
import { SelectAbove } from '@/components/HPComponents/Select'
import { TextAreaAbove } from '@/components/HPComponents/TextArea'
import type { FileView } from '@/components/Interface'
import type { Product } from '@/types'
import { useSnackbar } from 'notistack'
import { memo, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { FcNext } from 'react-icons/fc'
import { useParams } from 'react-router-dom'
import type { SingleValue } from 'react-select'
import AddAtrribute from '../AddAtrribute'
import Styles from './AddVariant.module.scss'

const sizesByText = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const titleTable = [
  'Name',
  'Category',
  'Photo',
  'Brand',
  'Gender',
  'Description',
  'Price',
  'Quantity',
  'Size'
]

function AddVariant(): JSX.Element {
  const { slug, opt } = useParams()
  const { enqueueSnackbar } = useSnackbar()
  const [fileImages, setFileImages] = useState<Array<FileView>>([])

  const [openAttribute, setOpenAttribute] = useState<boolean>(false)
  const [product, setProduct] = useState<Product>({
    Name: '',
    Category: '',
    PhotoURL: [],
    Brand: '',
    Gender: '',
    Description: '',
    Price: '1',
    Quantity: '0',
    Size: ''
  })
  const [validate, setValidate] = useState({
    Name: false,
    Category: false,
    Brand: false,
    Gender: false,
    Description: false,
    Price: false,
    Quantity: false,
    Size: false
  })
  const [products, setProducts] = useState<Product[]>([])

  // set data form on change
  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | SingleValue<any>,
    name?: string,
    value?: string | number
  ) => {
    const keyName = name || event.target.name
    const keyValue = value?.toString() || event.value || event.target.value
    setProduct({ ...product, [keyName]: keyValue })
    setValidate({ ...validate, [keyName]: !keyValue })
  }

  // set data form on change
  const onAddVariant = () => {
    const photoURL = fileImages.map((item) => item.preview)
    const productAdd = { ...product, PhotoURL: photoURL }
    const isValid = Object.values(productAdd).every((v) => !v === false)
    if (isValid && fileImages.length) {
      setProducts([...products, productAdd])
      setProduct({
        Name: '',
        Category: '',
        PhotoURL: [],
        Brand: '',
        Gender: '',
        Description: '',
        Price: '1',
        Quantity: '1',
        Size: ''
      })
      setFileImages([])
    } else {
      enqueueSnackbar('Kiểm tra lại thông tin', { variant: 'warning' })
    }
  }

  return (
    <>
      <Dialog
        title={'Add Attribute'}
        open={openAttribute}
        setOpen={setOpenAttribute}
        style={{ padding: '30px 100px' }}
      >
        <AddAtrribute />
      </Dialog>
      <div className={Styles.Bar}>
        <div className={Styles.RouteLink}>
          <StatusTag title={'admin'} type={'success'} />
          {slug && <FcNext />}
          <StatusTag title={slug?.toString() || ''} type={'warning'} />
          {opt && <FcNext />}
          <StatusTag title={opt?.toString() || ''} type={'error'} />
        </div>
        <div className={Styles.btnAddVariant} onClick={() => setOpenAttribute(true)}>
          <p>Add Attribute</p>
        </div>
      </div>
      <div className={Styles.addVariant}>
        <div className={Styles.formInput}>
          <div className={Styles.groupTypeText}>
            <div className={Styles.textShort}>
              <SelectAbove
                value={product?.Category}
                handelChange={(e) => {
                  onChangeData(e, 'Category')
                }}
                name="Category"
                title="Category"
                data={sizesByText}
                invalid={validate?.Category}
                isRequired={true}
                toolTip="Hãy lựa chọn nếu không có sự lựa chọn hãy tạo thêm"
              />
              <InputAbove
                value={product?.Name}
                type="text"
                name="Name"
                textInvalid="Nhập tên sản phẩm"
                key="Name"
                title="Product Name"
                handelChange={(e) => {
                  onChangeData(e)
                }}
                invalid={validate?.Name}
                isRequired={true}
              />
              <SelectAbove
                value={product?.Brand}
                handelChange={(e) => {
                  onChangeData(e, 'Brand')
                }}
                title="Brand"
                name="Brand"
                data={sizesByText}
                invalid={validate.Brand}
                isRequired={true}
              />
              <SelectAbove
                value={product?.Size}
                handelChange={(e) => {
                  onChangeData(e, 'Size')
                }}
                disable={!product?.Category}
                title="Size"
                name="Size"
                data={sizesByText}
                invalid={validate.Size}
                isRequired={true}
              />
              <SelectAbove
                value={product?.Gender}
                handelChange={(e) => {
                  onChangeData(e, 'Gender')
                }}
                disable={!product?.Size}
                title="Gender"
                name="Gender"
                data={sizesByText}
                invalid={validate.Gender}
                isRequired={true}
              />
            </div>
            <div className={Styles.Description}>
              <TextAreaAbove
                value={product.Description}
                name="Description"
                textInvalid=""
                key="Description"
                title="Description"
                handelChange={(e) => {
                  onChangeData(e)
                }}
                invalid={validate.Description}
                isRequired={true}
                row={12}
              />
            </div>
          </div>
          <div className={Styles.groupTypeSpeacial}>
            {Array.from(Array(5).keys()).map((item, index) => (
              <DropFile
                key={item.toString()}
                index={index}
                fileImages={fileImages}
                setFileImages={setFileImages}
                size={5}
              />
            ))}
          </div>
          <div className={Styles.groupTypeText}>
            <div className={Styles.Price}>
              <InputAbove
                value={product?.Name}
                type="text"
                name="Name"
                textInvalid="Nhập tên sản phẩm"
                key="Name"
                title="Name"
                handelChange={(e) => {
                  onChangeData(e)
                }}
                invalid={validate?.Name}
                isRequired={true}
              />

              <InputNumber
                value={product?.Quantity}
                name="Quantity"
                textInvalid="Nhập tên sản phẩm"
                key="Quantity"
                title="Quantity"
                handelChange={onChangeData}
                invalid={validate?.Quantity}
                isRequired={true}
              />
            </div>
            <div className={Styles.Price}>
              <InputAbove
                value={product?.Name}
                type="number"
                name="Name"
                textInvalid="Nhập tên sản phẩm"
                key="Name"
                title="Name"
                handelChange={(e) => {
                  onChangeData(e, 'Name')
                }}
                invalid={validate?.Name}
                isRequired={true}
              />

              <InputNumber
                value={product?.Quantity}
                name="Quantity"
                textInvalid="Nhập tên sản phẩm"
                key="Quantity"
                title="Quantity"
                handelChange={onChangeData}
                invalid={validate?.Quantity}
                isRequired={true}
              />
            </div>
            <div className={Styles.SelectSize}>
              <SelectAbove
                value={product?.Category}
                handelChange={(e) => {
                  onChangeData(e, 'Category')
                }}
                name="Category"
                title="Category"
                data={sizesByText}
                invalid={validate?.Category}
                isRequired={true}
                toolTip="Hãy lựa chọn nếu không có sự lựa chọn hãy tạo thêm"
              />
              <SelectAbove
                value={product?.Category}
                handelChange={(e) => {
                  onChangeData(e, 'Category')
                }}
                name="Category"
                title="Category"
                data={sizesByText}
                invalid={validate?.Category}
                isRequired={true}
                toolTip="Hãy lựa chọn nếu không có sự lựa chọn hãy tạo thêm"
              />
            </div>
          </div>
        </div>
        <div className={Styles.groupBtn}>
          <div className={Styles.btnAdd} onClick={() => onAddVariant()}>
            <BsPlusLg size={10} />
            <p>Add To List</p>
          </div>
        </div>

        <div className={Styles.tableView}>
          <p className={Styles.titleTableView}>Variant</p>
          <Table datas={products} title={titleTable} />
        </div>
        <div className={Styles.groupBtn}>
          <div className={Styles.btnAdd}>
            <BsPlusLg size={10} />
            <p>Add</p>
          </div>
          <div className={Styles.btnCancel}>
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(AddVariant)
