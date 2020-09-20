import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from 'axios';
import {RecordsResponse} from './types'
import {formatDate} from './helpers'
import Pagination from './Pagination'
import Filters from '../../components/Filters'

const BASE_URL = "https://sds1-lfcsvt.herokuapp.com";
const Records = () =>{
    const [recordsRespomse, setRecordsReponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0);
    useEffect(()=>{
        
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
        .then(res=>setRecordsReponse(res.data))
    }, [activePage]);

    const handlePageChange=(index: number)=>{
        setActivePage(index)
    }
   return (
        <div className="page-container">
            <Filters link="/charts" linkText="See Charts"/>
            <table className="records-table" cellPadding="0" cellSpacing="0">
              <thead>
                  <tr>
                      <th>ISTANT</th>
                      <th>NAME</th>
                      <th>AGE</th>
                      <th>PLATFORM</th>
                      <th>GENRE</th>
                      <th>GAME TITLE</th>
                      
                  </tr>
              </thead>
              <tbody>
                  {recordsRespomse?.content.map((record  => (

                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                  )))}
                  
              </tbody>
            </table>

               <Pagination 
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsRespomse?.totalPages}
               />     
        </div>
      );
}

export default Records;