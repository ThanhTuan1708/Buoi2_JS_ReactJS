// ...existing code...
import React from 'react';

function StudentInfo({ name, mssv, lop }) {
  return (
    <div style={{border: '1px solid #ccc', borderRadius: 8, padding: 24, maxWidth: 400, margin: '32px auto', background: '#fff'}}>
      <h2 style={{textAlign: 'center'}}>Thông tin sinh viên</h2>
      <p><b>Họ tên:</b> {name}</p>
      <p><b>MSSV:</b> {mssv}</p>
      <p><b>Lớp:</b> {lop}</p>
    </div>
  );
}

export default StudentInfo;
// ...existing code...
