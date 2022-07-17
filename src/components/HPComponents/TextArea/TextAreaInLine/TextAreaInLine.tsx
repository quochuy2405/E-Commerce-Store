import type { TextArea as Types } from '../../Interface'
import Styles from './TextAreaInLine.module.scss'

function TextArea(props: Types): JSX.Element {
  const { name, value, handelChange, row, title, invalid, textInvalid } = props

  return (
    <div className={Styles.inputBox}>
      <fieldset className={Styles.inputField}>
        <legend>{title}</legend>
        <textarea value={value} name={name} onChange={(e) => handelChange(e)} rows={row} />
      </fieldset>

      {invalid && <span className={Styles.invalid}>{textInvalid}</span>}
    </div>
  )
}

export default TextArea
