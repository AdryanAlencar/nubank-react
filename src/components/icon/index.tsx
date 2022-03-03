import React from "react";
import styles from "./styles.module.scss";
import { UserIcon, HelpIcon, EyeIcon, ClosedEyeIcon, AddLetterIcon, NextIcon, PixIcon, BarCodeIcon, MoneyInIcon, MoneyOutIcon, MoneyDialogIcon, SmartPhoneIcon, GlobeIcon } from '../../assets/icons';

interface IRoundedIconProps {
    icon: "user-icon" | "help-icon" | "eye-icon" | "closed-eye-icon" | "add-letter-icon" | "next-icon" | "pix-icon" | "bar-code-icon" | "money-in-icon" | "money-out-icon" | "money-dialog-icon" | "smart-phone-icon" | "globe-icon";
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary";
}

interface IRoundedIconState {
    icon: string;
    size: string;
    color: string;
}

class RoundedIcon extends React.Component<IRoundedIconProps, IRoundedIconState>{

    constructor(props: IRoundedIconProps){
        super(props);
        this.state = {
            icon: this.props.icon,
            size: this.props.size ? this.props.size : "medium",
            color: this.props.color ? this.props.color : "primary"
        }
    }

    componentDidMount(){
        var icon = this.props.icon === "user-icon" ? UserIcon : (this.props.icon === "help-icon" ? HelpIcon : (this.props.icon === "eye-icon" ? EyeIcon : (this.props.icon === "closed-eye-icon" ? ClosedEyeIcon : (this.props.icon === "add-letter-icon" ? AddLetterIcon : (this.props.icon === "next-icon" ? NextIcon : (this.props.icon === "pix-icon" ? PixIcon : (this.props.icon === "bar-code-icon" ? BarCodeIcon : (this.props.icon === "money-in-icon" ? MoneyInIcon : (this.props.icon === "money-out-icon" ? MoneyOutIcon : (this.props.icon === "money-dialog-icon" ? MoneyDialogIcon : (this.props.icon === "smart-phone-icon" ? SmartPhoneIcon : GlobeIcon)))))))))));
        var size = this.props.size === "small" ? styles.small : (this.props.size === "medium" ? styles.medium : styles.large);
        var color = this.props.color === "primary" ? styles.primary : (this.props.color === "secondary" ? styles.secondary : (this.props.color === "tertiary" ? styles.tertiary : (this.props.color === "quaternary" ? styles.quaternary : (this.props.color === "quinary" ? styles.quinary : styles.senary))));

        this.setState({
            icon: icon,
            size: size,
            color: color
        });
    }

    render(){        
        return (
            <div className={`${styles.roundedIcon} ${this.state.color} ${this.state.size}`}>
                <img src={this.state.icon} alt=""/>
            </div>
        );
    }

}

interface ISimpleIconProps {
    icon: "user-icon" | "help-icon" | "eye-icon" | "closed-eye-icon" | "add-letter-icon" | "next-icon";
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary";
}

interface ISimpleIconState {
    icon: string;
    size: string;
    color: string;
}

class SimpleIcon extends React.Component<ISimpleIconProps, ISimpleIconState>{

    constructor(props: ISimpleIconProps){
        super(props);
        this.state = {
            icon: this.props.icon === "user-icon" ? UserIcon : HelpIcon,
            size: this.props.size ? this.props.size : "medium",
            color: this.props.color ? this.props.color : "primary"
        }
    }

    componentDidMount(){
        var size = this.props.size === "small" ? styles.small : (this.props.size === "medium" ? styles.medium : styles.large);
        var color = this.props.color === "primary" ? styles.primary : (this.props.color === "secondary" ? styles.secondary : (this.props.color === "tertiary" ? styles.tertiary : (this.props.color === "quaternary" ? styles.quaternary : (this.props.color === "quinary" ? styles.quinary : styles.senary))));
        var icon = this.props.icon === "user-icon" ? UserIcon : (this.props.icon === "help-icon" ? HelpIcon : (this.props.icon === "eye-icon" ? EyeIcon : (this.props.icon === "closed-eye-icon" ? ClosedEyeIcon : (this.props.icon === "add-letter-icon" ? AddLetterIcon : NextIcon))));

        this.setState({
            size: size,
            color: color,
            icon: icon
        });
    }

    render(){        
        return (
            <div className={`${styles.simpleIcon} ${this.state.color} ${this.state.size}`}>
                <img src={this.state.icon} alt=""/>
            </div>
        );
    }
}

export { RoundedIcon, SimpleIcon };