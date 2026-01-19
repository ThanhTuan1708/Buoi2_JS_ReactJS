import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header';
import Footer from './component/Footer';
import StudentInfo from './component/StudentInfo';

function App() {
  const student = {
    name: 'Nguyễn Thanh Tuấn',
    mssv: '23636711',
    lop: 'DHKTPMATT'
  };

  return (
    <>
      <Header />
      <StudentInfo name={student.name} mssv={student.mssv} lop={student.lop} />
      <Footer />
    </>
  );
}

export default App;
