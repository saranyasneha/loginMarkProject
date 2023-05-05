import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "../App.css";
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import filter from '../assets/images/filter.png';

const MatTable = () => {
    const students = useSelector(state => state);
    console.log(students);
    const [tableData, setTableData] = useState(students);

    const defaultMaterialTheme = createTheme();
    const columns = [
        {
            title: "Roll Number", field: 'rollNum'
        },
        { title: "Name", field: 'name' },
        { title: "Mark1", field: 'mark1' },
        { title: "Mark2", field: 'mark2' },
        { title: "Mark3", field: 'mark3' },
        { title: "Mark4", field: 'mark4' },
        { title: "Mark5", field: 'mark5' }
    ]
    return (

        <div className='mat'>
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <ThemeProvider theme={defaultMaterialTheme}>
                <div><h1>Students Mark List</h1></div>
                <MaterialTable
                    title=" "
                    columns={columns}
                    data={tableData}
                    options={{
                        paging: true,
                        sorting: true,
                        filtering:true,
                        editable:false,
                        headerStyle:{background: "#d8a4f4"},
                        pageSizeOptions: [3, 5, 10, 15],
                        paginationType: "stepped",
                        showFirstLastPageButtons: false,
                        exportButton: true,
                        addRowPosition: "last",
                        actionsColumnIndex: -1,
                        filterCellStyle:{height:"35px"},
                        rowStyle:{background:"#f5f5f5"}
                    }}
           
          
          editable={{
                           onRowAdd: (newRow) => new Promise((resolve, reject) => {
                            setTableData([...tableData, newRow])
                            toast.success("New student list added successfully!!")
                            resolve()


                        }),
                        onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                            const updatedData = [...tableData]
                            updatedData[oldRow.tableData.id] = newRow
                            setTableData(updatedData)
                            console.log(newRow, oldRow);
                            toast.success("Updated successfully!!")
                            resolve()
                        }),
                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                            const updatedData = [...tableData]
                            updatedData.splice(selectedRow.tableData.id, 1)
                            console.log(updatedData);
                            setTableData(updatedData)
                            toast.success("deleted successfully!!")
                            resolve()

                        })
                    }}
                   
       components={{
        FilterRow: (rowProps) => {
          const { columns, onFilterChanged } = rowProps;

          return (
            <>
              <tr>
                {columns.map((col) => {
                  if (col.field) {
                    return (
                      <td><div className='filterSearch'>
                        <img src={filter}/>
                        <input type="text" className='form-control'
                          placeholder="search by filter..."
                          id={col.field}
                          onChange={(e) => {
                            console.log(e.target.id, e.target.value);
                            onFilterChanged(col.tableData.id, e.target.value);
                          }}
                        /></div>
                      </td>
                    );
                  }
                })}
              </tr>
            </>
          );
        },
      }
    }
                />
            </ThemeProvider>
        </div>
    )


}

export default MatTable;