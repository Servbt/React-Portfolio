import React from 'react';
import './styles.css';

export default function Interstice() {
    return (
        <div ClassName="body">
            <div>
                <header className="navbar">
                    <h1><a href="#home"> Arian Rezvani</a></h1>

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
                                Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
                                molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
                                magna a ultrices. Aenean pellentesque placerat lacus imperdiet
                                efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
                                mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
                                posuere, eget tristique dui dapibus. Maecenas fermentum elementum
                                faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
                                ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
                                dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
                                rhoncus. Etiam vel condimentum magna, quis tempor nulla.
                            </p>
                            <div>
                                Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
                                Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
                                dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
                                sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
                                sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
                                vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
                                libero. Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
                                lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
                                in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
                                bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
                                est ligula suscipit velit, sed bibendum turpis dui in sapien.
                                <div>
                                    <p>
                                        Sample
                                    </p>

                                </div>

                            </div>

                            <section className="second">
                                <h2 >My Work</h2>

                                <sider ClassName="steam-card">

                                    {/* <a href="https://steamcommunity.com/profiles/76561198044842761/screenshots/" >Steam Screenshots **Soon to be third Project**</a> */}

                                </sider>

                                <article ClassName="horiseon-card">

                                    {/* <a href="https://github.com/Servbt/Nexus">Nexus</a> */}
                                </article>

                                <sider ClassName="fanpage-card">

                                    {/* <a href="https://github.com/Servbt/Mix-up-Movie-Night" >Mix-it-up Movie Night</a> */}

                                </sider>

                            </section>

                            <address ClassName="third">
                                <h2 > Contact Me </h2>

                                <ul>
                                    <li><a href="https://github.com/Servbt" > My Github </a></li>
                                    <li><a href="https://www.youtube.com/channel/UC-iA48TXCg1uUk_6oGmHDJQ" >YouTube </a></li>
                                </ul>


                            </address>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
