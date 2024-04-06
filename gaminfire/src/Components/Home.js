import React, { useState } from 'react'
import {toast} from 'react-toastify';
// import { useForm } from '@formspree/react';

export default function Home(e) {

    // const [show, setShow] = useState(false)
    // const [showOtp, setShowOtp] = useState(false)
    // const [otp, setOTP] = useState('');
    // const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: ""
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const response = await fetch(`http://localhost:5000/api/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user),
        })
        const res_data = await response.json();
        console.log("res from server", res_data.extraDetails);
        if (response.ok) {

            setUser({ username: "", email: "", phone: "" })
            toast.success(res_data.message)
        }
        else {
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
        }

        console.log(response)
    }


    // const handleVerify = async (e) => {
    //     e.preventDefault();

    //     try {
    //       // Send OTP for verification
    //       const response = await fetch(`http://localhost:5000/api/auth/verify`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': "application/json"
    //         },

    //         //phoneNumber:user.phone,
    //        body:JSON.stringify(otp) 
    //       });

    //     //   setMessage(responsee.data.message);
    //     } catch (error) {
    //       console.error('Error verifying OTP:', error);
    //     }
    //   };


    // const [state, handleSubmit] = useForm("xbjnkand");
    // if (state.succeeded) {
    //     return <Home name="Now you are part of us!" />
    // }
    return (
        <>
            {/* <div className="cursor"></div> */}
            {/* <div className="preloader"><button className="th-btn preloaderCls">CANCEL PRELOADER</button>
        <div className="preloader-inner"><span className="loader"></span></div>
    </div> */}

            {/* <div id="QuickView" className="white-popup mfp-hide">
                <div className="container bg-black3 rounded-10">
                    <div className="row gx-60">
                        <div className="col-lg-6">
                            <div className="product-big-img">
                                <div className="img"><img src="img/product/product_details_1_1.png" alt="Product Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="product-about">
                                <p className="price">$120.85<del>$150.99</del></p>
                                <h2 className="product-title">Microphone G9000</h2>
                                <div className="product-rating">
                                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span
                                        style={{ width: 100 }}>Rated <strong className="rating">5.00</strong> out of 5 based on
                                        <span className="rating">1</span> customer rating</span></div><a
                                            href="shop-details.html" className="woocommerce-review-link">(<span className="count">4</span>
                                        customer reviews)</a>
                                </div>
                                <p className="text">Syndicate customized growth strategies prospective human capital leverage
                                    other's optimal e-markets without transparent catalysts for change. Credibly coordinate
                                    highly efficient methods of empowerment cross unit solutions.</p>
                                <div className="mt-2 link-inherit">
                                    <p><strong className="text-white me-3">Availability:</strong> <span className="stock in-stock"><i
                                        className="far fa-check-square me-2 ms-1"></i>In Stock</span></p>
                                </div>
                                <div className="actions">
                                    <div className="quantity"><input type="number" className="qty-input" step="1" min="1" max="100"
                                        name="quantity" value="1" title="Qty" /> <button className="quantity-plus qty-btn"><i
                                            className="far fa-chevron-up"></i></button> <button
                                                className="quantity-minus qty-btn"><i className="far fa-chevron-down"></i></button></div>
                                    <button className="th-btn">Add to Cart <span className="icon"><i
                                        className="fa-solid fa-arrow-right ms-3"></i></span></button> <a
                                            href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                </div>
                                <div className="product_meta"><span className="sku_wrapper">SKU: <span
                                    className="sku">Wheel-fits-chevy-camaro</span></span> <span className="posted_in">Category:
                                        <a href="shop.html">Dresses & Bags</a></span> <span>Tags: <a
                                            href="shop.html">Products</a><a href="shop.html">Bags</a></span></div>
                            </div>
                        </div>
                    </div><button title="Close (Esc)" type="button" className="mfp-close text-white">×</button>
                </div>
            </div>
            <div className="sidemenu-wrapper sidemenu-cart">
                <div className="sidemenu-content"><button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
                    <div className="widget woocommerce widget_shopping_cart">
                        <h3 className="widget_title">Shopping cart</h3>
                        <div className="widget_shopping_cart_content">
                            <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                    className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                        src="img/product/product_thumb_1_1.png" alt="Cart Image" />Gaming Headphone</a>
                                    <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>940.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                    className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                        src="img/product/product_thumb_1_2.png" alt="Cart Image" />Gaming Mouse</a>
                                    <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>899.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                    className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                        src="img/product/product_thumb_1_3.png" alt="Cart Image" />Gaming Keyboard</a>
                                    <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>756.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                    className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                        src="img/product/product_thumb_1_4.png" alt="Cart Image" />Gaming Chair</a>
                                    <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>723.00</span></span></li>
                                <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                    className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                        src="img/product/product_thumb_1_5.png" alt="Cart Image" />Microphone G9000</a>
                                    <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>1080.00</span></span></li>
                            </ul>
                            <p className="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span
                                className="woocommerce-Price-amount amount"><span
                                    className="woocommerce-Price-currencySymbol">$</span>4398.00</span></p>
                            <p className="woocommerce-mini-cart__buttons buttons"><a href="cart.html" className="th-btn wc-forward">View
                                cart <span className="icon"><i className="fa-solid fa-arrow-up-right ms-3"></i></span></a> <a
                                    href="checkout.html" className="th-btn checkout wc-forward">Checkout <span className="icon"><i
                                        className="fa-solid fa-arrow-up-right ms-3"></i></span></a></p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
                <div className="sidemenu-content"><button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
                    <div className="widget footer-widget">
                        <div className="th-widget-about">
                            <div className="about-logo"><a href="index.html"><span data-mask-src="img/logo.svg"
                                className="logo-mask"></span> <img src="img/logo.svg" alt="Bame" /></a></div>
                            <p className="about-text">Beyond esports tournaments, include a broader calendar of gaming events,
                                conferences, and conventions.</p>
                            <h3 className="widget_title">Follow <span className="text-theme">With Us:</span></h3>
                            <div className="th-widget-contact">
                                <div className="th-social style-mask"><a className="facebook" href="https://www.facebook.com/"><i
                                    className="fab fa-facebook-f"></i></a> <a className="twitter"
                                        href="https://www.twitter.com/"><img src="img/icon/x-twitter-icon.svg"
                                            alt="icon" /></a><a className="instagram" href="https://www.instagram.com/"><img
                                                src="img/icon/instagram-icon.svg" alt="icon" /> </a><a className="linkedin"
                                                    href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a> <a
                                                        className="google-play" href="https://www.google.com/"><img
                                            src="img/icon/google-playstore-icon.svg" alt="icon" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget">
                        <h3 className="widget_title">Recent Posts</h3>
                        <div className="recent-post-wrap">
                            <div className="recent-post">
                                <div className="media-img"><a href="blog-details.html"><img
                                    src="img/blog/recent-post-1-1.jpg" alt="Blog Image" /></a></div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">A Day in the Life of
                                        an Esports Event & Enjoy</a></h4>
                                    <div className="recent-post-meta"><a href="blog.html"><i className="fa-light fa-calendar"></i>30
                                        Nov, 2024</a></div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img"><a href="blog-details.html"><img
                                    src="img/blog/recent-post-1-2.jpg" alt="Blog Image" /></a></div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Strategies for
                                        Dominating Your Favorite Game</a></h4>
                                    <div className="recent-post-meta"><a href="blog.html"><i className="fa-light fa-calendar"></i>05
                                        Dec, 2024</a></div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img"><a href="blog-details.html"><img
                                    src="img/blog/recent-post-1-3.jpg" alt="Blog Image" /></a></div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Behind the Scenes of
                                        Your Favorite Game</a></h4>
                                    <div className="recent-post-meta"><a href="blog.html"><i className="fa-light fa-calendar"></i>09
                                        Sep, 2024</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget newsletter-widget">
                        <h3 className="widget_title">Newsletter</h3>
                        <p className="footer-text">Subscribe to our newsletter to get our latest update & news consenter</p>
                        <form className="newsletter-form">
                            <div className="form-group"><input className="form-control" type="email" placeholder="Email Address"
                                required="" /> <button type="submit" className="th-btn"><i
                                    className="far fa-paper-plane"></i></button></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="popup-search-box d-none d-lg-block"><button className="searchClose"><i className="fal fa-times"></i></button>
                <form action="#"><input type="text" placeholder="What are you looking for?" /> <button type="submit"><i
                    className="fal fa-search"></i></button></form>
            </div>
            <div className="th-menu-wrapper">
                <div className="th-menu-area text-center"><button className="th-menu-toggle"><i className="fal fa-times"></i></button>
                    <div className="mobile-logo"><a href="index.html"><span data-mask-src="img/logo.svg"
                        className="logo-mask"></span><img src="img/logo.svg" alt="Bame" /></a></div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="menu-item-has-children"><a href="index.html">HOME</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="home-2.html">Home Two</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">ABOUT US</a></li>
                            <li className="menu-item-has-children"><a href="#">TOURNAMENT</a>
                                <ul className="sub-menu">
                                    <li><a href="tournament.html">Tournament</a></li>
                                    <li><a href="tournament-details.html">Tournament Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">BLOG</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">PAGES</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children"><a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="team.html">Players</a></li>
                                    <li><a href="team-details.html">Players Details</a></li>
                                    <li><a href="game.html">Game</a></li>
                                    <li><a href="game-details.html">Game Details</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="point-table.html">Point Table</a></li>
                                    <li><a href="error.html">Error Page</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="color-scheme-wrap active"><button className="switchIcon"><i className="fa-solid fa-palette"></i></button>
                <h4 className="color-scheme-wrap-title"><i className="far fa-palette"></i> Color Switcher</h4>
                <div className="color-switch-btns"><button data-color="#6240CF"><i className="fa-solid fa-droplet"></i></button> <button
                    data-color="#FFBE18"><i className="fa-solid fa-droplet"></i></button> <button data-color="#24FFF2"><i
                        className="fa-solid fa-droplet"></i></button> <button data-color="#45F882"><i
                            className="fa-solid fa-droplet"></i></button> <button data-color="#FF7E02"><i
                                className="fa-solid fa-droplet"></i></button></div>
            </div> */}
            <header id='home' className="th-header header-layout1">
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                            <div className="col-auto d-none d-lg-block">
                                <p className="header-notice"></p>
                                <div className="header-links">
                                    <ul>
                                        <li>
                                            <div className="header-notice">Welcome to our <a href="https://discord.gg/BguzYJwWfc">GaminFire</a> Community
                                            </div>
                                        </li>
                                        {/* <li>
                                            <div className="dropdown-link"><a className="dropdown-toggle" href="#" role="button"
                                                id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    className="fa-solid fa-globe"></i> English</a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                    <li><a href="#">German</a> <a href="#">French</a> <a href="#">Italian</a> <a
                                                        href="#">Latvian</a> <a href="#">Spanish</a> <a href="#">Greek</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-links">
                                    <ul>
                                        {/* <li><a href="https://www.facebook.com/">Facebook</a></li> */}
                                        {/* <li><a href="https://www.twitter.com/">Twitter</a></li> */}
                                        <li><a href="https://discord.gg/BguzYJwWfc">Discord</a></li>
                                        <li><a href="https://www.instagram.com/ig_gaminfire/">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-wrapper">
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-between " >
                                <div className="col-auto ">
                                    <div className=" about-logo "  ><a href="#home"><span data-mask-src="img/logonobg.png"
                                        className="logo-mask"></span> <img style={{ width: '175px', height: '50px' }} src="img/logo.png" alt="gaminfire" /></a>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li><a href="#home">HOME</a>

                                            </li>
                                            <li><a href="#about">ABOUT US</a></li>
                                            <li ><a href="#community">DISCORD</a>

                                            </li>
                                            <li ><a href="#news">NEWS</a>

                                            </li>

                                            <li><a href="#contact">CONTACT</a></li>
                                        </ul>
                                    </nav>
                                    {/* {menu?
                                    <nav className='th-menu-area togglemenu'>
                                           <p>test</p>
                                           </nav>
                                           :null}
                                    <div className="header-button d-flex d-lg-none"><button onClick={()=>setMenu(true)} type="button"
                                        className="th-menu-toggle"><span className="btn-border"></span><i
                                            className="far fa-bars"></i></button></div>*/}
                                </div>
                                <div className=" col-auto d-block d-xl-block">
                                    <div className="header-button">
                                        <div id='streaming' className="d-xxl-block d-block"><a href="https://www.youtube.com/channel/UCNSR2ySkFaxOlfN_u8_JJZg" className="th-btn"><i
                                            className="fa-brands fa-youtube me-1"></i> Live Streaming</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="logo-bg"></div>
                    </div>
                </div>
            </header>
            <div className="swiper th-slider hero-cta-slider1 mt-15" id="heroSlider1" data-slider-options='{"effect":"fade"}'>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="hero-cta-inner">
                            <div className="container th-container2">
                                <div className="hero-shape-area">
                                    <div className="hero-bg-shape">
                                        <div className="hero-bg-border-anime" data-mask-src="img/hero/hero-bg-shape.png">
                                        </div><svg viewBox="0 0 1600 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                                                fill="black" stroke="url(#paint0_linear1_47_22)" stroke-width="2" />
                                            <mask id="mask0_47_22" style={{ masktype: 'alpha' }} maskUnits="userSpaceOnUse" x="0"
                                                y="0">
                                                <path
                                                    d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                                                    fill="black" />
                                            </mask>
                                            <g mask="url(#mask0_47_22)">
                                                <g filter="url(#filter0_f_47_22)">
                                                    <circle cx="1413" cy="314" r="287" fill="var(--theme-color2)"
                                                        fill-opacity="0.2" />
                                                </g>
                                                <g filter="url(#filter01_f_47_22)">
                                                    <circle cx="231" cy="172" r="229" fill="var(--theme-color)"
                                                        fill-opacity="0.5" />
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_47_22" x="566" y="-533" width="1694" height="1694"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape" />
                                                    <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_47_22" />
                                                </filter>
                                                <filter id="filter01_f_47_22" x="-558" y="-617" width="1578" height="1578"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape" />
                                                    <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_47_22" />
                                                </filter>
                                                <linearGradient id="paint0_linear1_47_22" x1="0" y1="0" x2="1600" y2="520"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="var(--theme-color)" />
                                                    <stop offset="1" stop-color="var(--theme-color2)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="verses-thumb d-xl-none d-block"><img
                                            src="img/tournament/game-vs1.svg" alt="tournament" /></div>
                                        <div className="hero-img1 z-index-common" data-ani="slideinleft" data-ani-delay="0.4s"><img
                                            src="img/hero/hero-1-1.png" alt="" /></div>
                                        <div className="hero-img2 z-index-common" data-ani="slideinright" data-ani-delay="0.4s"><img
                                            src="img/hero/hero-1-2.png" alt="" /></div>
                                    </div>
                                    <div className="title-area mb-0">
                                        <h2 className="sec-title text-white custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.1s">Gamin<span  >Fire</span> Registration</h2>
                                        <p className="mt-30 mb-30 text-white custom-anim-top wow animated" style={{fontSize:"20px"}} data-wow-duration="1.3s"
                                            data-wow-delay="0.2s">Enjoy your first free 1/2 Hour*</p>
                                        <div className="btn-group custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.2s">

                                        </div>


                                        <form onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <input className="form-control" value={user.username} onChange={handleInput} type="text" placeholder="Full Name" name="username" required="true" />
                                                <input className="form-control" value={user.email} onChange={handleInput} type="email" placeholder="Email Address" name="email" required="true" />
                                                <input className="form-control" value={user.phone} onChange={handleInput} type="number" placeholder="Whatsapp Number" name="phone" required="true" />

                                                <button type="submit" className="th-btn"  value="submit" name="submit" ><i ></i>Click here</button>

                                            </div>
                                        

                                        </form>
                                        <p className='mt-30'>*Limited slots left</p>
                                        {/* <form onSubmit={handleVerify}>


                                            <input className="form-control" type="text" placeholder="OTP" value={otp} onChange={(e) => setOTP(e.target.value)} required="true" />

                                            <br />
                                            <button type="submit">Verify OTP</button>
                                        </form> */}

                                        {/* {message && <p>{message}</p>} */}

                                        {/* <h3>{e.name}</h3> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="swiper-slide">
                        <div className="hero-cta-inner">
                            <div className="container th-container2">
                                <div className="hero-shape-area">
                                    <div className="hero-bg-shape">
                                        <div className="hero-bg-border-anime" data-mask-src="img/hero/hero-bg-shape.png">
                                        </div><svg viewBox="0 0 1600 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                                                fill="black" stroke="url(#paint0_linear2_47_22)" stroke-width="2" />
                                            <mask id="mask1_47_22" style={{ masktype: 'alpha' }} maskUnits="userSpaceOnUse" x="0"
                                                y="0">
                                                <path
                                                    d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                                                    fill="black" />
                                            </mask>
                                            <g mask="url(#mask1_47_22)">
                                                <g filter="url(#filter1_f_47_22)">
                                                    <circle cx="1413" cy="314" r="287" fill="var(--theme-color2)"
                                                        fill-opacity="0.2" />
                                                </g>
                                                <g filter="url(#filter02_f_47_22)">
                                                    <circle cx="231" cy="172" r="229" fill="var(--theme-color)"
                                                        fill-opacity="0.5" />
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter1_f_47_22" x="566" y="-533" width="1694" height="1694"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape" />
                                                    <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_47_22" />
                                                </filter>
                                                <filter id="filter02_f_47_22" x="-558" y="-617" width="1578" height="1578"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape" />
                                                    <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_47_22" />
                                                </filter>
                                                <linearGradient id="paint0_linear2_47_22" x1="0" y1="0" x2="1600" y2="520"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="var(--theme-color)" />
                                                    <stop offset="1" stop-color="var(--theme-color2)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="verses-thumb d-xl-none d-block"><img
                                            src="img/tournament/game-vs1.svg" alt="tournament image" /></div>
                                        <div className="hero-img1 z-index-common" data-ani="slideinleft" data-ani-delay="0.4s"><img
                                            src="img/hero/hero-1-3.png" alt="Image" /></div>
                                        <div className="hero-img2 z-index-common" data-ani="slideinright" data-ani-delay="0.4s"><img
                                            src="img/hero/hero-1-4.png" alt="Image" /></div>
                                    </div>
                                    <div className="title-area mb-0">
                                        <h2 className="sec-title text-white custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.1s">Join The Big Tournaments</h2>
                                        <p className="mt-30 mb-30 custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.2s">Beyond esports tournaments, include a broader calendar of
                                            gaming events, conferences, and conventions. and connect with each other.</p>
                                        <div className="btn-group custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.2s"><a href="about.html" className="th-btn style-border"><span
                                                className="btn-border">JOIN NOW <i
                                                    className="fa-solid fa-arrow-right ms-2"></i></span></a></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="swiper-slide">
                        <div className="hero-cta-inner">
                            <div className="container th-container2">
                                <div className="hero-shape-area">
                                    <div className="hero-bg-shape">
                                        <div className="hero-bg-border-anime" data-mask-src="img/hero/hero-bg-shape.png">
                                        </div><svg viewBox="0 0 1600 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                                                fill="black" stroke="url(#paint0_linear3_47_22)" stroke-width="2" />
                                            <mask id="mask2_47_22" style={{ masktype: 'alpha' }} maskUnits="userSpaceOnUse" x="0"
                                                y="0">
                                                <path
                                                    d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                                                    fill="black" />
                                            </mask>
                                            <g mask="url(#mask2_47_22)">
                                                <g filter="url(#filter3_f_47_22)">
                                                    <circle cx="1413" cy="314" r="287" fill="var(--theme-color2)"
                                                        fill-opacity="0.2" />
                                                </g>
                                                <g filter="url(#filter03_f_47_22)">
                                                    <circle cx="231" cy="172" r="229" fill="var(--theme-color)"
                                                        fill-opacity="0.5" />
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter3_f_47_22" x="566" y="-533" width="1694" height="1694"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape" />
                                                    <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_47_22" />
                                                </filter>
                                                <filter id="filter03_f_47_22" x="-558" y="-617" width="1578" height="1578"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape" />
                                                    <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_47_22" />
                                                </filter>
                                                <linearGradient id="paint0_linear3_47_22" x1="0" y1="0" x2="1600" y2="520"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="var(--theme-color)" />
                                                    <stop offset="1" stop-color="var(--theme-color2)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="verses-thumb d-xl-none d-block"><img
                                            src="img/tournament/game-vs1.svg" alt="tournament image" /></div>
                                        <div className="hero-img1 z-index-common" data-ani="slideinleft" data-ani-delay="0.4s"><img
                                            src="img/hero/hero-1-5.png" alt="Image" /></div>
                                        <div className="hero-img2 z-index-common" data-ani="slideinright" data-ani-delay="0.4s"><img
                                            src="img/hero/hero-1-6.png" alt="Image" /></div>
                                    </div>
                                    <div className="title-area mb-0">
                                        <h2 className="sec-title text-white custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.1s">Join The Big Tournaments</h2>
                                        <p className="mt-30 mb-30 custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.2s">Beyond esports tournaments, include a broader calendar of
                                            gaming events, conferences, and conventions. and connect with each other.</p>
                                        <div className="btn-group custom-anim-top wow animated" data-wow-duration="1.3s"
                                            data-wow-delay="0.2s"><a href="about.html" className="th-btn style-border"><span
                                                className="btn-border">JOIN NOW <i
                                                    className="fa-solid fa-arrow-right ms-2"></i></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="slider-pagination"></div>
            </div>
            <div className="th-hero-wrapper hero-1" id="hero" data-bg-src="img/hero/hero-bg1-1.png">
                <div className="container">
                    <div className="hero-style1 text-center"><span className="sub-title custom-anim-top wow animated"
                        data-wow-duration="1.2s" data-wow-delay="0.1s">World class Gaming Cafe & Gaming Site</span>
                        <h1 className="hero-title"><span className="title1 custom-anim-top wow animated" data-wow-duration="1.1s"
                            data-wow-delay="0.3s" data-bg-src="img/hero/hero-title-bg-shape1.svg">SHAPING THE FUTURE
                            OF</span> <span className="title2 custom-anim-top wow animated" data-wow-duration="1.1s"
                                data-wow-delay="0.4s">Gaming</span></h1>
                        <div className="btn-group custom-anim-top wow animated" data-wow-duration="1.2s" data-wow-delay="0.7s"><a
                            href="about.html" className="th-btn">EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2"></i></a>
                            <a href="tournament.html" className="th-btn style2">BROWSE GAMES <i
                                className="fa-solid fa-arrow-right ms-2"></i></a></div>
                    </div>
                </div>
            </div>

            <div className="marquee-area-1 bg-repeat overflow-hidden" id='about' data-bg-src="img/bg/jiji-bg.png">
                <div className="container-fluid">
                    <div className="swiper th-slider" id="marqueeSlider1"
                        data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},"autoplay":{"delay":1500,"disableOnInteraction":false},"spaceBetween":50}'>
                        <div className="swiper-wrapper">
                            <div className="marquee-item swiper-slide">
                                <div className="marquee_icon"><img src="img/normal/star.png" alt="Icon" /></div>
                                <h3 className="marquee-title"><a href="service-details.html">GAMING SPANING</a></h3>
                            </div>
                            <div className="marquee-item swiper-slide">
                                <div className="marquee_icon"><img src="img/normal/star.png" alt="Icon" /></div>
                                <h3 className="marquee-title"><a href="service-details.html">ACTION - PACKED</a></h3>
                            </div>
                            <div className="marquee-item swiper-slide">
                                <div className="marquee_icon"><img src="img/normal/star.png" alt="Icon" /></div>
                                <h3 className="marquee-title"><a href="service-details.html">MIND - BENDING</a></h3>
                            </div>
                            <div className="marquee-item swiper-slide">
                                <div className="marquee_icon"><img src="img/normal/star.png" alt="Icon" /></div>
                                <h3 className="marquee-title"><a href="service-details.html">COLLECTION OG GAMES</a></h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden space" id="about-sec">
                <div className="about-bg-img shape-mockup" data-top="0" data-left="0"><img src="img/bg/about-bg1.png"
                    alt="img" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 mb-50 mb-xl-0">
                            <div className="img-box1">
                                <div className="img1 custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <img src="img/normal/about1-1.png" alt="About" /></div>
                            </div>
                        </div>
                        <div id='news' className="col-xl-6">
                            <div className="about-wrap1">
                                <div className="about-title-wrap mb-n1">
                                    <div className="about-title-thumb custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.1s"><img src="img/normal/about1-2.png" alt="img" /></div>
                                    <div className="title-area custom-anim-left wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.1s"><span className="sub-title">About Our Gaming Cafe</span>
                                        <h2 className="sec-title mb-0">Forging Gamers in to one place</h2>
                                    </div>
                                </div>
                                <div className="about-grid">
                                    <div className="icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s"><img src="img/icon/about_feature_1.svg" alt="img" /></div>
                                    <div className="about-grid-details custom-anim-left wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s">
                                        <h3 className="about-grid_title h5">Over <span className="text-theme">1k+</span> Console Games to play</h3>
                                        <p className="about-grid_text">We keep our gamers busy with top titles to play with..</p>
                                    </div>
                                </div>
                                <div className="about-grid">
                                    <div className="icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s"><img src="img/icon/about_feature_2.svg" alt="img" /></div>
                                    <div className="about-grid-details custom-anim-left wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s">
                                        <h3 className="about-grid_title h5">Live Streams</h3>
                                        <p className="about-grid_text">You don't want to play? watch our expert gamers !</p>
                                    </div>
                                </div>
                                <div className="about-grid">
                                    <div className="icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s"><img src="img/icon/about_feature_3.svg" alt="img" /></div>
                                    <div className="about-grid-details custom-anim-left wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s">
                                        <h3 className="about-grid_title h5">Get Online & Offline Supports</h3>
                                        <p className="about-grid_text">Need us? we are one click away from you..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="overflow-hidden">
                <div className="container th-container2">
                    <div className="game-sec-wrap1 space" data-bg-src="img/bg/game-sec1-bg.png">
                        <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                            data-wow-delay="0.1s"><span className="sub-title"># Releases The Latest Game</span>
                            <h2 className="sec-title">Game On, Power Up, Win Big <span className="text-theme">!</span></h2>
                        </div>
                        <div className="slider-area">
                            <div className="swiper th-slider game-slider-1" id="gameSlider1"
                                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-1.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-1.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">The Hunter Killer</a>
                                                </h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-2.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-2.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">Net Remaining Monies</a>
                                                </h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">Free</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-3.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-3.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">Duty Balck Ops</a></h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-4.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-4.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                                                </h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-1.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-1.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">The Hunter Killer</a>
                                                </h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-2.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-2.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">Net Remaining Monies</a>
                                                </h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">Free</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-3.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-3.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">Duty Balck Ops</a></h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="game-card gradient-border">
                                            <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="img/game/1-4.png" alt="game image" /></a>
                                                <div className="game-logo"><img src="img/game/logo1-4.png" alt="game logo" />
                                                </div>
                                            </div>
                                            <div className="game-card-details">
                                                <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                                                </h3>
                                                <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s"><span className="sub-title"> World Best Facilities Game</span>
                                <h2 className="sec-title">GaminFire Comes With Many Facilities Included In Planet <span
                                    className="text-theme">!</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="feature-sec-wrap1" data-bg-src="img/bg/feature-sec1-bg.png">
                        <div className="feature-card-wrap">
                            <div className="feature-card-border">
                                <div className="feature-card">
                                    <div className="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s"><span className="feature-card-icon-mask"
                                            data-mask-src="img/icon/about_feature_1.svg"></span> <img
                                            src="img/icon/about_feature_1.svg" alt="img" /></div>
                                    <div className="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s">
                                        <h3 className="feature-card-title">Gaming Cafe</h3>
                                        <p className="feature-card-text">Cafe areas with comfortable seating for relaxation
                                            between gaming sessions. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card-wrap">
                            <div className="feature-card-border">
                                <div className="feature-card">
                                    <div className="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s"><span className="feature-card-icon-mask"
                                            data-mask-src="img/icon/feature_2.svg"></span> <img
                                            src="img/icon/about_feature_2.svg" alt="img" /></div>
                                    <div className="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s">
                                        <h3 className="feature-card-title">Console Gaming</h3>
                                        <p className="feature-card-text">We provide you best console gaming experience in the city!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card-wrap">
                            <div className="feature-card-border">
                                <div className="feature-card">
                                    <div className="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s"><span className="feature-card-icon-mask"
                                            data-mask-src="img/icon/feature_3.svg"></span> <img
                                            src="img/icon/about_feature_3.svg" alt="img" /></div>
                                    <div className="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s"
                                        data-wow-delay="0.2s">
                                        <h3 id='community' className="feature-card-title">Live Streaming</h3>
                                        <p className="feature-card-text">Our streamers are always here to entertain you. Watch our action packed live streams on our channel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="space bg-top-center" data-bg-src="img/bg/tournament-sec1-bg.png">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-auto">
                            <div className="title-area text-lg-start text-center custom-anim-left wow animated"
                                data-wow-duration="1.5s" data-wow-delay="0.2s"><span className="sub-title"># Game Streaming
                                    Battle</span>
                                <h2 className="sec-title">Our Gaming Tournaments <span className="text-theme">!</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="sec-btn custom-anim-right wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <div className="tournament-filter-btn filter-menu filter-menu-active"><button data-filter="*"
                                    className="tab-btn active" type="button">ALL MATCH</button> <button data-filter=".cat1"
                                        className="tab-btn" type="button">UPCOMING MATCH</button> <button data-filter=".cat2"
                                            className="tab-btn" type="button">FINISHED MATCH</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 filter-active">
                        <div className="col-12 filter-item cat1">
                            <div className="tournament-card gradient-border">
                                <div className="tournament-card-img"><img src="img/tournament/1-1.png"
                                    alt="tournament image" /> <img src="img/tournament/game-vs1.svg"
                                        alt="tournament image" /> <img src="img/tournament/1-2.png" alt="tournament image" />
                                </div>
                                <div className="tournament-card-content">
                                    <div className="tournament-card-details">
                                        <div className="tournament-card-meta"><span className="tournament-card-tag">Upcoming</span>
                                            <span className="tournament-card-score gradient-border">0 / 0</span></div>
                                        <h3 className="tournament-card-title"><a href="tournament-details.html">Pro Player VS Lion
                                            King</a></h3>
                                        <p className="tournament-card-date">23 December, 2024 <span className="text-theme">6:00
                                            PM</span></p>
                                        <div className="th-social"><a href="https://www.youtube.com/"><i
                                            className="fab fa-youtube"></i>Youtube</a> <a href="tournament-details.html"><i
                                                className="fa-brands fa-twitch"></i>Twitch</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 filter-item cat2">
                            <div className="tournament-card gradient-border">
                                <div className="tournament-card-img"><img src="img/tournament/1-3.png"
                                    alt="tournament image" /> <img src="img/tournament/game-vs1.svg"
                                        alt="tournament image" /> <img src="img/tournament/1-4.png" alt="tournament image" />
                                </div>
                                <div className="tournament-card-content">
                                    <div className="tournament-card-details">
                                        <div className="tournament-card-meta"><span className="tournament-card-tag">Finished</span>
                                            <span className="tournament-card-score gradient-border">20 / 22</span></div>
                                        <h3 className="tournament-card-title"><a href="tournament-details.html">Assassin King VS
                                            Cyberpunk</a></h3>
                                        <p className="tournament-card-date">20 December, 2024 <span className="text-theme">6:00
                                            PM</span></p>
                                        <div className="th-social"><a href="https://www.youtube.com/"><i
                                            className="fab fa-youtube"></i>Youtube</a> <a href="tournament-details.html"><i
                                                className="fa-brands fa-twitch"></i>Twitch</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 filter-item cat1">
                            <div className="tournament-card gradient-border">
                                <div className="tournament-card-img"><img src="img/tournament/1-5.png"
                                    alt="tournament image" /> <img src="img/tournament/game-vs1.svg"
                                        alt="tournament image" /> <img src="img/tournament/1-6.png" alt="tournament image" />
                                </div>
                                <div className="tournament-card-content">
                                    <div className="tournament-card-details">
                                        <div className="tournament-card-meta"><span className="tournament-card-tag">Upcoming</span>
                                            <span className="tournament-card-score gradient-border">0 / 0</span></div>
                                        <h3 className="tournament-card-title"><a href="tournament-details.html">Team Gorilla VS
                                            Badgamer</a></h3>
                                        <p className="tournament-card-date">23 December, 2024 <span className="text-theme">6:00
                                            PM</span></p>
                                        <div className="th-social"><a href="https://www.youtube.com/"><i
                                            className="fab fa-youtube"></i>Youtube</a> <a href="tournament-details.html"><i
                                                className="fa-brands fa-twitch"></i>Twitch</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="container-fluid p-0">
                <div className="gallery-area-1 overflow-hidden text-center">
                    <div className="slider-area gallery-slider1">
                        <div className="swiper th-slider" id="gallerySlider1"
                            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"0","depth":"150","modifier":"1"},"centeredSlides":"true"}'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide gallery-wrap1">
                                    <div className="th-video"><img src="img/video/1-1.png" alt="img" /> <a
                                        href="img/video/1-1.png" className="play-btn popup-image style3"><i
                                            className="fa-solid fa-arrow-up-right"></i></a></div>
                                </div>
                                <div className="swiper-slide gallery-wrap1">
                                    <div className="th-video"><img src="img/video/1-2.png" alt="img" /> <a
                                        href="img/video/1-2.png" className="play-btn popup-image style3"><i
                                            className="fa-solid fa-arrow-up-right"></i></a></div>
                                </div>
                                <div className="swiper-slide gallery-wrap1">
                                    <div className="th-video"><img src="img/video/1-3.png" alt="img" /> <a
                                        href="img/video/1-3.png" className="play-btn popup-image style3"><i
                                            className="fa-solid fa-arrow-up-right"></i></a></div>
                                </div>
                                <div className="swiper-slide gallery-wrap1">
                                    <div className="th-video"><img src="img/video/1-1.png" alt="img" /> <a
                                        href="img/video/1-1.png" className="play-btn popup-image style3"><i
                                            className="fa-solid fa-arrow-up-right"></i></a></div>
                                </div>
                                <div className="swiper-slide gallery-wrap1">
                                    <div className="th-video"><img src="img/video/1-2.png" alt="img" /> <a
                                        href="img/video/1-2.png" className="play-btn popup-image style3"><i
                                            className="fa-solid fa-arrow-up-right"></i></a></div>
                                </div>
                                <div className="swiper-slide gallery-wrap1">
                                    <div className="th-video"><img src="img/video/1-3.png" alt="img" /> <a
                                        href="img/video/1-3.png" className="play-btn popup-image style3"><i
                                            className="fa-solid fa-arrow-up-right"></i></a></div>
                                </div>
                            </div>
                        </div><button data-slider-prev="#gallerySlider1" className="slider-arrow slider-prev"><i
                            className="fas fa-angle-left"></i></button> <button data-slider-next="#gallerySlider1"
                                className="slider-arrow slider-next"><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div> */}
            {/* <section className="team-sec-1 space">
                <div className="team-shape1-1 shape-mockup" data-top="0" data-right="0"><img src="img/bg/team-sec1-bg.png"
                    alt="img" /></div>
                <div className="container th-container3">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s"><span className="sub-title"># Top World className Gamer</span>
                                <h2 className="sec-title">Let’s See Our Pro Players</h2>
                            </div>
                        </div>
                    </div>
                    <div className="slider-area team-slider1">
                        <div className="swiper th-slider has-shadow" id="teamSlider1"
                            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"}}}'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-1.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-1.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Max Alexis</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-2.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-2.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Wilium Lili</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-3.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-3.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Mac Marsh</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-4.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-4.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Eva Raina</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-5.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-5.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Robin Cloth</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-1.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-1.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Max Alexis</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-2.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-2.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Wilium Lili</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-3.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-3.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Mac Marsh</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-4.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-4.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Eva Raina</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="th-team team-card">
                                        <div className="team-card-corner team-card-corner1"></div>
                                        <div className="team-card-corner team-card-corner2"></div>
                                        <div className="team-card-corner team-card-corner3"></div>
                                        <div className="team-card-corner team-card-corner4"></div>
                                        <div className="img-wrap">
                                            <div className="team-img"><img src="img/team/1-5.png" alt="Team" /></div><img
                                                className="game-logo" src="img/team/game-logo1-5.png" alt="Team" />
                                        </div>
                                        <div className="team-card-content">
                                            <h3 className="box-title"><a href="team-details.html">Robin Cloth</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><button data-slider-prev="#teamSlider1" className="slider-arrow slider-prev"><i
                            className="far fa-arrow-left"></i></button> <button data-slider-next="#teamSlider1"
                                className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
                    </div>
                </div>
            </section> */}
            <div className="container th-container4">
                <div className="cta-area-1">
                    <div className="cta-bg-shape-border"><svg width="1464" height="564" viewBox="0 0 1464 564" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1463.5 30V534C1463.5 550.292 1450.29 563.5 1434 563.5H1098H927.426C919.603 563.5 912.099 560.392 906.567 554.86L884.14 532.433C878.42 526.713 870.663 523.5 862.574 523.5H601.426C593.337 523.5 585.58 526.713 579.86 532.433L557.433 554.86C551.901 560.392 544.397 563.5 536.574 563.5H366H30C13.7076 563.5 0.5 550.292 0.5 534V30C0.5 13.7076 13.7076 0.5 30 0.5H366H536.574C544.397 0.5 551.901 3.60802 557.433 9.14034L579.86 31.5668C585.58 37.2866 593.337 40.5 601.426 40.5H862.574C870.663 40.5 878.42 37.2866 884.14 31.5668L906.567 9.14035C912.099 3.60803 919.603 0.5 927.426 0.5H1098H1434C1450.29 0.5 1463.5 13.7076 1463.5 30Z"
                            stroke="url(#paint0_linear_202_547)" />
                        <defs>
                            <linearGradient id="paint0_linear_202_547" x1="0" y1="0" x2="1505.47" y2="412.762"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="var(--theme-color)" />
                                <stop offset="1" stop-color="var(--theme-color2)" />
                            </linearGradient>
                        </defs>
                    </svg></div>
                    <div className="cta-wrap-bg bg-repeat" data-bg-src="img/bg/jiji-bg.png"
                        data-mask-src="img/shape/cta-bg-shape1.svg">
                        <div className="cta-bg-img"><img src="img/bg/cta-sec1-bg.png" alt="img" /></div>
                        <div className="cta-thumb"><img src="img/normal/cta1-1.png" alt="img" /></div>
                    </div>
                    <div className="cta-wrap" >
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="title-area mb-0 custom-anim-left wow animated" data-wow-duration="1.5s"
                                    data-wow-delay="0.2s"><span className="sub-title"># World Best Gaming Cafe and gaming site</span>
                                    <h2 className="sec-title">Join our Discord Community to find <span
                                        className="text-theme fw-medium">PRO Gamers Today !</span></h2>
                                    <p className="mt-30 mb-30">We have our growing discord community where you can find gamers all over the world to play with or chill with..</p><a href="https://discord.gg/BguzYJwWfc" className="th-btn">JOIN
                                        COMMUNITY <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contact' className="contact-page-1 space">
                <div className="contact-sec-1 space bg-repeat overflow-hidden" data-bg-src="assets/img/bg/jiji-bg2.png">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 pe-xxl-5">
                                <div className="title-area"><span className="sub-title style2">Get In Touch</span>
                                    <h2 className="sec-title text-white">Contact Us & Meet Our Team <span
                                        className="text-theme">!</span></h2>
                                </div>
                                <form className="contact-form ajax-contact pb-xl-0 space-bottom" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group style-border2 col-md-6"><input type="text" className="form-control"
                                            name="name" id="name" placeholder="Your Name" /> <i className="fal fa-user"></i></div>
                                        <div className="form-group style-border2 col-md-6"><input type="email" className="form-control"
                                            name="email" id="email" placeholder="Email Address" /> <i
                                                className="fal fa-envelope"></i></div>
                                        <div className="form-group style-border2 col-md-6"><input type="text" className="form-control"
                                            name="number" id="number" placeholder="Phone Number" /> <i
                                                className="fal fa-phone"></i></div>
                                        <div className="col-md-6">
                                            <div className="form-group style-border2"><select name='option' className="form-select"
                                                aria-label="Default select example">
                                                <option selected="selected">Subject</option>
                                                <option value="cafe">Gaming Cafe</option>
                                                <option value="stream">Live Stream</option>
                                                <option value="discord">Discord</option>
                                            </select> <i className="fal fa-angle-down"></i></div>
                                        </div>
                                        <div className="col-12 form-group style-border2"><textarea name='text' placeholder="Write Massage...."
                                            className="form-control"></textarea> <i className="far fa-pencil"></i></div>
                                        <div className="form-btn col-12"><button className="th-btn">Send Message <i
                                            className="fa-solid fa-arrow-right ms-2"></i></button></div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </form>
                            </div>
                            <div className="col-xl-6 ps-xxl-5">
                                <div className="title-area"><span className="sub-title style2"># Information</span>
                                    <h2 className="sec-title text-white">Contact Information's <span className="text-theme">!</span>
                                    </h2>
                                </div>
                                <div className="contact-feature">
                                    <div className="contact-feature-icon icon-masking"><span className="mask-icon"
                                        data-mask-src="img/icon/contact-map-icon1.svg"></span> <img
                                            src="img/icon/contact-map-icon1.svg" alt="img" /></div>
                                    <div className="media-body">
                                        <h4 className="box-title">ADDRESS:</h4><p>Near SGT University</p>
                                    </div>
                                </div>
                                <div className="contact-feature">
                                    <div className="contact-feature-icon icon-masking"><span className="mask-icon"
                                        data-mask-src="img/icon/contact-phone-icon1.svg"></span> <img
                                            src="img/icon/contact-phone-icon1.svg" alt="img" /></div>
                                    <div className="media-body">
                                        <h4 className="box-title">OFFICE NUMBER:</h4><a href="tel:+917217634501"
                                            className="contact-feature_link">Mobile: +91 7217634501</a> <a href="tel:+918299559867"
                                                className="contact-feature_link">Mobile: +91 8299559867</a>
                                    </div>
                                </div>
                                <div className="contact-feature">
                                    <div className="contact-feature-icon icon-masking"><span className="mask-icon"
                                        data-mask-src="img/icon/contact-envelope-icon1.svg"></span> <img
                                            src="img/icon/contact-envelope-icon1.svg" alt="img" /></div>
                                    <div className="media-body">
                                        <h4 className="box-title">OFFICE EMAIL:</h4><a href="mailto:val.player7901@gmail.com"
                                            className="contact-feature_link">Office Mail: val.player7901@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Contact/> */}
            {/* <section classNameName="space">
                <div classNameName="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-auto">
                            <div className="title-area custom-anim-left wow animated text-md-start text-center"
                                data-wow-duration="1.5s" data-wow-delay="0.2s"><span className="sub-title"># Gamer Shop</span>
                                <h2 className="sec-title">Our Latest Gaming Products <span className="text-theme">!</span></h2>
                            </div>
                        </div>
                        <div className="col-md-auto d-none d-md-block">
                            <div className="sec-btn">
                                <div className="icon-box"><button data-slider-prev="#productSlider1"
                                    className="slider-arrow style2 default"><i className="far fa-arrow-left"></i></button> <button
                                        data-slider-next="#productSlider1" className="slider-arrow style2 default"><i
                                            className="far fa-arrow-right"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper th-slider has-shadow" id="productSlider1"
                        data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_1.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Gaming Headphone</a></h3><span
                                            className="price">$177.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_2.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Gaming Mouse</a></h3><span
                                            className="price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_3.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Gaming Keyboard</a></h3><span
                                            className="price">$96.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_4.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Gaming Chair</a></h3><span
                                            className="price">$08.85<del>$06.99</del></span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_5.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Microphone G9000</a></h3><span
                                            className="price">$32.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_6.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Play Station Controller</a></h3>
                                        <span className="price">$30.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_7.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">PlayStation VR</a></h3><span
                                            className="price">$232.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="th-product product-grid">
                                    <div className="product-img"><img src="img/product/product_1_8.png" alt="Product Image" />
                                        <div className="overlay gradient-border"></div>
                                        <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                                className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                                    className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="product-title"><a href="shop-details.html">Wireless speaker</a></h3><span
                                            className="price">$30.85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-none mt-40 text-center">
                        <div className="icon-box"><button data-slider-prev="#productSlider1" className="slider-arrow style2 default"><i
                            className="far fa-arrow-left"></i></button> <button data-slider-next="#productSlider1"
                                className="slider-arrow style2 default"><i className="far fa-arrow-right"></i></button></div>
                    </div>
                </div>
            </section> */}
            {/* <section className="" id="blog-sec">
                <div className="container">
                    <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                        data-wow-delay="0.2s"><span className="sub-title"># Latest News</span>
                        <h2 className="sec-title">Stay Updated With Our Blog <span className="text-theme">!</span></h2>
                    </div>
                    <div className="slider-area">
                        <div className="swiper th-slider has-shadow" id="blogSlider1"
                            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="blog-card">
                                        <div className="blog-img"><a href="blog-details.html"><img
                                            src="img/blog/blog_1_1.jpg" alt="blog image" /></a></div>
                                        <div className="blog-content">
                                            <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                                <a href="blog.html"><i className="far fa-calendar"></i>30 Nov, 2024</a></div>
                                            <h3 className="blog-title"><a href="blog-details.html">Strategies for Dominating Your
                                                Favorite Game</a></h3><a href="blog-details.html"
                                                    className="link-btn style2">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog-card">
                                        <div className="blog-img"><a href="blog-details.html"><img
                                            src="img/blog/blog_1_2.jpg" alt="blog image" /></a></div>
                                        <div className="blog-content">
                                            <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                                <a href="blog.html"><i className="far fa-calendar"></i>25 Dec, 2024</a></div>
                                            <h3 className="blog-title"><a href="blog-details.html">Breaking Barriers and Shaping the
                                                Future</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                                <i className="fas fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog-card">
                                        <div className="blog-img"><a href="blog-details.html"><img
                                            src="img/blog/blog_1_3.jpg" alt="blog image" /></a></div>
                                        <div className="blog-content">
                                            <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                                <a href="blog.html"><i className="far fa-calendar"></i>23 Jun, 2024</a></div>
                                            <h3 className="blog-title"><a href="blog-details.html">Taking Customization to the Next
                                                Level</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                                <i className="fas fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog-card">
                                        <div className="blog-img"><a href="blog-details.html"><img
                                            src="img/blog/blog_1_1.jpg" alt="blog image" /></a></div>
                                        <div className="blog-content">
                                            <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                                <a href="blog.html"><i className="far fa-calendar"></i>30 Nov, 2024</a></div>
                                            <h3 className="blog-title"><a href="blog-details.html">Strategies for Dominating Your
                                                Favorite Game</a></h3><a href="blog-details.html"
                                                    className="link-btn style2">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog-card">
                                        <div className="blog-img"><a href="blog-details.html"><img
                                            src="img/blog/blog_1_2.jpg" alt="blog image" /></a></div>
                                        <div className="blog-content">
                                            <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                                <a href="blog.html"><i className="far fa-calendar"></i>25 Dec, 2024</a></div>
                                            <h3 className="blog-title"><a href="blog-details.html">Breaking Barriers and Shaping the
                                                Future</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                                <i className="fas fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog-card">
                                        <div className="blog-img"><a href="blog-details.html"><img
                                            src="img/blog/blog_1_3.jpg" alt="blog image" /></a></div>
                                        <div className="blog-content">
                                            <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                                <a href="blog.html"><i className="far fa-calendar"></i>23 Jun, 2024</a></div>
                                            <h3 className="blog-title"><a href="blog-details.html">Taking Customization to the Next
                                                Level</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                                <i className="fas fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="client-area-1 overflow-hidden space">
                <div className="container-fluid p-0">
                    <div className="swiper th-slider client-slider1"
                        data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"7"},"1300":{"slidesPerView":"9"}}, "spaceBetween": "0", "loop": "true"}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><a href="#" className="client-card"><img style={{width:'200px',height:'200px'}} src="img/logonobg.png"
                                alt="Image" /></a></div>
                           
                        </div>
                    </div>
                </div>
            </div> */}
            <footer className="footer-wrapper footer-layout2" data-bg-src="img/bg/footer2-bg.png">
                <div className="container">
                    <div className="text-center">
                        <div className="footer-top-shape bg-repeat" data-bg-src="img/bg/jiji-bg.png"></div>
                    </div>
                </div>
                <div className="widget-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo"><a href="#home"><span data-mask-src="img/logonobg.png"
                                            className="logo-mask"></span> <img style={{ width: '200px', height: '200px' }} src="img/logonobg.png" alt="gaminfire" /></a>
                                        </div>
                                        <p className="about-text">Beyond gaming, include a broader calendar of gaming
                                            streams and news</p>
                                        <h3 className="widget_title">Follow <span className="text-theme">With Us:</span></h3>
                                        <div className="th-widget-contact">
                                            <div className="th-social style-mask"><a className="facebook"
                                                href="https://www.youtube.com/channel/UCNSR2ySkFaxOlfN_u8_JJZg"><i className="fab fa-youtube"></i></a>
                                                <a className="facebook"
                                                    href="https://www.instagram.com/ig_gaminfire/"><i className="fab fa-instagram"></i></a>
                                                <a className="facebook"
                                                    href="https://discord.gg/BguzYJwWfc"><i className="fab fa-discord"></i></a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Useful Link</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><i className="far fa-angle-right"></i>Gaming</li>
                                            <li><i className="far fa-angle-right"></i>Products</li>
                                            <li><i className="far fa-angle-right"></i>All NFTs</li>
                                            <li><i className="far fa-angle-right"></i>Domain Name</li>
                                            <li><i className="far fa-angle-right"></i>Social Network</li>
                                            <li><i className="far fa-angle-right"></i>Collectibles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Supports</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><i className="far fa-angle-right"></i> Help & Support
                                            </li>
                                            <li><i className="far fa-angle-right"></i> Live Auctions</li>
                                            <li><i className="far fa-angle-right"></i> 24/7 Supports</li>
                                            <li><i className="far fa-angle-right"></i> Item Details</li>
                                            <li><i className="far fa-angle-right"></i> Setting & Privacy
                                            </li>
                                            <li><i className="far fa-angle-right"></i> Our News</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget newsletter-widget footer-widget">
                                    <h3 className="widget_title">Newsletter</h3>
                                    <p className="footer-text">Subscribe to our newsletter to get our latest update & news consenter
                                    </p>
                                    <form className="newsletter-form" onSubmit={handleSubmit}>
                                        <div className="form-group"><input className="form-control" type="email"
                                            placeholder="Email Address" required="" /> <button type="submit" className="th-btn"><i
                                                className="fas fa-paper-plane"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap text-center bg-repeat" data-bg-src="img/bg/jiji-bg.png">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6">
                                <p className="copyright-text bg-repeat" data-bg-src="img/bg/jiji-bg.png"><i
                                    className="fal fa-copyright"></i> Copyright 2024 <a href="index.html">GaminFire</a> All Rights
                                    Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="scroll-top"><svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{ transition: 'strokedashoffset 10 linear 0', strokedasharray: '307.919, 307.919', strokedashoffset: 307.919 }}>
                </path>
            </svg></div>

        </>
    )
}
