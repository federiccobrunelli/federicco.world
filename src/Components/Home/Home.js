import React  from "react";
import { Link } from 'react-router-dom';
import Portrait from '../App/Images/Portrait.jpg'




export function Home() {

  return (


            <div className="Home">
                <Link className="hire_me title" to="/hire"><span>hire me</span></Link>
                <Link className="hire_me_img square" to="/hire">
                    <Link className="Link" to="/hire">Custom</Link>
                    <Link className="Link" to="/hire">Built</Link>
                    <Link className="Link" to="/hire">Responsive</Link>
                    <Link className="Link" to="/hire">Websites</Link>
                    <Link className="Link highlight height" to="/hire">Available</Link>
                    <Link className="Link highlight" to="/hire">for Hire.</Link>
                    <Link className="Link" to="/hire">Federico Brunelli</Link>
                </Link>



                <Link className="about_me title" to="/about"><span>about me</span></Link>
                    <Link className="link" to="/about">
                    <img className="about_me_img square" alt="Brunelli Federico Portrait" src={Portrait} />
                    </Link>



                <Link className="my_work title" to="/work"><span>my work</span></Link>
                <Link className="my_work_img square" to="/work">
                    <Link className="Link" to="/work">CSS3</Link>
                    <Link className="Link" to="/work">HTML5</Link>
                    <Link className="Link" to="/work">ReactJs</Link>
                    <Link className="Link highlight height" to="/work">Latest</Link>
                    <Link className="Link highlight" to="/work">Projects</Link>
                    <Link className="Link" to="/work">UI Design</Link>
                    <Link className="Link" to="/work">JavaScript</Link>
                </Link>

            </div>


  );
}




