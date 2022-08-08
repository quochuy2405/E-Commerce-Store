import { Box, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { Fragment, useState } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { VscPreview } from 'react-icons/vsc'
import type { PopUpSelect as Types } from '../Interface'

function PopUpSelect({ className }: Types) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Fragment>
        <Box className={className || ''}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <BsThreeDotsVertical size={24} />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem>
            <ListItemIcon>
              <VscPreview size={20} />
            </ListItemIcon>
            Details
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FiEdit size={20} />
            </ListItemIcon>
            Edit
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <AiTwotoneDelete size={20} />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </Fragment>
    </div>
  )
}

export default PopUpSelect
