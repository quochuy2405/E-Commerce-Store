import DropFile from '@/components/DropFile'
import { InputAbove } from '@/components/HPComponents/Input'
import { TextAreaAbove } from '@/components/HPComponents/TextArea'
import type { Product } from '@/types'
import { useCallback, useState } from 'react'

import { BsCheck, BsPlusLg } from 'react-icons/bs'
import Styles from './AddProduct.module.scss'

const sizesByText = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']

function AddProduct(): JSX.Element {
  const [file, setFile] = useState<File>()
  const [product, setProduct] = useState<Product>({
    Name: '',
    Category: '',
    Brand: '',
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

  // set array size
  const setSize = useCallback(
    (size: string) => {
      if (product.Size.includes(size)) {
        setProduct({
          ...product,
          Size: [...product.Size.filter((item) => item !== size)]
        })
      } else {
        setProduct({ ...product, Size: [...product.Size, size] })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product.Size]
  )

  // set check color
  const setCheckColor = useCallback(
    (color: string) => {
      if (product.Color.includes(color)) {
        setProduct({
          ...product,
          Color: [...product.Color.filter((item) => item !== color)]
        })
      } else {
        setProduct({ ...product, Color: [...product.Color, color] })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product.Color]
  )

  // set data form on change
  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
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
  const handleChange = (file: File) => {
    setFile(file)
  }
  return (
    <div className={Styles.addProduct}>
      <div className={Styles.title}>
        <p>Add Product</p>
      </div>
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
          <InputAbove
            value={product.Category}
            type="text"
            name="Category"
            textInvalid=""
            key="Category"
            title="Category"
            handelChange={(e) => {
              onChangeData(e)
            }}
            invalid={false}
            isRequired={true}
          />
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
            <p className={Styles.titleInput}>Select size</p>
            <div className={Styles.boxSelect}>
              {sizesByText?.map((item) => (
                <div
                  key={item}
                  className={`${Styles.sizeItem} ${product.Size.includes(item) && Styles.active}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className={Styles.selectColor}>
            <p className={Styles.titleInput}>Select color</p>
            <div className={Styles.boxColor}>
              {colors.map((item) => (
                <div key={item?.id}>
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
          <div className={Styles.chooseDiscount}>
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
          <div className={Styles.dropImage}>{/* <DropFile /> */}</div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
