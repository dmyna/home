import * as React from 'react';

import Image from "next/image";

import Layout from '../components/layout';
import PresentationDiv from "../components/PresentationDiv";
import LinksSquare from "../components/LinksSquare";

import style from '../style/pages/index.module.scss';

export const getServerSideProps = async () => {
    const data = (await import('../lib/data')).default;

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();
    const uiData = data.getUiData();

    return { props: { navAsdData, userData, uiData } };
};


interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object
}

const MainPage = class MainPage extends React.Component<Props, {}> {
    children: JSX.Element;
    data: any;
    avatarImg: any;
    perfilSpace: any;
    state: any;

    constructor(props: any) {
        super(props);

        this.children = props.children;
        this.data = props.data;
        this.avatarImg = React.createRef();
        this.perfilSpace = React.createRef();
        this.state = {
            avatarHeight: '',
            perfilSpaceRows: ''
        };
    }
    componentDidMount(): void {
        const perfilSpaceHeight = this.perfilSpace.current.clientHeight;

        if (perfilSpaceHeight >= 2000) {
            this.setState({ perfilSpaceRows: '100vh auto' });
        } else if (perfilSpaceHeight >= 1000) {
            this.setState({ perfilSpaceRows: '75vh auto' });
        }
    }
    render() {
        return (
            <div className={"mainPageSpace " + style.mainPageSpace}>
                <div className={"perfilBg " + style.perfilBg}
                    style={{ backgroundImage: `url(${this.data.perfilbg[0].url})` }}>
                    <div className={"bgEffect " + style.bgEffect}></div>
                </div>
                <div className={"elementsBody " + style.elementsBody}>
                    <div className={"perfilSpace " + style.perfilSpace} ref={this.perfilSpace}
                        style={{ gridTemplateRows: this.state.perfilSpaceRows }}>
                        <div className={"avatarSpace " + style.avatarSpace}>
                            <div className={"avatarImg " + style.avatarImg} ref={this.avatarImg}
                                style={{}}>
                                <Image src={this.data.avatar[0].url}
                                    alt="User Image" fill sizes="100vw"
                                />
                            </div>
                        </div>
                        <div className={"nameSpace " + style.nameSpace}>
                            <div className={"username " + style.username}>{this.data.username}</div>
                        </div>
                    </div>
                    <div className={"mainContentSpace " + style.mainContentSpace}>
                        <PresentationDiv data={this.data.uiData} />
                    </div>
                    <LinksSquare />
                </div>
            </div>
        );
    }
};

const main = ({ navAsdData, userData, uiData }: any) => {
    return (
        <Layout fullview={true} navAsdData={navAsdData}>
            <MainPage data={{ ...userData, uiData }} />
        </Layout>
    );
};
export default main;