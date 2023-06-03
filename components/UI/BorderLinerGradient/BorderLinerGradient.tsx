import React from "react"

interface IBorderLinerGradient {
    height?: string,
    width?: string
    marginBottom?: string,
    marginTop?: string,
    background?: string,
    position?: boolean,
    children?: React.ReactNode
}

export function BorderLinerGradient ( props: IBorderLinerGradient ) {
    const {height, width, marginBottom, marginTop, background, position, children} = props
    return (
        <div style={{
            position: `${position ? 'absolute' : 'relative'}`,
            height: `${height ? height : 3}px`,
            width: `${width ? width : 100}%`,
            marginBottom: `${marginBottom ? marginBottom : 0}px`,
            marginTop: `${marginTop ? marginTop : 0}px`,
            background: `${background ? background : 'linear-gradient(89.99deg, #00D1FF 0%, rgba(173, 73, 255, 0.5) 60%, rgba(255, 0, 123, 0.1) 90%)'}`,
        }}>
            {children}
        </div>
    )
}