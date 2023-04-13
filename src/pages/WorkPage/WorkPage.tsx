import React, {FC} from 'react';
import {useStyles} from './WorkPage.styles';
import {useGlobalStyles} from "../../constants";
import PageHeading from "../../components/PageHeading";
import SayHelloSection from "../../components/SayHelloSection";
import WorkPost from "../../components/WorkPost";
import {tempWorkPosts} from "../../helpers/tempWorkPosts";

interface Props {
}

const WorkPage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <main className={globalClasses.container}>
            <PageHeading
                title="Portfolio"
                description={
                    <>
                        I work as a full stack web developer, mostly using React and Java.<br/>
                        Check out some of the projects I worked on.
                    </>
                }
            />
            <div className={classes.workWrapper}>
                {tempWorkPosts.map((post, i) => <WorkPost key={i} post={post} reversed={i % 2 !== 0} />)}
            </div>
            <SayHelloSection />
        </main>
    );
};

export default WorkPage;
