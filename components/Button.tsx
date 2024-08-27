import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit',
    variant?: 'btn_dark_green';
    icon?: string;
    title: string
}

const Button = (props: ButtonProps) => {
    const { type, variant, icon, title } = props
    return (
        <button
            type={type}
            className={`flexCenter gap-3 rounded-full border ${variant}`}
        >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 ">{title}</label>
        </button>
    )
}

export default Button