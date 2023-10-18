
 'use client'
import Navbar from '../components/Navbar'
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


interface Reasons{
    id: number;
    reason: string;
}

interface Region {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
}

interface TransferApplication {
  id: number;
  TeacherID: number | null;
  ApplicationType: string;
  Status: string;
  Reasons_type: number |null,
  Reasons?: string;
  SupportingDocuments?: File | null;
  ApplicationDate: Date | null;
  FromRegionID?: Region | null;
  FromDistrictID?: District | null;
  ToRegionID?: Region | null;
  ToDistrictID?: District | null;
  ApprovalStatus: string;
  decision_date?: Date | null;
  Comments: string;
}




const TransferRequest = () => {

  const [reasons, setReasons] = useState<Reasons[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [currentDistricts, setCurrentDistricts] = useState<District[]>([]);
  const [destinationDistricts, setDestinationDistricts] = useState<District[]>([]);
  const [selectedCurrentRegion, setSelectedCurrentRegion] = useState<string>('');
  const [selectedCurrentDistrict, setSelectedCurrentDistrict] = useState<string>('');
  const [selectedDestinationRegion, setSelectedDestinationRegion] = useState<string>('');
  const [selectedDestinationDistrict, setSelectedDestinationDistrict] = useState<string>('');


  
const [request, setRequest] = useState<TransferApplication>({
    id: 1,
    TeacherID: null,
    ApplicationType: "",
    Status: "",
    Reasons_type: null,
    Reasons: "",
    ApplicationDate: null,
    SupportingDocuments: null,
    FromRegionID: null,
    FromDistrictID: null,
    ToRegionID: null,
    ToDistrictID: null,
    Comments: "",
    ApprovalStatus: "",
    decision_date: null,
  });
  

  
  const handleChangeCurrentRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedCurrentRegion(value);
  };

  const handleChangeDestinationRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedDestinationRegion(value);
  };

  //fetch Reasons
  const fetchReasons =async () => {
        const response = await axios.get('http://localhost:8000/tottmsapi/treasons/');
        const reasons_data = response.data;
        setReasons(reasons_data) 
    };

    useEffect( ()=>{
        fetchReasons()
    },[])


  // Fetch regions
  const fetchRegions = async () => {
    const response = await axios.get<Region[]>('http://localhost:8000/tottmsapi/regions/');
    const regionData = response.data;
    setRegions(regionData);
  };

  // Fetch districts based on the selected region
  const fetchCurrentDistricts = useCallback(async (selectedCurrentRegionId: string) => {
    if (selectedCurrentRegionId) {
      const url = `http://localhost:8000/tottmsapi/regions/${selectedCurrentRegionId}/districts/`;
      const response = await axios.get<District[]>(url);
      const districtData = response.data;
      setCurrentDistricts(districtData);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, []);

  useEffect(() => {
    if (selectedCurrentRegion) {
      fetchCurrentDistricts(selectedCurrentRegion);
    }
  }, [fetchCurrentDistricts, selectedCurrentRegion]);


  // Fetch districts based on the selected region
  const fetchDestinationDistricts = useCallback(async (selectedDestinationRegionId: string) => {
    if (selectedDestinationRegionId) {
      const url = `http://localhost:8000/tottmsapi/regions/${selectedDestinationRegionId}/districts/`;
      const response = await axios.get<District[]>(url);
      const districtData = response.data;
      setDestinationDistricts(districtData);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, []);

  useEffect(() => {
    if (selectedDestinationRegion) {
      fetchDestinationDistricts(selectedDestinationRegion);
    }
  }, [fetchDestinationDistricts, selectedDestinationRegion]);



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission.

    // Create a data object with the form values
    const data = {
      TeacherID: request.TeacherID,
      ApplicationType: request.ApplicationType,
      Status: request.Status,
      Reasons_type: request.Reasons_type,
      Reasons: request.Reasons,
      SupportingDocuments: request.SupportingDocuments,
      ApplicationDate: request.ApplicationDate,
      FromRegionID: selectedCurrentRegion,
      FromDistrictID: selectedCurrentDistrict,
      ToRegionID: selectedDestinationRegion,
      ToDistrictID: selectedDestinationDistrict,
      Comments: request.Comments,
      ApprovalStatus: request.ApprovalStatus,
      decision_date: request.decision_date,
      // Add other fields as needed
    };

    // Send a POST request to your API
    axios.post('http://127.0.0.1:8000/tottmsapi/transfer-applications/', data)
      .then(response => {
        // Handle the response, e.g., show a success message to the user.
        console.log('Request submitted successfully!', response.data);
      })
      .catch(error => {
        // Handle errors, e.g., display an error message to the user.
        console.error('Error submitting request', error);
      });
  };




  return (
  <div className="font-mono text-black">
    {/* ... */}
    <Navbar />
    <div className='flex justify-center font-bold items-center"'>
      <h1 className='text-4xl mb-10'>Transfer Request</h1>
    </div>

    <form onSubmit={handleSubmit}>

        <div className='ustify-center  items-center"'>
        

            <div className='flex pl-72 flex-col lg:flex-row'>
                <div className="p-4">
                <label>current region</label>
                <select
                    className='rounded h-10'
                    name="FromRegionID"
                    title="Region"
                    value={selectedCurrentRegion}
                    onChange={handleChangeCurrentRegion}
                >
                    <option value="">Select a region</option>
                    {regions.map((region) => (
                    <option key={region.id} value={region.id.toString()}>
                        {region.name}
                    </option>
                    ))}
                </select>
                </div>

                <div className="p-4">
                <label>current district</label>
                <select
                    className='rounded h-10'
                    name="FromDistrictID"
                    title="District"
                    value={selectedCurrentDistrict}
                    onChange={(event) => setSelectedCurrentDistrict(event.target.value)}
                >
                    <option value="">Select a district</option>
                    {currentDistricts.map((district) => (
                    <option key={district.id} value={district.id.toString()}>
                        {district.name}
                    </option>
                    ))}
                </select>
                </div>
            </div>

            <div className='flex pl-60 flex-col lg:flex-row'>
                <div className="p-4">
                    <label>destination region</label>
                    <select
                        className='rounded h-10'
                        name="ToRegionID"
                        title="Region"
                        value={selectedDestinationRegion}
                        onChange={handleChangeDestinationRegion}>
                        <option value="">Select a region</option>
                        {regions.map((region) => (
                        <option key={region.id} value={region.id.toString()}>
                            {region.name}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="p-4">
                    <label>destination district</label>
                    <select
                        className='rounded h-10'
                        name="ToDistrictID"
                        title="District"
                        value={selectedDestinationDistrict}
                        onChange={(event) => setSelectedDestinationDistrict(event.target.value)} >
                        <option value="">Select a district</option>
                        {destinationDistricts.map((district) => (
                        <option key={district.id} value={district.id.toString()}>
                            {district.name}
                        </option>
                        ))}
                    </select>
                </div>
            </div>

                <div className='flex justify-center p-5 items-center'>
                        
                            <label>Select reasons</label>
                            <select 
                            className='rounded h-10'
                            name="reason" 
                            title="Reasons">
                            {reasons.map((reason) => (
                                <option key={reason.id} value={reason.reason}>
                                {reason.reason}
                                </option>
                            ))}
                            </select>
                </div>
                <div className='flex justify-center p-5 items-center'>
                
                        <label>Upload form & documents</label>
                            <input
                            className="file-input file-input-bordered w-full max-w-xs" 
                            name='SupportingDocuments' title='Form + Supporting documents'
                            type='File'
                            placeholder='Uplad PDF Document'/>

                    
                </div>
                <div className='flex justify-center p-5 items-center'>
                    <input
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                            name='Reasons' title='Provide concrete reasons'
                            type='Textfield'
                            placeholder='Briefly explain the reason for this transfer request'
                    
                    />
                </div>
                <div className='flex justify-center  items-center'>
                    <button type='submit' className="btn btn-outline">submit</button>
                </div>

        </div>
    </form>
</div>
  );
};

export default TransferRequest;



