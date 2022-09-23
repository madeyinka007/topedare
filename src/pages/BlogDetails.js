import React from 'react'
import { Link } from 'react-router-dom'
import blogImg from '../assets/project/empower-woman.jpg'
import PagesIntro from './../components/global/PagesIntro';
const BlogDetails = () => {
    return (
        <div>
            <PagesIntro title="Blog Details" />
            <div className="py-24">
                <div className="container">
                    <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
                        <div className="lg:w-1/4 px-4 order-last lg:order-first mt-8 lg:mt-0">
                            <div>
                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-6">Search</h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="border border-solid border-gray-300" action="#" method="get">
                                            <div className="relative">
                                                <input className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search our store" />
                                                <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300" type="submit"><i className="icon-magnifier" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-5">Custom Menu</h4>
                                    <ul>
                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange">Best Value</Link></li>

                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange">Your Order</Link></li>

                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange">Terms & Condition</Link></li>

                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange">Contact us</Link></li>

                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange">Manufactureres</Link></li>
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-8">Recent Post</h4>

                                    <div className="sidebar-project-wrap mt-30">
                                        <div className="flex flex-wrap pb-5 mb-5 border-b border-solid border-gray-300">
                                            <div className="w-20 mr-5 relative">
                                                <Link to="" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover w-full h-full" loading="lazy" width="240" height="114" src={blogImg} alt="blog details" /></Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm">Apr 21, 2021</span>
                                                <h4><Link to="" className="transition-all hover:text-orange text-sm" >Sarbi at ligula porta</Link></h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap pb-5 mb-5 border-b border-solid border-gray-300">
                                            <div className="w-20 mr-5 relative">
                                                <Link to="" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover w-full h-full" loading="lazy" width="240" height="114" src={blogImg} alt="blog details" /></Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm">Apr 21, 2021</span>
                                                <h4><Link to="" className="transition-all hover:text-orange text-sm" >Donec tellus Nulla lorem</Link></h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-20 mr-5 relative">
                                                <Link to="" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover w-full h-full" loading="lazy" width="240" height="114" src={blogImg} alt="blog details" /></Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm">Apr 20, 2021</span>
                                                <h4><Link to="" className="transition-all hover:text-orange text-sm" >Norbi at omgula qorta</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize">Archive</h4>

                                    <span className="font-medium text-base text-dark capitalize my-4 block"> April 2021</span>
                                    <ul>
                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Sarbi at ligula porta</Link></li>
                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Donec tellus Nulla lorem</Link></li>
                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Norbi at omgula qorta</Link></li>
                                        <li className="mb-4"><Link to="" className="text-sm transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Mithout wery warkness</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-10">Tags</h4>

                                    <ul className="flex flex-wrap -m-1">
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">backpack</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">Dron</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">drone</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">headphone</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">news</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="flex-1 px-4">
                            <div className="blog-details-wrapper">
                                <div className="mb-8">
                                    <img src="assets/images/blog/lg/blog1.webp" loading="lazy" width="850" height="402" alt="blog details" className="mb-8 w-full h-full" />
                                    <h3 className="mb-4 font-medium text-lg">Sarbi at ligula porta</h3>
                                    <ul className="flex flex-wrap text-gray-500 text-sm">
                                        <li>21 April, 2021</li>
                                        <li><span className="inline-block mx-2">\</span></li>
                                        <li>HasThemes</li>
                                    </ul>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qei officia deser mollit anim id est laborum.
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et
                                </p>
                                <blockquote className="my-6 ml-12 relative before:absolute before:top-0 before:-left-5 before:w-1 before:h-full before:empty before:bg-orange">
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
                                    el contenido del texto de un sitio mientras que mira su diseño.
                                </blockquote>
                                <p className="mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                </p>

                                <div className="flex flex-wrap justify-between mb-8">
                                    <ul className="flex flex-wrap">
                                        <li className="mr-2"><Link to="" className="hover:text-orange">backpack</Link>,</li>
                                        <li><Link to="" className="hover:text-orange">drone</Link></li>
                                    </ul>
                                    <div className="flex flex-wrap items-center">
                                        <span className="mr-4">Share:</span>

                                        <div className="share-social">
                                            <ul className="flex flex-wrap">
                                                <li className="mx-2 leading-none">
                                                    <Link to="" className="text-lg transition-all hover:text-orange" >
                                                        <i className="icon-social-facebook" />
                                                    </Link>
                                                </li>
                                                <li className="mx-2 leading-none">
                                                    <Link to="" className="text-lg transition-all hover:text-orange" >
                                                        <i className="icon-social-twitter" />
                                                    </Link>
                                                </li>

                                                <li className="mx-2 leading-none">
                                                    <Link to="" className="text-lg transition-all hover:text-orange" >
                                                        <i className="icon-social-pinterest" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 py-5 border-t border-b border-solid border-gray-300">
                                    <Link to="" className="font-medium capitalize text-sm transition-all hover:text-orange"> <i className="icofont-rounded-left" /> Older Post</Link>
                                </div>
                                <div>
                                    <h4 className="mb-8 font-medium text-lg uppercase">Leave a comment</h4>
                                    <form method="post" action="#">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            <div className="leave-form col-span-2 sm:col-span-1">
                                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="name" placeholder="Name" />
                                            </div>
                                            <div className="leave-form col-span-2 sm:col-span-1">
                                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" name="email" placeholder="Email" />
                                            </div>
                                            <div className="text-leave col-span-2">
                                                <textarea className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-60 focus:outline-none text-base resize-none" placeholder="Message" />
                                                <button type="submit" className="leading-none uppercase text-white text-sm bg-orange px-5 py-5 transition-all hover:bg-dark">Post comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>







                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails