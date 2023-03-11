import {DetailedHTMLProps, HTMLAttributes} from "react";
import cx from "classnames";
import "./Button.scss"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export default function button({className, ...restProps}: Props) {
    return <button className={cx(className, 'button')} {...restProps} />
}
