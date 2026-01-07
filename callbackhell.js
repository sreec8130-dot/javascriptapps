const student_details = () => {
    console.log("student_info");
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4];
        console.log(roll_no);
        setTimeout(() => {
            const data = {
                "sname": "chand",
                "qualification": "btech"
            };
            console.log(`name is ${data.sname}
                qualification is ${data.qualification}
                roll no ${roll_no}`);
        }, 2000, roll_no[1]);
    },2000);
}
student_details();