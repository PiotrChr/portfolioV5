import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import BNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LanguageDropdown } from '@App/components/common/nav';

import { navigation } from '@Config/navigation';

type Props = {
    setLocale: any;
};

export const Navbar = ({ setLocale }: Props) => {
    const [isOpen, setOpen] = useState(false);

    const renderItems = () =>
        navigation.main.map((item, key) => (
            <Nav.Item key={key}>
                <LinkContainer to={item.route}>
                    <Nav.Link>{item.name}</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        ));

    return (
        <BNavbar variant="dark" bg="dark">
            <div className="d-flex justify-content-between">
                <BNavbar.Brand as={'a'}>Brand</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="main-nav" />
            </div>
            <BNavbar.Collapse id="main-nav">
                <Nav navbar className="mr-auto">
                    {renderItems()}
                    <LanguageDropdown setLocale={setLocale} items={navigation.languages} />
                </Nav>
            </BNavbar.Collapse>
        </BNavbar>
    );
};
