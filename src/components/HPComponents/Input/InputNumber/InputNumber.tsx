import { Tooltip, Zoom } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight, AiFillInfoCircle } from 'react-icons/ai'
import type { Input as Types } from '../../Interface'
import Styles from './InputNumber.module.scss'

function Input(props: Types): JSX.Element {
  const [value, setValue] = useState(Number(props?.value) || 0)
  const refInput = useRef<HTMLInputElement>(null)

  const increase = () => {
    setValue((e) => e + 1)
  }

  const reduce = () => {
    setValue((e) => (e - 1 < 1 ? 0 : e - 1))
  }

  useEffect(() => {
    refInput.current?.addEventListener('change', (e) => {
      props?.handelChange(e, props?.name, value)
    })
    refInput.current?.dispatchEvent(new Event('change', { bubbles: true }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return (
    <div className={`${Styles.inputBox} ${props?.className}`}>
      <p className={Styles.title}>
        {props?.title}
        {props?.isRequired && (
          <Tooltip
            arrow
            className={Styles?.isRequired}
            placement="right"
            TransitionComponent={Zoom}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'common.black',
                  '& .MuiTooltip-arrow': {
                    color: 'common.black'
                  }
                }
              }
            }}
            title={props?.toolTip || ''}
          >
            <span>
              <AiFillInfoCircle />
            </span>
          </Tooltip>
        )}
      </p>
      <fieldset className={Styles.inputField}>
        <div className={Styles.btnSetNumber} onClick={() => reduce()}>
          <AiFillCaretLeft size={20} />
        </div>
        <input ref={refInput} value={props?.value} type={'number'} name={props?.name} min={0} />
        <div className={Styles.btnSetNumber} onClick={() => increase()}>
          <AiFillCaretRight size={20} />
        </div>
      </fieldset>

      {props?.invalid && props?.isRequired && (
        <span className={Styles.invalid}>{props?.textInvalid}</span>
      )}
    </div>
  )
}

export default Input
