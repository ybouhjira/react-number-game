import React, {ChangeEvent} from "react";

interface Props {
    setValue: (value: number) => void
    onClick: () => void;
    inputValue: number | '';
}

export function NumberInput({setValue, onClick, inputValue}: Props) {
    const handleInputChange = ({target: {valueAsNumber: value}}: ChangeEvent<HTMLInputElement>) => {
        if (1 <= value && value <= 100)
            setValue(value)
    }

    return <div className="input-group">
        <form onSubmit={(e) => {
            e.preventDefault()
            onClick()
        }} style={{display: 'flex'}}>
            <input min={1}
                   max={100}
                   className="number-input"
                   type="number"
                   value={inputValue}
                   onInput={handleInputChange}
                   onKeyDown={(e) => ["e", "E"].includes(e.key) && e.preventDefault()}
            />
            <button className="ok-button" type="submit" disabled={!inputValue}>✔</button>
        </form>
    </div>;
}
