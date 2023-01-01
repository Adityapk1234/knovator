import { Fragment } from "react";

const CustomTextBox = (props) => {
    return (
        <Fragment>
            {props.title ? <label>{props.title}</label> : null}
            <input
                type={props.type}
                placeholder={props.placeHolder}
                value={props.value}
                className={props.className}
                onClick={props.onClick}
                required={props.required}
                onChange={(e) => props.valueChange(e)}
            />
        </Fragment>
    )
}


export default CustomTextBox;