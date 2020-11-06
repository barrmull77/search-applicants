import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";

//Components
import SiteHeader from './components/SiteHeader'
import SearchBar from './components/SearchBar';
import ApplicantList from './components/ApplicantList';
import SiteFooter from './components/SiteFooter';

export type ApplicantObject = {
  "firstName": string;
  "lastName": string,
  "phoneNo": string;
  "email": string;
  "status": string,
  "statusDetails": {
    "appointment": string;
    "bid": string;
  }
}

const App = () => {
  const [applicants, setApplicants] = useState<ApplicantObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredApplicants, setFilteredApplicants] = useState<ApplicantObject[]>([]);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8000/applicants').then((res) => {
        setApplicants(res.data);
        setLoading(false);
      })
      .catch((err) => {
          setError(true);
          setLoading(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredApplicants(
      applicants.filter((applicant) => 
        applicant.firstName.toLowerCase().includes(search.toLowerCase()) ||
        applicant.lastName.toLowerCase().includes(search.toLowerCase()) ||
        applicant.email.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search, applicants]);

  const checkSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === 'Enter') {
      setSearch(target.value);
      const newUrl = `${document.location.origin}?search=${target.value}`;
      window.history.pushState({}, '', newUrl);
    } 
  }
  return (
    <div className="App">
        <SiteHeader/>
        <main>
          <div className="main-container ui container">
            <SearchBar callback={checkSearchInput}/>
            {loading ? <div className="applicants__message"><span>Loading Applicants...</span></div> : null}
            {error || filteredApplicants.length === 0 ? <div className="applicants__message"><span>Unfortunately we could find any applicants</span></div> : null}
            <ApplicantList applicants={filteredApplicants}/>
          </div>
        </main>
        <SiteFooter/>
    </div>

  );
}

export default App;
