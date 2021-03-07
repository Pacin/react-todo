import s from './style.module.scss';

const Button = ({
    children,
    className,
    color,
    type,
    onClick,
    block
}) => (
    <button
        className={`${s.btn} ${s[color]} ${block ? s.block : ''}`}
        type={type}
        onClick={onClick}>
        {children}
    </button>
)

export default Button;