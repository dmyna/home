/** @format */

import React, { JSX } from "react";

import Layout from "../../../components/Layout";

export const getServerSideProps = async (): Promise<{ props: UnknownObj }> => {
    const data = (await import("../../../lib/data")).default;

    const navAsdData = data.getUiData();

    return { props: { navAsdData } };
};
const Playlist = ({ navAsdData }: UnknownObj): JSX.Element => {
    return <Layout navAsdData={navAsdData}></Layout>;
};
export default Playlist;
