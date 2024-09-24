import {useEffect, useState} from "react";

const Index = () => {
    const loadingTexts = ['loading', 'loading.', 'loading..', 'loading...'];
    const [loadingState, setLoadingState] = useState(0);

    useEffect(() => {
        const change = () => {
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
            {/*<Header/>*/}
            <div
                className={"mx-auto h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"}>

                <section className={"flex gap-6 relative pt-24 w-full"}>
                    <div className={"w-1/2 lg:sticky lg:flex-col lg:flex lg:top-0 h-full"}>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Innovin
                            Anuonye</a></h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior
                            Software Engineer</h2>
                        <p className="mt-4 max-w-xs leading-normal">I am passionate about learning new technologies and
                            solving complex problems with speed and efficiency.</p>
                        <p className="mt-4 max-w-xs leading-normal"> I value teamwork, communication, and feedback,
                            and I strive to contribute to the success and growth of the organizations and clients I
                            work with.</p>
                        <p className="mt-4 max-w-xs leading-normal"> I am always eager to take on new challenges and
                            opportunities that will help me grow as
                            a developer and a professional.</p>
                    </div>
                    <div className={"w-1/2 scroll-mt-16 lg:scroll-mt-24 h-screen"}>

                        <p>I am INNOVIN</p>

                    </div>
                </section>
            </div>
            <main className={"flex justify-center items-center min-h-screen overflow-visible mx-4"}>


            </main>
        </>

    )
}
export default Index;