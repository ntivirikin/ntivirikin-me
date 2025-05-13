function Home() {
    return (
        <div className="flex flex-col justify-center items-center py-18"> 
            <div className="grid grid-cols-3 w-full max-w-5xl items-center">
                <div className="col-span-2">
                    <h1 className="text-5xl font-bold text-ashgr mb-2">Nazariy Tivirikin</h1>
                    <p className="text-lg text-justify leading-relaxed text-papawt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper lacus vitae ornare egestas. Maecenas auctor nulla et ex imperdiet feugiat. Pellentesque quis accumsan felis. Sed mollis eget arcu et scelerisque. Duis id commodo urna. Cras ac nibh eget nibh accumsan eleifend. Integer aliquam ante sit amet bibendum sagittis. Mauris et congue orci, in feugiat libero.</p>
                    <div className="flex font-bold text-lg justify-center mt-6 space-x-38 text-vermill">
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
                    <img src="/placeholder.png" alt="Nazariy Tivirikin" className="w-64 h-auto rounded-2xl shadow-lg" />
                </div>
            </div>

            <div className="grid grid-cols-3 w-full max-w-3xl mt-12">
                <h2 className="col-span-2 text-3xl font-bold text-ashgr mb-2">Projects</h2>
                <p className="col-span-3 justify text-lg text-justify leading-relaxed text-papawt">Suspendisse at molestie nunc, a laoreet libero. Vestibulum sodales pharetra dui, eu dapibus tortor ultricies aliquam. Sed sit amet arcu eu ipsum volutpat aliquet.</p>
                <div className="flex justify-between col-span-3 mt-6">
                    <h3 className="col-span-2 text-xl font-bold text-ashgr">xeno-canto Database Management Tool</h3>
                    <a href="https://github.com/ntivirikin/xeno-canto-py" target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-vermill hover:underline">GitHub Repo Link</a>
                </div>
                <p className="col-span-3 text-justify text-lg leading-relaxed text-papawt">Quisque luctus ante vel nulla posuere, ut blandit purus lobortis. In pellentesque, odio et tincidunt pharetra, erat dui ultricies metus, congue semper purus sapien ut est. Fusce blandit lobortis enim sit amet blandit.</p>
            </div>
        </div>
    );
}

export default Home;