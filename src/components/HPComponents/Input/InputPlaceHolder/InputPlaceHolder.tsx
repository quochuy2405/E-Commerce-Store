import type { Input as Types } from '../../Interface'
import Styles from './InputPlaceHolder.module.scss'

function Input(props: Types): JSX.Element {
  return (
    <div className={Styles.inputBox}>
      <fieldset className={Styles.inputField}>
        <input
          value={props?.value}
          type={props?.type}
          name={props?.name}
          onChange={(e) => props?.handelChange(e)}
          placeholder={props?.title}
        />
      </fieldset>

      {props?.invalid && <span className={Styles.invalid}>{props?.textInvalid}</span>}
    </div>
  )
}

export default Input
