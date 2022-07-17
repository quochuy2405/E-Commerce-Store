import type { TextArea as Types } from '../../Interface'
import Styles from './TextAreaAbove.module.scss'

function TextArea(props: Types): JSX.Element {
  const { name, value, handelChange, row, title, invalid, textInvalid, isRequired } = props

  return (
    <div className={Styles.inputBox}>
      <p className={Styles.title}>
        {title} {isRequired && <span className={Styles.isRequired}>*</span>}
      </p>
      <fieldset className={Styles.inputField}>
        <textarea value={value} name={name} onChange={(e) => handelChange(e)} rows={row} />
      </fieldset>

      {invalid && isRequired && <span className={Styles.invalid}>{textInvalid}</span>}
    </div>
  )
}

export default TextArea
