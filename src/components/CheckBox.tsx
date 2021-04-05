import React, { FunctionComponent } from 'react'
import '../styles/CheckBox.css'

interface ICheckBoxProps {
    id: string;
    labelText: string;
    isToggled: boolean;
    onChange: () => void;
}

const CheckBox: FunctionComponent<ICheckBoxProps> = (props: ICheckBoxProps) =>
    <div className="custom-control custom-checkbox custom-control-lg">
        <input
            type="checkbox"
            className="custom-control-input"
            id={props.id}
            defaultChecked={props.isToggled}
            onChange={(_e) => props.onChange()}
        ></input>
        <label className="custom-control-label text-dark font-weight-bold"
            htmlFor={props.id}>{props.labelText}</label>
    </div>

export default CheckBox