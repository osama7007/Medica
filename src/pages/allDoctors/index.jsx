import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../components/buttons/btn';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import './allDoctors.module.css';

function AllDoctors() {
	const navigate = useNavigate();
	const [topDoctor, setTopDoctor] = useState([]);
	const [btnVal, setBtnVal] = useState('');

	const docProfileNavigate = () => {
		navigate('/patient');
	};

	window.addEventListener('load', () => {
		allDoctorsView();
	});

	let getSpecialty = (e) => {
		setBtnVal(e.target.innerHTML);
		getDoctor();
	};

	let getAllDoctors = () => {
		allDoctorsView();
	};

	const allDoctorsView = () => {
		fetch(`https://doctor4.herokuapp.com/all`)
			.then((res) => res.json())
			.then((json) => setTopDoctor(json));
	};

	const getDoctor = () => {
		fetch(`https://doctor4.herokuapp.com/${btnVal}`)
			.then((res) => res.json())
			.then((json) => setTopDoctor(json));
	};

	return (
		<>
			<div className='text-center mt-5 container w-75 mb-5'>
				<Btn action={(e) => getAllDoctors(e)} title='All doctors' />
				<Btn action={(e) => getSpecialty(e)} title='Dermatology' />
				<Btn action={(e) => getSpecialty(e)} title='Pulmonologist' />
				<Btn action={(e) => getSpecialty(e)} title='Otolaryngology' />
				<Btn action={(e) => getSpecialty(e)} title='Pediatrics' />
				<Btn action={(e) => getSpecialty(e)} title='InternalMedicine' />
				<Btn action={(e) => getSpecialty(e)} title='Psychiatry' />
				<Btn action={(e) => getSpecialty(e)} title='PlasticSurgery' />
				<Btn title='More' />
			</div>
			<div className='specialty_content'>
				{topDoctor.map((doctor) => {
					return (
						<div className=' container border shadow rounded px-3 py-3 mb-4 w-50 d-flex justify-content-center align-items-center'>
							<div className='w-50 ms-2'>
								<div className='w-50 mb-3 doctorPic'>
									<img src={doctor.pImage} alt='doctor' className='w-75 ' />
								</div>
								<h4 className='fw-bold' action={docProfileNavigate}>
									{doctor.name}{' '}
								</h4>
								<h5>
									<span className='fw-bold fs-5'>Rate:</span> {doctor.rate}/5
								</h5>
								<h5>
									<span className='fw-bold fs-5'>Grade: </span>
									{doctor.graduation.grade}
								</h5>
							</div>
							<div className='w-50  mt-2 '>
								<h5 className='mb-4'>
									<span className='fw-bold fs-5'> Address:</span>{' '}
									{doctor.aAddress.city}
								</h5>
								<h5 className='mb-4'>
									<span className='fw-bold fs-5'> Experience: </span>
									{doctor.experience}
								</h5>
								<h5 className='mb-4'>
									{' '}
									<span className='fw-bold fs-5'> Waiting Time:</span>{' '}
									{doctor.waiting}
								</h5>

								<PrimaryBtn title=' Book Appointment' />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default AllDoctors;
