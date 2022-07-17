import { InputAbove } from '@/components/HPComponents/Input'
import { TextAreaAbove } from '@/components/HPComponents/TextArea'
import type { Product } from '@/types'
import { useCallback, useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import Styles from './AddProduct.module.scss'

const sizesByText = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']
const colors = ['#E65E75', '#165BAA']

function AddProduct(): JSX.Element {
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

  // set array color
  const setColor = useCallback(
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
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
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
                <div
                  key={item}
                  className={Styles.colors}
                  onClick={() => setColor(item)}
                  style={{ backgroundColor: item }}
                >
                  {product.Color.includes(item) && <BsCheck size={18} />}
                </div>
              ))}
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
          <div className={Styles.dropImage}>
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
              row={8}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
