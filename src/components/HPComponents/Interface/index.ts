interface Input {
  value: string
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
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
export type { Input, Button, StatusTag }
