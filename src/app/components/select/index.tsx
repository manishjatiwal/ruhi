import { useState } from 'react'
import { Props } from 'types/select'
import Label from './label'
import Input from './input'
import { useCallback, useRef } from 'react'
import './styles.css'
import Options from './options'

function Select(props: Props) {
    const input = useRef<HTMLInputElement>(null)
    const [active, setActive] = useState<Boolean>(false)

    const handleFocus = useCallback(() => {
        input?.current?.focus()
        setActive(true)
    }, [])

    return (
        <div className='relative'>
            <Label label={props.label} />
            <div className='select-container' onClick={handleFocus} role='button'>
                <Input ref={input} />
            </div>
            {active ? <Options options={props.options} /> : null}
        </div>
    )
}

export default Select
