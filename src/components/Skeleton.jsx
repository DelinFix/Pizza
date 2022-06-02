import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ffffff"
        {...props}
    >
        <circle cx="140" cy="125" r="120" />
        <rect x="5" y="320" rx="15" ry="15" width="270" height="85" />
        <rect x="5" y="275" rx="15" ry="15" width="270" height="30" />
        <rect x="125" y="414" rx="15" ry="15" width="152" height="45" />
        <rect x="5" y="425" rx="7" ry="7" width="91" height="27" />
    </ContentLoader>
)

export default Skeleton