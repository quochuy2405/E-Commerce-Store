import type { Input as Types } from '../../Interface'
import Styles from './InputAbove.module.scss'

function Input(props: Types): JSX.Element {
  const { name, value, handelChange, type, title, invalid, textInvalid, isRequired } = props

  return (
    <div className={Styles.inputBox}>
      <p className={Styles.title}>
        {title} {isRequired && <span className={Styles.isRequired}>*</span>}
      </p>
      <fieldset className={Styles.inputField}>
        <input value={value} type={type} name={name} onChange={(e) => handelChange(e)} />
      </fieldset>

      {invalid && isRequired && <span className={Styles.invalid}>{textInvalid}</span>}
    </div>
  )
}

export default Input
