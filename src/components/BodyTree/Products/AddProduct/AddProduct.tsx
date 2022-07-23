import DropFile from '@/components/DropFile'
import { Table } from '@/components/HPComponents'
import { InputAbove } from '@/components/HPComponents/Input'
import { SelectAbove } from '@/components/HPComponents/Select'
import { TextAreaAbove } from '@/components/HPComponents/TextArea'
import type { FileView } from '@/components/Interface'
import type { Product } from '@/types'
import { memo, useState } from 'react'

import { BsPlusLg } from 'react-icons/bs'
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
  const [fileImages, setFileImages] = useState<Array<FileView>>([])
  const [products, setProducts] = useState<Product[]>([
    {
      Name: 'Giày adidas',
      Category: 'Giày thể thao',
      PhotoURL: [
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Breaknet_Shoes_White_FX8707_01_standard.jpg'
      ],
      Brand: 'adidas',
      Gender: 'Men',
      Description: 'hãy là giày gì đó hãy là giày gì đó hãy là giày gì đó hãy là giày gì đó',
      Price: '20003',
      Quantity: '12',
      Size: '23'
    },
    {
      Name: 'Giày adidas',
      Category: 'Giày thể thao',
      PhotoURL: [
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Breaknet_Shoes_White_FX8707_01_standard.jpg'
      ],
      Brand: 'adidas',
      Gender: 'Men',
      Description: 'hãy là giày gì đó hãy là giày gì đó hãy là giày gì đó hãy là giày gì đó',
      Price: '20003',
      Quantity: '12',
      Size: '23'
    }
  ])
  const [product, setProduct] = useState<Product>({
    Name: '',
    Category: '',
    PhotoURL: [],
    Brand: '',
    Gender: '',
    Description: '',
    Price: '',
    Quantity: '',
    Size: ''
  })
  const [colors, setColors] = useState([
    { id: '1', color: '#E65E75' },
    { id: '2', color: '#165BAA' }
  ])

  // set data form on change
  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  return (
    <div className={Styles.addProduct}>
      <div className={Styles.formInput}>
        <div className={Styles.groupTypeText}>
          <div className={Styles.textShort}>
            <SelectAbove
              value="002"
              handelChange={() => {
                console.log('')
              }}
              title="Category"
              data={sizesByText}
              isRequired={true}
              toolTip="Hãy lựa chọn nếu không có sự lựa chọn hãy tạo thêm"
            />
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
            <SelectAbove
              value="002"
              handelChange={() => {
                console.log('')
              }}
              title="Brand  "
              data={sizesByText}
              isRequired={true}
            />
            <SelectAbove
              value="002"
              handelChange={() => {
                console.log('')
              }}
              title="Status"
              data={sizesByText}
              isRequired={true}
            />
            <SelectAbove
              value="2"
              handelChange={() => {
                console.log('')
              }}
              title="Select size"
              data={sizesByText}
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
              invalid={false}
              isRequired={true}
              row={10}
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
      <div className={Styles.tableView}>
        <Table datas={products} />
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
  )
}

export default memo(AddProduct)

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
