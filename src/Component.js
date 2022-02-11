// import React from "react";
// import Faker from 'faker';


// const Table =(props)=>{
//     console.log(props);
//     return(
//     <table 
// className="ui very basic collapsing celled table">
//   <thead>
//     <tr><th>Employee</th>
//     <th>Correct Guesses</th>
//   </tr></thead>
  
//   <tbody>
//     <tr>
//       <td>
//         <h4 
//         className="ui image header">
//        <img   style={{width:"50px",height:"50px"}} src={Faker.image.image()}
//           className="ui mini rounded image" />
//           <div 
//           className="content">
//             {props.name}
//             <div 
//             className="sub header">{props.location}
//           </div>
//           </div>
//       </h4></td>
//       <td>
//         {props.age}
//       </td>
//     </tr>
//     </tbody>
// </table>
// )

// }
// export default Table;

import React from 'react';
import faker from 'faker';
function Table(){
    return(
      <table class="ui very basic collapsing celled table">
      <thead>
        <tr><th>Employee</th>
        <th>Correct Guesses</th>
      </tr></thead>
      <tbody>
        <tr>
          <td>
            <h4 class="ui image header">
              <img style={{width:"50px",height:"50px"}} src={faker.image.image()}  class="ui mini rounded image" />
              <div class="content">
                Lena
                <div class="sub header">Human Resources
              </div>
            </div>
          </h4></td>
          <td>
            22
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <img style={{width:"50px",height:"50px"}} src={faker.image.image()}  class="ui mini rounded image" />
              <div class="content">
                Matthew
                <div class="sub header">Fabric Design
              </div>
            </div>
          </h4></td>
          <td>
            15
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <img style={{width:"50px",height:"50px"}} src={faker.image.image()}  class="ui mini rounded image" />
              <div class="content">
                Lindsay
                <div class="sub header">Entertainment
              </div>
            </div>
          </h4></td>
          <td>
            12
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <img style={{width:"50px",height:"50px"}} src={faker.image.image()}  class="ui mini rounded image" />
              <div class="content">
                Mark
                <div class="sub header">Executive
              </div>
            </div>
          </h4></td>
          <td>
            11
          </td>
        </tr>
      </tbody>
    </table>
    );
}
export default Table;
