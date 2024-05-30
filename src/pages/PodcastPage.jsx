import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React from 'react';

const videoIds = [
    'apbSsILLh28',
    'YOicw3ANegY',
    'P7D2ZajKQhY',
];
const upcomingVideoIds = [
    '4Gg4tzI03vw',
    'r_L52LDIdx4',
    'mqV3BQBBWkA',
];

const PodcastPage = () => {
    // const videoSrcFirst = "https://www.youtube.com/embed/apbSsILLh28";
    // const videoSrcSecond = "https://www.youtube.com/embed/YOicw3ANegY";
    // const videoSrcThird = "https://www.youtube.com/embed/P7D2ZajKQhY";

    return (
        <div>
            <Navbar />
            {/* <div className="space-y-5 order-2 sm:order-1 ">
                <h1 className="text-2xl sm:text-5xl font-semibold text-blue-600"
                    style={{ lineHeight: 1.2 }}
                >
                    Latest Podcasts</h1>
                <div className=" w-full h-80 bg-gray-300 flex gap-5">
                    <div className="video-responsive">
                        <iframe
                            width="500"
                            height="288"
                            src={videoSrcFirst}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded YouTube"
                        ></iframe>
                    </div>
                    <div className="video-responsive">
                        <iframe
                            width="500"
                            height="288"
                            src={videoSrcSecond}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded YouTube"
                        ></iframe>
                    </div>
                    <div className="video-responsive">
                        <iframe
                            width="500"
                            height="288"
                            src={videoSrcThird}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded YouTube"
                        ></iframe>
                    </div>
                </div>



            </div> */}

            {/* For latest videos */}
            <div className="space-y-5 order-2 sm:order-1 ">
                <h1 className="text-2xl sm:ml-12 sm:text-3xl font-semibold text-blue-950 mt-2"
                    style={{ lineHeight: 1.2 }}
                >
                    Latest Podcasts</h1>
                <div className="bg-gray-100 dark:bg-gray-900">
                    <div className="video-container sm:flex justify-center xl:border-8 xl:p-10 space-y-5 sm:space-y-0 sm:space-x-5">
                        {videoIds.map((videoId, index) => (
                            <div key={index} className="video-item sm:w-1/3 bg-gray-500 xl:rounded-2xl">
                                <div className="video-responsive flex justify-center p-10">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={`Embedded YouTube ${index + 1}`}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* For Upcoming videos */}
            <div className="space-y-5 order-2 sm:order-1">
                <h1 className="text-2xl sm:ml-12 sm:text-3xl font-semibold text-blue-950 sm:mt-12 mt-8"
                    style={{ lineHeight: 1.2 }}
                >
                    Upcoming Podcasts</h1>
                <div className="bg-gray-100 dark:bg-gray-900 hover:animate-pulse">
                    <div className="video-container sm:flex justify-center xl:border-8 xl:p-10 space-y-5 sm:space-y-0 sm:space-x-5">
                        {upcomingVideoIds.map((videoId, index) => (
                            <div key={index} className="video-item sm:w-1/3 bg-gray-500 xl:rounded-2xl">
                                <div className="video-responsive flex justify-center p-10">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={`Embedded YouTube ${index + 1}`}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />

        </div>

    );
};

export default PodcastPage;;