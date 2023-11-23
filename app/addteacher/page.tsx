"use client"
import {useForm} from 'react-hook-form';
import React, { useState, useCallback, useEffect} from 'react';
// import { useSelector } from 'react-redux';

import axios from "axios"
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';



const AddTeacherForm: React.FC = () => {
    const { register, handleSubmit } = useForm();
  const [teacher, setTeacher] = useState<{
    fname: string;
    mname: string;
    sname: string;
    position: string;
    gender: string;
    check_number: string;
    start_date: string;
    date_of_birth: string;
    district: string;
    region: string;
    school: string;
    education_level: string;
    subjects_taught: string;
    
  }>({
    fname: '',
    mname: '',
    sname: '',
    position: '',
    gender: '',
    check_number: '',
    start_date: '',
    date_of_birth: '',
    district: '',
    region: '',
    school: '',
    education_level: '',
    subjects_taught: '',
    
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedRegion(regions.find((region) => region.name === value) || null);
    setTeacher(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
   
  const onSubmit = async (data:any) => {
    // Validate the form data.
    if (!data.fname || !data.mname || !data.sname) {
      return;
    }

    // Submit the form data to the server.
        const responses = await addTeacher(data);
        if (responses.status === 201) {
            // Success!
        } else {
            // Error!
        }

    // Submit the form data to the server.
    const response = await axios.post('http://127.0.0.1:8000/api/teachers/', data);
    if (response.status === 201) {
      // Success!
    } else {
      // Error!
    }
  };


 
  const addTeacher = async (teacher: typeof AddTeacherForm) => {
    const response = await axios.post("http://127.0.0.1:8000/api/teachers/", teacher);
    return response.data;
  };
  interface Region {
    id: number;
    name: string;
  }
  const [regions, setRegions] = useState<Region[]>([]);

    const fetchRegions = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/regions/");
    const regionse = response.data;
    setRegions(regionse);
    };

    useEffect(() => {
    fetchRegions();
    }, []);

    interface District{
        id: number;
        name: string;
        regionId: number;
    }
  
    const [districts, setDistrict] = useState<District[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(regions[0]);

  
    const fetchDistrict = useCallback(async () => {
      const selectedRegionId = selectedRegion?.id;
      const url = `http://127.0.0.1:8000/api/regions/${selectedRegionId}/districts/`;
      const response = await axios.get(url);
      const districts = response.data;
      setDistrict(districts);
  }, [selectedRegion]);

    useEffect(() =>{
        fetchDistrict()
    }, [selectedRegion, fetchDistrict]);
   
    interface Gender{
      id: number;
      name: string;
    }

    const [gender, setGender] = useState<Gender[]>([]);

    const fetchGender = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/genders/');
      const gender = response.data;
      setGender(gender);
    };
    useEffect(() => {
      fetchGender();
    },[]);

    interface Position{
      id: number;
      name: string;}
      const [position, setPosition] = useState<Position[]>([]);

      const fetchPosition = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/positions/');
        const position = response.data;
        setPosition(position);
      };

      useEffect(() => {
        fetchPosition();
      },[]);

     interface Education{
        id: number;
        name: string;
     }  
     
     const [education, setEducation] = useState<Education[]>([]);

     const fetchEducation = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/education-levels/`);
        const education = response.data;
        setEducation(education);
     };
       useEffect(() => {
        fetchEducation();
       }, []);


       interface Subjects{
        id: number;
        name: string;
       } 

       const [subject, setSubject] = useState<Subjects[]>([]);

       const fetchSubject = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/subjects/`);
        const subject = response.data;
        setSubject(subject);
       };
           useEffect(() => {
            fetchSubject();
        }, []);


      interface School{
        id: number;
        name: string;
      }
      const [schools, setSchools] = useState<School[]>([]);
      const [selectedDistrict, setSelectedDistrict] = useState<District | null>(districts[0]);

      const fetchSchools = useCallback(async () => {
        const selectedRegionId = selectedRegion?.id;
        const selectedDistrictId = selectedDistrict?.id;

        if (selectedRegionId && selectedDistrictId) {
          const url = `http://localhost:8000/api/regions/${selectedRegionId}/districts/${selectedDistrictId}/schools/`;
          const response = await axios.get(url);
          const schools = response.data;
          setSchools(schools);
        }
      }, [selectedDistrict, selectedRegion]);

          useEffect(() => {
            fetchSchools();
          }, [selectedDistrict, fetchSchools]);



        
  return (
  
   <div className='font-mono  text-black'>
    <Navbar  /> 
                
    <main className="flex min-h-screen flex-col items-center justify-between font-mono p-32" >
    
    <div className="flex flex-col gap-4  bg-slate-200 rounded-lg">
                    <div className='flex justify-center text-black font-bold items-center"'>
                         <h2 >Add a new Teacher</h2>
                    </div>
  
       
    <form onSubmit={handleSubmit(onSubmit)} className='p-10'>
      <p>Employee names</p>
      <div className='flex flex-col lg:flex-row'>
            <div className='p-4'>
                  <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder="First name"
                  value={teacher.fname}
                  name='fname'
                  onChange={handleChange}
                  // {...register('fname', { required: true })}
                />
            </div>
            <div className='p-4'>
                  <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder="Middle name"
                  value={teacher.mname}
                  name='mname'
                  onChange={handleChange}
                  // {...register('mname', { required: true })}
                />
            </div>
        
          <div className='p-4'>
              <input
                className="border border-gray-300 rounded-md p-2"
                type="text"
                placeholder="Surname"
                value={teacher.sname}
                name='sname'
                onChange={handleChange}
                // {...register('sname', { required: true })}
              />
          </div>
      </div>
    <div className='flex flex-col lg:flex-row'>
    <div className='p-4'>
                <input
                  className="border border-gray-300 rounded h-10 p-2"
                  type="text"
                  placeholder="Check number"
                  value={teacher.check_number}
                  name='check_number'
                  onChange={handleChange}
                  // {...register('check_number', { required: true })}
                />
          </div>

        
      
    </div>
     
     <p>Birth information</p>
    <div className='flex flex-col lg:flex-row'>
        
          <div className='p-4'>
                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="date"
                  placeholder="Date of birth"
                  name='date_of_birth'
                  value={teacher.date_of_birth}
                  onChange={handleChange}
                  // {...register('date_of_birth', { required: true })}
                />
            </div>
                        
            <div className='p-4'>
                    <select 
                        className='rounded h-10'
                        name="gender" 
                        placeholder='Select reason'
                        title="Gender">
                        {gender.map((gender) => (
                          <option key={gender.id} value={gender.name}>
                              {gender.name}
                          </option>
                          ))}
                        </select>
            </div>
       
          
    </div>
    
    <p>Working Location information</p>
     <div className='flex flex-col lg:flex-row'>
              <div className='p-4'>
                  {/* <label>Region</label> */}
                  <select 
                  className='rounded h-10'
                  name="region" 
                  title="Region" 
                  value={teacher.region} onChange={handleChange}>
                          {regions.map((region) => (
                              <option key={region.id} value={region.name}>
                                    {region.name}
                              </option>
                          ))}
                  </select>
              </div>

        
              <div className='p-4'>
                    {/* <label>District</label> */}
                              <select 
                              className='rounded h-10'
                              name="district" 
                              title="District">
                          {districts.map((district) => (
                          <option key={district.id} value={district.name}>
                              {district.name}
                          </option>
                          ))}
                      </select>
              
              </div>
            <div className='p-4'>
                {/* <label>School</label> */}
                  <select className='rounded h-10' title='Schools' 
                  name='school' 
                  value={teacher.school} onChange={handleChange}>
                    {schools.map((school) => (
                                  <option key={school.id} value={school.name}>
                                      {school.name}
                                  </option>
                                  ))}
                  </select>
            </div>
      </div>
      <p>Education information</p>
      <div className='flex flex-col lg:flex-row'>

      <div className='p-4'>
          <select 
                        className='rounded h-10'
                        name="position" 
                        placeholder='Select reason'
                        title="Position">
                        {position.map((position) => (
                          <option key={position.id} value={position.name}>
                              {position.name}
                          </option>
                          ))}
                        </select>
          </div>
              <div className='p-4'>
                  {/* <label>Education</label> */}
                  <select className='rounded h-10' name="education_level" 
                  title="Education" 
                  value={teacher.education_level} onChange={handleChange}>
                      {education.map((education) => (
                          <option key={education.id} value={education.name}>
                              {education.name}
                          </option>
                          ))}
                  </select>
              </div>

              <div className='p-4'>
                {/* <label>subjects</label> */}
                  <select className='rounded h-10' name='subjects_taught' 
                  title='Subject' 
                  value={teacher.subjects_taught} onChange={handleChange}>
                      {subject.map((subject) => (
                          <option key={subject.id} value={subject.name}>
                              {subject.name}
                          </option>
                      ))}
                  </select>

              </div>
      </div>
      <div className=' flex justify-center  items-center p-4'>
            <button 
                        type="submit"
                        className="btn btn-outline hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-md mt-4"
                    >Submit
            </button>
      </div>
    </form>
    </div>
    </main>
    <Footer/>
    </div> 
  );
};

export default AddTeacherForm;
