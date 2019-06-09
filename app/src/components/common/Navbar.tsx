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

import { navigation } from '@Config/navigation'

// TODO: Export and add a react hook here

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <BNavbar color="faded" light toggleable="lg">
            <Container>
                <div className="d-flex justify-content-between">
                    <NavbarBrand tag={A} to="javascript:;">Brand</NavbarBrand>
                    <NavbarToggler onClick={() => setOpen(!isOpen)} />
                </div>
                <Collapse navbar isOpen={!!isOpen}>
                    <Nav navbar className="mr-auto">
                        {
                            navigation.main.map((item, key) => {
                                return (
                                    <NavItem key={key}>
                                        <LinkContainer to={item.route}>
                                            <NavLink>{item.name}</NavLink>
                                        </LinkContainer>
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                </Collapse>
            </Container>
        </BNavbar>
    );
}
