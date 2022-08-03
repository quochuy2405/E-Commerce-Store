import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import type { Input as Types } from '../../Interface'
import Styles from './InputTag.module.scss'

function TagsInput(props: Types): JSX.Element {
  const [tags, setTags] = useState<Array<string>>([])
  const [value, setValue] = useState('')
  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value) {
      setTags([...tags, value])
      setValue('')
    }
  }
  const removeTags = (index: number) => {
    setTags([
      ...tags.filter((tag) => {
        const listIndex: number[] = []
        tags.forEach((item, index) => {
          if (item === tag) listIndex.push(index)
        })
        return !listIndex.includes(index)
      })
    ])
  }

  return (
    <div className={`${Styles.Tags} ${props?.className}`}>
      <ul>
        {tags.map((tag, index) => (
          <li key={index} className={Styles.Tag}>
            <span>{tag}</span>
            <IoCloseSharp onClick={() => removeTags(index)} size={20} className={Styles.Close} />
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Press enter to add tags"
        value={value}
        onKeyDown={(e) => addTags(e)}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
export default TagsInput
