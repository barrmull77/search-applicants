import React, {useState, useEffect} from 'react';
import { ApplicantObject } from '../App';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Grid } from 'semantic-ui-react';

type Props = {
    applicants: ApplicantObject[];
}

const ApplicantRow: React.FC<Props> = ({applicants}) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 480);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const updateMedia = () => {
        setDesktop(window.innerWidth > 480);
    };

    const circleClasses: string[] = [
        'is-orange-circle',
        'is-purple-circle',
        'is-green-circle',
        'is-turquoise-circle'
    ];

    const randomClassNumber: number = Math.floor(Math.random()*circleClasses.length);
    

    const responsive = {
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1,
          partialVisibilityGutter: 40
        }
    };

    return (
       <div className="applicant-row__container">
        {isDesktop ? (
            <div className="ui grid">
            <div className="four column doubling stackable row">
                {applicants.map(applicant => (
                        <div className="column">
                            <div className="applicant-row__applicant-card column">
                                <span className={`applicant-card__initials ${circleClasses[Math.floor(Math.random()*circleClasses.length)]}`}>
                                    {applicant.firstName.charAt(0)}{applicant.lastName.charAt(0)}
                                </span>
                                <div className="applicant-card__info">
                                    <span className="applicant-card__name">{applicant.firstName} {applicant.lastName}</span>
                                    <span className="applicant-card__phone">{applicant.phoneNo}</span>
                                    <span className="applicant-card__email">{applicant.email}</span>
                                    <span className="applicant-card__appointment">{applicant.statusDetails.appointment}</span>
                                    {applicant.statusDetails.bid? (<span className="applicant-card__bid">{applicant.statusDetails.bid}</span>) :null}
                                </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>    
          ) : (
        <Carousel removeArrowOnDeviceType={["mobile"]} responsive={responsive}>
            {applicants.map(applicant => (
                <div className="applicant-row__applicant-card">
                    <span className={`applicant-card__initials ${circleClasses[Math.floor(Math.random()*circleClasses.length)]}`}>
                        {applicant.firstName.charAt(0)}{applicant.lastName.charAt(0)}
                    </span>
                    <div className="applicant-card__info">
                        <span className="applicant-card__name">{applicant.firstName} {applicant.lastName}</span>
                        <span className="applicant-card__phone">{applicant.phoneNo}</span>
                        <span className="applicant-card__email">{applicant.email}</span>
                        <span className="applicant-card__appointment">{applicant.statusDetails.appointment}</span>
                        {applicant.statusDetails.bid? (<span className="applicant-card__bid">{applicant.statusDetails.bid}</span>) :null}
                    </div>  
                </div>
            ))}
        </Carousel>
          )}
       </div>
    )
}

export default ApplicantRow