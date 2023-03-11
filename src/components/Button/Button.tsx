import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type Props =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({...restProps}: Props) {
    return <button
        {...restProps}
        onClick={(event) => {
            new Audio('./click.wav').play()
            return restProps.onClick?.(event)
        }}
        onMouseEnter={(event) => {
            new Audio('./hover.mp3').play()
            return restProps.onMouseEnter?.(event)
        }}/>
}
