function Home() {
    return (
        <div className="flex flex-col justify-center items-center py-18"> 
            <div className="grid grid-cols-3 w-full max-w-4xl items-center">
                <div className="col-span-2">
                    <h1 className="text-4xl font-bold text-ashgr mb-2">Nazariy Tivirikin</h1>
                    <p className="text-base text-justify leading-relaxed text-papawt">
                        I am an experienced test automation engineer and recent MS graduate in Computer Science from the Georgia Institute of Technology, studying 
                        distributed systems and high performance computing. Currently working on projects in fish tracking, bird audio processing and computational 
                        astrophysics. Occasional writer. Come take a look at some of my work below!
                    </p>
                    <div className="flex font-bold text-lg justify-center mt-4 space-x-38 text-vermill">
                        <a
                        href="https://www.linkedin.com/in/ntivirikin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        LinkedIn
                        </a>

                        <a
                        href="https://github.com/ntivirikin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        GitHub
                        </a>

                        <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        Resume
                        </a>
                    </div>
                </div>

                <div className="flex justify-end items-start">
                    <img src="/placeholder.png" alt="Nazariy Tivirikin" className="w-60 h-auto rounded-2xl shadow-lg" />
                </div>
            </div>

            <div className="grid grid-cols-3 w-full max-w-4xl mt-10">
                <h2 className="col-span-2 text-2xl font-bold text-ashgr">Projects</h2>

                <div className="flex justify-between col-span-3 mt-2">
                    <a href="https://github.com/ntivirikin/xeno-canto-py" target="_blank" rel="noopener noreferrer" className="col-span-2 font-bold text-lg text-ashgr hover:underline">xeno-canto API Tool</a>
                    <h3 className="col-span-1 text-lg font-bold text-papawt">Python</h3>
                </div>
                <p className="col-span-3 text-justify text-base leading-relaxed text-papawt">
                    Download bird audio recordings from the xeno-canto database and manage associated metadata. Built with pure Python and capable of downloading 
                    asynchronously, search for hundreds of thousands of bird recordings with simple string queries that save hours of manual retrieval. Download by 
                    species, location, or any other tag available!
                </p>

                <div className="flex justify-between col-span-3 mt-2">
                    <a href="https://github.com/ntivirikin/xeno-canto-py" target="_blank" rel="noopener noreferrer" className="col-span-2 font-bold text-lg text-ashgr hover:underline">Kerr Scalar Field Dynamics in CUDA</a>
                    <h3 className="col-span-1 text-lg font-bold text-papawt">C, C++, CUDA</h3>
                </div>
                <p className="col-span-3 text-justify text-base leading-relaxed text-papawt">
                    Solves the equations of motion for a real scalar field around a Kerr black hole, converted from OpenMP to CUDA. This project aims to take advantage 
                    of the speedups offered by CUDA architecture to aid with common astrophysics computations.
                </p>

                <div className="flex justify-between col-span-3 mt-2">
                    <a href="https://github.com/ntivirikin/xeno-canto-py" target="_blank" rel="noopener noreferrer" className="font-bold text-lg col-span-2 text-ashgr hover:underline">Heron Fishing Companion App</a>
                    <h3 className="col-span-1 text-lg font-bold text-papawt">React, Spring Boot, PostgreSQL</h3>
                </div>
                <p className="col-span-3 text-justify text-base leading-relaxed text-papawt">
                    Allows anglers to log and manage their fish catches, including the species caught, weight, and location. Users can also upload photos and 
                    record details about the gear used, such as rods, reels, and bait. Data visualization allows anglers to perform deep analysis on fish catching 
                    patterns, helping improve the number of fish caught in all conditions.
                </p>
            </div>
        </div>
    );
}

export default Home;