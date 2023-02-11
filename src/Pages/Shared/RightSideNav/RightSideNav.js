import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { SiGithub, SiGoogle, SiFacebook, SiTwitter, SiWhatsapp, SiTwitch } from "react-icons/si";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <>
            <div className='mt-3'>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-primary"><SiGoogle /> Login with google</Button>
                    <Button variant="outline-dark"><SiGithub /> Login with github</Button>
                </ButtonGroup>
                <div className='py-3'>Find Us On</div>
                <ListGroup>
                    <ListGroup.Item><SiFacebook></SiFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><SiWhatsapp></SiWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><SiTwitter></SiTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><SiTwitch></SiTwitch> Twitch</ListGroup.Item>
                </ListGroup>
                <div className='mt-2'>
                    <BrandCarousel>
                    </BrandCarousel>
                </div>
            </div>
        </>
    );
};

export default RightSideNav;