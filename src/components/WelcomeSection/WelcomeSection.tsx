import React, {FC} from 'react';
import {useStyles} from './WelcomeSection.styles';
import NadiaImage from '../../assets/JuthyNadia.png';
import clsx from "clsx";
import {useGlobalStyles} from "../../constants";

interface Props {
}

const WelcomeSection: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.welcomeContainer}>
            <h1 className={clsx(globalClasses.h1, classes.welcomeText)}>
                Hi there!<br/>
                <span>I’m Nadia - A website developer based in Finland.</span><br/>
                Currently working as a full stack developer at remote company.<br/>
            </h1>
            <img src={NadiaImage} alt="Nadia" className={classes.welcomeImage} />
        </div>
    );
};

export default WelcomeSection;
