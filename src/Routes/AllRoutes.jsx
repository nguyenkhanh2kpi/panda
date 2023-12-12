import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Components/Companies/Companies";
import CompanyProfile from "../Components/Companies/CompanyProfile";
import CreateCompany from "../Components/Companies/CreateCompany";
import HomePage from "../Components/Homepage/HomePage";
import JobDetail from "../Components/Jobs/JobDetail";
import JobPage from "../Components/Jobs/JobPage";
import Login from "../Components/Login/Login";
import MainHomepage from "../Components/MainHome/MainHomepage";
import ServicesPage from "../Components/Services/ServicesPage";
import Signup from "../Components/Signup/Signup";
import Verify from "../Components/Signup/verify";
import Logout from "../Components/Logout/Logout";
import UserInfo from "../Components/UserInfo/UserInfo";
import { Events } from "../Components/Events/Event";
import { EventDetailHome } from "../Components/Events/EventDetailHome";
import { CurriculumVitae } from "../Components/CVBuild/CurriculumVitae";
import ResetPassword from "../Components/ResetPassword/ResetPassword";
import VerifyPassword from "../Components/ResetPassword/verify";
import ChangePassword from "../Components/ResetPassword/ChangePassword";
// import JobPosting from "../Components/Job-recruiter/Job-Posting";
// import JobDetailRecruiter from "../Components/Job-recruiter/JobDetail";
// import AllJob from  "../Components/Job-recruiter/AllJob";
const AllRoutes = () => {
    return (
        <Routes basename="/panda">
            {/* <Route path='/jobDetail_Recruiter/:id' element={<JobDetailRecruiter/>} />
      <Route path='/allJob_Recruiter/' element={<AllJob/>} />
      <Route path='/job-posting/' element={<JobPosting/>} /> */}

            <Route exact path="/userInfo/" element={<UserInfo />} />
            <Route exact path="/verify/:email/" element={<Verify />} />
            <Route exact path="/verifyResetPW/:email/" element={<VerifyPassword />} />
            <Route exact path="/changePassword/:id/:otp/" element={<ChangePassword />} />
            <Route exact path="/jobDetail/:id" element={<JobDetail />} />
            <Route exact path="/logout" element={<Logout />} />
            {/* Don't Touch it Starts*/}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/companies" element={<Companies />} />
            <Route exact path="/companies/:id" element={<CompanyProfile />} />
            <Route exact path="/create" element={<CreateCompany />} />
            {/* Don't Touch it Ends*/}

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/resetPassword" element={<ResetPassword />} />
            <Route exact path="/mainhome" element={<MainHomepage />} />
            <Route exact path="/jobpage" element={<JobPage/>} />
            <Route exact path="/jobpage-search/:keyword/:location/:experience/:salary" element={<JobPage/>} />
            <Route exact path="/jobpage-search/:location/:experience/:salary" element={<JobPage/>} />
            <Route exact path="/jobpage/:jobId" element={<JobDetail />} />
            <Route exact path="/services" element={<ServicesPage />} />

            {/* khanhs */}
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/event/:id" element={<EventDetailHome />} />
            <Route exact path="/cv-build" element={<CurriculumVitae />} />
        </Routes>
    );
};

export default AllRoutes;
