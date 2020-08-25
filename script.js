//function adddata() {
//    var sangkud = document.getElementById("sangkud").value;
//    var school = document.getElementById("school").value;
//    var fnameth = document.getElementById("fnameth").value;
//    var lnameth = document.getElementById("lnameth").value;
//    var idstudent = document.getElementById("idstudent").value;

//    var data = {
//        sangkud: sangkud,
//        school: school,
//        fname: fnameth,
//        lname: lnameth,
//        id: idstudent
//    };

//for(var i = 0; i <data.length ; i++) { 
//    document.getElementById("showdata").innerHTML += '<tr><th scope="row">'+ i +' </th><td><li><a href="#" id ="showsangkud"></a></li></td><td><li><a href="#" id ="showschool"></a></li></td><td><li><a href="#" id ="showfnameth"></a></li></td><td><li><a href="#" id ="showlnameth"></a></li></td><td><li><a href="#" id ="showid"></a></li></td></tr>'
//    document.getElementById("showsangkud").value = data.sangkud;
//    document.getElementById("showschool").value = data.school;
//    document.getElementById("showfnameth").value = data.fname;
//    document.getElementById("showlnameth").value = data.lname;
//    document.getElementById("showid").value = data.id;
//}
// }

function getAge() {
    var day = parseInt(document.getElementById("birthday").value);
    var month = parseInt(document.getElementById("birthmonth").value);
    var year = parseInt(document.getElementById("birthyear").value);
    year = year - 543;
    var d = 0;
    var m = 0;
    var y = 0;
    var nowdt = new Date();
    var nd = parseInt(nowdt.getDate());
    var nm = parseInt(nowdt.getMonth());
    var ny = parseInt(nowdt.getFullYear());
    var age = parseInt(document.getElementById("age"));
    var ageYear = 0;
    var ageMonth = 0;
    d = day
    m = month + 1
    y = year
    if (d != "" && m != "" && y != "") {
        s = new Date(y, parseInt(m) - 1, d);
        d = parseInt(s.getDate());
        m = parseInt(s.getMonth());
        y = parseInt(s.getFullYear());
        ageYear = ny - y;
        if (nm > m) {
            ageMonth = nm - m;
        } else if (nm == m) {
            if (nd >= d) {
                ageMonth = 0;
            } else {
                ageMonth = 11;
                ageYear = ageYear - 1;
            }
        } else {
            ageMonth = m - nm;
            ageYear = ageYear - 1;
        }
        document.getElementById("age").value = ageYear + " ปี ";
        document.getElementById("agemonth").value = ageMonth + " เดือน";
    } else {
        age.value = "";
    }
}

function sumfinalnormal() {
    var normal1 = parseInt(document.getElementById("emotionnormal").value);
    var normal2 = parseInt(document.getElementById("conductnormal").value);
    var normal3 = parseInt(document.getElementById("behaviornormal").value);
    var normal4 = parseInt(document.getElementById("relationshipnormal").value);
    document.getElementById("sumnormal").value = normal1 + normal2 + normal3 + normal4;

}

function sumfinalrisky() {
    var risky1 = parseInt(document.getElementById("emotionrisky").value);
    var risky2 = parseInt(document.getElementById("conductrisky").value);
    var risky3 = parseInt(document.getElementById("behaviorrisky").value);
    var risky4 = parseInt(document.getElementById("relationshiprisky").value);
    document.getElementById("sumrisky").value = risky1 + risky2 + risky3 + risky4;

}

function sumfinalproblem() {
    var problem1 = parseInt(document.getElementById("emotionproblem").value);
    var problem2 = parseInt(document.getElementById("conductproblem").value);
    var problem3 = parseInt(document.getElementById("behaviorproblem").value);
    var problem4 = parseInt(document.getElementById("relationshipfriendproblem").value);
    document.getElementById("sumproblem").value = problem1 + problem2 + problem3 + problem4;

}

function calculateBmi() {
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100)
        var meaning = "";
        if (finalBmi < 18.5) {
            meaning = " ผอม"
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            meaning = " สมส่วน"
        }
        if (finalBmi > 25) {
            meaning = " อ้วน"
        }
        document.getElementById("BMI").value = finalBmi + meaning;
    }

}

function callImage() {
    var photovisitout = document.getElementById('photovisitout');
    if (!photovisitout) return;
    photovisitout.onchange = function () {
        var filesout = photovisitout.files[0];
        var readerout = new FileReader();
        readerout.readAsDataURL(filesout);
        readerout.onload = function () {
            var resultout = readerout.result;
            document.getElementById('showImageout').src = resultout;
        };
    };
    var photovisitin = document.getElementById('photovisitin');
    photovisitin.onchange = function () {
        var filesin = photovisitin.files[0];
        var readerin = new FileReader();
        readerin.readAsDataURL(filesin);
        readerin.onload = function () {
            var resultin = readerin.result;
            document.getElementById('showImagein').src = resultin;
        };
    };
}
callImage()



function sec() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function autoTab2(obj, typeCheck) {

    if (typeCheck == 1) {
        var pattern = new String("_-____-_____-_-__");
        var pattern_ex = new String("-");
    } else {
        var pattern = new String("__-____-____");
        var pattern_ex = new String("-");
    }
    var returnText = new String("");
    var obj_l = obj.value.length;
    var obj_l2 = obj_l - 1;
    for (i = 0; i < pattern.length; i++) {
        if (obj_l2 == i && pattern.charAt(i + 1) == pattern_ex) {
            returnText += obj.value + pattern_ex;
            obj.value = returnText;
        }
    }
    if (obj_l >= pattern.length) {
        obj.value = obj.value.substr(0, pattern.length);
    }
}

// function linkaddess(){
//     const Dataaddess = document.getElementById("addess").value
//     const Datamooban = document.getElementById("mooban").value
//     const Datamootee = document.getElementById("mootee").value
//     const Datadistric = document.getElementById("distric").value
//     const Datacity = document.getElementById("city").value
//     const Dataprovince = document.getElementById("province").value
//     const Datazipcode = document.getElementById("zipcode").value
// // สร้าง checkbox  1 ใน  html
// // รับมาเป็น boolen (true,false)
// // สร้างเงื่อนไข if () ถ้าเป็น true ลิ้ง data addess  ถ้า false ให้เคลียร์ช่อง input


//     const Datanewaddess = document.getElementById("newaddess").value
//     const Datanewmooban = document.getElementById("newmooban").value
//     const Datanewmootee = document.getElementById("newmootee").value
//     const Datanewdistric = document.getElementById("newdistric").value
//     const Datanewcity = document.getElementById("newcity").value
//     const Datanewprovince = document.getElementById("newprovince").value
//     const Datanewzipcode = document.getElementById("newzipcode").value
// }


function loadfirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyBq3vfRH6O7Kq3avBGZ5SbV2zLXhHvmDlU",
        authDomain: "visit-home.firebaseapp.com",
        databaseURL: "https://visit-home.firebaseio.com",
        projectId: "visit-home",
        storageBucket: "visit-home.appspot.com",
        messagingSenderId: "867176235471",
        appId: "1:867176235471:web:b80ae041f4621b1c3552ba",
        measurementId: "G-F9SZNZ7BFR"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    loadData()
}

async function addNew() {
    //    let listData = await getData('datastudent')
    //    const sendData = listData[id]
    const db = firebase.firestore();
    const Datafnameth = document.getElementById("fnameth").value
    const Datalnameth = document.getElementById("lnameth").value
    const Dataidstudent = document.getElementById("idstudent").value
    const Datasangkud = document.getElementById("sangkud").value
    const Dataschool = document.getElementById("school").value

    const Dataterm = document.getElementById("term").value
    const Dataschoolyear = document.getElementById("schoolyear").value
    const Datanametitle = document.getElementById("nametitle").value
    const Datafnameen = document.getElementById("fnameen").value
    const Datalnameen = document.getElementById("lnameen").value
    const Datanickname = document.getElementById("nickname").value
    const Datasex = document.getElementById("sex").value
    const Dataclassroom = document.getElementById("classroom").value
    const Dataroom = document.getElementById("room").value
    const Datanumberinroom = document.getElementById("numberinroom").value
    const Dataidschool = document.getElementById("idschool").value
    const Databirthday = document.getElementById("birthday").value
    const Databirthmonth = document.getElementById("birthmonth").value
    const Databirthyear = document.getElementById("birthyear").value
    const Dataage = document.getElementById("age").value
    const Dataagemonth = document.getElementById("agemonth").value
    const Databloodtype = document.getElementById("bloodtype").value
    const Dataweight = document.getElementById("weight").value
    const Dataheight = document.getElementById("height").value
    const DataBMI = document.getElementById("BMI").value
    const Datarace = document.getElementById("race").value
    const Datanationality = document.getElementById("nationality").value
    const Datareligion = document.getElementById("religion").value
    const Datadisadvantages = document.getElementById("disadvantages").value
    const Datadisabilitytype = document.getElementById("disabilitytype").value
    const Datasick = document.getElementById("sick").value
    const Dataeducationlevel = document.getElementById("educationlevel").value
    const Dataoldschool = document.getElementById("oldschool").value
    const Datacityoldschool = document.getElementById("cityoldschool").value
    const Dataprovinceoldschool = document.getElementById("provinceoldschool").value
    const Datasangkudoldschool = document.getElementById("sangkudoldschool").value
    const DataGPAoldschool = document.getElementById("GPAoldschool").value
    const Datatel = document.getElementById("tel").value
    const Dataline = document.getElementById("line").value
    const Datafacebook = document.getElementById("facebook").value
    const Dataaddess = document.getElementById("addess").value
    const Datamooban = document.getElementById("mooban").value
    const Datamootee = document.getElementById("mootee").value
    const Datadistric = document.getElementById("distric").value
    const Datacity = document.getElementById("city").value
    const Dataprovince = document.getElementById("province").value
    const Datazipcode = document.getElementById("zipcode").value
    const Datanewaddess = document.getElementById("newaddess").value
    const Datanewmooban = document.getElementById("newmooban").value
    const Datanewmootee = document.getElementById("newmootee").value
    const Datanewdistric = document.getElementById("newdistric").value
    const Datanewcity = document.getElementById("newcity").value
    const Datanewprovince = document.getElementById("newprovince").value
    const Datanewzipcode = document.getElementById("newzipcode").value
    const Datafriendnamein1 = document.getElementById("friendnamein1").value
    const Datafriendnicknamein1 = document.getElementById("friendnicknamein1").value
    const Datafriendschoolin1 = document.getElementById("friendschoolin1").value
    const Datafriendtelin1 = document.getElementById("friendtelin1").value
    const Datafriendnamein2 = document.getElementById("friendnamein2").value
    const Datafriendnicknamein2 = document.getElementById("friendnicknamein2").value
    const Datafriendschoolin2 = document.getElementById("friendschoolin2").value
    const Datafriendtelin2 = document.getElementById("friendtelin2").value
    const Datafriendnameout1 = document.getElementById("friendnameout1").value
    const Datafriendnicknameout1 = document.getElementById("friendnicknameout1").value
    const Datafriendschoolout1 = document.getElementById("friendschoolout1").value
    const Datafriendtelout1 = document.getElementById("friendtelout1").value
    const Datafriendnameout2 = document.getElementById("friendnameout2").value
    const Datafriendnicknameout2 = document.getElementById("friendnicknameout2").value
    const Datafriendschoolout2 = document.getElementById("friendschoolout2").value
    const Datafriendtelout2 = document.getElementById("friendtelout2").value

    var warnings = "";
    if (Datafnameth.length < 2) {
        warnings += 'You need a valid  <br/>';
    }
    if (Dataschool.length < 2) {
        warnings += 'You need a valid  <br/>';
    }
    if (Datalnameth.length < 2) {
        warnings += 'You need a valid  <br/>';
    }
    if (Datasangkud.length < 2) {
        warnings += 'You need a valid  <br/>';
    }
    if (Dataidstudent.length < 2) {
        warnings += 'You need a valid  <br/>';
    }


    // ทำเช็คเพิ่มที่

    Object.keys(someobject).keys(keyName=> {
        let aa = document.getElementById(keyName)
        
        if(!aa) return;

        aa.value = someobject[keyName]
    })
    

    if (warnings != "") {
        console.log(warnings);
        errors.style.display = 'block';
        errors.innerHTML = warnings;
    } else {
       await db.collection('datastudent').add({
            fnameth: Datafnameth,
            lnameth: Datalnameth,
            idstudent: Dataidstudent,
            sangkud: Datasangkud,
            school: Dataschool,
            term: Dataterm,
            schoolyear: Dataschoolyear,
            nametitle: Datanametitle,
            fnameen: Datafnameen,
            lnameen: Datalnameen,
            nickname: Datanickname,
            sex: Datasex,
            classroom: Dataclassroom,
            room: Dataroom,
            numberinroom: Datanumberinroom,
            idschool: Dataidschool,
            birthday: Databirthday,
            birthmouth: Databirthmonth,
            birthyear: Databirthyear,
            age: Dataage,
            agemonth: Dataagemonth,
            bloodtype: Databloodtype,
            weight: Dataweight,
            height: Dataheight,
            BMI: DataBMI,
            race: Datarace,
            nationality: Datanationality,
            religion: Datareligion,
            disadvantages: Datadisadvantages,
            disabilitytype: Datadisabilitytype,
            sick: Datasick,
            educationlevel: Dataeducationlevel,
            oldschool: Dataoldschool,
            cityoldschool: Datacityoldschool,
            provinceoldschool: Dataprovinceoldschool,
            sangkudoldschool: Datasangkudoldschool,
            GPAoldschool: DataGPAoldschool,
            tel: Datatel,
            line: Dataline,
            facebook: Datafacebook,
            addess: Dataaddess,
            mooban: Datamooban,
            mootee: Datamootee,
            distric: Datadistric,
            city: Datacity,
            province: Dataprovince,
            zipcode: Datazipcode,
            newaddess: Datanewaddess,
            newmooban: Datanewmooban,
            newmootee: Datanewmootee,
            newdistric: Datanewdistric,
            newcity: Datanewcity,
            newprovince: Datanewprovince,
            newzipcode: Datanewzipcode,
            friendnamein1: Datafriendnamein1,
            friendnicknamein1: Datafriendnicknamein1,
            friendschoolin1: Datafriendschoolin1,
            friendtelin1: Datafriendtelin1,
            friendnamein2: Datafriendnamein2,
            friendnicknamein2: Datafriendnicknamein2,
            friendschoolin2: Datafriendschoolin2,
            friendtelin2: Datafriendtelin2,
            friendnameout1: Datafriendnameout1,
            friendnicknameout1: Datafriendnicknameout1,
            friendschoolout1: Datafriendschoolout1,
            friendtelout1: Datafriendtelout1,
            friendnameout2: Datafriendnameout2,
            friendnicknameout2: Datafriendnicknameout2,
            friendschoolout2: Datafriendschoolout2,
            friendtelout2: Datafriendtelout2,
        });
    }
    
}

async function updatedata(id) {
  
        let listData = await getData('datastudent')
        console.log('listData', listData)
        const sendData = listData[id]
        var dataoldfnameth = sendData.fnameth;
        var dataoldlnameth = sendData.lnameth;
        var dataoldidstudent = sendData.idstudent;
        var dataoldsangkud = sendData.sangkud;
        var dataoldschool = sendData.school;
         window.location = "form1.html";
         document.getElementById('fnameth').value = dataoldfnameth;
         document.getElementById('lnameth').value = dataoldlnameth;
         document.getElementById('idstudent').value = dataoldidstudent;
         document.getElementById('sangkud').value = dataoldsangkud;
         document.getElementById('school').value = dataoldschool;
         
        const db = firebase.firestore();
        // db.collection('datastudent').doc(id).delete();
          await db.collection('datastudent').add({
                 fnameth:sendData.fnameth,
                  lnameth:sendData.lnameth,
                 idstudent:sendData.idstudent,
                 sangkud:sendData.sangkud,
                 school:sendData.school
        });
         

         reloadData()
     

        //  const db = firebase.firestore();
        //  const Datafnameth = document.getElementById("fnameth").value
        //  const Datalnameth = document.getElementById("lnameth").value
        //  const Dataidstudent = document.getElementById("idstudent").value
        //  const Datasangkud = document.getElementById("sangkud").value
        //  const Dataschool = document.getElementById("school").value
     
        //  const Dataterm = document.getElementById("term").value
        //  const Dataschoolyear = document.getElementById("schoolyear").value
        //  const Datanametitle = document.getElementById("nametitle").value
        //  const Datafnameen = document.getElementById("fnameen").value
        //  const Datalnameen = document.getElementById("lnameen").value
        //  const Datanickname = document.getElementById("nickname").value
        //  const Datasex = document.getElementById("sex").value
        //  const Dataclassroom = document.getElementById("classroom").value
        //  const Dataroom = document.getElementById("room").value
        //  const Datanumberinroom = document.getElementById("numberinroom").value
        //  const Dataidschool = document.getElementById("idschool").value
        //  const Databirthday = document.getElementById("birthday").value
        //  const Databirthmonth = document.getElementById("birthmonth").value
        //  const Databirthyear = document.getElementById("birthyear").value
        //  const Dataage = document.getElementById("age").value
        //  const Dataagemonth = document.getElementById("agemonth").value
        //  const Databloodtype = document.getElementById("bloodtype").value
        //  const Dataweight = document.getElementById("weight").value
        //  const Dataheight = document.getElementById("height").value
        //  const DataBMI = document.getElementById("BMI").value
        //  const Datarace = document.getElementById("race").value
        //  const Datanationality = document.getElementById("nationality").value
        //  const Datareligion = document.getElementById("religion").value
        //  const Datadisadvantages = document.getElementById("disadvantages").value
        //  const Datadisabilitytype = document.getElementById("disabilitytype").value
        //  const Datasick = document.getElementById("sick").value
        //  const Dataeducationlevel = document.getElementById("educationlevel").value
        //  const Dataoldschool = document.getElementById("oldschool").value
        //  const Datacityoldschool = document.getElementById("cityoldschool").value
        //  const Dataprovinceoldschool = document.getElementById("provinceoldschool").value
        //  const Datasangkudoldschool = document.getElementById("sangkudoldschool").value
        //  const DataGPAoldschool = document.getElementById("GPAoldschool").value
        //  const Datatel = document.getElementById("tel").value
        //  const Dataline = document.getElementById("line").value
        //  const Datafacebook = document.getElementById("facebook").value
        //  const Dataaddess = document.getElementById("addess").value
        //  const Datamooban = document.getElementById("mooban").value
        //  const Datamootee = document.getElementById("mootee").value
        //  const Datadistric = document.getElementById("distric").value
        //  const Datacity = document.getElementById("city").value
        //  const Dataprovince = document.getElementById("province").value
        //  const Datazipcode = document.getElementById("zipcode").value
        //  const Datanewaddess = document.getElementById("newaddess").value
        //  const Datanewmooban = document.getElementById("newmooban").value
        //  const Datanewmootee = document.getElementById("newmootee").value
        //  const Datanewdistric = document.getElementById("newdistric").value
        //  const Datanewcity = document.getElementById("newcity").value
        //  const Datanewprovince = document.getElementById("newprovince").value
        //  const Datanewzipcode = document.getElementById("newzipcode").value
        //  const Datafriendnamein1 = document.getElementById("friendnamein1").value
        //  const Datafriendnicknamein1 = document.getElementById("friendnicknamein1").value
        //  const Datafriendschoolin1 = document.getElementById("friendschoolin1").value
        //  const Datafriendtelin1 = document.getElementById("friendtelin1").value
        //  const Datafriendnamein2 = document.getElementById("friendnamein2").value
        //  const Datafriendnicknamein2 = document.getElementById("friendnicknamein2").value
        //  const Datafriendschoolin2 = document.getElementById("friendschoolin2").value
        //  const Datafriendtelin2 = document.getElementById("friendtelin2").value
        //  const Datafriendnameout1 = document.getElementById("friendnameout1").value
        //  const Datafriendnicknameout1 = document.getElementById("friendnicknameout1").value
        //  const Datafriendschoolout1 = document.getElementById("friendschoolout1").value
        //  const Datafriendtelout1 = document.getElementById("friendtelout1").value
        //  const Datafriendnameout2 = document.getElementById("friendnameout2").value
        //  const Datafriendnicknameout2 = document.getElementById("friendnicknameout2").value
        //  const Datafriendschoolout2 = document.getElementById("friendschoolout2").value
        //  const Datafriendtelout2 = document.getElementById("friendtelout2").value
     
        //  var warnings = "";
        //  if (Datafnameth.length < 2) {
        //      warnings += 'You need a valid  <br/>';
        //  }
        //  if (Dataschool.length < 2) {
        //      warnings += 'You need a valid  <br/>';
        //  }
        //  if (Datalnameth.length < 2) {
        //      warnings += 'You need a valid  <br/>';
        //  }
        //  if (Datasangkud.length < 2) {
        //      warnings += 'You need a valid  <br/>';
        //  }
        //  if (Dataidstudent.length < 2) {
        //      warnings += 'You need a valid  <br/>';
        //  }
     
     
        //  // ทำเช็คเพิ่มที่
         
     
        //  if (warnings != "") {
        //      console.log(warnings);
        //      errors.style.display = 'block';
        //      errors.innerHTML = warnings;
        //  } else {
        //     await db.collection('datastudent').doc(id).update({
        //          fnameth: Datafnameth,
        //          lnameth: Datalnameth,
        //          idstudent: Dataidstudent,
        //          sangkud: Datasangkud,
        //          school: Dataschool,
        //          term: Dataterm,
        //          schoolyear: Dataschoolyear,
        //          nametitle: Datanametitle,
        //          fnameen: Datafnameen,
        //          lnameen: Datalnameen,
        //          nickname: Datanickname,
        //          sex: Datasex,
        //          classroom: Dataclassroom,
        //          room: Dataroom,
        //          numberinroom: Datanumberinroom,
        //          idschool: Dataidschool,
        //          birthday: Databirthday,
        //          birthmouth: Databirthmonth,
        //          birthyear: Databirthyear,
        //          age: Dataage,
        //          agemonth: Dataagemonth,
        //          bloodtype: Databloodtype,
        //          weight: Dataweight,
        //          height: Dataheight,
        //          BMI: DataBMI,
        //          race: Datarace,
        //          nationality: Datanationality,
        //          religion: Datareligion,
        //          disadvantages: Datadisadvantages,
        //          disabilitytype: Datadisabilitytype,
        //          sick: Datasick,
        //          educationlevel: Dataeducationlevel,
        //          oldschool: Dataoldschool,
        //          cityoldschool: Datacityoldschool,
        //          provinceoldschool: Dataprovinceoldschool,
        //          sangkudoldschool: Datasangkudoldschool,
        //          GPAoldschool: DataGPAoldschool,
        //          tel: Datatel,
        //          line: Dataline,
        //          facebook: Datafacebook,
        //          addess: Dataaddess,
        //          mooban: Datamooban,
        //          mootee: Datamootee,
        //          distric: Datadistric,
        //          city: Datacity,
        //          province: Dataprovince,
        //          zipcode: Datazipcode,
        //          newaddess: Datanewaddess,
        //          newmooban: Datanewmooban,
        //          newmootee: Datanewmootee,
        //          newdistric: Datanewdistric,
        //          newcity: Datanewcity,
        //          newprovince: Datanewprovince,
        //          newzipcode: Datanewzipcode,
        //          friendnamein1: Datafriendnamein1,
        //          friendnicknamein1: Datafriendnicknamein1,
        //          friendschoolin1: Datafriendschoolin1,
        //          friendtelin1: Datafriendtelin1,
        //          friendnamein2: Datafriendnamein2,
        //          friendnicknamein2: Datafriendnicknamein2,
        //          friendschoolin2: Datafriendschoolin2,
        //          friendtelin2: Datafriendtelin2,
        //          friendnameout1: Datafriendnameout1,
        //          friendnicknameout1: Datafriendnicknameout1,
        //          friendschoolout1: Datafriendschoolout1,
        //          friendtelout1: Datafriendtelout1,
        //          friendnameout2: Datafriendnameout2,
        //          friendnicknameout2: Datafriendnicknameout2,
        //          friendschoolout2: Datafriendschoolout2,
        //          friendtelout2: Datafriendtelout2,
        //      });
        //  }           
         
}
async function deleteData(id) {

    const db = firebase.firestore();
    // console.log("id",id);
    db.collection('datastudent').doc(id).delete();
    //window.location.reload();
    reloadData()
}


async function reloadData() {

    let listData = await getData('datastudent')
    console.log('listData', listData)


    var dataSet = []

    listData.forEach((val, idx) => {
        dataSet.push([
            val.sangkud,
            val.school,
            val.fnameth,
            val.lnameth,
            val.idstudent,
            `<div>
        <Button class="btn btn-danger" onclick="deleteData('${val.id}')" >ลบข้อมูล</Button>
        <Button class="btn btn-info" onclick="updatedata(${idx})" >อัพเดทข้อมูล</Button>
        </div>`
        ])

    })

    $(document).ready(function () {
        let dataTable = $('#table').DataTable();
        dataTable.clear()
        dataTable.rows.add(dataSet)
        dataTable.draw()
    });

}

async function loadData() {

    let listData = await getData('datastudent')
    console.log('listData', listData)


    var dataSet = []

    listData.forEach((val, idx) => {
        dataSet.push([
            val.sangkud,
            val.school,
            val.fnameth,
            val.lnameth,
            val.idstudent,
            `<div>
        <Button class="btn btn-danger" onclick="deleteData('${val.id}')" >ลบข้อมูล</Button>
        <Button class="btn btn-info" onclick="updatedata(${idx})" >อัพเดทข้อมูล</Button>
        </div>`
        ])

    })

    $(document).ready(function () {
        $('#table').DataTable({
            data: dataSet,
            columns: [
                { title: "สังกัด" },
                { title: "โรงเรียน" },
                { title: "ชื่อ" },
                { title: "ชื่อสกุล" },
                { title: "เลขประจำตัวประชาชน" },
                { title: "การดำเนินการ" },
            ]
        });
    });

}

async function getData(collection) {
    const db = firebase.firestore();
    let listData = []
    await db.collection(collection).get().then((snapshot) => {
        snapshot.forEach(doc => {
            listData.push({ id: doc.id, ...doc.data() })
        })
    })
    return listData
}


loadfirebase()
