import React from 'react'
import styles from "./about.module.css"
import osama from "../../assets/images/About/osama.jpg"
import mohamed from '../../assets/images/About/mohamed.jpg';
import sandro from '../../assets/images/About/sandro.jpg';
import alaa from "../../assets/images/About/alaa.jpg"
import dina from "../../assets/images/About/dina.jpg"
import Heading from '../heading'
function About() {
  return (
		<div className={`${styles.about_container}  `}>
			<div className={`${styles.about_header}  my-5`}>
				<Heading text='about us' />
			</div>
			<div
				className={`${styles.about_images} d-flex flex-wrap align-items-center justify-content-center gap-5  mb-5`}>
				<div className={`${styles.imgWrapper} rounded-circle text-center`}>
					<span className='fw-bold mb-2 d-block'>Mohamed Gamal</span>
					<img
						src={mohamed}
						alt='about-img'
						className='w-100 h-100 rounded-5'
					/>
				</div>
				<div className={`${styles.imgWrapper} rounded-circle text-center`}>
					<span className='fw-bold mb-2 d-block'>Sandro Samy</span>
					<img src={sandro} alt='about-img' className='w-100 h-100 rounded-5' />
				</div>
				<div className={`${styles.imgWrapper} rounded-circle text-center`}>
					<span className='fw-bold mb-2 d-block'>Osama Saad</span>
					<img src={osama} alt='about-img' className='w-100 h-100 rounded-5' />
				</div>
				<div className={`${styles.imgWrapper} rounded-circle text-center`}>
					<span className='fw-bold mb-2 d-block'>Alaa Hamdi</span>
					<img src={alaa} alt='about-img' className='w-100 h-100 rounded-5' />
				</div>
				<div className={`${styles.imgWrapper} rounded-circle text-center`}>
					<span className='fw-bold mb-2 d-block'>Dina Said</span>
					<img src={dina} alt='about-img' className='w-100 h-100 rounded-5' />
				</div>
			</div>
			<div className='mt-5'>
				<h5 className={`${styles.about_content} w-75 m-auto p-5`}>
					We are Front-End Developers graduated from information and technology
					institute (ITI) , Medica is our graduation project that represents our
					knowledge and our skills since we implemented most topics that we have
					learnt in more than 3 months of studying and performing tasks. we hope
					to find it useful and fruitful to all of you , this is the first
					deployment to our website , there will be updates and other features
					that will be added later.
					<p className='text-center mt-5 fs-1'>
						THANK YOU
					</p>
				</h5>
			</div>
		</div>
	);
}

export default About