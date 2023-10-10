'use client';
import Link from 'next/link';
import React, { useState, useEffect, Suspense, useCallback} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useParams } from 'next/navigation';
// import Router from 'next/router';
import Image from 'next/image';


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




const Teachers = () => {
    const { id } = useParams<{ id: string }>();
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [regions, setRegions] = useState<Region[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [schools, setSchools] = useState<School[]>([]);
    const [genders, setGenders] = useState<Gender[]>([]);
    const [positions, setPositions] = useState<Position[]>([]);
    const [grades, setGrades] = useState<Grade[]>([]);
    const [schoollevels, setSchoollevels] = useState<Schoollevel[]>([]);
    const [educationlevels, setEducationlevels] = useState<Educationlevel[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(teachers.length > 0 ? teachers[0] : null);



    


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch teachers
                const teachersResponse = await axios.get<Teacher[]>(
                    'http://127.0.0.1:8000/tottmsapi/teachers/'
                );
                const teachersData = teachersResponse.data;
                setTeachers(teachersData);

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
                setGrades(gradeData);
        
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
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const fetchTeacher = useCallback(async () => {
        const selectedTeacherId = selectedTeacher?.id;
        const url = `http://127.0.0.1:8000/tottmsapi/teachers/${selectedTeacherId}/`;
        const response = await axios.get(url);
        const teacha = response.data;
        setTeacher(teacha);
    }, [selectedTeacher]);
  
      useEffect(() =>{
          fetchTeacher()
      }, [selectedTeacher, fetchTeacher]);


     const handleOpenModal = (teacher: Teacher) => {
        setTeacher(teacher); // Set the selected teacher in the state
        const modal = document.getElementById('my_modal_4');
        if (modal instanceof HTMLDialogElement) {
          modal.showModal();
        }
      };
      
  


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
            <Navbar />
            <Suspense fallback={<div> 
                         <span className="loading loading-spinner loading-lg"></span>
                        </div>}>
                <h1 className='text-4xl mb-10'>ALL TEACHERS</h1>
                <div className='overflow-x-auto'>
                        <table className='table bg-white  table-xs table-pin-rows table-pin-cols'>
                            <thead>
                                <tr>
                                    <th>s/n</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Check Number</th>
                                    <th>Position</th>
                                    <th>Gender</th>
                                    <th>Region</th>
                                    <th>District</th>
                                    <th>School</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.id}</td>
                                        <td>
                                            <Link href={`/teachers/profile/`} >
                                                {teacher.fname || 'N/A'}  
                                            </Link></td>
                                        <td>{teacher.sname}</td>
                                        <td>{teacher.check_number}</td>
                                        <td>{getPositionNameById(teacher.position)}</td>
                                        <td>{getGenderNameById(teacher.gender)}</td>
                                        <td>{getRegionNameById(teacher.region)}</td>
                                        <td>{getDistrictNameById(teacher.district)}</td>
                                        <td>{getSchoolNameById(teacher.school)}</td>
                                        <td className='btn btn-outline'  onClick={() => handleOpenModal(teacher)}>View profile</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </Suspense>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Profile</h3>
                    <p className="py-4">{teacher?.id}. Employee`s data</p>

                    {teacher ? (
       
             
            <div className='flex flex-col lg:flex-row'>
                <div className="flex justify-center items-center pt-10">
                    <div className="card w-96 items-center bg-white rounded-md"> 
                        <div className="avatar py-6">
                                <div className="w-50 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Image
                                            src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                            alt="A profile image"
                                            width={50}  // Set an appropriate width
                                            height={50} // Set an appropriate height
                                        />
                                </div>
                        </div>
                    </div>
                    </div>
                   <div>
                       
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
      
      ) : (
       <div className="flex justify-center items-center"> 
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
        </div>
      )}

                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-outline">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            
        </div>
    );
};

export default Teachers;

