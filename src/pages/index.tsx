import Header from "../components/header.tsx";
import {useEffect, useState} from "react";

const Index = () => {
    const loadingTexts = ['loading', 'loading.', 'loading..', 'loading...'];
    const [loadingState, setLoadingState] = useState(0);

    useEffect(() => {
        const change = () => {
            console.log(loadingState);
            if (loadingTexts.length === loadingState + 1) {
                setLoadingState(0);
            } else {
                setLoadingState((prevState) => prevState + 1);
            }
        };

        const interval = setInterval(change, 300);

        return () => {
            clearInterval(interval);
        };
    }, [loadingState]);

    return (
        <>
            <Header/>
            <main className={"flex justify-center items-center h-screen"}>
                <p className={"italic"}>Something really cool {loadingTexts[loadingState]} :)</p>
            </main>
        </>

    )
}
export default Index;