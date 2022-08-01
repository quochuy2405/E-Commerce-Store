import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import Styles from './InputTag.module.scss'

function TagsInput(): JSX.Element {
  const [tags, setTags] = useState<Array<string>>([])
  const [value, setValue] = useState('')
  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value) {
      setTags([...tags, value])
      setValue('')
    }
  }
  const removeTags = (index: number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)])
  }

  return (
    <div className={Styles.Tags}>
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
        onKeyDown={(event) => addTags(event)}
        placeholder="Press enter to add tags"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
export default TagsInput
