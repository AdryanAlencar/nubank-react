import React from "react";
import { Actions } from "../../components/actions";
import { Ballance } from "../../components/ballance";
import { Header } from "../../components/header";
import styles from './styles.module.scss';

const Home = () => {
    return (
        <>
            <Header user_name="Adryan"/>
            <Ballance value={1356.98} />
            <Actions />
        </>
    );
}

export { Home }