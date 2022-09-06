import React from 'react';
import './styles.css';

export default function Interstice() {
    return (
        <div ClassName="body">
            <div>
                <header className="navbar">
                    <h1><a href="#home">The Interstice</a></h1>

                    <nav>
                        <ul>
                            <li> <a href="#home">About Me |</a></li>
                            <li> <a href="#bio">My Work |</a></li>
                            <li> <a href="#contact">Contact Me</a></li>
                        </ul>
                    </nav>

                </header>

                <div ClassName="main">
                    <div ClassName="section">
                        <div className="first article">
                            <h2 >About Me</h2>

                            <p>
                                The Interstice can be shortly defined as a place between life and death...
                                I'd like to think that death is not <em>merely</em> a place where things end,
                                but rather an event that leads to change. My name is Arian Rezvani, and I'm
                                currently working on changing my own path to become a web developer.
                                I don't have much to show in this portfolio, but I think that this
                                is a great way to get things started. I'll consider this as an alpha version
                                of what will hopefully be a professional portfolio. There is not much in
                                terms of accomplishment...
                            </p>
                                <div>
                                    But for now please enjoy some of my screenshots
                                    that I've taken while modding the visuals of one of my favorite games:
                                    <div>
                                        <p>
                                            The Elder Scrolls V: Skyrim
                                        </p>

                                    </div>

                                </div>

                                <section className="second">
                                    <h2 >My Work</h2>

                                    <sider ClassName="steam-card">

                                        <a href="https://steamcommunity.com/profiles/76561198044842761/screenshots/" >Steam Screenshots</a>

                                    </sider>

                                    <article ClassName="horiseon-card">

                                        <a href="https://github.com/Servbt/Nexus">Nexus</a>
                                    </article>

                                    <sider ClassName="fanpage-card">

                                        <a href="https://servbt.github.io/Berserk-Fanpage//" >First Fanpage</a>

                                    </sider>

                                </section>

                                <address ClassName="third">
                                    <h2 > Contact Me </h2>

                                    <ul>
                                        <li><a href="https://github.com/Servbt" > My Github </a></li>
                                        <li><a href="https://www.youtube.com/channel/UC-iA48TXCg1uUk_6oGmHDJQ" >YouTube </a></li>
                                        <li><a href="https://discord.gg/BDX6BKWX">UCF Discord Server </a></li>
                                    </ul>


                                </address>


                        </div>
                    </div>
                </div>
            </div>
        </div>
                );
}
