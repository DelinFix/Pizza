import { FC, memo } from "react"
import { IIconProps } from "."

const SearchIcon: FC<IIconProps> = (props) => {
    const { width, className, ...rest } = props

    return (
        <svg
            className={`${className} icon`}
            width={width}
            enableBackground="new 0 0 32 32"
            id="EditableLine"
            version="1.1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <circle
                cx="14"
                cy="14"
                fill="none"
                id="XMLID_42_"
                r="9"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
            ></circle>
            <line
                fill="none"
                id="XMLID_44_"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                x1="27"
                x2="20.366"
                y1="27"
                y2="20.366"
            ></line>
        </svg>
    )
}

export default memo(SearchIcon)
