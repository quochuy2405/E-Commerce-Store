import { Tooltip, Zoom } from '@mui/material'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsCheck } from 'react-icons/bs'
import type { SelectColor as Types } from '../../Interface'
import Styles from './SelectColor.module.scss'

function SelectColor(props: Types): JSX.Element {
  // set check color
  const setCheckColor = (color: string | undefined) => {
    const event = new Event('change')
    props.handelChange(event, 'Color', color)
  }

  return (
    <div>
      <div className={Styles.selectColor}>
        <p className={Styles.titleInput}>
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
        <div className={Styles.boxColor}>
          {props?.data.map((item) => (
            <div key={item?.key?.toString()} className={Styles.itemColor}>
              <div
                className={Styles.colors}
                onClick={() => setCheckColor(item?.value?.toString())}
                style={{ backgroundColor: item?.value?.toString() }}
              >
                {props.value === item.value && <BsCheck size={18} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectColor
