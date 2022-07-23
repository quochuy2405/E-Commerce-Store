import type { Input as Types } from '../../Interface'
import { AiFillInfoCircle } from 'react-icons/ai'
import Styles from './InputAbove.module.scss'
import { makeStyles, Tooltip, Zoom } from '@mui/material'

function Input(props: Types): JSX.Element {
  return (
    <div className={`${Styles.inputBox} ${props?.className}`}>
      <p className={Styles.title}>
        {props?.title}{' '}
        {props?.isRequired && (
          <span className={Styles?.isRequired}>
            <Tooltip
              arrow
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
              <AiFillInfoCircle />
            </Tooltip>
          </span>
        )}
      </p>
      <fieldset className={Styles.inputField}>
        <input
          value={props?.value}
          type={props?.type}
          name={props?.name}
          onChange={(e) => props?.handelChange(e)}
        />
      </fieldset>

      {props?.invalid && props?.isRequired && (
        <span className={Styles.invalid}>{props?.textInvalid}</span>
      )}
    </div>
  )
}

export default Input
