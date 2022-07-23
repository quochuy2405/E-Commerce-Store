import type { Select as Types } from '../../Interface'
import { AiFillInfoCircle } from 'react-icons/ai'
import Styles from './SelectAbove.module.scss'
import Select from 'react-select'
import { Tooltip, Zoom } from '@mui/material'

function SelectAbove(props: Types): JSX.Element {
  return (
    <div className={`${Styles.SelectBox} ${props?.className}`}>
      <p className={Styles.title}>
        {props?.title}
        {props?.isRequired && (
          <span className={Styles?.isRequired}>
            <Tooltip
              arrow
              placement="right"
              TransitionComponent={Zoom}
              title={props?.toolTip || ''}
              componentsProps={{
                arrow: {
                  sx: {
                    bgcolor: 'common.white',
                    '& .MuiTooltip-arrow': {
                      color: '#E6E8ED'
                    }
                  }
                },
                tooltip: {
                  sx: {
                    border: '1px solid var(--color-main)',
                    bgcolor: 'common.white',
                    '& .MuiTooltip-arrow': {
                      color: 'var(--color-main)'
                    },
                    color: 'common.black'
                  }
                }
              }}
            >
              <AiFillInfoCircle />
            </Tooltip>
          </span>
        )}
      </p>

      <Select
        options={props?.data}
        className={Styles.Gender}
        name={props?.name}
        placeholder="Lựa chọn..."
        styles={{
          control: (styles, { isFocused }) => ({
            ...styles,
            boxShadow: isFocused ? `0 0 0 1px #245fd4` : '0',
            borderRadius: 3
          })
        }}
      />

      {props?.invalid && props?.isRequired && (
        <span className={Styles.invalid}>{props?.textInvalid}</span>
      )}
    </div>
  )
}

export default SelectAbove
