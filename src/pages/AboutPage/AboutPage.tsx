import React, {FC} from 'react';
import {useStyles} from './AboutPage.styles';
import {useGlobalStyles} from "../../constants";
import SayHelloSection from "../../components/SayHelloSection";
import NadiaImage from '../../assets/JuthyNadia.png';
import {Link} from "react-router-dom";

interface Props {
}

const AboutPage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <main className={globalClasses.container}>
            <div className={classes.aboutContainer}>
                <div className={classes.aboutMeContainer}>
                    <div className={classes.aboutMeTextWrapper}>
                        <p>
                            Hi! My name is Nadia, I am a full stack website developer based in Finland.
                        </p>
                        <p>
                            I began my journey with website development about 10 years ago, when I was still in high school. Continued to study and work on websites all through-out college, whilst studying Computer Science, Graphic Design, ICT and Photography I knew web development is what interested me the most. A good balance of being both creative and technical.
                        </p>
                        <p>
                            I went on to university with web development as a career goal. Graduated from Manchester Metropolitan University with a First-Class Honours in Web Development bachelors and went on to complete a  Masters degree in Computing with a First-Class Honours.
                        </p>
                        <p>
                            Whilst finishing my university degree’s I started working part-time as a full stack developer at TH-EY. Which is where I still work today and love it. Working mostly with React and Java.
                        </p>
                        <p>
                            I’ve worked on a wide range of projects, ranging from creating a curated shopping web app to a hybrid working management app.
                        </p>
                    </div>
                    <img src={NadiaImage} alt="NadiaImage" className={classes.aboutMeImage} />
                </div>
                <Link to="/contact" className={classes.checkOutCV}>Check out my CV</Link>
            </div>
            <SayHelloSection />
        </main>
    );
};

export default AboutPage;
