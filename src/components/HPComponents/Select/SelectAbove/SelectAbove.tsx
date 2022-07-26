import { Tooltip, Zoom } from '@mui/material'
import { AiFillInfoCircle } from 'react-icons/ai'
import Select from 'react-select'
import type { Select as Types } from '../../Interface'
import Styles from './SelectAbove.module.scss'

function SelectAbove(props: Types): JSX.Element {
  return (
    <div className={`${Styles.SelectBox} ${props?.className}`}>
      <p className={Styles.title}>
        {props?.title}
        {props?.isRequired && (
          <Tooltip
            arrow
            className={Styles?.isRequired}
            placement="right"
            TransitionComponent={Zoom}
            title={props?.toolTip || 'a'}
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
            <span>
              <AiFillInfoCircle />
            </span>
          </Tooltip>
        )}
      </p>

      <Select
        options={props?.data}
        className={Styles.Select}
        placeholder="Hãy lựa chọn..."
        onChange={(e) => props?.handelChange(e, props.name)}
        value={props.data?.find((e) => e.value === props.value) || null}
        styles={{
          control: (styles, { isFocused }) => ({
            ...styles,
            boxShadow: isFocused ? `0 0 0 1px #245fd4` : '0',
            borderRadius: 3,
            fontSize: '0.9rem',
            fontWeight: 500
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
