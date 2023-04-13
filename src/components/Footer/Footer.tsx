import React, {FC} from 'react';
import {useStyles} from './Footer.styles';
import {useGlobalStyles} from "../../constants";
import NavigationSocialLinks from "../Navigation/NavigationSocialLinks";

interface Props {
}

const Footer: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={globalClasses.container}>
            <footer className={classes.footerContainer}>
                <p>Juthy Nadia </p>
                <NavigationSocialLinks />
            </footer>
        </div>
    );
};

export default Footer;
