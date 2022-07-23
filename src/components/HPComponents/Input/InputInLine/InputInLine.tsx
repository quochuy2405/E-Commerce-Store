import type { Input as Types } from '../../Interface'
import Styles from './InputInLine.module.scss'

function Input(props: Types): JSX.Element {
  return (
    <div className={Styles.inputBox}>
      <fieldset className={Styles.inputField}>
        <legend>{props?.title}</legend>
        <input
          value={props?.value}
          type={props?.type}
          name={props?.name}
          onChange={(e) => props?.handelChange(e)}
        />
      </fieldset>

      {props?.invalid && <span className={Styles.invalid}>{props?.textInvalid}</span>}
    </div>
  )
}

export default Input
