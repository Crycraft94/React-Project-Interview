import React from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from 'primereact/column'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { Link } from 'react-router-dom'


export const Table = () => {

  const data = [
    {
      id:1,
      name:"John Johnson",
      number: 1020 , 
      date:1395 ,
      history: 7
    },
    {
      id:2,
      name:"Mary Jane",
      number: 2390 , 
      date:1400 ,
      history: 2
    },
    {
      id:3,
      name:"Albert Mosby",
      number: 3428 , 
      date:1401 ,
      history: 1
    },
    {
      id:4,
      name:"Bob Gyllenhal",
      number: 1276 , 
      date:1399 ,
      history: 3
    },
    {
      id:5,
      name:"Haley Mathers",
      number: 4598 , 
      date:1400 ,
      history: 5
    },
    {
      id:6,
      name:"Keanu Reeves",
      number: 9876 , 
      date:1394 ,
      history: 10
    },
    {
      id:6,
      name:"Asal Hadad",
      number: 6578 , 
      date:1396 ,
      history: 5
    },
    {
      id:6,
      name:"Mojtaba Kian",
      number: 8762 , 
      date:1400 ,
      history: 2
    }
  ];

  return (
    <>
<div className="navbar bg-neutral text-neutral-content ">
  <div className="flex-1">
    <Link to='/'><a className="btn btn-ghost normal-case text-xl">Website</a></Link>
  </div>
</div>
    <DataTable value={data} className='py-20 px-10'>
        <Column field='id' header="ردیف" sortable className='text-[#203785]'/>
        <Column field='name' header="نام و نام خانوادگی" sortable className='text-[#203785]'/>
        <Column field='number' header="شماره پرسنلی" sortable className='text-[#203785]'/>
        <Column field='date' header="تاریخ استخدام" sortable className='text-[#203785]'/>
        <Column field='history' header="سابقه خدمت" sortable className='text-[#203785]'/>
    </DataTable>
    </>
  )
}
