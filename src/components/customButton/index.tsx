import React, { ReactElement } from 'react'
import './style.scss'

interface Props {
    text: string
    icon: any
    onClick?: () => void
}

function Button({ text, icon, onClick }: Props): ReactElement {
    return (
        <>
            {!!text && (
                <button
                    type="button"
                    className="rounded-pill btn-rounded"
                    onClick={onClick}
                >
                    {text}
                    <span>{!!icon && icon}</span>
                </button>
            )}
        </>
    )
}

export default Button
