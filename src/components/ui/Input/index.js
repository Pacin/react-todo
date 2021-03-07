import s from './style.module.scss';

const Input = ({
    value,
    onChange,
    placeholder
}) => (
    <input
        className={`${s.input}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}>
    </input>
)

export default Input;