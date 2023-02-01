import React from 'react';
import './Port.css';

const Port = () => {
    return (
        <div className="site-wrap">
            <div className="container mx-auto">
                <div className="navbar bg-base-100 fixed top-0 left-0 z-50">
                    <div className="flex-1">
                        <a href='http://localhost:3000' className="btn btn-ghost normal-case text-xl">Portfolio</a>
                    </div>

                </div>

            </div>


            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.imgur.com/maLH5Es.jpg` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About me</h1>
                        <p className="mb-5">이름 : 염현섭</p>
                        <p className="mb-5">연락처 : 010-6472-7064</p>
                        <p className="mb-5">생년월일 :  96.11.25</p>
                        <p className="mb-5">이메일 :  seop3923@gmail.com</p>

                    </div>
                </div>
                <div className="scroll-downs">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="portfolio-list my-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.imgur.com/frpeffM.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">증권 사이트</h2>
                            <p>증시, 코인 api를 활용한 커뮤니티 사이트</p>
                            <div className="prgoress-box my-2">
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">React</div>
                                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                                </div>
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">Spring</div>
                                    <progress className="progress progress-primary w-56" value="60" max="100"></progress>
                                </div>
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">MYsql</div>
                                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href='http://www.noh.world:3000/' target='_blank' rel='noreferrer'>사이트</a></button>
                                <button className="btn btn-primary"><a href='https://www.figma.com/file/Kt1XGmadMLNV9qflhAfhdM/%ED%88%AC%EC%9E%90-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0%3A1&t=OXFf1fBY9T2gUEgW-0' target='_blank' rel='noreferrer'>자세히 보기</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.imgur.com/qZvg4bI.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">웹 채팅</h2>
                            <p>입장한 닉네임으로 소통하는 웹 채팅 사이트</p>
                            <div className="prgoress-box my-2">
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">React</div>
                                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                                </div>
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">Express</div>
                                    <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="https://zx3923.github.io/my-chat-front/" target='_blank' rel='noreferrer'>사이트</a></button>
                                <button className="btn btn-primary"><a href="https://www.figma.com/file/uN0TXjIhrOKszfvmv1Zq22/%EC%B1%84%ED%8C%85?t=OXFf1fBY9T2gUEgW-0" target='_blank' rel='noreferrer'>자세히 보기</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.imgur.com/vG6Gu9m.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">게시판</h2>
                            <p>백엔드 공부를 위한 커뮤니티 게시판</p>
                            <div className="prgoress-box my-2">
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">React</div>
                                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                                </div>
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">Spring</div>
                                    <progress className="progress progress-primary w-56" value="60" max="100"></progress>
                                </div>
                                <div className="progress-box__progress flex items-center">
                                    <div className="w-20">MYsql</div>
                                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">GO SITE</button>
                                <button className="btn btn-primary"><a href="https://www.figma.com/file/wveJ18iFGT0uE8Z6PawiE0/%EB%82%B4-%EA%B2%8C%EC%8B%9C%ED%8C%90?node-id=0%3A1&t=230HSOfSidmpxywf-0" target='_blank' rel='noreferrer'>자세히 보기</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-neutral">
                <div className="container mx-auto">
                    <footer className="footer p-10 text-neutral-content">
                        <div>
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                        </div>

                    </footer>
                </div>
            </div>



        </div>
    );
};

export default Port;