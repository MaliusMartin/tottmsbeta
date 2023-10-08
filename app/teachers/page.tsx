'use client';
import Link from 'next/link';
import React, { useState, useEffect, Suspense} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import  TeacherProfile from './profile/page';


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

interface Teacher {
    id: number;
    fname: string | null;
    sname: string | null;
    check_number: string | null;
    position: number | null;
    gender: number | null;
    region: number | null;
    district: number | null;
    school: number | null;
}



const Teachers = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [regions, setRegions] = useState<Region[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [schools, setSchools] = useState<School[]>([]);
    const [genders, setGenders] = useState<Gender[]>([]);
    const [positions, setPositions] = useState<Position[]>([]);


    


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

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.id}</td>
                                        <td>
                                            <Link href={`/teachers/profile/`}>{teacher.fname || 'N/A'}    
                                                 
                                            </Link></td>
                                        <td>{teacher.sname}</td>
                                        <td>{teacher.check_number}</td>
                                        <td>{getPositionNameById(teacher.position)}</td>
                                        <td>{getGenderNameById(teacher.gender)}</td>
                                        <td>{getRegionNameById(teacher.region)}</td>
                                        <td>{getDistrictNameById(teacher.district)}</td>
                                        <td>{getSchoolNameById(teacher.school)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </Suspense>
            
        </div>
    );
};

export default Teachers;

