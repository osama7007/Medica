import adsData from "./AdsData";
import styles from './Ads.module.css';
import { useEffect,useState } from "react";
import {HiPhone} from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/pagination';


function Ads(){
    const [data , setData] = useState(adsData);
   /*  useEffect(() => {
			const interval = setInterval(() =>
			{
				setData([...data.reverse()]);
			}, 6000);
			return () => clearInterval(interval);
		}, [data]); */

    return (
			<div className={`${styles.ads_container} p-2 mt-5`}>
				<h3 className={`${styles.ads_head}`}>Advertisements</h3>
				{data.map((ads) => {
					return (
							<div
								key={ads.id}
								className={`${styles.ad_card} position-relative p-2 m-2 text-center d-flex justify-content-center flex-column`}>
								<h4>{ads.title}</h4>
								<div
									className={`${styles.adImg_container} rounded-circle p-2 m-auto`}>
									<img
										src={ads.imgSrc}
										alt='advertisement'
										className='w-100 w-10 h-25 rounded-circle '
									/>
								</div>
								<p className='fw-bold m-2'>{ads.info}</p>

								<p className='fw-bold m-2'>
									<HiPhone /> {ads.phone}
								</p>
							</div>
					);
				})}
			</div>
		);
}
export default Ads;
