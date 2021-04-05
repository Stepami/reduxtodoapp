import React, { FunctionComponent } from 'react'

interface IHeaderProps {
    headerText: string
}

const Header: FunctionComponent<IHeaderProps> = (props: IHeaderProps) =>
    <nav className="navbar bg-light justify-content-center">
        <span className="navbar-text mb-0 h1 text-body font-weight-bold">{props.headerText}</span>
    </nav>

export default Header