let attendanceList = [];

function markBtn() {
   let userRollNumber = document.getElementById('rollNumber').value;

   if (userRollNumber) {
      Swal.fire("Congratulations! Your attendance is marked.");

     

      const studentAttendance = {
         rollNumber: userRollNumber,
         time: new Date().toLocaleString(),

      };
      attendanceList.push(studentAttendance);

      console.log(attendanceList);

      Swal.fire(`${userRollNumber} attendance marked at ${new Date()}`);
   } else {
      Swal.fire("Kindly fill in your Roll Number");
   }
   document.getElementById('rollNumber').value = "";

}

function downloadExcel() {
    const ws = XLSX.utils.json_to_sheet(attendanceList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance");
    XLSX.writeFile(wb, "attendance.xlsx");
 }
