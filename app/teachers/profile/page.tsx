'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';


interface Region {
    id: number;
    name: string;
}

interface District {
    id: number;
    name: string;
}

interface School {
    id: number;
    name: string;
}

interface Gender {
    id: number;
    name: string;
}

interface Position {
    id: number;
    name: string;
}
interface Grade {
    id: number;
    name: string;
}

interface Schoollevel {
    id: number;
    name: string;
}
interface Educationlevel {
    id: number;
    name: string;
}

interface Subject {
    id: number;
    name: string;
}
interface Teacher {
  id: number;
  fname: string | null;
  mname: string | null;
  sname: string | null;
  check_number: string | null;
  grade: number | null;
  position: number | null;
  gender: number | null;
  start_date: string | null;
  date_of_birth: string | null;
  expected_retirement_date: string | null;
  region: number | null;
  district: number | null;
  school_level: number| null;
  school: number | null;
  education_level: number| null;
  subjects_taught: number | null;
  phone: string | null;
  email: string | null;
}

const TeacherProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [regions, setRegions] = useState<Region[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [grades, setGrade] = useState<Grade[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [genders, setGenders] = useState<Gender[]>([]);
  const [schoollevels, setSchoollevels] = useState<Schoollevel[]>([]);
  const [educationlevels, setEducationlevels] = useState<Educationlevel[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get<Teacher>(`http://127.0.0.1:8000/tottmsapi/teachers/1/`);
        setTeacher(response.data);

        // Fetch regions
        const regionsResponse = await axios.get<Region[]>(
            'http://127.0.0.1:8000/tottmsapi/regions/'
        );
        const regionsData = regionsResponse.data;
        setRegions(regionsData);

        // Fetch districts
        const districtsResponse = await axios.get<District[]>(
            'http://127.0.0.1:8000/tottmsapi/districts/'
        );
        const districtsData = districtsResponse.data;
        setDistricts(districtsData);

        // Fetch schools
        const schoolsResponse = await axios.get<School[]>(
            'http://127.0.0.1:8000/tottmsapi/schools/'
        );
        const schoolsData = schoolsResponse.data;
        setSchools(schoolsData);

        //Fetch Gender
        const genderResponse = await axios.get<Gender[]>(
            `http://127.0.0.1:8000/tottmsapi/genders/`
        );
        const genderData = genderResponse.data;
        setGenders(genderData);

        //Fetch Position
        const positionResponse = await axios.get<Position[]>(
            `http://127.0.0.1:8000/tottmsapi/positions/`);
        const positionData = positionResponse.data;
        setPositions(positionData);

        //Grade 
        const gradeResponse = await axios.get<Grade[]>(
       'http://127.0.0.1:8000/tottmsapi/grade/'
        );
        const gradeData = gradeResponse.data;
        setGrade(gradeData);

        //Schoollevel
        const schoollevelResponse = await axios.get<Schoollevel[]>(
            'http://127.0.0.1:8000/tottmsapi/school-levels/');
        const schoollevelData = schoollevelResponse.data;
        setSchoollevels(schoollevelData);

        //Educationlevel
        const educationlevelResponse = await axios.get<Educationlevel[]>(
            'http://127.0.0.1:8000/tottmsapi/education-levels/');
        const educationlevelData = educationlevelResponse.data;
        setEducationlevels(educationlevelData);

        //Subject
        const subjectResponse = await axios.get<Subject[]>(
            'http://127.0.0.1:8000/tottmsapi/subjects/');
        const subjectData = subjectResponse.data;
        setSubjects(subjectData);
      } catch (error) {
        console.error('Error fetching teacher:', error);
      }
    };

    fetchTeacher();
  }, [id]);

   // Helper function to get region name by ID
   const getRegionNameById = (regionId: number | null) => {
    const region = regions.find((r) => r.id === regionId);
    return region?.name || 'N/A';
};

// Helper function to get district name by ID
const getDistrictNameById = (districtId: number | null) => {
    const district = districts.find((d) => d.id === districtId);
    return district?.name || 'N/A';
};

// Helper function to get school name by ID
const getSchoolNameById = (schoolId: number | null) => {
    const school = schools.find((s) => s.id === schoolId);
    return school?.name || 'N/A';
};

//Helper function to get the gender namae by ID
const getGenderNameById = (genderId: number | null) => {
    const gender = genders.find((s) => s.id === genderId);
    return  gender?.name || 'N/A';
};

//Helper function to get the position name by ID
const getPositionNameById = (positionId: number | null) => {
    const position = positions.find((s) => s.id === positionId);
    return  position?.name || 'N/A';
}

//Helper function to get the grade name by ID
const getGradeNameById = (gradeId: number | null) => {
    const grade = grades.find((s) => s.id === gradeId);
    return  grade?.name || 'N/A';}

// Helper function to get school level name by ID
const getSchoollevelNameById = (schoollevelId: number | null) => {
    const schoollevel = schoollevels.find((s) => s.id === schoollevelId);
    return schoollevel?.name || 'N/A';}

// Helper function to get education level name by ID
const getEducationlevelNameById = (educationlevelId: number | null) => {
    const educationlevel = educationlevels.find((s) => s.id === educationlevelId);
    return educationlevel?.name || 'N/A';}

// Helper function to get subject name by ID
const getSubjectNameById = (subjectId: number | null) => {
    const subject = subjects.find((s) => s.id === subjectId);
    return subject?.name || 'N/A';}





    

  return (
    <div className='font-mono text-black'>
      {teacher ? (
       
       <div >
             <Navbar />
          
           
          
            <div className="flex justify-center items-center pt-24">
                    <div className="artboard phone-5 pl-10 bg-white rounded-md"> 
                        <h1 className='text-4xl mb-10'>Profile</h1>
                        {/* <p>ID: {teacher.id}</p> */}
                        <p>First Name: {teacher.fname}</p>
                        <p>Middle Name: {teacher.mname}</p>
                        <p>Last Name: {teacher.sname}</p>
                        <p>Check Number: {teacher.check_number}</p>
                        <p>Grade: {getGradeNameById(teacher.grade)}</p>
                        <p>Position: {getPositionNameById(teacher.position)}</p>
                        <p>Gender: {getGenderNameById(teacher.gender)}</p>
                        <p>Start Date: {teacher.start_date}</p>
                        <p>Date of Birth: {teacher.date_of_birth}</p>
                        <p>Expected Retirement Date: {teacher.expected_retirement_date}</p>
                        <p>Region: {getRegionNameById(teacher.region)}</p>
                        <p>District: {getDistrictNameById(teacher.district)}</p>
                        <p>School Level: {getSchoollevelNameById(teacher.school_level)}</p>
                        <p>School: {getSchoolNameById(teacher.school)}</p>
                        <p>Education Level: {getEducationlevelNameById(teacher.education_level)}</p>
                        <p>Subjects Taught: {getSubjectNameById(teacher.subjects_taught)}</p>
                        <p>Phone: {teacher.phone}</p>
                        <p>Email: {teacher.email}</p>
                    </div>
          </div>
        </div>
      ) : (
       <div className="flex justify-center items-center"> 
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;
