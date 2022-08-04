import { Tooltip, Zoom } from '@mui/material'
import { AiFillInfoCircle } from 'react-icons/ai'
import type { Input as Types } from '../../Interface'
import Styles from './InputAbove.module.scss'

function Input(props: Types): JSX.Element {
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
        <input
          value={props?.value}
          type={props?.type}
          name={props?.name}
          onChange={(e) => props?.handelChange(e)}
        />
        <p className={Styles.unit}>{props?.unit}</p>
        {props?.invalid && props?.isRequired && (
          <span className={Styles.invalid}>{props?.textInvalid}</span>
        )}
      </fieldset>
    </div>
  )
}

export default Input
