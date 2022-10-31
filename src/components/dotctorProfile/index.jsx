import React from 'react';
import styles from './DoctorProfile.module.css';
import { useState } from 'react';
import DoctorDefaultImg from '../../assets/images/doctor_profile/default_profile_img.png';
import CoverImg from '../../assets/images/doctor_profile/default_cover.jpg';
import {
	HiPhone,
	HiPhotograph,
	HiLocationMarker,
	HiMail,
	HiChatAlt,
} from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import DoctorImg from '../doctor_image';
function DoctorProfile() {
	const [image, setImage] = useState(DoctorDefaultImg); // img src will be loaded from firebase when finished
	const [cover, setCover] = useState(CoverImg); // same ↑↑↑
	const [name, setName] = useState('Dr. My Name'); // name will load from fire base ...
	const [title, setTitle] = useState('Mansoura University Hospital ');
	const [biography, setBiography] =
		useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquamillum eos ex soluta. Voluptas, quae! Consequuntur quas ullam laborerecusandae nesciunt, voluptas ab dignissimos consectetur aperiam
						cum, impedit esse delectus incidunt quisquam. Rerum, accusamus unde
						quis rem porro numquam adipisci optio voluptatum! Impedit molestiae
						nesciunt quod, aspernatur debitis tempore!`);
	const [graduationYear , setGraduationYear] = useState('1-10-1995');		
	const [degree, setDegree] = useState('Very good');		
	const [institute, setInstitute] = useState('AUC');		
	const [experienceYears, setExperienceYears] = useState('2019-2022');		
	const [department, setDepartment] = useState('dermatologist');		
	const [position, setPosition] = useState('assistant doctor');		
	const [phone, setPhone] = useState('01023569854');		
	const [email, setEmail] = useState('Dr.@clinic.com');		
	const [address, setAddress] = useState('3-Jihan street- mansoura');		
	const [doctorFacebook, setDoctorFacebook] = useState(
		'3-Jihan street- mansoura',
	);		
	const [doctorTwitter, setDoctorTwitter] = useState('3-Jihan street- mansoura');		
	const [doctorLinkedIn, setDoctorLinkedIn] = useState('3-Jihan street- mansoura');		
	// upload image functions
	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	};
	const onCoverChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			setCover(URL.createObjectURL(event.target.files[0]));
		}
	};

	return (
		<div>
			<div
				className={`${styles.profile_header} d-flex justify-content-center align-items-center position-relative`}>
				<label
					class={`${styles.custom_file_upload} position-absolute`}
					title='Upload image'>
					<HiPhotograph className='text-light' />
					<input type='file' onChange={onCoverChange} className='filetype' />
				</label>
				<img src={cover} alt='cover' className={`${styles.coverImg} w-100`} />
				<div className={`${styles.doctorImg} position-absolute text-center`}>
					<div className='doctor_img_wrapper w-100 h-100  position-relative  rounded-circle mb-2'>
						<label
							class={`${styles.doctor_img_select} position-absolute`}
							title='Upload image'>
							<HiPhotograph className='text-dark' />
							<input
								type='file'
								onChange={onImageChange}
								className='filetype'
							/>
						</label>
						<DoctorImg src={image} />
					</div>
					<h2>{name}</h2>
				</div>
			</div>
			<div className='biography text-center w-50 m-auto'>
				<h3 className={`${styles.profile_title} mb-2`}>{title}</h3>
				<p className='mb-5'>{biography}</p>
			</div>
			<div className='doctorInfo row container-fluid m-auto'>
				<div className='personalInfo text-center col-md-6'>
					<div className={`${styles.education_experience_section} row`}>
						<h4 className={`${styles.education_experience_header} mb-2`}>
							Education
						</h4>
						<div className='graduationYear col-4'>
							<p className='fw-bold'>Year</p>
							<p>{graduationYear}</p>
						</div>
						<div className='degree col-4'>
							<p className='fw-bold'>Degree</p>
							<p>{degree}</p>
						</div>
						<div className='institute col-4'>
							<p className='fw-bold'>Institute</p>
							<p>{institute}</p>
						</div>
					</div>
				</div>
				<div className='experience text-center col-md-6 '>
					<div className={`${styles.education_experience_section} row`}>
						<h4 className={`${styles.education_experience_header} mb-2`}>
							Experience
						</h4>
						<div className='graduationYear col-4'>
							<p className='fw-bold'>Year</p>
							<p>{experienceYears}</p>
						</div>
						<div className='degree col-4'>
							<p className='fw-bold'>Department</p>
							<p>{department}</p>
						</div>
						<div className='institute col-4'>
							<p className='fw-bold'>Position</p>
							<p>{position}</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`${styles.contact} d-flex align-items-center justify-content-center container-fluid m-auto text-light  fw-bold`}>
				<div
					className={`${styles.contact_info}col-md-6 text-light p-5 fw-bold`}>
					<span className='p-4'>
						<HiPhone /> {phone}
					</span>
					<span className='p-4'>
						<HiMail /> {email}
					</span>
					<span className='p-4'>
						<HiLocationMarker /> {address}
					</span>
				</div>
				<div className='social_contact w-25 col-md-6'>
					<ul
						className={`${styles.social_media_icons} text-light d-flex gap-5 flex-wrap`}>
						<li>
							<a href={doctorFacebook}>
								<FaFacebookF />
							</a>
						</li>
						<li>
							<a href={doctorTwitter}>
								<FaLinkedinIn />
							</a>
						</li>
						<li>
							<a href={doctorLinkedIn}>
								<FaTwitter />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default DoctorProfile;
