import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdLogout, Ecommerce, Orders, Calendar, Interviewer, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, RoomList } from '../pages-admin'
import RoomAdd from '../pages-admin/RoomEdit/RoomAdd'
import RoomAddCandidate from '../pages-admin/RoomEdit/RoomAddCandidate'
import { K_Event } from '../pages-admin/K_Event/K_Event'
import { EventEdit } from '../pages-admin/K_Event/EventEdit'
import { EventAdd } from '../pages-admin/K_Event/EventAdd'
import JobPosting from '../Components-admin/Job-recruiter/Job-Posting'
import AllJob from '../Components-admin/Job-recruiter/AllJob'
import JobDetailRecruiter from '../Components-admin/Job-recruiter/JobDetail'
import UserInfo from '../Components-admin/UserInfo/UserInfo'
import { PositionSkill } from '../pages-admin/PositionSkill/PositionSkill'
import { EditSkill } from '../pages-admin/PositionSkill/EditSkill'
import { AddSkill } from '../pages-admin/PositionSkill/AddSkill'
import { AddPosition } from '../pages-admin/PositionSkill/AddPosition'
import { EditPosition } from '../pages-admin/PositionSkill/EditPosition'
import { Question } from '../pages-admin/Question/Question'
import RoomListInterviewer from '../pages-admin/RoomInterviewer/RoomListInterviewer'
import RoomDetail from '../pages-admin/RoomInterviewer/RoomDetail'
import { AddQuestion } from '../pages-admin/Question/AddQuestion'
import { EditQuestion } from '../pages-admin/Question/EditQuestion'
import { Interview } from '../pages-admin/Interview/Interview'
import CandidateInfo from '../pages-admin/CandidateInfo/CandidateInfo'
import { RoomEditInfomation } from '../pages-admin/RoomEdit/RoomEditInfomation'
import { AdminCalendar } from '../pages-admin/GoogleCalendar/AdminCalendar'
import { MarkCandidate } from '../pages-admin/MarkCandidate/MarkCandidate'
import InterviewerListRoom from '../pages-admin/MarkCandidate/InterviewerListRoom'
import { MyCompany } from '../pages-admin/MyCompany/MyCompany'
import { ManageInterviewer } from '../pages-admin/ManageInterviewer/ManageInterviewer'
import { ListJob } from '../pages-admin/Job-recruiter/ListJob'
import { Companies } from '../pages-admin/Companies/Companies'

const AllRoutesAd = () => {
  return (
    <Routes basename='/panda'>
      {/* dashboard  */}
      <Route exact path='/userInfo/' element={<UserInfo />} />
      <Route exact path='/jobDetail_Recruiter/:id' element={<JobDetailRecruiter />} />
      <Route exact path='/allJob_Recruiter/' element={<AllJob />} />
      <Route exact path='/job-posting/' element={<JobPosting />} />
      <Route exact path='/list-job/' element={<ListJob />} />

      <Route exact path='/user-account/' element={<Customers />} />

      <Route exact path='/' element={<Ecommerce />} />
      <Route exact path='/AdLogout' element={<AdLogout />} />

      <Route exact path='/ecommerce' element={<Ecommerce />} />
      <Route exact path='/roomAdd' element={<RoomAdd />} />
      <Route exact path='/roomList' element={<RoomList />} />
      <Route exact path='/roomListInterviewer' element={<RoomListInterviewer />} />
      <Route exact path='/RoomDetailInterviewer/:id/:idRoom' element={<RoomDetail />} />
      <Route exact path='/candidateInfo/:id' element={<CandidateInfo />} />

      {/* pages  */}
      <Route exact path='/orders' element={<Orders />} />
      <Route exact path='/interviewer' element={<Interviewer />} />
      <Route exact path='/companies' element={<Companies />} />

      {/* apps  */}
      <Route exact path='/kanban' element={<Kanban />} />
      <Route exact path='/editor' element={<Editor />} />
      <Route exact path='/calendar' element={<Calendar />} />
      <Route exact path='/color-picker' element={<ColorPicker />} />

      {/* charts  */}
      <Route exact path='/line' element={<Line />} />
      <Route exact path='/area' element={<Area />} />
      <Route exact path='/bar' element={<Bar />} />
      <Route exact path='/pie' element={<Pie />} />
      <Route exact path='/financial' element={<Financial />} />
      <Route exact path='/color-mapping' element={<ColorMapping />} />
      <Route exact path='/pyramid' element={<Pyramid />} />
      <Route exact path='/stacked' element={<Stacked />} />

      {/* khanh */}
      <Route exact path='/event' element={<K_Event />} />
      <Route exact path='/event/add' element={<EventAdd />} />
      <Route exact path='/event/edit/:id' element={<EventEdit />} />
      <Route exact path='/skill-position' element={<PositionSkill />} />
      <Route exact path='/edit-skill/:id' element={<EditSkill />} />
      <Route exact path='/add-skill' element={<AddSkill />} />
      <Route exact path='/add-position' element={<AddPosition />} />
      <Route exact path='/edit-position/:id' element={<EditPosition />} />
      <Route exact path='/question' element={<Question />} />
      <Route exact path='/question/add' element={<AddQuestion />} />
      <Route exact path='/question/edit/:id' element={<EditQuestion />} />
      <Route exact path='/interview' element={<Interview />} />
      {/* khanh */}
      <Route exact path='/addCandidate/:id/:idRoom' element={<RoomEditInfomation />} />
      <Route exact path='/calendar-admin' element={<AdminCalendar />} />
      <Route exact path='/mark-candidate/:roomId' element={<MarkCandidate />} />
      <Route exact path='/interviewer-list-room' element={<InterviewerListRoom />} />
      <Route exact path='/my-company' element={<MyCompany />} />
      <Route exact path='/manage-interviewer' element={<ManageInterviewer />} />
    </Routes>
  )
}

export default AllRoutesAd
