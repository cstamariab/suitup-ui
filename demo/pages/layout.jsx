import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../src/components';

const Logo = (props) => {

    let style = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: `${props.width}px`,
        height: `${props.height}px`
    }

    return (
        <div className="logo" style={style}>
        </div>
    );
}

class WebLayout extends React.Component {

    constructor (props) {
        super(props);
        this.toggleMenu = ::this.toggleMenu;
        this.onMenuHide = ::this.onMenuHide;
        this.state = {
            menuVisible: false
        }
    }

    toggleMenu(){
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    }

    onMenuHide(){
        this.setState({
            menuVisible: false
        }); 
    }

    render () {

        let logo = <Logo url="/img/logo.svg" width={60} height={64}/>
        return (
                <Layout style={{backgroundColor: 'rgb(251,251,251)'}}>
                    <Header fixed top style={{backgroundColor: '#373D49', color: 'rgb(50, 186, 141)'}}>
                        <Box horizontal>
                            <Box.Child key={1}>
                                <Button menu type="button" onClick={this.toggleMenu} style={{backgroundColor: '#373D49'}}>
                                    <Icon name="menu" size={24}/>
                                </Button>
                            </Box.Child>
                        </Box>
                    </Header>
                    <Menu left visible={this.state.menuVisible} onHide={this.onMenuHide}>
                        <Menu.Header title="Suitup UI" icon={logo} style={{backgroundColor: '#373D49', color: '#35D7BB', border: 'none'}}  key={1}/>
                        <Menu.Item href="/" text="Inicio" key={2}/>
                        <Menu.Item text="Containers"  key={3}>
                            <Menu.SubItem text="Layout" href="/containers/layout" key={1}/>
                            <Menu.SubItem text="Container" href="/containers/container" key={2}/>
                            <Menu.SubItem text="Box" href="/containers/box" key={3}/>
                        </Menu.Item>
                        <Menu.Item text="Components"  key={4}>
                            <Menu.SubItem text="Button" href="/components/button" key={1}/>
                            <Menu.SubItem text="Card" href="/components/card" key={2}/>
                            <Menu.SubItem text="Header" href="/components/header" key={3}/>
                            <Menu.SubItem text="Icon" href="/components/icon" key={4}/>
                            <Menu.SubItem text="Image" href="/components/image" key={5}/>
                            <Menu.SubItem text="Menu" href="/components/menu" key={6}/>
                            <Menu.SubItem text="Modal" href="/components/modal" key={7}/>
                            <Menu.SubItem text="Slider" href="/components/slider" key={8}/>
                        </Menu.Item>
                        <Menu.Item text="Responsive"  key={6}>
                            <Menu.SubItem text="Devices and breakpoints" href="/responsive/devices"/>
                        </Menu.Item>
                        <Menu.Item text="Theming" href="/theming"  key={7}/>
                        <Menu.Item href="/fulldemo" text="Full demo"  key={8}/>
                    </Menu>
                    {this.props.children}
                    <Footer style={{backgroundColor: '#373D49', color: '#35D7BB'}}/>
                </Layout>
            );
    }
} 

export default WebLayout;