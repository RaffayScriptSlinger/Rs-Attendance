let attendanceList = [];

function markBtn() {
   let userRollNumber = document.getElementById('rollNumber').value;
   let userName = document.getElementById('Name').value;

   if (userRollNumber && userName) {
      Swal.fire("Congratulations! Your attendance is marked.");



      const studentAttendance = {
         rollNumber: userRollNumber,
         time: new Date().toLocaleString(),
         Name: userName,

      };
      attendanceList.push(studentAttendance);

      // console.log(attendanceList);

      Swal.fire(` ${userName} having a RollNumber ${userRollNumber} attendance marked at ${new Date()}`);
   } else {
      Swal.fire("RollNumber or Name Is Missing!");
   }
   document.getElementById('rollNumber').value = "";
   document.getElementById('Name').value = "";

}

function downloadExcel() {
   const ws = XLSX.utils.json_to_sheet(attendanceList);
   const wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, "Attendance");
   XLSX.writeFile(wb, "attendance.xlsx");
}
