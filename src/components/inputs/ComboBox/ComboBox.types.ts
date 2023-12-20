
export type ComboBoxProps = {
    value: string[]
    onChange: (value: string[]) => void
    options: { value: string; label: string }[]
    placeholder: string
}
