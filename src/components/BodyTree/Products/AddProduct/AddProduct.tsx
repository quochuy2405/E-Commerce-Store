import DropFile from '@/components/DropFile'
import { InputAbove } from '@/components/HPComponents/Input'
import { SelectAbove } from '@/components/HPComponents/Select'
import { TextAreaAbove } from '@/components/HPComponents/TextArea'
import type { FileView } from '@/components/Interface'
import type { Product } from '@/types'
import { memo, useState } from 'react'

import { BsCheck, BsPlusLg } from 'react-icons/bs'
import Select from 'react-select'
import Styles from './AddProduct.module.scss'

const sizesByText = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function AddProduct(): JSX.Element {
  const [fileImage, setFileImage] = useState<Array<FileView>>([])
  const [product, setProduct] = useState<Product>({
    Name: '',
    Category: '',
    Brand: '',
    Gender: '',
    Description: '',
    Price: '',
    Quantity: '',
    Size: [],
    Color: [],
    DiscountId: '',
    PhotoURL: ''
  })
  const [colors, setColors] = useState([
    { id: '1', color: '#E65E75' },
    { id: '2', color: '#165BAA' }
  ])

  // set check color
  const setCheckColor = (color: string) => {
    if (product.Color.includes(color)) {
      setProduct({
        ...product,
        Color: [...product.Color.filter((item) => item !== color)]
      })
    } else {
      setProduct({ ...product, Color: [...product.Color, color] })
    }
  }

  // set data form on change
  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  // add new color
  const addColor = (color: string) => {
    if (!colors.find((e) => e.color === color)) {
      setColors([...colors, { id: Date.now().toString(), color: color }])
    }
  }

  // on change color by id
  const handelOnChangeColor = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const arrayColors = colors
    const index = arrayColors.findIndex((e) => e.id === id)
    arrayColors[index].color = event.target.value
    setColors([...arrayColors])
  }

  // drop image into input file

  return (
    <div className={Styles.addProduct}>
      <div className={Styles.formInput}>
        <div className={Styles.groupTypeText}>
          <InputAbove
            value={product.Name}
            type="text"
            name="Name"
            textInvalid=""
            key="Name"
            title="Product Name"
            handelChange={(e) => {
              onChangeData(e)
            }}
            invalid={false}
            isRequired={true}
          />
          <div className={Styles.Category_Gender}>
            <Select options={options} className={Styles.Category} />
            <Select options={options} className={Styles.Gender} />
          </div>

          <InputAbove
            value={product.Brand}
            type="text"
            name="Brand"
            textInvalid=""
            key="Brand"
            title="Brand"
            handelChange={(e) => {
              onChangeData(e)
            }}
            invalid={false}
            isRequired={true}
          />
          <TextAreaAbove
            value={product.Description}
            name="Description"
            textInvalid=""
            key="Description"
            title="Description"
            handelChange={(e) => {
              onChangeData(e)
            }}
            invalid={false}
            isRequired={true}
            row={10}
          />
        </div>
        <div className={Styles.groupTypeSpeacial}>
          <div className={Styles.PriceQuantity}>
            <InputAbove
              value={product.Price}
              type="text"
              name="Price"
              textInvalid=""
              key="Price"
              title="Price"
              handelChange={(e) => {
                onChangeData(e)
              }}
              invalid={false}
              isRequired={true}
            />
            <InputAbove
              value={product.Quantity}
              type="text"
              name="Quantity"
              textInvalid=""
              key="Quantity"
              title="Quantity"
              handelChange={(e) => {
                onChangeData(e)
              }}
              invalid={false}
              isRequired={true}
            />
          </div>

          <div className={Styles.selectSize}>
            <SelectAbove
              value="2"
              handelChange={() => {
                console.log('')
              }}
              title="Select size"
              data={sizesByText}
            />
          </div>
          <div className={Styles.selectColor}>
            <p className={Styles.titleInput}>Select color</p>
            <div className={Styles.boxColor}>
              {colors.map((item) => (
                <div key={item?.id} className={Styles.itemColor}>
                  <label
                    className={Styles.colors}
                    onClick={() => setCheckColor(item?.color)}
                    style={{ backgroundColor: item?.color }}
                    htmlFor={item?.id}
                  >
                    {product.Color.includes(item?.color) && <BsCheck size={18} />}
                  </label>
                  <input
                    type="color"
                    id={item?.id}
                    style={{ display: 'none' }}
                    onChange={(e) => handelOnChangeColor(item?.id, e)}
                  />
                </div>
              ))}
              <div className={Styles.addColor} onClick={() => addColor('#000000')}>
                <label htmlFor="colorchoose">
                  <BsPlusLg size={12} />
                </label>
              </div>
            </div>
          </div>

          <div className={Styles.dropImage}>
            <DropFile fileImage={fileImage} setFileImage={setFileImage} size={4} />
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
      </div>
    </div>
  )
}

export default memo(AddProduct)
