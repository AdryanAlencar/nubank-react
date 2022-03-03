import React from "react";
import { SimpleIcon } from "../icon";
import styles from "./styles.module.scss";

interface IBallanceProps {
    value: number;
}

class Ballance extends React.Component<IBallanceProps, {}> {
    format(value: number) {
        var parts = value.toFixed(2).toString().split(".");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
        return parts.join(",");
    }

    render() {
        return (
            <div className={styles.ballance}>
                <div className={styles.title}>
                    <h3>Conta</h3>
                    <div className={styles.icon}>
                        <SimpleIcon icon="next-icon" size="small" color="tertiary" />
                    </div>
                </div>
                <div className={styles.ballance_value}>
                    <h2>R$ {this.format(this.props.value)}</h2>
                </div>
            </div>
        );
    }
}

export { Ballance };