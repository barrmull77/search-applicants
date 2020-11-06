import React, { useEffect, useRef }from 'react';
import { ApplicantObject } from '../App';
import ApplicantRow from './ApplicantRow';

type Props = {
    applicants: ApplicantObject[];
}

const ApplicantList: React.FC<Props> = ({applicants}) => {
    const appointmentSetGroup = applicants.filter(applicant => applicant.status === 'appointment_set');
    const propertyViewedGroup = applicants.filter(applicant => applicant.status === 'property_viewed');
    const interestedGroup = applicants.filter(applicant => applicant.status === 'interested');
    const offerAcceptedGroup = applicants.filter(applicant => applicant.status === 'offer_accepted');
    
    return (
        <section className="section__container ui container">
            {console.log('data',appointmentSetGroup)}
            {appointmentSetGroup.length !== 0 ? 
                    <div className="applicant-list__container">
                        <h2 className="applicant-list__title">Appointment Set ({appointmentSetGroup.length})</h2>
                        <ApplicantRow applicants={appointmentSetGroup}/>
                    </div>
            : null}
            {propertyViewedGroup.length !== 0 ? 
                    <div className="applicant-list__container">
                        <h2 className="applicant-list__title">Property Set({propertyViewedGroup.length})</h2>
                         <ApplicantRow applicants={propertyViewedGroup}/>
                     </div>
            : null}
            {interestedGroup.length !== 0 ? 
                    <div className="applicant-list__container">
                        <h2 className="applicant-list__title">Interested ({interestedGroup.length})</h2>
                        <ApplicantRow applicants={interestedGroup}/>
                    </div>
            : null}
            {offerAcceptedGroup.length !== 0 ? 
                    <div className="applicant-list__container">
                        <h2 className="applicant-list__title">Offer Accepted ({offerAcceptedGroup.length})</h2>
                        <ApplicantRow applicants={offerAcceptedGroup}/>
                    </div> 
            : null}
        </section>
)}

export default ApplicantList