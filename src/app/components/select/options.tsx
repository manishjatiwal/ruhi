import { OptionsProps as Props } from 'types/select'

function Options(props: Props) {
    const { options } = props

    return (
        <ul className='select-options'>
            {options.map((option) => (
                <li className='select-option' key={option.value}>
                    {option.label}
                </li>
            ))}
        </ul>
    )
}

export default Options
