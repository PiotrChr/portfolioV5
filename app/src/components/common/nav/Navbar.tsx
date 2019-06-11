import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import {
    A,
    Navbar as BNavbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from '@bootstrap-styled/v4';
import DropdownMenu from '@bootstrap-styled/v4/lib/Dropdown/DropdownMenu';

import { navigation } from '@Config/navigation'

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const renderItems = () => navigation.main.map((item, key) => (
            <NavItem key={key}>
                <LinkContainer to={item.route}>
                    <NavLink>{item.name}</NavLink>
                </LinkContainer>
            </NavItem>
        )
    )

    return (
        <BNavbar color="faded" light toggleable="lg">
            <Container>
                <div className="d-flex justify-content-between">
                    <NavbarBrand tag={A} to="javascript:;">Brand</NavbarBrand>
                    <NavbarToggler onClick={() => setOpen(!isOpen)} />
                </div>
                <Collapse navbar isOpen={!!isOpen}>
                    <Nav navbar className="mr-auto">
                        { renderItems() }
                    </Nav>
                </Collapse>
            </Container>
        </BNavbar>
    );
}
