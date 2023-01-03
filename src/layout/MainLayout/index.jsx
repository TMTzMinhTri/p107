import { Fragment, useContext, useState } from "react"
import { Outlet } from "react-router-dom"
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap"
import { AuthContext } from "../../contexts/AuthContext"

const MainLayout = () => {
    const { currentUser } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return <Fragment>
        <Navbar
            className="my-2"
            color="secondary"
            dark
            expand={"md"}
        >
            <NavbarBrand href="/">
                Reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
                <UncontrolledDropdown inNavbar>
                    <DropdownToggle nav caret>
                        <img className="border rounded-circle" src={currentUser.photoURL} width={24} height={24} />
                        <span className="ms-1"> {currentUser.displayName}</span>
                    </DropdownToggle>
                    <DropdownMenu direction="down" className="me-2">
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Collapse>
        </Navbar>
        <Outlet />
    </Fragment>
}

export default MainLayout