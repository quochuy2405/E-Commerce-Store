import type React from 'react'
import type { SingleValue } from 'react-select'

interface KeyValue {
  key: string | number | readonly string[] | undefined
  value: string | number | boolean | readonly string[] | undefined
}
interface SelectKey {
  value: string
  label: string | number | readonly string[] | undefined
}
interface Input {
  id?: string
  value: string
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
  isRequired?: boolean
  className?: string | unknown
  toolTip?: string
}

interface Select {
  id?: string
  value: string
  handelChange: (
    event: React.ChangeEvent<HTMLSelectElement> | SingleValue<any>,
    name?: string
  ) => void
  data?: Array<SelectKey>
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
  isRequired?: boolean
  className?: string | unknown
  toolTip?: string
  disable?: boolean
}
interface InputColor {
  id: string
  value: string
  type?: string
  setColor: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void
  checkList: string[]
  className: string
}

interface TextArea {
  value: string
  handelChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
  isRequired?: boolean
  row?: number
}

interface Table {
  datas?: Array<object>
  title: string[]
}

interface Dialog {
  children?: React.ReactElement<any, any>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  style?: object
}
interface Button {
  handleOnCick?: () => void
  name?: string
  width?: string
  height?: string
}

interface StatusTag {
  title: string
  type: 'success' | 'error' | 'warning'
}

interface Icon {
  image: string
  size: number
}
interface Chart {
  data?: Array<number>
  type: 'bar' | 'line' | 'dou'
  size: number
}

interface GroupButtonChart {
  icon: React.ReactElement
  tooltip: string
  name: 'bar' | 'line' | 'dou'
}

export type {
  Input,
  Button,
  StatusTag,
  Icon,
  Chart,
  GroupButtonChart,
  TextArea,
  InputColor,
  Select,
  Table,
  KeyValue,
  Dialog
}
