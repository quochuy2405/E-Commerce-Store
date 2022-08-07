import React, { useState } from 'react'
import Styles from '@/components/BodyTree/Products/AddAtrribute/AddAttribute.module.scss'
import type { Attribute } from '@/components/Interface'
import { BsCheck, BsPlusLg } from 'react-icons/bs'
import { InputTag } from '@/components/HPComponents/Input'
import { SelectAbove } from '@/components/HPComponents/Select'

const sizesByText = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function AddAttribute(): JSX.Element {
  const [colors, setColors] = useState([
    {
      id: '1',
      color: '#E65E75'
    }
  ])
  const [attributes, setAtributes] = useState<Attribute>({
    Colors: [],
    Sizes: []
  })
  // set check color
  const setCheckColor = (color: string) => {
    if (attributes.Colors.includes(color)) {
      setAtributes({
        ...attributes,
        Colors: [...attributes.Colors.filter((item) => item !== color)]
      })
    } else {
      setAtributes({ ...attributes, Colors: [...attributes.Colors, color] })
    }
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

  return (
    <div className={Styles.attribute}>
      <div className={Styles.inputFrom}>
        <div className={Styles.inputAttribute}>
          <div className={Styles.numberAttribute}>
            <p>1</p>
          </div>
          <SelectAbove
            value={sizesByText[0].value}
            handelChange={(e) => {
              console.log('ok')
            }}
            name="Status"
            title=""
            className={Styles.flex1}
            data={sizesByText}
            isRequired={false}
            toolTip="Hãy lựa chọn nếu không có sự lựa chọn hãy tạo thêm"
          />{' '}
          <InputTag
            value={0}
            handelChange={() => {
              console.log('')
            }}
            className={Styles.flex2}
          />
        </div>
        <div className={Styles.inputAttribute}>
          <div className={Styles.numberAttribute}>
            <p>2</p>
          </div>
          <SelectAbove
            value={sizesByText[0].value}
            handelChange={(e) => {
              console.log('ok')
            }}
            name="Status"
            title=""
            className={Styles.flex1}
            data={sizesByText}
            isRequired={false}
            toolTip="Hãy lựa chọn nếu không có sự lựa chọn hãy tạo thêm"
          />
          <div className={Styles.boxColor}>
            {colors.map((item) => (
              <div key={item?.id} className={Styles.itemColor}>
                <label
                  className={Styles.colors}
                  onClick={() => setCheckColor(item?.color)}
                  style={{ backgroundColor: item?.color }}
                  htmlFor={item?.id}
                >
                  {attributes.Colors.includes(item?.color) && <BsCheck size={18} />}
                </label>
                <input
                  type="color"
                  id={item?.id}
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
        <div className={Styles.inputAttribute}>
          <div className={Styles.button}>
            <BsPlusLg size={15} /> <p>More</p>
          </div>
        </div>
      </div>

      <div className={Styles.groupButtons}>
        <div className={Styles.buttonSubmit}>
          <p>Submit</p>
        </div>
        <div className={Styles.buttonCancel}>
          <p>Cancel</p>
        </div>
      </div>
    </div>
  )
}

export default AddAttribute
