const initialState=[
    {id:0,rollNum:1, name:"Noor Khan",city:"Patna",
    mark1:69,mark2:50,mark3:60,mark4:70,mark5:90},

    {id:1,rollNum:2, name:"Rapsan Jani",city: "Noida",
       mark1:70,mark2:64,mark3:47,mark4:60,mark5:67},

    {id:2,rollNum:3, name:"Monika singh",city: "New Delhi",
       mark1:86,mark2:45,mark3:87,mark4:50,mark5:97},

    {id:3,rollNum:4, name:"Sunil Kumar",city: "Jaipur",
       mark1:36,mark2:54,mark3:97,mark4:60,mark5:87},

    {id:4,rollNum:5, name:"John William",city: "Noida",
       mark1:70,mark2:84,mark3:47,mark4:50,mark5:67}, 
       
    {id:5,rollNum:6, name:"Monisha",city: "Chennai",
       mark1:88,mark2:74,mark3:47,mark4:60,mark5:97},
    
    {id:6,rollNum:7, name:"Sai Sri",city: "Noida",
       mark1:71,mark2:69,mark3:48,mark4:50,mark5:57},
        
    {id:7,rollNum:8, name:"Ahmed Khan",city: "Delhi",
       mark1:77,mark2:54,mark3:47,mark4:60,mark5:47},
        
    {id:8,rollNum:9, name:"Madhuri shetty",city: "Gujarat",
       mark1:50,mark2:64,mark3:47,mark4:60,mark5:68},
       
    {id:9,rollNum:10, name:"Deepika Singh",city: "Gujarat",
       mark1:54,mark2:74,mark3:49,mark4:39,mark5:78},
      
];

const studentReducer=(state=initialState ,action)=>{
    switch(action.type) {
        case "Add_Student":
            state=[...state,action.payload];
              return state;
        case "UPDATE_STUDENT":
            const updateState=state.map(student=>student.id===action.payload.
                id? action.payload:student);
                state=updateState;
                return state;
        case "DELETE_STUDENT":
            const filterStudents=state.filter(student=>student.id!==action.
                payload&&student);
                state=filterStudents;
                return state;
        
        default:
            return state;
    }
};

export default studentReducer;