<template>
    <div class="container">
        <div style="margin-top:50px;">
            <h1 class="center" style="color:#039be5;">Quiz</h1>
            <div class="row">
                <div class="col s12 m12 l12 center">
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'unit1Mp1',
    data(){
        return{
            userTable: null,
            Email: null,
            P1AllSecond: null,
            P2AllSecond: null,
        }
    },
    created(){
        let self = this
        var getOptions = {
                source: 'server'
              };
        
        this.checkUser()
    },
    methods:{

        GetEmail:function(userTable){
            let self = this
            let createTeacher1 = {
                birthDate: 2,
                birthMonth: 7,
                birthYear: 2019,
                birthday: '2/7/2019',
                email: 'tww001@hotmail.com',
                firstname: 'teacher1',
                gender: "Male",
                lastname: 'ttttt',
                level: 'มัธยมศึกษาปีที่ 1',
                password: "tww001",
                pretest: false,
                userType: "users",
                user_id: 'xxxxxxx',
            }
            db.collection('users').doc('tww001@hotmail.com').set(createTeacher1)
            firebase.auth().createUserWithEmailAndPassword('tww001@hotmail.com','tww001');
            let createTeacher2 = {
                birthDate: 2,
                birthMonth: 7,
                birthYear: 2019,
                birthday: '2/7/2019',
                email: 'tww002@hotmail.com',
                firstname: 'teacher1',
                gender: "Male",
                lastname: 'ttttt',
                level: 'มัธยมศึกษาปีที่ 1',
                password: "tww002",
                pretest: false,
                userType: "users",
                user_id: 'xxxxxxx',
            }
            db.collection('users').doc('tww002@hotmail.com').set(createTeacher2);
            firebase.auth().createUserWithEmailAndPassword('tww002@hotmail.com','tww002');
            let createTeacher3 = {
                birthDate: 2,
                birthMonth: 7,
                birthYear: 2019,
                birthday: '2/7/2019',
                email: 'tww003@hotmail.com',
                firstname: 'teacher1',
                gender: "Male",
                lastname: 'ttttt',
                level: 'มัธยมศึกษาปีที่ 1',
                password: "tww003",
                pretest: false,
                userType: "users",
                user_id: 'xxxxxxx',
            }
            db.collection('users').doc('tww003@hotmail.com').set(createTeacher3);
            firebase.auth().createUserWithEmailAndPassword('tww003@hotmail.com','tww003');
            let createTeacher4 = {
                birthDate: 2,
                birthMonth: 7,
                birthYear: 2019,
                birthday: '2/7/2019',
                email: 'tww004@hotmail.com',
                firstname: 'teacher1',
                gender: "Male",
                lastname: 'ttttt',
                level: 'มัธยมศึกษาปีที่ 1',
                password: "tww004",
                pretest: false,
                userType: "users",
                user_id: 'xxxxxxx',
            }
            db.collection('users').doc('tww004@hotmail.com').set(createTeacher4);
            firebase.auth().createUserWithEmailAndPassword('tww004@hotmail.com','tww004');
            let createTeacher5 = {
                birthDate: 2,
                birthMonth: 7,
                birthYear: 2019,
                birthday: '2/7/2019',
                email: 'tww005@hotmail.com',
                firstname: 'teacher1',
                gender: "Male",
                lastname: 'ttttt',
                level: 'มัธยมศึกษาปีที่ 1',
                password: "tww005",
                pretest: false,
                userType: "users",
                user_id: 'xxxxxxx',
            }
            db.collection('users').doc('tww005@hotmail.com').set(createTeacher5);
            firebase.auth().createUserWithEmailAndPassword('tww005@hotmail.com','tww005');

                let createStudent1 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www101@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www101",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www101@hotmail.com').set(createStudent1);
    firebase.auth().createUserWithEmailAndPassword('www101@hotmail.com','www101');

    let createStudent2 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www102@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www102@hotmail.com').set(createStudent2);
    firebase.auth().createUserWithEmailAndPassword('www102@hotmail.com','www102');

    let createStudent3 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www103@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www103@hotmail.com').set(createStudent3);
    firebase.auth().createUserWithEmailAndPassword('www103@hotmail.com','www103');

    let createStudent4 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www104@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www104@hotmail.com').set(createStudent4);
    firebase.auth().createUserWithEmailAndPassword('www104@hotmail.com','www104');

    let createStudent5 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www105@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www105@hotmail.com').set(createStudent5);
    firebase.auth().createUserWithEmailAndPassword('www105@hotmail.com','www105');

    let createStudent6 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www106@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www106@hotmail.com').set(createStudent6);
    firebase.auth().createUserWithEmailAndPassword('www106@hotmail.com','www106');

    let createStudent7 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www107@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www107@hotmail.com').set(createStudent7);
    firebase.auth().createUserWithEmailAndPassword('www107@hotmail.com','www107');

    let createStudent8 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www108@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www108@hotmail.com').set(createStudent8);
    firebase.auth().createUserWithEmailAndPassword('www108@hotmail.com','www108');

    let createStudent9 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www109@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www109@hotmail.com').set(createStudent9);
    firebase.auth().createUserWithEmailAndPassword('www109@hotmail.com','www109');

    let createStudent10 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www110@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www110@hotmail.com').set(createStudent10);
    firebase.auth().createUserWithEmailAndPassword('www110@hotmail.com','www110');

    let createStudent11 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www111@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www111@hotmail.com').set(createStudent11);
    firebase.auth().createUserWithEmailAndPassword('www111@hotmail.com','www111');

    let createStudent12 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www112@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www112@hotmail.com').set(createStudent12);
    firebase.auth().createUserWithEmailAndPassword('www112@hotmail.com','www112');

    let createStudent13 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www113@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www113@hotmail.com').set(createStudent13);
    firebase.auth().createUserWithEmailAndPassword('www113@hotmail.com','www113');

    let createStudent14 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www114@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www114@hotmail.com').set(createStudent14);
    firebase.auth().createUserWithEmailAndPassword('www114@hotmail.com','www114');

    let createStudent15 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www115@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www115@hotmail.com').set(createStudent15);
    firebase.auth().createUserWithEmailAndPassword('www115@hotmail.com','www115');

    let createStudent16 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www116@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www116@hotmail.com').set(createStudent16);
    firebase.auth().createUserWithEmailAndPassword('www116@hotmail.com','www116');

    let createStudent17 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www117@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www117@hotmail.com').set(createStudent17);
    firebase.auth().createUserWithEmailAndPassword('www117@hotmail.com','www117');

    let createStudent18 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www118@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www118@hotmail.com').set(createStudent18);
    firebase.auth().createUserWithEmailAndPassword('www118@hotmail.com','www118');

    let createStudent19 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www119@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www119@hotmail.com').set(createStudent19);
    firebase.auth().createUserWithEmailAndPassword('www119@hotmail.com','www119');

    let createStudent20 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www120@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www120@hotmail.com').set(createStudent20);
    firebase.auth().createUserWithEmailAndPassword('www120@hotmail.com','www120');

    let createStudent21 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www121@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www121@hotmail.com').set(createStudent21);
    firebase.auth().createUserWithEmailAndPassword('www121@hotmail.com','www121');

    let createStudent22 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www122@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www122@hotmail.com').set(createStudent22);
    firebase.auth().createUserWithEmailAndPassword('www122@hotmail.com','www122');

    let createStudent23 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www123@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www123@hotmail.com').set(createStudent23);
    firebase.auth().createUserWithEmailAndPassword('www123@hotmail.com','www123');

    let createStudent24 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www124@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www124@hotmail.com').set(createStudent24);
    firebase.auth().createUserWithEmailAndPassword('www124@hotmail.com','www124');

    let createStudent25 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www125@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www125@hotmail.com').set(createStudent25);
    firebase.auth().createUserWithEmailAndPassword('www125@hotmail.com','www125');

    let createStudent26 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www126@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www126@hotmail.com').set(createStudent26);
    firebase.auth().createUserWithEmailAndPassword('www126@hotmail.com','www126');

    let createStudent27 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www127@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www127@hotmail.com').set(createStudent27);
    firebase.auth().createUserWithEmailAndPassword('www127@hotmail.com','www127');

    let createStudent28 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www128@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www128@hotmail.com').set(createStudent28);
    firebase.auth().createUserWithEmailAndPassword('www128@hotmail.com','www128');

    let createStudent29 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www129@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www129@hotmail.com').set(createStudent29);
    firebase.auth().createUserWithEmailAndPassword('www129@hotmail.com','www129');

    let createStudent30 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www130@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www130@hotmail.com').set(createStudent30);
    firebase.auth().createUserWithEmailAndPassword('www130@hotmail.com','www130');

    let createStudent31 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www131@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www131@hotmail.com').set(createStudent31);
    firebase.auth().createUserWithEmailAndPassword('www131@hotmail.com','www131');

    let createStudent32 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www132@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www132@hotmail.com').set(createStudent32);
    firebase.auth().createUserWithEmailAndPassword('www132@hotmail.com','www132');

    let createStudent33 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www133@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www133@hotmail.com').set(createStudent33);
    firebase.auth().createUserWithEmailAndPassword('www133@hotmail.com','www133');

    let createStudent34 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www134@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www134@hotmail.com').set(createStudent34);
    firebase.auth().createUserWithEmailAndPassword('www134@hotmail.com','www134');

    let createStudent35 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www135@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www135@hotmail.com').set(createStudent35);
    firebase.auth().createUserWithEmailAndPassword('www135@hotmail.com','www135');

    let createStudent36 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www136@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www136@hotmail.com').set(createStudent36);
    firebase.auth().createUserWithEmailAndPassword('www136@hotmail.com','www136');

    let createStudent37 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www137@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www137@hotmail.com').set(createStudent37);
    firebase.auth().createUserWithEmailAndPassword('www137@hotmail.com','www137');

    let createStudent38 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www138@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www138@hotmail.com').set(createStudent38);
    firebase.auth().createUserWithEmailAndPassword('www138@hotmail.com','www138');

    let createStudent39 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www139@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www139@hotmail.com').set(createStudent39);
    firebase.auth().createUserWithEmailAndPassword('www139@hotmail.com','www139');

    let createStudent40 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www140@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Male",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www102",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www140@hotmail.com').set(createStudent40);
    firebase.auth().createUserWithEmailAndPassword('www140@hotmail.com','www140');

        let createStudent41 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www201@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www201",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www201@hotmail.com').set(createStudent41);
    firebase.auth().createUserWithEmailAndPassword('www201@hotmail.com','www201');

    let createStudent42 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www202@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www202@hotmail.com').set(createStudent42);
    firebase.auth().createUserWithEmailAndPassword('www202@hotmail.com','www202');

    let createStudent43 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www203@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www203@hotmail.com').set(createStudent43);
    firebase.auth().createUserWithEmailAndPassword('www203@hotmail.com','www203');

    let createStudent44 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www204@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www204@hotmail.com').set(createStudent44);
    firebase.auth().createUserWithEmailAndPassword('www204@hotmail.com','www204');

    let createStudent45 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www205@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www205@hotmail.com').set(createStudent45);
    firebase.auth().createUserWithEmailAndPassword('www205@hotmail.com','www205');

    let createStudent46 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www206@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www206@hotmail.com').set(createStudent46);
    firebase.auth().createUserWithEmailAndPassword('www206@hotmail.com','www206');

    let createStudent47 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www207@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www207@hotmail.com').set(createStudent47);
    firebase.auth().createUserWithEmailAndPassword('www207@hotmail.com','www207');

    let createStudent48 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www208@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www208@hotmail.com').set(createStudent48);
    firebase.auth().createUserWithEmailAndPassword('www208@hotmail.com','www208');

    let createStudent49 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www209@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www209@hotmail.com').set(createStudent49);
    firebase.auth().createUserWithEmailAndPassword('www209@hotmail.com','www209');

    let createStudent50 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www210@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www210@hotmail.com').set(createStudent50);
    firebase.auth().createUserWithEmailAndPassword('www210@hotmail.com','www210');

    let createStudent51 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www211@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www211@hotmail.com').set(createStudent51);
    firebase.auth().createUserWithEmailAndPassword('www211@hotmail.com','www211');

    let createStudent52 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www212@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www212@hotmail.com').set(createStudent52);
    firebase.auth().createUserWithEmailAndPassword('www212@hotmail.com','www212');

    let createStudent53 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www213@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www213@hotmail.com').set(createStudent53);
    firebase.auth().createUserWithEmailAndPassword('www213@hotmail.com','www213');

    let createStudent54 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www214@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www214@hotmail.com').set(createStudent54);
    firebase.auth().createUserWithEmailAndPassword('www214@hotmail.com','www214');

    let createStudent55 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www215@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www215@hotmail.com').set(createStudent55);
    firebase.auth().createUserWithEmailAndPassword('www215@hotmail.com','www215');

    let createStudent56 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www216@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www216@hotmail.com').set(createStudent56);
    firebase.auth().createUserWithEmailAndPassword('www216@hotmail.com','www216');

    let createStudent57 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www217@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www217@hotmail.com').set(createStudent57);
    firebase.auth().createUserWithEmailAndPassword('www217@hotmail.com','www217');

    let createStudent58 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www218@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www218@hotmail.com').set(createStudent58);
    firebase.auth().createUserWithEmailAndPassword('www218@hotmail.com','www218');

    let createStudent59 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www219@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www219@hotmail.com').set(createStudent59);
    firebase.auth().createUserWithEmailAndPassword('www219@hotmail.com','www219');

    let createStudent60 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www220@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www220@hotmail.com').set(createStudent60);
    firebase.auth().createUserWithEmailAndPassword('www220@hotmail.com','www220');

    let createStudent61 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www221@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www221@hotmail.com').set(createStudent61);
    firebase.auth().createUserWithEmailAndPassword('www221@hotmail.com','www221');

    let createStudent62 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www222@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www222@hotmail.com').set(createStudent62);
    firebase.auth().createUserWithEmailAndPassword('www222@hotmail.com','www222');

    let createStudent63 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www223@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www223@hotmail.com').set(createStudent63);
    firebase.auth().createUserWithEmailAndPassword('www223@hotmail.com','www223');

    let createStudent64 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www224@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www224@hotmail.com').set(createStudent64);
    firebase.auth().createUserWithEmailAndPassword('www224@hotmail.com','www224');

    let createStudent65 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www225@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www225@hotmail.com').set(createStudent65);
    firebase.auth().createUserWithEmailAndPassword('www225@hotmail.com','www225');

    let createStudent66 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www226@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www226@hotmail.com').set(createStudent66);
    firebase.auth().createUserWithEmailAndPassword('www226@hotmail.com','www226');

    let createStudent67 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www227@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www227@hotmail.com').set(createStudent67);
    firebase.auth().createUserWithEmailAndPassword('www227@hotmail.com','www227');

    let createStudent68 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www228@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www228@hotmail.com').set(createStudent68);
    firebase.auth().createUserWithEmailAndPassword('www228@hotmail.com','www228');

    let createStudent69 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www229@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www229@hotmail.com').set(createStudent69);
    firebase.auth().createUserWithEmailAndPassword('www229@hotmail.com','www229');

    let createStudent70 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www230@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www230@hotmail.com').set(createStudent70);
    firebase.auth().createUserWithEmailAndPassword('www230@hotmail.com','www230');

    let createStudent71 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www231@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www231@hotmail.com').set(createStudent71);
    firebase.auth().createUserWithEmailAndPassword('www231@hotmail.com','www231');

    let createStudent72 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www232@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www232@hotmail.com').set(createStudent72);
    firebase.auth().createUserWithEmailAndPassword('www232@hotmail.com','www232');

    let createStudent73 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www233@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www233@hotmail.com').set(createStudent73);
    firebase.auth().createUserWithEmailAndPassword('www233@hotmail.com','www233');

    let createStudent74 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www234@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www234@hotmail.com').set(createStudent74);
    firebase.auth().createUserWithEmailAndPassword('www234@hotmail.com','www234');

    let createStudent75 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www235@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www235@hotmail.com').set(createStudent75);
    firebase.auth().createUserWithEmailAndPassword('www235@hotmail.com','www235');

    let createStudent76 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www236@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www236@hotmail.com').set(createStudent76);
    firebase.auth().createUserWithEmailAndPassword('www236@hotmail.com','www236');

    let createStudent77 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www237@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www237@hotmail.com').set(createStudent77);
    firebase.auth().createUserWithEmailAndPassword('www237@hotmail.com','www237');

    let createStudent78 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www238@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www238@hotmail.com').set(createStudent78);
    firebase.auth().createUserWithEmailAndPassword('www238@hotmail.com','www238');

    let createStudent79 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www239@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www239@hotmail.com').set(createStudent79);
    firebase.auth().createUserWithEmailAndPassword('www239@hotmail.com','www239');

    let createStudent80 = {
                    birthDate: 2,
                    birthMonth: 7,
                    birthYear: 2019,
                    birthday: '2/7/2019',
                    email: 'www240@hotmail.com',
                    firstname: 'teacher1',
                    gender: "Female",
                    lastname: 'ttttt',
                    level: 'มัธยมศึกษาปีที่ 1',
                    password: "www202",
                    pretest: false,
                    userType: "users",
                    user_id: 'xxxxxxx',
                }
    db.collection('users').doc('www240@hotmail.com').set(createStudent80);
    firebase.auth().createUserWithEmailAndPassword('www240@hotmail.com','www240');
        },


 // ********* check user id
        checkUser:function(){
            let self = this
        let users= db.collection("users").orderBy("email")
        .limit(25);
        let Gusers = db.collection("Gusers").orderBy("Email")
              .limit(25);

          firebase.auth().onAuthStateChanged((user)=>{
          if(user){
          db.collection("users").where("email","==",user.email)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  self.userTable = doc.id;
                  self.GetEmail(self.userTable);
                //   console.log(doc.id, " => ", doc.data());
                //   console.log(doc.id, " => ", self.userTable);
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
          }else{
               this.user = null
               console.log(this.user)
           }
       })
        },

       
    }
}
</script>

<style>

</style>
