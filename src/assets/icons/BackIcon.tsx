import { FC, memo } from "react"
import { IIconProps } from "."

const BackIcon: FC<IIconProps> = (props) => {
    const { width, className, ...rest } = props

    return (
        <svg
            className={className}
            width={width}
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default memo(BackIcon)
