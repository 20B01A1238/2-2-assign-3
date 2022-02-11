// import React from 'react';
// import ReactDOM  from 'react-dom';
// import Table from './Component.js';

// const App =()=>{
//     return (
//     <>
//    < Table name="Lena" location="Human Resources" age={22} />
//     <  Table name="Matthew" location="Fabric Design"  age={15}/>
//     < Table name="Lindsay" location="Entertainment" age={12} />
//     < Table name="Mark" location="Executive"  age={11}/>
//     </>
//     )
// };
// ReactDOM.render(
//      <App />,
//    document.getElementById('root')
// )
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Component.js';

const App=()=>{
  return(
    <>
    <Table />
    </> 
  );
};

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);