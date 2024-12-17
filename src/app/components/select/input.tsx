import { forwardRef, Ref } from 'react'
import { InputProps as Props } from 'types/select'

function Input(props: Props, ref: Ref<HTMLInputElement>) {
    return <input className='outline-none' ref={ref} />
}

export default forwardRef<HTMLInputElement, Props>(Input)
