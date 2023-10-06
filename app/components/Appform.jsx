// @ts-nocheck
'use client'

import React from 'react';
import axios from 'axios';

const DownloadFormLink = ({ form }) => {
  const downloadForm = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/tottmsapi/forms/1`, {
        responseType: 'blob', // Set the response type to 'blob'
      });

      // Create a temporary URL for the blob
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      // Create a link element and trigger a click event to start the download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${form.form_name}.pdf`;
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        downloadForm();
      }}
      className='btn btn-outline'
    >
      Download Application Form
    </a>
  );
};

export default DownloadFormLink;



