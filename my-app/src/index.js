import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Container, Dropdown, Grid, Icon, Image, Input, Label, List, Menu} from "semantic-ui-react";

class TopMenu extends React.Component {
    render() {
        return (
            <Menu borderless id='topmenu'>
                <Container>
                    <Menu.Item fitted><Icon name='facebook f'/></Menu.Item>
                    <Menu.Item fitted><Icon name='twitter'/></Menu.Item>
                    <Menu.Item fitted><Icon name='pinterest'/></Menu.Item>
                    <Menu.Item fitted><Icon name='instagram'/></Menu.Item>
                    <Menu.Item fitted position='right'><Icon name='home'/></Menu.Item>
                    <Menu.Item fitted><Icon name='search'/></Menu.Item>
                    <Menu.Item fitted><Icon name='user'/></Menu.Item>
                    <Dropdown item text='MY CART 0' icon='shop'>
                        <Dropdown.Menu>
                            <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        );
    }
}

class MiddleMenu extends React.Component {
    render() {
        return (
            <Grid centered style={{margin:'5px 0 5px 0'}}>
                <Container>
                    <Menu compact borderless id='middlemenu'>
                        <Dropdown item text='MEN'>
                            <Dropdown.Menu>
                                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                                <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                                <Dropdown.Item>HATS</Dropdown.Item>
                                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='WOMEN'>
                            <Dropdown.Menu>
                                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                                <Dropdown.Item>HATS</Dropdown.Item>
                                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='KIDS'>
                            <Dropdown.Menu>
                                <Dropdown.Item>SHIRTS</Dropdown.Item>
                                <Dropdown.Item>ONESIES</Dropdown.Item>
                                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='BRANDS'>
                            <Dropdown.Menu>
                                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                                <Dropdown.Item>AMUSE SOCIETY</Dropdown.Item>
                                <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item>SEARCH</Menu.Item>
                    </Menu>
                </Container>
            </Grid>
        );
    }
}

class FooterMenu extends React.Component {
    render() {
        return (
            <div id='footer'>
                <Grid>
                    <Grid.Row columns={3} style={{margin:'0 10px 0 10px'}}>
                        <Grid.Column>
                            NAVIGATION
                            <hr/>
                            <List>
                                <List.Item>About Us</List.Item>
                                <List.Item>Store Locations</List.Item>
                                <List.Item>Employment</List.Item>
                                <List.Item>Videos</List.Item>
                                <List.Item>Shipping & Returns</List.Item>
                                <List.Item>Privacy Policy</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            MAIN MENU
                            <hr/>
                            <List>
                                <List.Item>Men</List.Item>
                                <List.Item>Women</List.Item>
                                <List.Item>Kids</List.Item>
                                <List.Item>Brands</List.Item>
                                <List.Item>Sale</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            CONNECT
                            <hr/>
                            <List>
                                <List.Item>Join our mailing list for updates</List.Item>
                                <List.Item/>
                                <List.Item>Sign up to receive our email updates!</List.Item>
                                <Input size='big' labelPosition={'right'} label={<Label color='black'>Join</Label>} placeholder='Enter Email Address'/>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

class IslandSnowLogo extends React.Component {
    render() {
        return (
            <Image centered src='https://cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749' alt='Island Snow Hawaii Logo'/>
        );
    }
}

class FullWidthImage extends React.Component {
    render() {
        return (
            <Image centered fluid src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?1080290453015017671' alt='Island Snow Hawaii Main Image'/>
        );
    }
}

class IslandSnow extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <IslandSnowLogo/>
                <MiddleMenu/>
                <FullWidthImage/>
                <FooterMenu/>
            </div>
        );
    }
}

ReactDOM.render(<IslandSnow />, document.getElementById('root'));