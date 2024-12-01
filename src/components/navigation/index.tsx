import React, { ReactElement } from 'react'
import Button from '../customButton'
import './style.scss'

interface Props {
    logo: string
    contactNo?: number
    navigation: string[]
}

function Nav({ logo, navigation, contactNo }: Props): ReactElement {
    const options = [
        'Home',
        'Services',
        'Testimonial',
        'FAQ',
        'Portfolio',
        'Contacts',
    ]
    console.log(navigation)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top px-3">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo_image" />
            </a>
            <button
                className="navbar-toggler bg-primary bg-opacity-75"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <NavSideOptions options={navigation} />
                </ul>
                {!!contactNo && (
                    <Button
                        text={'+91' + contactNo}
                        icon={<i className="fas fa-phone" />}
                    />
                )}
            </div>
        </nav>
    )
}

function NavSideOptions({
    active,
    options,
}: {
    active?: boolean
    options: Array<string>
}) {
    return (
        <>
            {options.map((option, i) => {
                return (
                    <li className="nav-item" key={i}>
                        <a className="nav-link" href={'#' + option}>
                            {option}
                        </a>
                    </li>
                )
            })}
        </>
    )
}

export default Nav
