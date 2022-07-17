import type { TextArea as Types } from '../../Interface'
import Styles from './TextAreaPlaceHolder.module.scss'

function TextArea(props: Types): JSX.Element {
  const { name, value, handelChange, title, invalid, textInvalid, row } = props

  return (
    <div className={Styles.textAreaBox}>
      <fieldset className={Styles.textAreaField}>
        <textarea
          value={value}
          name={name}
          onChange={(e) => handelChange(e)}
          placeholder={title}
          rows={row}
        />
      </fieldset>

      {invalid && <span className={Styles.invalid}>{textInvalid}</span>}
    </div>
  )
}

export default TextArea
