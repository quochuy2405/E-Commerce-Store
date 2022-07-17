import type { Input as Types } from '../../Interface'
import Styles from './InputPlaceHolder.module.scss'

function Input(props: Types): JSX.Element {
  const { name, value, handelChange, type, title, invalid, textInvalid } = props

  return (
    <div className={Styles.inputBox}>
      <fieldset className={Styles.inputField}>
        <input
          value={value}
          type={type}
          name={name}
          onChange={(e) => handelChange(e)}
          placeholder={title}
        />
      </fieldset>

      {invalid && <span className={Styles.invalid}>{textInvalid}</span>}
    </div>
  )
}

export default Input
