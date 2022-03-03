import React from "react";
import { RoundedIcon } from "../icon";
import styles from "./styles.module.scss";

class Actions extends React.Component {
  render() {
    return (
      <div className={styles.actions}>
        <div className={styles.scroll}>
            <div className={styles.action}>
                <RoundedIcon
                    icon="pix-icon"
                    size="large"
                    color="quaternary"
                />
                <span>Área Pix</span>
            </div>
            <div className={styles.action}>
                <RoundedIcon
                    icon="bar-code-icon"
                    size="large"
                    color="quaternary"
                />
                <span>Pagar</span>
            </div>
            <div className={styles.action}>
                <RoundedIcon
                    icon="money-out-icon"
                    size="large"
                    color="quaternary"
                />
                <span>Transferir</span>
            </div>
            <div className={styles.action}>
                <RoundedIcon
                    icon="money-in-icon"
                    size="large"
                    color="quaternary"
                />
                <span>Depositar</span>
            </div>
            <div className={styles.action}>
                <RoundedIcon
                    icon="smart-phone-icon"
                    size="large"
                    color="quaternary"
                />
                <span>Recarga de Celular</span>
            </div>
            <div className={styles.action}>
                <RoundedIcon
                    icon="globe-icon"
                    size="large"
                    color="quaternary"
                />
                <span>Transferir Internac.</span>
            </div>
        </div>
      </div>
    );
  }
}

export { Actions };