import type { Select as Types } from '../../Interface'
import { AiFillInfoCircle } from 'react-icons/ai'
import Styles from './SelectAbove.module.scss'
import Select from 'react-select'

function SelectAbove(props: Types): JSX.Element {
  const { name, value, handelChange, data, title, invalid, textInvalid, isRequired, className } =
    props

  return (
    <div className={`${Styles.SelectBox} ${className}`}>
      <p className={Styles.title}>
        {title}
        {isRequired && (
          <span className={Styles.isRequired}>
            <AiFillInfoCircle />
          </span>
        )}
      </p>

      <Select
        options={data}
        className={Styles.Gender}
        name={name}
        styles={{
          control: (styles, { isFocused }) => ({
            ...styles,
            boxShadow: isFocused ? `0 0 0 1px #245fd4` : '0',
            borderRadius: 2
          })
        }}
      />

      {invalid && isRequired && <span className={Styles.invalid}>{textInvalid}</span>}
    </div>
  )
}

export default SelectAbove
