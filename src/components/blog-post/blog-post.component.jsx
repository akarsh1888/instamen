import React from 'react';
import './blog-post.styles.scss';
import { Link } from "react-router-dom";

const BlogPost = () => {
    return (
            <section className='container'>
                <div className='site-content'>
                
                <div className='posts'>
                    <div className='post-content'>
                        
                        <div className="post-image">
                            <div>
                                <img className="img" src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                <span>2 Commets</span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="/">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                illum similique veniam tempore unde?
                            </p>
                            <button className="btn post-btn">
                                Read More &nbsp; <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>


                        <hr/>
                    </div>
                    <div className='post-content'>
                        
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                <span>2 Commets</span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="#">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                illum similique veniam tempore unde?
                            </p>
                            <button className="btn post-btn">
                                Read More &nbsp; <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>


                        <hr/>
                    </div>
                    <div className='post-content'>
                        
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                <span>2 Commets</span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="#">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                illum similique veniam tempore unde?
                            </p>
                            <button className="btn post-btn">
                                Read More &nbsp; <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>


                        <hr/>
                    </div>
                    <div className='post-content'>
                        
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                <span>2 Commets</span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="#">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                illum similique veniam tempore unde?
                            </p>
                            <button className="btn post-btn">
                                Read More &nbsp; <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>


                        <hr/>
                    </div>


                    <div className="pagination flex-row">
                        <Link to="#"><i className="fas fa-chevron-left"></i></Link>
                        <Link to="#" className="pages">1</Link>
                        <Link to="#" className="pages">2</Link>
                        <Link to="#" className="pages">3</Link>
                        <Link to="#"><i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>








                <aside className='sidebar'>
                    
                <div className="category">
                        <h2>Category</h2>
                        <ul className="category-list">
                            <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                                <Link to='/'>Software</Link>
                                <span>(05)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                                <Link to='/'>Techonlogy</Link>
                                <span>(02)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                                <Link to='/'>Lifestyle</Link>
                                <span>(07)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                                <Link to='/'>Shopping</Link>
                                <span>(01)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                                <Link to='/'>Food</Link>
                                <span>(08)</span>
                            </li>
                        </ul>
                    </div>
                
                <div className="popular-post">
                    <h2>Popular Post</h2>
                    <div className='post-content'>
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                    <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;
                                      January 14, 2019
                                    </span>
                                    <span>
                                      2 Commets
                                    </span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="/">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                        </div>
                    </div>
                    <div className='post-content'>
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                    <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;
                                      January 14, 2019
                                    </span>
                                    <span>
                                      2 Commets
                                    </span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="/">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                        </div>
                    </div>
                    <div className='post-content'>
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                    <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;
                                      January 14, 2019
                                    </span>
                                    <span>
                                      2 Commets
                                    </span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="/">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                        </div>
                    </div>
                    <div className='post-content'>
                        <div className="post-image">
                            <div>
                                <img className='img' src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="blog1" />
                            </div>
                            
                            <div className="post-info flex-row">
                                    <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;
                                      January 14, 2019
                                    </span>
                                    <span>
                                      2 Commets
                                    </span>
                            </div>
                        </div>

                        <div className="post-title">
                            <Link to="/">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry
                            </Link>
                        </div>
                        </div>


                    <div className="popular-tags">
                        <h2>Popular Tags</h2>
                        <div className="tags flex-row">
                            <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                        </div>    
                    </div>
                            
                </div>
                
                </aside>   
            
            
            
                </div>
            </section>
    );
};

export default BlogPost;