import React from "react";
import { RoundedIcon, SimpleIcon } from "../icon";
import styles from "./styles.module.scss";

interface IHeaderProps {
    user_name: string;
}

class Header extends React.Component<IHeaderProps, {}> {
    render() {
        return (
            <header className={styles.header}>
                <nav>
                    <div className={styles.icon}>
                        <RoundedIcon
                            icon="user-icon"
                            size="medium"
                            color="secondary"
                        />
                    </div>
                    <div className={styles.acitons}>
                        <SimpleIcon
                            icon="eye-icon"
                            size="small"
                            color="primary"
                        />
                        <SimpleIcon
                            icon="help-icon"
                            size="small"
                            color="primary"
                        />
                        <SimpleIcon
                            icon="add-letter-icon"
                            size="small"
                            color="primary"
                        />
                    </div>
                </nav>
                <div className={styles.user_name}>
                    <h3>Olá, {this.props.user_name}</h3>
                </div>
            </header>
        );
    }
}

export { Header };