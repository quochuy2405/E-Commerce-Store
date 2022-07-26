import DropFile from '@/components/DropFile'
import { Dialog, StatusTag, Table } from '@/components/HPComponents'
import { InputAbove } from '@/components/HPComponents/Input'
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
    Quantity: '1',
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
    name?: string
  ) => {
    const keyName = name || event.target.name
    const keyValue = event.value || event.target.value
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
      <Dialog open={openAttribute} setOpen={setOpenAttribute} style={{ padding: '30px 100px' }}>
        <>
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
        </>
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
        </div>
        <div className={Styles.groupBtn} onClick={() => onAddVariant()}>
          <div className={Styles.btnAdd}>
            <BsPlusLg size={10} />
            <p>Add To List</p>
          </div>
        </div>
        <p className={Styles.titleTableView}>Variant</p>
        <div className={Styles.tableView}>
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

//  <div className={Styles.selectColor}>
//             <p className={Styles.titleInput}>Select color</p>
//             <div className={Styles.boxColor}>
//               {colors.map((item) => (
//                 <div key={item?.id} className={Styles.itemColor}>
//                   <label
//                     className={Styles.colors}
//                     onClick={() => setCheckColor(item?.color)}
//                     style={{ backgroundColor: item?.color }}
//                     htmlFor={item?.id}
//                   >
//                     {product.Color.includes(item?.color) && <BsCheck size={18} />}
//                   </label>
//                   <input
//                     type="color"
//                     id={item?.id}
//                     style={{ display: 'none' }}
//                     onChange={(e) => handelOnChangeColor(item?.id, e)}
//                   />
//                 </div>
//               ))}
//               <div className={Styles.addColor} onClick={() => addColor('#000000')}>
//                 <label htmlFor="colorchoose">
//                   <BsPlusLg size={12} />
//                 </label>
//               </div>
//             </div>
//           </div>
// set check color
// const setCheckColor = (color: string) => {
//   if (product.Color.includes(color)) {
//     setProduct({
//       ...product,
//       Color: [...product.Color.filter((item) => item !== color)]
//     })
//   } else {
//     setProduct({ ...product, Color: [...product.Color, color] })
//   }
// }

// add new color
// const addColor = (color: string) => {
//   if (!colors.find((e) => e.color === color)) {
//     setColors([...colors, { id: Date.now().toString(), color: color }])
//   }
// }

// // on change color by id
// const handelOnChangeColor = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
//   const arrayColors = colors
//   const index = arrayColors.findIndex((e) => e.id === id)
//   arrayColors[index].color = event.target.value
//   setColors([...arrayColors])
// }
