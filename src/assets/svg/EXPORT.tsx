import { SVGProps } from "react"

export interface IIconProps extends SVGProps<SVGSVGElement> {
    className?: string
    width: string
    height?: string
}

export { default as CartIcon } from "./CartIcon"
export { default as TrashIcon } from "./TrashIcon"
export { default as BackIcon } from "./BackIcon"
export { default as DecrementIcon } from "./DecrementIcon"
export { default as IncrementIcon } from "./IncrementIcon"
export { default as SearchIcon } from "./SearchIcon"
