import {  Form, Input , Radio } from 'antd';
import React, { useState } from 'react';
import strip from '../../assets/images/strip-tablet.gif';
import capsula from '../../assets/images/capsule.gif';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import { UserOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DoctorForm = () => {

	const [save, setSaved] = useState('Save');
	const [componentSize, setComponentSize] = useState('default');
	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};
    const { TextArea } = Input;

    const params = {
			Biography: '',
			Email: '',
			Facebook: '',
			LinkedIn: '',
			Twitter: '',
		};

 let onFinish =(values)=>{
    params.Biography = values.Biography;
    params.Email = values.Email;
    params.Facebook = values.Facebook;
    params.LinkedIn = values.LinkedIn;
    params.Twitter = values.Twitter;
    setSaved('Saved');
    if(save === "Save")
    toast.success('Saved successfully');
    //postData(`https://doctor4.herokuapp.com/all/`);
}
const options = {
    method: 'PUT',
    body: JSON.stringify( params )  
};
let postData = (url)=>{
    fetch( url, options )
        .then( response => response.json() )
        .then( response => {
            console.log('response =>' , response);
        } );
}
	return (
		<div className=' container formBody  d-flex justify-content-center align-items-center'>
			<div className=' w-25'>
				<img className='w-100' src={strip}></img>
			</div>
			<Form
				onFinish={onFinish}
				className=' mb-5 ms-5 mt-4    w-75 fw-bold shadow rounded-2 '
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout='horizontal'
				initialValues={{
					size: componentSize,
				}}
				onValuesChange={onFormLayoutChange}
				size={componentSize}>
				<h2 className='text-center fw-bold mt-4 mb-5 text-decoration-underline text-primary '>
					Manage Profile
				</h2>
				<Form.Item label='Form Size' name='size'>
					<Radio.Group>
						<Radio.Button value='default'>Default</Radio.Button>
						<Radio.Button value='large'>Large</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label='Title' name='Title'>
					<Input placeholder='Alkasr Eleiny' prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item label='Email' name='Email'>
					<Input
						placeholder='Doctor_Samy@clinc.com'
						prefix={<UserOutlined />}
					/>
				</Form.Item>
				<Form.Item label='Facebook' name='Facebook'>
					<Input placeholder='Facebooke.com' prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item label='Twitter' name='Twitter'>
					<Input placeholder='Twitter.com' prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item label='LinkedIn' name='LinkedIn'>
					<Input placeholder='LinkedIn.com' prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item label='Biography' name='Biography'>
					<TextArea rows={4} placeholder='maxLength is 250' maxLength={250} />
				</Form.Item>

				<Form.Item
					className='ms-5 d-flex align-items-center justify-content-center'>
					<PrimaryBtn title={save} />
				</Form.Item>
			</Form>
			<ToastContainer />
			<div className='w-25 position-relative ms-3'>
				<img
					className='w-100 position-absolute bottom-0 start-50 translate-middle'
					src={capsula}></img>
			</div>
		</div>
	);
};
export default DoctorForm;
