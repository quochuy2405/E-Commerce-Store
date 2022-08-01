import React, { useState } from 'react'
import Styles from '@/components/BodyTree/Products/AddAtrribute/AddAttribute.module.scss'
import type { Attribute } from '@/components/Interface'
import { BsCheck, BsPlusLg } from 'react-icons/bs'
import { InputTag } from '@/components/HPComponents/Input'

function AddAttribute() {
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
    <div>
      <InputTag />
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
                {attributes.Colors.includes(item?.color) && <BsCheck size={18} />}
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
    </div>
  )
}

export default AddAttribute
