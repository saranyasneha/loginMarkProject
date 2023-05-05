import '../App.css';
import downArrow from '../assets/images/downarrow.png';
import upArrow from '../assets/images/upArrow.png';
import filter from '../assets/images/filter.png';


const Sort=({users,setUsers,sorted,setsorted,onChangeFilter})=>{

    const sortById=()=>{
        setsorted({sortedField:"rollNum",reversed:!sorted.reversed});
        users.sort((userA,userB)=>{
         if(sorted.reversed){
           return userA.id-userB.id;
         }
         return userB.id-userA.id;
        });
        setUsers(users);
       }
       
       const sortByName=()=>{
         setsorted({sortedField:"name",reversed:!sorted.reversed});
         users.sort((userA,userB)=>{
         const nameA=`${userA.name}`;
         const nameB=`${userB.name}`;
         if(sorted.reversed){
           return nameB.localeCompare(nameA);
         }
         return nameA.localeCompare(nameB);
        });
        setUsers(users);
        }
       
        const sortByCity=()=>{
         setsorted({sortedField:"city",reversed:!sorted.reversed});
         users.sort((userA,userB)=>{
         const cityA=`${userA.city}`;
         const cityB=`${userB.city}`;
         if(sorted.reversed){
           return cityB.localeCompare(cityA);
         }
         return cityA.localeCompare(cityB);
        });
       setUsers(users);
        }
       
         const sortByMark1=()=>{
          setsorted({sortedField:"mark1",reversed:!sorted.reversed});
          users.sort((userA,userB)=>{
           if(sorted.reversed){
             return userA.id-userB.id;
           }
           return userB.id-userA.id;
          });
          setUsers(users);
         }
         const sortByMark2=()=>{
          setsorted({sortedField:"mark2",reversed:!sorted.reversed});
          users.sort((userA,userB)=>{
           if(sorted.reversed){
             return userA.id-userB.id;
           }
           return userB.id-userA.id;
          });
          setUsers(users);
         }
         const sortByMark3=()=>{
          setsorted({sortedField:"mark3",reversed:!sorted.reversed});
          users.sort((userA,userB)=>{
           if(sorted.reversed){
             return userA.id-userB.id;
           }
           return userB.id-userA.id;
          });
          setUsers(users);
         }
         const sortByMark4=()=>{
          setsorted({sortedField:"mark4",reversed:!sorted.reversed});
          users.sort((userA,userB)=>{
           if(sorted.reversed){
             return userA.id-userB.id;
           }
           return userB.id-userA.id;
          });
          setUsers(users);
         }
         const sortByMark5=()=>{
          setsorted({sortedField:"mark5",reversed:!sorted.reversed});
          users.sort((userA,userB)=>{
           if(sorted.reversed){
             return userA.id-userB.id;
           }
           return userB.id-userA.id;
          });
          setUsers(users);
         }
        const Arrow = () => <img src={sorted.reversed ? upArrow : downArrow} alt=""/>
      
    return (<>
<tr>
    <th onClick={sortById}>Roll Number
      {sorted.sortedField=="rollNum"?Arrow():null}
    </th>
    <th onClick={sortByName}>Student Name 
      {sorted.sortedField=="name"?Arrow():null}
    </th>
    <th onClick={sortByCity}>City
      {sorted.sortedField=="city"?Arrow():null}
    </th>
    <th onClick={sortByMark1}>Mark1
      {sorted.sortedField=="mark1"?Arrow():null}
    </th>
    <th onClick={sortByMark2}>Mark2
      {sorted.sortedField=="mark2"?Arrow():null}
    </th>
    <th onClick={sortByMark3}>Mark3
      {sorted.sortedField=="mark3"?Arrow():null}
    </th>
    <th onClick={sortByMark4}>Mark4
      {sorted.sortedField=="mark4"?Arrow():null}
    </th>
    <th onClick={sortByMark5}>Mark5
      {sorted.sortedField=="mark5"?Arrow():null}
    </th>
    <th scope="col">Actions</th>
  </tr>
  <tr className='tableRow2'>
    <th>
     <div className='filter'><img src={filter}/><input type="text" name='rollNum' placeholder='search Roll Number' onChange={onChangeFilter}/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/> <input  type="text" name='name' placeholder='search Name' onChange={onChangeFilter}/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/><input type="text" name='city' placeholder='search City'/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/><input type="text" name='mark1' placeholder='search Mark1'/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/><input type="text" name='mark2' placeholder='search Mark2'/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/><input type="text" name='mark3' placeholder='search Mark3'/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/><input type="text" name='mark4' placeholder='search Mark4'/></div>
    </th>
    <th>
    <div className='filter'><img src={filter}/><input type="text" name='mark5' placeholder='seach Mark5'/></div>
    </th>
    
  </tr>
 </>
    )
}
export default Sort;