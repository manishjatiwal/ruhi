type Option = Record<string, any>

export type OptionsProps = {
    options: Array<Option>
}

export type LabelProps = {
    label: string
}

export type InputProps = {}

export type Props = {
    groupBy?: string
    isMulti?: boolean
    label: string
    onSelect(value: null | Option): void
    optionLabel?: string
    optionValue?: string
    options: Array<Option>
    value: null | Option
}
