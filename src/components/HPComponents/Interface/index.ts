import type React from 'react'

interface Input {
  value: string
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
  isRequired?: boolean
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
export type { Input, Button, StatusTag, Icon, Chart, GroupButtonChart, TextArea }
