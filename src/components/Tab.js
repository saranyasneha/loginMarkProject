import React,{useSelector,useMemo} from "react";
import {useTable} from 'react-table';
import {COLUMNS} from './columns';

 const Tab=()=>{
    
    const columns=useMemo(()=>COLUMNS,[])
    const data=[{id:5,rollNum:6, name:"Monisha",city: "Chennai",
    mark1:88,mark2:74,mark3:47,mark4:60,mark5:97}]
    const tableInstance=  useTable({
        columns,
        data
    })
    const {getTableProps,
        getTableBodyProps, 
        headerGroups,
        rows,
        prepareRow}=tableInstance;
    return (
        <div>
<table {...getTableProps()}>
 <thead>
    {
        headerGroups.map((headerGroup)=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns)=>(
                    <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                    ))
                }
                <th>act</th>
            </tr>
        ))
    }
 </thead>
 <tbody  {...getTableBodyProps}>

    {rows.map(row=>{
        prepareRow(row)
        return (
            <tr {...row.getRowProps()}> 
            {
                row.cells.map((cell)=>{
                    return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                })
            }
            </tr>
        )
    })}

 </tbody>
</table>
        </div>
    )
}
export default Tab;