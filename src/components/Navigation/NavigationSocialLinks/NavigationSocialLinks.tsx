import React, {FC} from 'react';
import {useStyles} from './NavigationSocialLinks.styles';
import {ReactComponent as GitHubIcon} from "../../../assets/icons/GitHub.svg";
import {ReactComponent as LinkedInIcon} from "../../../assets/icons/LinkedIn.svg";

interface Props {
}

const NavigationSocialLinks: FC<Props> = () => {
    const classes = useStyles();

    return (
        <ul className={classes.navSocialLinks}>
            <li><a href="https://github.com/JuthyNadi-a"><GitHubIcon className={classes.socialIcon} /></a></li>
            <li><a href="https://www.linkedin.com/in/nadia-jahan-juthy/"><LinkedInIcon className={classes.socialIcon} /></a></li>
        </ul>
    );
};

export default NavigationSocialLinks;
