import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import UnitHome from '@/components/home/UnitHome'
import Dashboard from '@/components/home/Dashboard'
import AboutUs from '@/components/home/AboutUs'
import Contact from '@/components/home/Contact'
import TestPage1 from '@/components/home/TestPage1'
import PrePostChart from '@/components/home/PrePostChart'




import PreTestIntro from '@/components/PreTest/PreTestIntro'
import PreTest from '@/components/PreTest/PreTest'
import PreTest2 from '@/components/PreTest/PreTest2'
import PreTest3 from '@/components/PreTest/PreTest3'
import PreTest4 from '@/components/PreTest/PreTest4'
import PreTest5 from '@/components/PreTest/PreTest5'
import PreTest6 from '@/components/PreTest/PreTest6'
import PreTest7 from '@/components/PreTest/PreTest7'
import PreTest8 from '@/components/PreTest/PreTest8'
import PreTest9 from '@/components/PreTest/PreTest9'
import PreTest10 from '@/components/PreTest/PreTest10'
import PreTest11 from '@/components/PreTest/PreTest11'
import PreTest12 from '@/components/PreTest/PreTest12'
import PreTestScore from '@/components/PreTest/PreTestScore'


import PostTest from '@/components/PostTest/PostTest'
import PostTest2 from '@/components/PostTest/PostTest2'
import PostTest3 from '@/components/PostTest/PostTest3'
import PostTest4 from '@/components/PostTest/PostTest4'
import PostTest5 from '@/components/PostTest/PostTest5'
import PostTest6 from '@/components/PostTest/PostTest6'
import PostTest7 from '@/components/PostTest/PostTest7'
import PostTest8 from '@/components/PostTest/PostTest8'
import PostTest9 from '@/components/PostTest/PostTest9'
import PostTest10 from '@/components/PostTest/PostTest10'
import PostTest11 from '@/components/PostTest/PostTest11'
import PostTest12 from '@/components/PostTest/PostTest12'
import PostTestScore from '@/components/PostTest/PostTestScore'

import Chapter1QuizIntro from '@/components/Quiz/Chapter1/QuizIntro'
import Chapter1Quiz1 from '@/components/Quiz/Chapter1/Quiz1'
import Chapter1Quiz2 from '@/components/Quiz/Chapter1/Quiz2'
import Chapter1Quiz3 from '@/components/Quiz/Chapter1/Quiz3'
import Chapter1Quiz4 from '@/components/Quiz/Chapter1/Quiz4'
import Chapter1Quiz5 from '@/components/Quiz/Chapter1/Quiz5'
import Chapter1QuizScore from '@/components/Quiz/Chapter1/QuizScore'

import Chapter2QuizIntro from '@/components/Quiz/Chapter2/QuizIntro'
import Chapter2Quiz1 from '@/components/Quiz/Chapter2/Quiz1'
import Chapter2Quiz2 from '@/components/Quiz/Chapter2/Quiz2'
import Chapter2Quiz3 from '@/components/Quiz/Chapter2/Quiz3'
import Chapter2Quiz4 from '@/components/Quiz/Chapter2/Quiz4'
import Chapter2Quiz5 from '@/components/Quiz/Chapter2/Quiz5'
import Chapter2QuizScore from '@/components/Quiz/Chapter2/QuizScore'

import Chapter3QuizIntro from '@/components/Quiz/Chapter3/QuizIntro'
import Chapter3Quiz1 from '@/components/Quiz/Chapter3/Quiz1'
import Chapter3Quiz2 from '@/components/Quiz/Chapter3/Quiz2'
import Chapter3Quiz3 from '@/components/Quiz/Chapter3/Quiz3'
import Chapter3Quiz4 from '@/components/Quiz/Chapter3/Quiz4'
import Chapter3Quiz5 from '@/components/Quiz/Chapter3/Quiz5'
import Chapter3QuizScore from '@/components/Quiz/Chapter3/QuizScore'

import Chapter4QuizIntro from '@/components/Quiz/Chapter4/QuizIntro'
import Chapter4Quiz1 from '@/components/Quiz/Chapter4/Quiz1'
import Chapter4Quiz2 from '@/components/Quiz/Chapter4/Quiz2'
import Chapter4Quiz3 from '@/components/Quiz/Chapter4/Quiz3'
import Chapter4Quiz4 from '@/components/Quiz/Chapter4/Quiz4'
import Chapter4Quiz5 from '@/components/Quiz/Chapter4/Quiz5'
import Chapter4QuizScore from '@/components/Quiz/Chapter4/QuizScore'

import Chapter5QuizIntro from '@/components/Quiz/Chapter5/QuizIntro'
import Chapter5Quiz1 from '@/components/Quiz/Chapter5/Quiz1'
import Chapter5Quiz2 from '@/components/Quiz/Chapter5/Quiz2'
import Chapter5Quiz3 from '@/components/Quiz/Chapter5/Quiz3'
import Chapter5Quiz4 from '@/components/Quiz/Chapter5/Quiz4'
import Chapter5Quiz5 from '@/components/Quiz/Chapter5/Quiz5'
import Chapter5QuizScore from '@/components/Quiz/Chapter5/QuizScore'

import Chapter6QuizIntro from '@/components/Quiz/Chapter6/QuizIntro'
import Chapter6Quiz1 from '@/components/Quiz/Chapter6/Quiz1'
import Chapter6Quiz2 from '@/components/Quiz/Chapter6/Quiz2'
import Chapter6Quiz3 from '@/components/Quiz/Chapter6/Quiz3'
import Chapter6Quiz4 from '@/components/Quiz/Chapter6/Quiz4'
import Chapter6Quiz5 from '@/components/Quiz/Chapter6/Quiz5'
import Chapter6QuizScore from '@/components/Quiz/Chapter6/QuizScore'






import Chapter1 from '@/components/chapterMaterials/Chapter1/Chapter1'
import chap1Easy from '@/components/chapterMaterials/Chapter1/chap1Easy'
import chap1Medium from '@/components/chapterMaterials/Chapter1/chap1Medium'
import chap1Hard from '@/components/chapterMaterials/Chapter1/chap1Hard'

import Chapter2 from '@/components/chapterMaterials/Chapter2/Chapter2'
import chap2Easy from '@/components/chapterMaterials/Chapter2/chap2Easy'
import chap2Medium from '@/components/chapterMaterials/Chapter2/chap2Medium'
import chap2Hard from '@/components/chapterMaterials/Chapter2/chap2Hard'

import Chapter3 from '@/components/chapterMaterials/Chapter3/Chapter3'
import chap3Easy from '@/components/chapterMaterials/Chapter3/chap3Easy'
import chap3Medium from '@/components/chapterMaterials/Chapter3/chap3Medium'
import chap3Hard from '@/components/chapterMaterials/Chapter3/chap3Hard'

import Chapter4 from '@/components/chapterMaterials/Chapter4/Chapter4'
import chap4Easy from '@/components/chapterMaterials/Chapter4/chap4Easy'
import chap4Medium from '@/components/chapterMaterials/Chapter4/chap4Medium'
import chap4Hard from '@/components/chapterMaterials/Chapter4/chap4Hard'

import Chapter5 from '@/components/chapterMaterials/Chapter5/Chapter5'
import chap5Easy from '@/components/chapterMaterials/Chapter5/chap5Easy'
import chap5Medium from '@/components/chapterMaterials/Chapter5/chap5Medium'
import chap5Hard from '@/components/chapterMaterials/Chapter5/chap5Hard'

import Chapter6 from '@/components/chapterMaterials/Chapter6/Chapter6'
import chap6Easy from '@/components/chapterMaterials/Chapter6/chap6Easy'
import chap6Medium from '@/components/chapterMaterials/Chapter6/chap6Medium'
import chap6Hard from '@/components/chapterMaterials/Chapter6/chap6Hard'












///////////////////////////////             Chapter 1 Easy
import C1Unit1EasyIntro from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit1/Unit1Intro'
import C1Unit1EasyRound1P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit1/Round1/Page1'
import C1Unit1EasyRound1P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit1/Round1/Page2'
import C1Unit1EasyRound1P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit1/Round1/Page3'
import C1Unit1EasyRound1P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit1/Round1/Page4'

import C1Unit1EasyRound2P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit2/Round2/Page1'
import C1Unit1EasyRound2P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit2/Round2/Page2'
import C1Unit1EasyRound2P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit2/Round2/Page3'
import C1Unit1EasyRound2P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit2/Round2/Page4'

import C1Unit1EasyRound3P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit3/Round3/Page1'
import C1Unit1EasyRound3P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit3/Round3/Page2'
import C1Unit1EasyRound3P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit3/Round3/Page3'
import C1Unit1EasyRound3P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit3/Round3/Page4'
import C1Unit1EasyRound3P5 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit3/Round3/Page5'

import C1Unit1EasyRound4P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit4/Round4/Page1'
import C1Unit1EasyRound4P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit4/Round4/Page2'
import C1Unit1EasyRound4P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit4/Round4/Page3'
import C1Unit1EasyRound4P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit4/Round4/Page4'
import C1Unit1EasyRound4P5 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit4/Round4/Page5'

import C1Unit1EasyRound5P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit5/Round5/Page1'
import C1Unit1EasyRound5P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit5/Round5/Page2'
import C1Unit1EasyRound5P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit5/Round5/Page3'
import C1Unit1EasyRound5P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit5/Round5/Page4'

import C1Unit1EasyRound6P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit6/Round6/Page1'
import C1Unit1EasyRound6P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit6/Round6/Page2'
import C1Unit1EasyRound6P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit6/Round6/Page3'
import C1Unit1EasyRound6P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit6/Round6/Page4'
import C1Unit1EasyEnd from '@/components/chapterMaterials/Chapter1/Easy/Unit1/SubUnit6/Unit1End'

import C1Unit2EasyIntro from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit1/Unit2Intro'
import C1Unit2EasyRound1P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit1/Round1/Page1'
import C1Unit2EasyRound1P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit1/Round1/Page2'
import C1Unit2EasyRound1P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit1/Round1/Page3'
import C1Unit2EasyRound1P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit1/Round1/Page4'

import C1Unit2EasyRound2P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit2/Round2/Page1'
import C1Unit2EasyRound2P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit2/Round2/Page2'
import C1Unit2EasyRound2P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit2/Round2/Page3'
import C1Unit2EasyRound2P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit2/Round2/Page4'

import C1Unit2EasyRound3P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit3/Round3/Page1'
import C1Unit2EasyRound3P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit3/Round3/Page2'
import C1Unit2EasyRound3P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit3/Round3/Page3'
import C1Unit2EasyRound3P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit3/Round3/Page4'

import C1Unit2EasyRound4P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit4/Round4/Page1'
import C1Unit2EasyRound4P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit4/Round4/Page2'
import C1Unit2EasyRound4P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit4/Round4/Page3'
import C1Unit2EasyRound4P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit4/Round4/Page4'
import C1Unit2EasyRound4P5 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit4/Round4/Page5'

import C1Unit2EasyRound5P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit5/Round5/Page1'
import C1Unit2EasyRound5P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit5/Round5/Page2'
import C1Unit2EasyRound5P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit5/Round5/Page3'
import C1Unit2EasyRound5P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit5/Round5/Page4'
import C1Unit2EasyEnd from '@/components/chapterMaterials/Chapter1/Easy/Unit2/SubUnit5/Unit2End'


import C1Unit3EasyIntro from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit1/Unit3Intro'
import C1Unit3EasyRound1P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit1/Round1/Page1'
import C1Unit3EasyRound1P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit1/Round1/Page2'
import C1Unit3EasyRound1P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit1/Round1/Page3'
import C1Unit3EasyRound1P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit1/Round1/Page4'

import C1Unit3EasyRound2P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit2/Round2/Page1'
import C1Unit3EasyRound2P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit2/Round2/Page2'
import C1Unit3EasyRound2P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit2/Round2/Page3'
import C1Unit3EasyRound2P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit2/Round2/Page4'

import C1Unit3EasyRound3P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit3/Round3/Page1'
import C1Unit3EasyRound3P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit3/Round3/Page2'
import C1Unit3EasyRound3P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit3/Round3/Page3'
import C1Unit3EasyRound3P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit3/Round3/Page4'

import C1Unit3EasyRound4P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit4/Round4/Page1'
import C1Unit3EasyRound4P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit4/Round4/Page2'
import C1Unit3EasyRound4P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit4/Round4/Page3'
import C1Unit3EasyRound4P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit4/Round4/Page4'
import C1Unit3EasyRound4P5 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit4/Round4/Page5'

import C1Unit3EasyRound5P1 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit5/Round5/Page1'
import C1Unit3EasyRound5P2 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit5/Round5/Page2'
import C1Unit3EasyRound5P3 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit5/Round5/Page3'
import C1Unit3EasyRound5P4 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit5/Round5/Page4'
import C1Unit3EasyRound5P5 from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit5/Round5/Page5'
import C1Unit3EasyEnd from '@/components/chapterMaterials/Chapter1/Easy/Unit3/SubUnit5/Unit3End'





///////////////////////////////             Chapter 1 Medium
import C1Unit1MediumIntro from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit1/Unit1Intro'
import C1Unit1MediumRound1P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit1/Round1/Page1'
import C1Unit1MediumRound1P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit1/Round1/Page2'
import C1Unit1MediumRound1P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit1/Round1/Page3'
import C1Unit1MediumRound1P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit1/Round1/Page4'

import C1Unit1MediumRound2P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit2/Round2/Page1'
import C1Unit1MediumRound2P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit2/Round2/Page2'
import C1Unit1MediumRound2P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit2/Round2/Page3'
import C1Unit1MediumRound2P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit2/Round2/Page4'

import C1Unit1MediumRound3P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit3/Round3/Page1'
import C1Unit1MediumRound3P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit3/Round3/Page2'
import C1Unit1MediumRound3P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit3/Round3/Page3'
import C1Unit1MediumRound3P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit3/Round3/Page4'
import C1Unit1MediumRound3P5 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit3/Round3/Page5'

import C1Unit1MediumRound4P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit4/Round4/Page1'
import C1Unit1MediumRound4P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit4/Round4/Page2'
import C1Unit1MediumRound4P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit4/Round4/Page3'
import C1Unit1MediumRound4P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit4/Round4/Page4'
import C1Unit1MediumRound4P5 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit4/Round4/Page5'

import C1Unit1MediumRound5P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit5/Round5/Page1'
import C1Unit1MediumRound5P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit5/Round5/Page2'
import C1Unit1MediumRound5P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit5/Round5/Page3'
import C1Unit1MediumRound5P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit5/Round5/Page4'

import C1Unit1MediumRound6P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit6/Round6/Page1'
import C1Unit1MediumRound6P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit6/Round6/Page2'
import C1Unit1MediumRound6P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit6/Round6/Page3'
import C1Unit1MediumRound6P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit6/Round6/Page4'
import C1Unit1MediumEnd from '@/components/chapterMaterials/Chapter1/Medium/Unit1/SubUnit6/Unit1End'

import C1Unit2MediumIntro from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit1/Unit2Intro'
import C1Unit2MediumRound1P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit1/Round1/Page1'
import C1Unit2MediumRound1P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit1/Round1/Page2'
import C1Unit2MediumRound1P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit1/Round1/Page3'
import C1Unit2MediumRound1P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit1/Round1/Page4'

import C1Unit2MediumRound2P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit2/Round2/Page1'
import C1Unit2MediumRound2P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit2/Round2/Page2'
import C1Unit2MediumRound2P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit2/Round2/Page3'
import C1Unit2MediumRound2P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit2/Round2/Page4'

import C1Unit2MediumRound3P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit3/Round3/Page1'
import C1Unit2MediumRound3P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit3/Round3/Page2'
import C1Unit2MediumRound3P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit3/Round3/Page3'
import C1Unit2MediumRound3P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit3/Round3/Page4'

import C1Unit2MediumRound4P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit4/Round4/Page1'
import C1Unit2MediumRound4P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit4/Round4/Page2'
import C1Unit2MediumRound4P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit4/Round4/Page3'
import C1Unit2MediumRound4P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit4/Round4/Page4'
import C1Unit2MediumRound4P5 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit4/Round4/Page5'

import C1Unit2MediumRound5P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit5/Round5/Page1'
import C1Unit2MediumRound5P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit5/Round5/Page2'
import C1Unit2MediumRound5P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit5/Round5/Page3'
import C1Unit2MediumRound5P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit5/Round5/Page4'
import C1Unit2MediumEnd from '@/components/chapterMaterials/Chapter1/Medium/Unit2/SubUnit5/Unit2End'


import C1Unit3MediumIntro from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit1/Unit3Intro'
import C1Unit3MediumRound1P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit1/Round1/Page1'
import C1Unit3MediumRound1P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit1/Round1/Page2'
import C1Unit3MediumRound1P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit1/Round1/Page3'
import C1Unit3MediumRound1P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit1/Round1/Page4'

import C1Unit3MediumRound2P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit2/Round2/Page1'
import C1Unit3MediumRound2P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit2/Round2/Page2'
import C1Unit3MediumRound2P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit2/Round2/Page3'
import C1Unit3MediumRound2P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit2/Round2/Page4'

import C1Unit3MediumRound3P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit3/Round3/Page1'
import C1Unit3MediumRound3P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit3/Round3/Page2'
import C1Unit3MediumRound3P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit3/Round3/Page3'
import C1Unit3MediumRound3P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit3/Round3/Page4'

import C1Unit3MediumRound4P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit4/Round4/Page1'
import C1Unit3MediumRound4P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit4/Round4/Page2'
import C1Unit3MediumRound4P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit4/Round4/Page3'
import C1Unit3MediumRound4P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit4/Round4/Page4'
import C1Unit3MediumRound4P5 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit4/Round4/Page5'

import C1Unit3MediumRound5P1 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit5/Round5/Page1'
import C1Unit3MediumRound5P2 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit5/Round5/Page2'
import C1Unit3MediumRound5P3 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit5/Round5/Page3'
import C1Unit3MediumRound5P4 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit5/Round5/Page4'
import C1Unit3MediumRound5P5 from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit5/Round5/Page5'
import C1Unit3MediumEnd from '@/components/chapterMaterials/Chapter1/Medium/Unit3/SubUnit5/Unit3End'


///////////////////////////////             Chapter 1 Hard
import C1Unit1HardIntro from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit1/Unit1Intro'
import C1Unit1HardRound1P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit1/Round1/Page1'
import C1Unit1HardRound1P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit1/Round1/Page2'
import C1Unit1HardRound1P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit1/Round1/Page3'
import C1Unit1HardRound1P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit1/Round1/Page4'

import C1Unit1HardRound2P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit2/Round2/Page1'
import C1Unit1HardRound2P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit2/Round2/Page2'
import C1Unit1HardRound2P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit2/Round2/Page3'
import C1Unit1HardRound2P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit2/Round2/Page4'

import C1Unit1HardRound3P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit3/Round3/Page1'
import C1Unit1HardRound3P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit3/Round3/Page2'
import C1Unit1HardRound3P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit3/Round3/Page3'
import C1Unit1HardRound3P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit3/Round3/Page4'
import C1Unit1HardRound3P5 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit3/Round3/Page5'

import C1Unit1HardRound4P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit4/Round4/Page1'
import C1Unit1HardRound4P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit4/Round4/Page2'
import C1Unit1HardRound4P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit4/Round4/Page3'
import C1Unit1HardRound4P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit4/Round4/Page4'
import C1Unit1HardRound4P5 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit4/Round4/Page5'

import C1Unit1HardRound5P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit5/Round5/Page1'
import C1Unit1HardRound5P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit5/Round5/Page2'
import C1Unit1HardRound5P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit5/Round5/Page3'
import C1Unit1HardRound5P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit5/Round5/Page4'

import C1Unit1HardRound6P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit6/Round6/Page1'
import C1Unit1HardRound6P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit6/Round6/Page2'
import C1Unit1HardRound6P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit6/Round6/Page3'
import C1Unit1HardRound6P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit6/Round6/Page4'
import C1Unit1HardEnd from '@/components/chapterMaterials/Chapter1/Hard/Unit1/SubUnit6/Unit1End'

import C1Unit2HardIntro from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit1/Unit2Intro'
import C1Unit2HardRound1P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit1/Round1/Page1'
import C1Unit2HardRound1P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit1/Round1/Page2'
import C1Unit2HardRound1P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit1/Round1/Page3'
import C1Unit2HardRound1P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit1/Round1/Page4'

import C1Unit2HardRound2P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit2/Round2/Page1'
import C1Unit2HardRound2P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit2/Round2/Page2'
import C1Unit2HardRound2P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit2/Round2/Page3'
import C1Unit2HardRound2P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit2/Round2/Page4'

import C1Unit2HardRound3P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit3/Round3/Page1'
import C1Unit2HardRound3P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit3/Round3/Page2'
import C1Unit2HardRound3P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit3/Round3/Page3'
import C1Unit2HardRound3P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit3/Round3/Page4'

import C1Unit2HardRound4P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit4/Round4/Page1'
import C1Unit2HardRound4P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit4/Round4/Page2'
import C1Unit2HardRound4P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit4/Round4/Page3'
import C1Unit2HardRound4P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit4/Round4/Page4'
import C1Unit2HardRound4P5 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit4/Round4/Page5'

import C1Unit2HardRound5P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit5/Round5/Page1'
import C1Unit2HardRound5P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit5/Round5/Page2'
import C1Unit2HardRound5P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit5/Round5/Page3'
import C1Unit2HardRound5P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit5/Round5/Page4'
import C1Unit2HardEnd from '@/components/chapterMaterials/Chapter1/Hard/Unit2/SubUnit5/Unit2End'


import C1Unit3HardIntro from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit1/Unit3Intro'
import C1Unit3HardRound1P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit1/Round1/Page1'
import C1Unit3HardRound1P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit1/Round1/Page2'
import C1Unit3HardRound1P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit1/Round1/Page3'
import C1Unit3HardRound1P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit1/Round1/Page4'

import C1Unit3HardRound2P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit2/Round2/Page1'
import C1Unit3HardRound2P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit2/Round2/Page2'
import C1Unit3HardRound2P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit2/Round2/Page3'
import C1Unit3HardRound2P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit2/Round2/Page4'

import C1Unit3HardRound3P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit3/Round3/Page1'
import C1Unit3HardRound3P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit3/Round3/Page2'
import C1Unit3HardRound3P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit3/Round3/Page3'
import C1Unit3HardRound3P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit3/Round3/Page4'

import C1Unit3HardRound4P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit4/Round4/Page1'
import C1Unit3HardRound4P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit4/Round4/Page2'
import C1Unit3HardRound4P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit4/Round4/Page3'
import C1Unit3HardRound4P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit4/Round4/Page4'
import C1Unit3HardRound4P5 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit4/Round4/Page5'

import C1Unit3HardRound5P1 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit5/Round5/Page1'
import C1Unit3HardRound5P2 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit5/Round5/Page2'
import C1Unit3HardRound5P3 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit5/Round5/Page3'
import C1Unit3HardRound5P4 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit5/Round5/Page4'
import C1Unit3HardRound5P5 from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit5/Round5/Page5'
import C1Unit3HardEnd from '@/components/chapterMaterials/Chapter1/Hard/Unit3/SubUnit5/Unit3End'








///////////////////////////////             Chapter 2 Easy
import C2Unit1EasyIntro from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit1/Unit1Intro'
import C2Unit1EasyRound1P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit1/Round1/Page1'
import C2Unit1EasyRound1P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit1/Round1/Page2'
import C2Unit1EasyRound1P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit1/Round1/Page3'
import C2Unit1EasyRound1P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit1/Round1/Page4'

import C2Unit1EasyRound2P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit2/Round2/Page1'
import C2Unit1EasyRound2P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit2/Round2/Page2'
import C2Unit1EasyRound2P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit2/Round2/Page3'
import C2Unit1EasyRound2P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit2/Round2/Page4'

import C2Unit1EasyRound3P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit3/Round3/Page1'
import C2Unit1EasyRound3P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit3/Round3/Page2'
import C2Unit1EasyRound3P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit3/Round3/Page3'
import C2Unit1EasyRound3P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit3/Round3/Page4'
import C2Unit1EasyRound3P5 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit3/Round3/Page5'

import C2Unit1EasyRound4P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit4/Round4/Page1'
import C2Unit1EasyRound4P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit4/Round4/Page2'
import C2Unit1EasyRound4P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit4/Round4/Page3'
import C2Unit1EasyRound4P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit4/Round4/Page4'

import C2Unit1EasyRound5P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit5/Round5/Page1'
import C2Unit1EasyRound5P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit5/Round5/Page2'
import C2Unit1EasyRound5P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit5/Round5/Page3'
import C2Unit1EasyRound5P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit5/Round5/Page4'
import C2Unit1EasyRound5P5 from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit5/Round5/Page5'
import C2Unit1EasyEnd from '@/components/chapterMaterials/Chapter2/Easy/Unit1/SubUnit5/Unit1End'

import C2Unit2EasyIntro from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit1/Unit2Intro'
import C2Unit2EasyRound1P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit1/Round1/Page1'
import C2Unit2EasyRound1P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit1/Round1/Page2'
import C2Unit2EasyRound1P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit1/Round1/Page3'
import C2Unit2EasyRound1P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit1/Round1/Page4'


import C2Unit2EasyRound2P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit2/Round2/Page1'
import C2Unit2EasyRound2P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit2/Round2/Page2'
import C2Unit2EasyRound2P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit2/Round2/Page3'
import C2Unit2EasyRound2P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit2/Round2/Page4'

import C2Unit2EasyRound3P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit3/Round3/Page1'
import C2Unit2EasyRound3P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit3/Round3/Page2'
import C2Unit2EasyRound3P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit3/Round3/Page3'
import C2Unit2EasyRound3P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit3/Round3/Page4'

import C2Unit2EasyRound4P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit4/Round4/Page1'
import C2Unit2EasyRound4P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit4/Round4/Page2'
import C2Unit2EasyRound4P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit4/Round4/Page3'
import C2Unit2EasyRound4P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit4/Round4/Page4'

import C2Unit2EasyRound5P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit5/Round5/Page1'
import C2Unit2EasyRound5P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit5/Round5/Page2'
import C2Unit2EasyRound5P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit5/Round5/Page3'
import C2Unit2EasyRound5P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit5/Round5/Page4'
import C2Unit2EasyRound5P5 from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit5/Round5/Page5'
import C2Unit2EasyEnd from '@/components/chapterMaterials/Chapter2/Easy/Unit2/SubUnit5/Unit2End'

import C2Unit3EasyIntro from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit1/Unit3Intro'
import C2Unit3EasyRound1P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit1/Round1/Page1'
import C2Unit3EasyRound1P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit1/Round1/Page2'
import C2Unit3EasyRound1P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit1/Round1/Page3'
import C2Unit3EasyRound1P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit1/Round1/Page4'

import C2Unit3EasyRound2P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit2/Round2/Page1'
import C2Unit3EasyRound2P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit2/Round2/Page2'
import C2Unit3EasyRound2P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit2/Round2/Page3'
import C2Unit3EasyRound2P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit2/Round2/Page4'

import C2Unit3EasyRound3P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit3/Round3/Page1'
import C2Unit3EasyRound3P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit3/Round3/Page2'
import C2Unit3EasyRound3P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit3/Round3/Page3'
import C2Unit3EasyRound3P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit3/Round3/Page4'

import C2Unit3EasyRound4P1 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit4/Round4/Page1'
import C2Unit3EasyRound4P2 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit4/Round4/Page2'
import C2Unit3EasyRound4P3 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit4/Round4/Page3'
import C2Unit3EasyRound4P4 from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit4/Round4/Page4'
import C2Unit3EasyEnd from '@/components/chapterMaterials/Chapter2/Easy/Unit3/SubUnit4/Unit3End'

/////////////////////////////////////////  Chapter2 Medium

import C2Unit1MediumIntro from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit1/Unit1Intro'
import C2Unit1MediumRound1P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit1/Round1/Page1'
import C2Unit1MediumRound1P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit1/Round1/Page2'
import C2Unit1MediumRound1P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit1/Round1/Page3'
import C2Unit1MediumRound1P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit1/Round1/Page4'

import C2Unit1MediumRound2P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit2/Round2/Page1'
import C2Unit1MediumRound2P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit2/Round2/Page2'
import C2Unit1MediumRound2P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit2/Round2/Page3'
import C2Unit1MediumRound2P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit2/Round2/Page4'

import C2Unit1MediumRound3P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit3/Round3/Page1'
import C2Unit1MediumRound3P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit3/Round3/Page2'
import C2Unit1MediumRound3P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit3/Round3/Page3'
import C2Unit1MediumRound3P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit3/Round3/Page4'
import C2Unit1MediumRound3P5 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit3/Round3/Page5'

import C2Unit1MediumRound4P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit4/Round4/Page1'
import C2Unit1MediumRound4P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit4/Round4/Page2'
import C2Unit1MediumRound4P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit4/Round4/Page3'
import C2Unit1MediumRound4P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit4/Round4/Page4'

import C2Unit1MediumRound5P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit5/Round5/Page1'
import C2Unit1MediumRound5P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit5/Round5/Page2'
import C2Unit1MediumRound5P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit5/Round5/Page3'
import C2Unit1MediumRound5P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit5/Round5/Page4'
import C2Unit1MediumRound5P5 from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit5/Round5/Page5'
import C2Unit1MediumEnd from '@/components/chapterMaterials/Chapter2/Medium/Unit1/SubUnit5/Unit1End'

import C2Unit2MediumIntro from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit1/Unit2Intro'
import C2Unit2MediumRound1P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit1/Round1/Page1'
import C2Unit2MediumRound1P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit1/Round1/Page2'
import C2Unit2MediumRound1P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit1/Round1/Page3'
import C2Unit2MediumRound1P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit1/Round1/Page4'


import C2Unit2MediumRound2P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit2/Round2/Page1'
import C2Unit2MediumRound2P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit2/Round2/Page2'
import C2Unit2MediumRound2P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit2/Round2/Page3'
import C2Unit2MediumRound2P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit2/Round2/Page4'

import C2Unit2MediumRound3P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit3/Round3/Page1'
import C2Unit2MediumRound3P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit3/Round3/Page2'
import C2Unit2MediumRound3P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit3/Round3/Page3'
import C2Unit2MediumRound3P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit3/Round3/Page4'

import C2Unit2MediumRound4P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit4/Round4/Page1'
import C2Unit2MediumRound4P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit4/Round4/Page2'
import C2Unit2MediumRound4P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit4/Round4/Page3'
import C2Unit2MediumRound4P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit4/Round4/Page4'

import C2Unit2MediumRound5P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit5/Round5/Page1'
import C2Unit2MediumRound5P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit5/Round5/Page2'
import C2Unit2MediumRound5P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit5/Round5/Page3'
import C2Unit2MediumRound5P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit5/Round5/Page4'
import C2Unit2MediumRound5P5 from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit5/Round5/Page5'
import C2Unit2MediumEnd from '@/components/chapterMaterials/Chapter2/Medium/Unit2/SubUnit5/Unit2End'

import C2Unit3MediumIntro from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit1/Unit3Intro'
import C2Unit3MediumRound1P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit1/Round1/Page1'
import C2Unit3MediumRound1P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit1/Round1/Page2'
import C2Unit3MediumRound1P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit1/Round1/Page3'
import C2Unit3MediumRound1P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit1/Round1/Page4'

import C2Unit3MediumRound2P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit2/Round2/Page1'
import C2Unit3MediumRound2P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit2/Round2/Page2'
import C2Unit3MediumRound2P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit2/Round2/Page3'
import C2Unit3MediumRound2P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit2/Round2/Page4'

import C2Unit3MediumRound3P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit3/Round3/Page1'
import C2Unit3MediumRound3P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit3/Round3/Page2'
import C2Unit3MediumRound3P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit3/Round3/Page3'
import C2Unit3MediumRound3P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit3/Round3/Page4'

import C2Unit3MediumRound4P1 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit4/Round4/Page1'
import C2Unit3MediumRound4P2 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit4/Round4/Page2'
import C2Unit3MediumRound4P3 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit4/Round4/Page3'
import C2Unit3MediumRound4P4 from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit4/Round4/Page4'
import C2Unit3MediumEnd from '@/components/chapterMaterials/Chapter2/Medium/Unit3/SubUnit4/Unit3End'

/////////////////////////////////////////  Chapter2 Hard

import C2Unit1HardIntro from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit1/Unit1Intro'
import C2Unit1HardRound1P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit1/Round1/Page1'
import C2Unit1HardRound1P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit1/Round1/Page2'
import C2Unit1HardRound1P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit1/Round1/Page3'
import C2Unit1HardRound1P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit1/Round1/Page4'

import C2Unit1HardRound2P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit2/Round2/Page1'
import C2Unit1HardRound2P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit2/Round2/Page2'
import C2Unit1HardRound2P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit2/Round2/Page3'
import C2Unit1HardRound2P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit2/Round2/Page4'

import C2Unit1HardRound3P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit3/Round3/Page1'
import C2Unit1HardRound3P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit3/Round3/Page2'
import C2Unit1HardRound3P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit3/Round3/Page3'
import C2Unit1HardRound3P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit3/Round3/Page4'
import C2Unit1HardRound3P5 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit3/Round3/Page5'

import C2Unit1HardRound4P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit4/Round4/Page1'
import C2Unit1HardRound4P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit4/Round4/Page2'
import C2Unit1HardRound4P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit4/Round4/Page3'
import C2Unit1HardRound4P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit4/Round4/Page4'

import C2Unit1HardRound5P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit5/Round5/Page1'
import C2Unit1HardRound5P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit5/Round5/Page2'
import C2Unit1HardRound5P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit5/Round5/Page3'
import C2Unit1HardRound5P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit5/Round5/Page4'
import C2Unit1HardRound5P5 from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit5/Round5/Page5'
import C2Unit1HardEnd from '@/components/chapterMaterials/Chapter2/Hard/Unit1/SubUnit5/Unit1End'

import C2Unit2HardIntro from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit1/Unit2Intro'
import C2Unit2HardRound1P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit1/Round1/Page1'
import C2Unit2HardRound1P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit1/Round1/Page2'
import C2Unit2HardRound1P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit1/Round1/Page3'
import C2Unit2HardRound1P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit1/Round1/Page4'


import C2Unit2HardRound2P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit2/Round2/Page1'
import C2Unit2HardRound2P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit2/Round2/Page2'
import C2Unit2HardRound2P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit2/Round2/Page3'
import C2Unit2HardRound2P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit2/Round2/Page4'

import C2Unit2HardRound3P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit3/Round3/Page1'
import C2Unit2HardRound3P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit3/Round3/Page2'
import C2Unit2HardRound3P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit3/Round3/Page3'
import C2Unit2HardRound3P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit3/Round3/Page4'

import C2Unit2HardRound4P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit4/Round4/Page1'
import C2Unit2HardRound4P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit4/Round4/Page2'
import C2Unit2HardRound4P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit4/Round4/Page3'
import C2Unit2HardRound4P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit4/Round4/Page4'

import C2Unit2HardRound5P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit5/Round5/Page1'
import C2Unit2HardRound5P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit5/Round5/Page2'
import C2Unit2HardRound5P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit5/Round5/Page3'
import C2Unit2HardRound5P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit5/Round5/Page4'
import C2Unit2HardRound5P5 from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit5/Round5/Page5'
import C2Unit2HardEnd from '@/components/chapterMaterials/Chapter2/Hard/Unit2/SubUnit5/Unit2End'

import C2Unit3HardIntro from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit1/Unit3Intro'
import C2Unit3HardRound1P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit1/Round1/Page1'
import C2Unit3HardRound1P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit1/Round1/Page2'
import C2Unit3HardRound1P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit1/Round1/Page3'
import C2Unit3HardRound1P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit1/Round1/Page4'

import C2Unit3HardRound2P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit2/Round2/Page1'
import C2Unit3HardRound2P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit2/Round2/Page2'
import C2Unit3HardRound2P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit2/Round2/Page3'
import C2Unit3HardRound2P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit2/Round2/Page4'

import C2Unit3HardRound3P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit3/Round3/Page1'
import C2Unit3HardRound3P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit3/Round3/Page2'
import C2Unit3HardRound3P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit3/Round3/Page3'
import C2Unit3HardRound3P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit3/Round3/Page4'

import C2Unit3HardRound4P1 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit4/Round4/Page1'
import C2Unit3HardRound4P2 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit4/Round4/Page2'
import C2Unit3HardRound4P3 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit4/Round4/Page3'
import C2Unit3HardRound4P4 from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit4/Round4/Page4'
import C2Unit3HardEnd from '@/components/chapterMaterials/Chapter2/Hard/Unit3/SubUnit4/Unit3End'










/////////////////////////////////////////  Chapter3 Easy
import C3Unit1EasyIntro from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit1/Unit1Intro'
import C3Unit1EasyRound1P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit1/Round1/Page1'
import C3Unit1EasyRound1P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit1/Round1/Page2'
import C3Unit1EasyRound1P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit1/Round1/Page3'
import C3Unit1EasyRound1P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit1/Round1/Page4'

import C3Unit1EasyRound2P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit2/Round2/Page1'
import C3Unit1EasyRound2P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit2/Round2/Page2'
import C3Unit1EasyRound2P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit2/Round2/Page3'
import C3Unit1EasyRound2P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit2/Round2/Page4'

import C3Unit1EasyRound3P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit3/Round3/Page1'
import C3Unit1EasyRound3P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit3/Round3/Page2'
import C3Unit1EasyRound3P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit3/Round3/Page3'
import C3Unit1EasyRound3P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit3/Round3/Page4'

import C3Unit1EasyRound4P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit4/Round4/Page1'
import C3Unit1EasyRound4P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit4/Round4/Page2'
import C3Unit1EasyRound4P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit4/Round4/Page3'
import C3Unit1EasyRound4P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit4/Round4/Page4'
import C3Unit1EasyEnd from '@/components/chapterMaterials/Chapter3/Easy/Unit1/SubUnit4/Unit1End'

import C3Unit2EasyIntro from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit1/Unit2Intro'
import C3Unit2EasyRound1P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit1/Round1/Page1'
import C3Unit2EasyRound1P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit1/Round1/Page2'
import C3Unit2EasyRound1P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit1/Round1/Page3'
import C3Unit2EasyRound1P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit1/Round1/Page4'

import C3Unit2EasyRound2P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit2/Round2/Page1'
import C3Unit2EasyRound2P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit2/Round2/Page2'
import C3Unit2EasyRound2P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit2/Round2/Page3'
import C3Unit2EasyRound2P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit2/Round2/Page4'

import C3Unit2EasyRound3P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit3/Round3/Page1'
import C3Unit2EasyRound3P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit3/Round3/Page2'
import C3Unit2EasyRound3P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit3/Round3/Page3'
import C3Unit2EasyRound3P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit3/Round3/Page4'

import C3Unit2EasyRound4P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit4/Round4/Page1'
import C3Unit2EasyRound4P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit4/Round4/Page2'
import C3Unit2EasyRound4P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit4/Round4/Page3'
import C3Unit2EasyRound4P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit4/Round4/Page4'
import C3Unit2EasyEnd from '@/components/chapterMaterials/Chapter3/Easy/Unit2/SubUnit4/Unit2End'

import C3Unit3EasyIntro from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit1/Unit3Intro'
import C3Unit3EasyRound1P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit1/Round1/Page1'
import C3Unit3EasyRound1P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit1/Round1/Page2'
import C3Unit3EasyRound1P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit1/Round1/Page3'
import C3Unit3EasyRound1P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit1/Round1/Page4'

import C3Unit3EasyRound2P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit2/Round2/Page1'
import C3Unit3EasyRound2P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit2/Round2/Page2'
import C3Unit3EasyRound2P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit2/Round2/Page3'
import C3Unit3EasyRound2P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit2/Round2/Page4'

import C3Unit3EasyRound3P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit3/Round3/Page1'
import C3Unit3EasyRound3P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit3/Round3/Page2'
import C3Unit3EasyRound3P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit3/Round3/Page3'
import C3Unit3EasyRound3P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit3/Round3/Page4'

import C3Unit3EasyRound4P1 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit4/Round4/Page1'
import C3Unit3EasyRound4P2 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit4/Round4/Page2'
import C3Unit3EasyRound4P3 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit4/Round4/Page3'
import C3Unit3EasyRound4P4 from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit4/Round4/Page4'
import C3Unit3EasyEnd from '@/components/chapterMaterials/Chapter3/Easy/Unit3/SubUnit4/Unit3End'


/////////////////////////////////////////  Chapter3 Medium
import C3Unit1MediumIntro from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit1/Unit1Intro'
import C3Unit1MediumRound1P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit1/Round1/Page1'
import C3Unit1MediumRound1P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit1/Round1/Page2'
import C3Unit1MediumRound1P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit1/Round1/Page3'
import C3Unit1MediumRound1P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit1/Round1/Page4'

import C3Unit1MediumRound2P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit2/Round2/Page1'
import C3Unit1MediumRound2P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit2/Round2/Page2'
import C3Unit1MediumRound2P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit2/Round2/Page3'
import C3Unit1MediumRound2P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit2/Round2/Page4'

import C3Unit1MediumRound3P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit3/Round3/Page1'
import C3Unit1MediumRound3P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit3/Round3/Page2'
import C3Unit1MediumRound3P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit3/Round3/Page3'
import C3Unit1MediumRound3P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit3/Round3/Page4'

import C3Unit1MediumRound4P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit4/Round4/Page1'
import C3Unit1MediumRound4P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit4/Round4/Page2'
import C3Unit1MediumRound4P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit4/Round4/Page3'
import C3Unit1MediumRound4P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit4/Round4/Page4'
import C3Unit1MediumEnd from '@/components/chapterMaterials/Chapter3/Medium/Unit1/SubUnit4/Unit1End'

import C3Unit2MediumIntro from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit1/Unit2Intro'
import C3Unit2MediumRound1P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit1/Round1/Page1'
import C3Unit2MediumRound1P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit1/Round1/Page2'
import C3Unit2MediumRound1P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit1/Round1/Page3'
import C3Unit2MediumRound1P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit1/Round1/Page4'

import C3Unit2MediumRound2P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit2/Round2/Page1'
import C3Unit2MediumRound2P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit2/Round2/Page2'
import C3Unit2MediumRound2P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit2/Round2/Page3'
import C3Unit2MediumRound2P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit2/Round2/Page4'

import C3Unit2MediumRound3P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit3/Round3/Page1'
import C3Unit2MediumRound3P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit3/Round3/Page2'
import C3Unit2MediumRound3P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit3/Round3/Page3'
import C3Unit2MediumRound3P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit3/Round3/Page4'

import C3Unit2MediumRound4P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit4/Round4/Page1'
import C3Unit2MediumRound4P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit4/Round4/Page2'
import C3Unit2MediumRound4P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit4/Round4/Page3'
import C3Unit2MediumRound4P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit4/Round4/Page4'
import C3Unit2MediumEnd from '@/components/chapterMaterials/Chapter3/Medium/Unit2/SubUnit4/Unit2End'

import C3Unit3MediumIntro from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit1/Unit3Intro'
import C3Unit3MediumRound1P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit1/Round1/Page1'
import C3Unit3MediumRound1P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit1/Round1/Page2'
import C3Unit3MediumRound1P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit1/Round1/Page3'
import C3Unit3MediumRound1P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit1/Round1/Page4'

import C3Unit3MediumRound2P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit2/Round2/Page1'
import C3Unit3MediumRound2P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit2/Round2/Page2'
import C3Unit3MediumRound2P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit2/Round2/Page3'
import C3Unit3MediumRound2P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit2/Round2/Page4'

import C3Unit3MediumRound3P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit3/Round3/Page1'
import C3Unit3MediumRound3P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit3/Round3/Page2'
import C3Unit3MediumRound3P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit3/Round3/Page3'
import C3Unit3MediumRound3P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit3/Round3/Page4'

import C3Unit3MediumRound4P1 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit4/Round4/Page1'
import C3Unit3MediumRound4P2 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit4/Round4/Page2'
import C3Unit3MediumRound4P3 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit4/Round4/Page3'
import C3Unit3MediumRound4P4 from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit4/Round4/Page4'
import C3Unit3MediumEnd from '@/components/chapterMaterials/Chapter3/Medium/Unit3/SubUnit4/Unit3End'

/////////////////////////////////////////  Chapter3 Hard
import C3Unit1HardIntro from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit1/Unit1Intro'
import C3Unit1HardRound1P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit1/Round1/Page1'
import C3Unit1HardRound1P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit1/Round1/Page2'
import C3Unit1HardRound1P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit1/Round1/Page3'
import C3Unit1HardRound1P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit1/Round1/Page4'

import C3Unit1HardRound2P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit2/Round2/Page1'
import C3Unit1HardRound2P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit2/Round2/Page2'
import C3Unit1HardRound2P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit2/Round2/Page3'
import C3Unit1HardRound2P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit2/Round2/Page4'

import C3Unit1HardRound3P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit3/Round3/Page1'
import C3Unit1HardRound3P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit3/Round3/Page2'
import C3Unit1HardRound3P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit3/Round3/Page3'
import C3Unit1HardRound3P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit3/Round3/Page4'

import C3Unit1HardRound4P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit4/Round4/Page1'
import C3Unit1HardRound4P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit4/Round4/Page2'
import C3Unit1HardRound4P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit4/Round4/Page3'
import C3Unit1HardRound4P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit4/Round4/Page4'
import C3Unit1HardEnd from '@/components/chapterMaterials/Chapter3/Hard/Unit1/SubUnit4/Unit1End'

import C3Unit2HardIntro from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit1/Unit2Intro'
import C3Unit2HardRound1P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit1/Round1/Page1'
import C3Unit2HardRound1P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit1/Round1/Page2'
import C3Unit2HardRound1P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit1/Round1/Page3'
import C3Unit2HardRound1P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit1/Round1/Page4'

import C3Unit2HardRound2P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit2/Round2/Page1'
import C3Unit2HardRound2P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit2/Round2/Page2'
import C3Unit2HardRound2P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit2/Round2/Page3'
import C3Unit2HardRound2P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit2/Round2/Page4'

import C3Unit2HardRound3P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit3/Round3/Page1'
import C3Unit2HardRound3P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit3/Round3/Page2'
import C3Unit2HardRound3P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit3/Round3/Page3'
import C3Unit2HardRound3P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit3/Round3/Page4'

import C3Unit2HardRound4P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit4/Round4/Page1'
import C3Unit2HardRound4P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit4/Round4/Page2'
import C3Unit2HardRound4P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit4/Round4/Page3'
import C3Unit2HardRound4P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit4/Round4/Page4'
import C3Unit2HardEnd from '@/components/chapterMaterials/Chapter3/Hard/Unit2/SubUnit4/Unit2End'

import C3Unit3HardIntro from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit1/Unit3Intro'
import C3Unit3HardRound1P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit1/Round1/Page1'
import C3Unit3HardRound1P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit1/Round1/Page2'
import C3Unit3HardRound1P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit1/Round1/Page3'
import C3Unit3HardRound1P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit1/Round1/Page4'

import C3Unit3HardRound2P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit2/Round2/Page1'
import C3Unit3HardRound2P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit2/Round2/Page2'
import C3Unit3HardRound2P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit2/Round2/Page3'
import C3Unit3HardRound2P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit2/Round2/Page4'

import C3Unit3HardRound3P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit3/Round3/Page1'
import C3Unit3HardRound3P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit3/Round3/Page2'
import C3Unit3HardRound3P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit3/Round3/Page3'
import C3Unit3HardRound3P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit3/Round3/Page4'

import C3Unit3HardRound4P1 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit4/Round4/Page1'
import C3Unit3HardRound4P2 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit4/Round4/Page2'
import C3Unit3HardRound4P3 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit4/Round4/Page3'
import C3Unit3HardRound4P4 from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit4/Round4/Page4'
import C3Unit3HardEnd from '@/components/chapterMaterials/Chapter3/Hard/Unit3/SubUnit4/Unit3End'


















////////////////////////////////////////// Chap4 Easy
import C4Unit1EasyIntro from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit1/Unit1Intro'
import C4Unit1EasyRound1P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit1/Round1/Page1'
import C4Unit1EasyRound1P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit1/Round1/Page2'
import C4Unit1EasyRound1P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit1/Round1/Page3'
import C4Unit1EasyRound1P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit1/Round1/Page4'

import C4Unit1EasyRound2P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit2/Round2/Page1'
import C4Unit1EasyRound2P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit2/Round2/Page2'
import C4Unit1EasyRound2P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit2/Round2/Page3'
import C4Unit1EasyRound2P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit2/Round2/Page4'

import C4Unit1EasyRound3P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit3/Round3/Page1'
import C4Unit1EasyRound3P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit3/Round3/Page2'
import C4Unit1EasyRound3P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit3/Round3/Page3'
import C4Unit1EasyRound3P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit3/Round3/Page4'

import C4Unit1EasyRound4P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit4/Round4/Page1'
import C4Unit1EasyRound4P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit4/Round4/Page2'
import C4Unit1EasyRound4P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit4/Round4/Page3'
import C4Unit1EasyRound4P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit4/Round4/Page4'
import C4Unit1EasyEnd from '@/components/chapterMaterials/Chapter4/Easy/Unit1/SubUnit4/Unit1End'

import C4Unit2EasyIntro from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit1/Unit2Intro'
import C4Unit2EasyRound1P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit1/Round1/Page1'
import C4Unit2EasyRound1P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit1/Round1/Page2'
import C4Unit2EasyRound1P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit1/Round1/Page3'
import C4Unit2EasyRound1P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit1/Round1/Page4'

import C4Unit2EasyRound2P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit2/Round2/Page1'
import C4Unit2EasyRound2P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit2/Round2/Page2'
import C4Unit2EasyRound2P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit2/Round2/Page3'
import C4Unit2EasyRound2P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit2/Round2/Page4'

import C4Unit2EasyRound3P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit3/Round3/Page1'
import C4Unit2EasyRound3P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit3/Round3/Page2'
import C4Unit2EasyRound3P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit3/Round3/Page3'
import C4Unit2EasyRound3P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit3/Round3/Page4'

import C4Unit2EasyRound4P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit4/Round4/Page1'
import C4Unit2EasyRound4P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit4/Round4/Page2'
import C4Unit2EasyRound4P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit4/Round4/Page3'
import C4Unit2EasyRound4P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit4/Round4/Page4'
import C4Unit2EasyEnd from '@/components/chapterMaterials/Chapter4/Easy/Unit2/SubUnit4/Unit2End'

import C4Unit3EasyIntro from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit1/Unit3Intro'
import C4Unit3EasyRound1P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit1/Round1/Page1'
import C4Unit3EasyRound1P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit1/Round1/Page2'
import C4Unit3EasyRound1P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit1/Round1/Page3'
import C4Unit3EasyRound1P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit1/Round1/Page4'

import C4Unit3EasyRound2P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit2/Round2/Page1'
import C4Unit3EasyRound2P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit2/Round2/Page2'
import C4Unit3EasyRound2P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit2/Round2/Page3'
import C4Unit3EasyRound2P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit2/Round2/Page4'

import C4Unit3EasyRound3P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit3/Round3/Page1'
import C4Unit3EasyRound3P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit3/Round3/Page2'
import C4Unit3EasyRound3P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit3/Round3/Page3'
import C4Unit3EasyRound3P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit3/Round3/Page4'

import C4Unit3EasyRound4P1 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit4/Round4/Page1'
import C4Unit3EasyRound4P2 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit4/Round4/Page2'
import C4Unit3EasyRound4P3 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit4/Round4/Page3'
import C4Unit3EasyRound4P4 from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit4/Round4/Page4'
import C4Unit3EasyEnd from '@/components/chapterMaterials/Chapter4/Easy/Unit3/SubUnit4/Unit3End'


import C4Unit1MediumIntro from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit1/Unit1Intro'
import C4Unit1MediumRound1P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit1/Round1/Page1'
import C4Unit1MediumRound1P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit1/Round1/Page2'
import C4Unit1MediumRound1P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit1/Round1/Page3'
import C4Unit1MediumRound1P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit1/Round1/Page4'

import C4Unit1MediumRound2P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit2/Round2/Page1'
import C4Unit1MediumRound2P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit2/Round2/Page2'
import C4Unit1MediumRound2P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit2/Round2/Page3'
import C4Unit1MediumRound2P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit2/Round2/Page4'

import C4Unit1MediumRound3P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit3/Round3/Page1'
import C4Unit1MediumRound3P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit3/Round3/Page2'
import C4Unit1MediumRound3P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit3/Round3/Page3'
import C4Unit1MediumRound3P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit3/Round3/Page4'

import C4Unit1MediumRound4P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit4/Round4/Page1'
import C4Unit1MediumRound4P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit4/Round4/Page2'
import C4Unit1MediumRound4P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit4/Round4/Page3'
import C4Unit1MediumRound4P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit4/Round4/Page4'
import C4Unit1MediumEnd from '@/components/chapterMaterials/Chapter4/Medium/Unit1/SubUnit4/Unit1End'

import C4Unit2MediumIntro from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit1/Unit2Intro'
import C4Unit2MediumRound1P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit1/Round1/Page1'
import C4Unit2MediumRound1P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit1/Round1/Page2'
import C4Unit2MediumRound1P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit1/Round1/Page3'
import C4Unit2MediumRound1P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit1/Round1/Page4'

import C4Unit2MediumRound2P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit2/Round2/Page1'
import C4Unit2MediumRound2P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit2/Round2/Page2'
import C4Unit2MediumRound2P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit2/Round2/Page3'
import C4Unit2MediumRound2P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit2/Round2/Page4'

import C4Unit2MediumRound3P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit3/Round3/Page1'
import C4Unit2MediumRound3P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit3/Round3/Page2'
import C4Unit2MediumRound3P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit3/Round3/Page3'
import C4Unit2MediumRound3P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit3/Round3/Page4'

import C4Unit2MediumRound4P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit4/Round4/Page1'
import C4Unit2MediumRound4P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit4/Round4/Page2'
import C4Unit2MediumRound4P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit4/Round4/Page3'
import C4Unit2MediumRound4P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit4/Round4/Page4'
import C4Unit2MediumEnd from '@/components/chapterMaterials/Chapter4/Medium/Unit2/SubUnit4/Unit2End'

import C4Unit3MediumIntro from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit1/Unit3Intro'
import C4Unit3MediumRound1P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit1/Round1/Page1'
import C4Unit3MediumRound1P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit1/Round1/Page2'
import C4Unit3MediumRound1P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit1/Round1/Page3'
import C4Unit3MediumRound1P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit1/Round1/Page4'

import C4Unit3MediumRound2P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit2/Round2/Page1'
import C4Unit3MediumRound2P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit2/Round2/Page2'
import C4Unit3MediumRound2P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit2/Round2/Page3'
import C4Unit3MediumRound2P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit2/Round2/Page4'

import C4Unit3MediumRound3P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit3/Round3/Page1'
import C4Unit3MediumRound3P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit3/Round3/Page2'
import C4Unit3MediumRound3P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit3/Round3/Page3'
import C4Unit3MediumRound3P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit3/Round3/Page4'

import C4Unit3MediumRound4P1 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit4/Round4/Page1'
import C4Unit3MediumRound4P2 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit4/Round4/Page2'
import C4Unit3MediumRound4P3 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit4/Round4/Page3'
import C4Unit3MediumRound4P4 from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit4/Round4/Page4'
import C4Unit3MediumEnd from '@/components/chapterMaterials/Chapter4/Medium/Unit3/SubUnit4/Unit3End'

import C4Unit1HardIntro from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit1/Unit1Intro'
import C4Unit1HardRound1P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit1/Round1/Page1'
import C4Unit1HardRound1P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit1/Round1/Page2'
import C4Unit1HardRound1P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit1/Round1/Page3'
import C4Unit1HardRound1P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit1/Round1/Page4'

import C4Unit1HardRound2P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit2/Round2/Page1'
import C4Unit1HardRound2P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit2/Round2/Page2'
import C4Unit1HardRound2P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit2/Round2/Page3'
import C4Unit1HardRound2P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit2/Round2/Page4'

import C4Unit1HardRound3P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit3/Round3/Page1'
import C4Unit1HardRound3P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit3/Round3/Page2'
import C4Unit1HardRound3P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit3/Round3/Page3'
import C4Unit1HardRound3P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit3/Round3/Page4'

import C4Unit1HardRound4P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit4/Round4/Page1'
import C4Unit1HardRound4P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit4/Round4/Page2'
import C4Unit1HardRound4P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit4/Round4/Page3'
import C4Unit1HardRound4P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit4/Round4/Page4'
import C4Unit1HardEnd from '@/components/chapterMaterials/Chapter4/Hard/Unit1/SubUnit4/Unit1End'

import C4Unit2HardIntro from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit1/Unit2Intro'
import C4Unit2HardRound1P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit1/Round1/Page1'
import C4Unit2HardRound1P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit1/Round1/Page2'
import C4Unit2HardRound1P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit1/Round1/Page3'
import C4Unit2HardRound1P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit1/Round1/Page4'

import C4Unit2HardRound2P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit2/Round2/Page1'
import C4Unit2HardRound2P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit2/Round2/Page2'
import C4Unit2HardRound2P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit2/Round2/Page3'
import C4Unit2HardRound2P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit2/Round2/Page4'

import C4Unit2HardRound3P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit3/Round3/Page1'
import C4Unit2HardRound3P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit3/Round3/Page2'
import C4Unit2HardRound3P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit3/Round3/Page3'
import C4Unit2HardRound3P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit3/Round3/Page4'

import C4Unit2HardRound4P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit4/Round4/Page1'
import C4Unit2HardRound4P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit4/Round4/Page2'
import C4Unit2HardRound4P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit4/Round4/Page3'
import C4Unit2HardRound4P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit4/Round4/Page4'
import C4Unit2HardEnd from '@/components/chapterMaterials/Chapter4/Hard/Unit2/SubUnit4/Unit2End'

import C4Unit3HardIntro from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit1/Unit3Intro'
import C4Unit3HardRound1P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit1/Round1/Page1'
import C4Unit3HardRound1P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit1/Round1/Page2'
import C4Unit3HardRound1P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit1/Round1/Page3'
import C4Unit3HardRound1P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit1/Round1/Page4'

import C4Unit3HardRound2P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit2/Round2/Page1'
import C4Unit3HardRound2P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit2/Round2/Page2'
import C4Unit3HardRound2P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit2/Round2/Page3'
import C4Unit3HardRound2P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit2/Round2/Page4'

import C4Unit3HardRound3P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit3/Round3/Page1'
import C4Unit3HardRound3P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit3/Round3/Page2'
import C4Unit3HardRound3P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit3/Round3/Page3'
import C4Unit3HardRound3P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit3/Round3/Page4'

import C4Unit3HardRound4P1 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit4/Round4/Page1'
import C4Unit3HardRound4P2 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit4/Round4/Page2'
import C4Unit3HardRound4P3 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit4/Round4/Page3'
import C4Unit3HardRound4P4 from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit4/Round4/Page4'
import C4Unit3HardEnd from '@/components/chapterMaterials/Chapter4/Hard/Unit3/SubUnit4/Unit3End'




























//////////////////////////////////////////  chap5 Easy
import C5Unit1EasyIntro from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit1/Unit1Intro'
import C5Unit1EasyRound1P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit1/Round1/Page1'
import C5Unit1EasyRound1P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit1/Round1/Page2'
import C5Unit1EasyRound1P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit1/Round1/Page3'
import C5Unit1EasyRound1P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit1/Round1/Page4'

import C5Unit1EasyRound2P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit2/Round2/Page1'
import C5Unit1EasyRound2P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit2/Round2/Page2'
import C5Unit1EasyRound2P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit2/Round2/Page3'
import C5Unit1EasyRound2P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit2/Round2/Page4'

import C5Unit1EasyRound3P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit3/Round3/Page1'
import C5Unit1EasyRound3P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit3/Round3/Page2'
import C5Unit1EasyRound3P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit3/Round3/Page3'
import C5Unit1EasyRound3P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit3/Round3/Page4'

import C5Unit1EasyRound4P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit4/Round4/Page1'
import C5Unit1EasyRound4P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit4/Round4/Page2'
import C5Unit1EasyRound4P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit4/Round4/Page3'
import C5Unit1EasyRound4P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit4/Round4/Page4'
import C5Unit1EasyEnd from '@/components/chapterMaterials/Chapter5/Easy/Unit1/SubUnit4/Unit1End'

import C5Unit2EasyIntro from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit1/Unit2Intro'
import C5Unit2EasyRound1P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit1/Round1/Page1'
import C5Unit2EasyRound1P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit1/Round1/Page2'
import C5Unit2EasyRound1P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit1/Round1/Page3'
import C5Unit2EasyRound1P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit1/Round1/Page4'

import C5Unit2EasyRound2P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit2/Round2/Page1'
import C5Unit2EasyRound2P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit2/Round2/Page2'
import C5Unit2EasyRound2P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit2/Round2/Page3'
import C5Unit2EasyRound2P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit2/Round2/Page4'

import C5Unit2EasyRound3P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit3/Round3/Page1'
import C5Unit2EasyRound3P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit3/Round3/Page2'
import C5Unit2EasyRound3P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit3/Round3/Page3'
import C5Unit2EasyRound3P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit3/Round3/Page4'

import C5Unit2EasyRound4P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit4/Round4/Page1'
import C5Unit2EasyRound4P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit4/Round4/Page2'
import C5Unit2EasyRound4P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit4/Round4/Page3'
import C5Unit2EasyRound4P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit4/Round4/Page4'
import C5Unit2EasyEnd from '@/components/chapterMaterials/Chapter5/Easy/Unit2/SubUnit4/Unit2End'

import C5Unit3EasyIntro from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit1/Unit3Intro'
import C5Unit3EasyRound1P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit1/Round1/Page1'
import C5Unit3EasyRound1P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit1/Round1/Page2'
import C5Unit3EasyRound1P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit1/Round1/Page3'
import C5Unit3EasyRound1P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit1/Round1/Page4'

import C5Unit3EasyRound2P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit2/Round2/Page1'
import C5Unit3EasyRound2P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit2/Round2/Page2'
import C5Unit3EasyRound2P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit2/Round2/Page3'
import C5Unit3EasyRound2P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit2/Round2/Page4'

import C5Unit3EasyRound3P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit3/Round3/Page1'
import C5Unit3EasyRound3P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit3/Round3/Page2'
import C5Unit3EasyRound3P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit3/Round3/Page3'
import C5Unit3EasyRound3P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit3/Round3/Page4'

import C5Unit3EasyRound4P1 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit4/Round4/Page1'
import C5Unit3EasyRound4P2 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit4/Round4/Page2'
import C5Unit3EasyRound4P3 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit4/Round4/Page3'
import C5Unit3EasyRound4P4 from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit4/Round4/Page4'
import C5Unit3EasyEnd from '@/components/chapterMaterials/Chapter5/Easy/Unit3/SubUnit4/Unit3End'

//////////////////////////////////////////  chap5 Medium
import C5Unit1MediumIntro from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit1/Unit1Intro'
import C5Unit1MediumRound1P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit1/Round1/Page1'
import C5Unit1MediumRound1P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit1/Round1/Page2'
import C5Unit1MediumRound1P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit1/Round1/Page3'
import C5Unit1MediumRound1P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit1/Round1/Page4'

import C5Unit1MediumRound2P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit2/Round2/Page1'
import C5Unit1MediumRound2P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit2/Round2/Page2'
import C5Unit1MediumRound2P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit2/Round2/Page3'
import C5Unit1MediumRound2P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit2/Round2/Page4'

import C5Unit1MediumRound3P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit3/Round3/Page1'
import C5Unit1MediumRound3P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit3/Round3/Page2'
import C5Unit1MediumRound3P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit3/Round3/Page3'
import C5Unit1MediumRound3P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit3/Round3/Page4'

import C5Unit1MediumRound4P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit4/Round4/Page1'
import C5Unit1MediumRound4P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit4/Round4/Page2'
import C5Unit1MediumRound4P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit4/Round4/Page3'
import C5Unit1MediumRound4P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit4/Round4/Page4'
import C5Unit1MediumEnd from '@/components/chapterMaterials/Chapter5/Medium/Unit1/SubUnit4/Unit1End'

import C5Unit2MediumIntro from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit1/Unit2Intro'
import C5Unit2MediumRound1P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit1/Round1/Page1'
import C5Unit2MediumRound1P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit1/Round1/Page2'
import C5Unit2MediumRound1P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit1/Round1/Page3'
import C5Unit2MediumRound1P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit1/Round1/Page4'

import C5Unit2MediumRound2P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit2/Round2/Page1'
import C5Unit2MediumRound2P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit2/Round2/Page2'
import C5Unit2MediumRound2P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit2/Round2/Page3'
import C5Unit2MediumRound2P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit2/Round2/Page4'

import C5Unit2MediumRound3P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit3/Round3/Page1'
import C5Unit2MediumRound3P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit3/Round3/Page2'
import C5Unit2MediumRound3P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit3/Round3/Page3'
import C5Unit2MediumRound3P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit3/Round3/Page4'

import C5Unit2MediumRound4P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit4/Round4/Page1'
import C5Unit2MediumRound4P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit4/Round4/Page2'
import C5Unit2MediumRound4P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit4/Round4/Page3'
import C5Unit2MediumRound4P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit4/Round4/Page4'
import C5Unit2MediumEnd from '@/components/chapterMaterials/Chapter5/Medium/Unit2/SubUnit4/Unit2End'

import C5Unit3MediumIntro from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit1/Unit3Intro'
import C5Unit3MediumRound1P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit1/Round1/Page1'
import C5Unit3MediumRound1P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit1/Round1/Page2'
import C5Unit3MediumRound1P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit1/Round1/Page3'
import C5Unit3MediumRound1P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit1/Round1/Page4'

import C5Unit3MediumRound2P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit2/Round2/Page1'
import C5Unit3MediumRound2P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit2/Round2/Page2'
import C5Unit3MediumRound2P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit2/Round2/Page3'
import C5Unit3MediumRound2P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit2/Round2/Page4'

import C5Unit3MediumRound3P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit3/Round3/Page1'
import C5Unit3MediumRound3P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit3/Round3/Page2'
import C5Unit3MediumRound3P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit3/Round3/Page3'
import C5Unit3MediumRound3P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit3/Round3/Page4'

import C5Unit3MediumRound4P1 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit4/Round4/Page1'
import C5Unit3MediumRound4P2 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit4/Round4/Page2'
import C5Unit3MediumRound4P3 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit4/Round4/Page3'
import C5Unit3MediumRound4P4 from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit4/Round4/Page4'
import C5Unit3MediumEnd from '@/components/chapterMaterials/Chapter5/Medium/Unit3/SubUnit4/Unit3End'

//////////////////////////////////////////  chap5 Hard
import C5Unit1HardIntro from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit1/Unit1Intro'
import C5Unit1HardRound1P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit1/Round1/Page1'
import C5Unit1HardRound1P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit1/Round1/Page2'
import C5Unit1HardRound1P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit1/Round1/Page3'
import C5Unit1HardRound1P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit1/Round1/Page4'

import C5Unit1HardRound2P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit2/Round2/Page1'
import C5Unit1HardRound2P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit2/Round2/Page2'
import C5Unit1HardRound2P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit2/Round2/Page3'
import C5Unit1HardRound2P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit2/Round2/Page4'

import C5Unit1HardRound3P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit3/Round3/Page1'
import C5Unit1HardRound3P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit3/Round3/Page2'
import C5Unit1HardRound3P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit3/Round3/Page3'
import C5Unit1HardRound3P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit3/Round3/Page4'

import C5Unit1HardRound4P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit4/Round4/Page1'
import C5Unit1HardRound4P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit4/Round4/Page2'
import C5Unit1HardRound4P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit4/Round4/Page3'
import C5Unit1HardRound4P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit4/Round4/Page4'
import C5Unit1HardEnd from '@/components/chapterMaterials/Chapter5/Hard/Unit1/SubUnit4/Unit1End'

import C5Unit2HardIntro from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit1/Unit2Intro'
import C5Unit2HardRound1P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit1/Round1/Page1'
import C5Unit2HardRound1P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit1/Round1/Page2'
import C5Unit2HardRound1P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit1/Round1/Page3'
import C5Unit2HardRound1P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit1/Round1/Page4'

import C5Unit2HardRound2P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit2/Round2/Page1'
import C5Unit2HardRound2P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit2/Round2/Page2'
import C5Unit2HardRound2P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit2/Round2/Page3'
import C5Unit2HardRound2P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit2/Round2/Page4'

import C5Unit2HardRound3P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit3/Round3/Page1'
import C5Unit2HardRound3P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit3/Round3/Page2'
import C5Unit2HardRound3P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit3/Round3/Page3'
import C5Unit2HardRound3P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit3/Round3/Page4'

import C5Unit2HardRound4P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit4/Round4/Page1'
import C5Unit2HardRound4P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit4/Round4/Page2'
import C5Unit2HardRound4P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit4/Round4/Page3'
import C5Unit2HardRound4P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit4/Round4/Page4'
import C5Unit2HardEnd from '@/components/chapterMaterials/Chapter5/Hard/Unit2/SubUnit4/Unit2End'

import C5Unit3HardIntro from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit1/Unit3Intro'
import C5Unit3HardRound1P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit1/Round1/Page1'
import C5Unit3HardRound1P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit1/Round1/Page2'
import C5Unit3HardRound1P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit1/Round1/Page3'
import C5Unit3HardRound1P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit1/Round1/Page4'

import C5Unit3HardRound2P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit2/Round2/Page1'
import C5Unit3HardRound2P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit2/Round2/Page2'
import C5Unit3HardRound2P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit2/Round2/Page3'
import C5Unit3HardRound2P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit2/Round2/Page4'

import C5Unit3HardRound3P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit3/Round3/Page1'
import C5Unit3HardRound3P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit3/Round3/Page2'
import C5Unit3HardRound3P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit3/Round3/Page3'
import C5Unit3HardRound3P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit3/Round3/Page4'

import C5Unit3HardRound4P1 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit4/Round4/Page1'
import C5Unit3HardRound4P2 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit4/Round4/Page2'
import C5Unit3HardRound4P3 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit4/Round4/Page3'
import C5Unit3HardRound4P4 from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit4/Round4/Page4'
import C5Unit3HardEnd from '@/components/chapterMaterials/Chapter5/Hard/Unit3/SubUnit4/Unit3End'




























//////////////////////////////////////////  chap6 Easy
import C6Unit1EasyIntro from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit1/Unit1Intro'
import C6Unit1EasyRound1P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit1/Round1/Page1'
import C6Unit1EasyRound1P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit1/Round1/Page2'
import C6Unit1EasyRound1P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit1/Round1/Page3'
import C6Unit1EasyRound1P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit1/Round1/Page4'

import C6Unit1EasyRound2P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit2/Round2/Page1'
import C6Unit1EasyRound2P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit2/Round2/Page2'
import C6Unit1EasyRound2P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit2/Round2/Page3'
import C6Unit1EasyRound2P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit2/Round2/Page4'

import C6Unit1EasyRound3P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit3/Round3/Page1'
import C6Unit1EasyRound3P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit3/Round3/Page2'
import C6Unit1EasyRound3P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit3/Round3/Page3'
import C6Unit1EasyRound3P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit3/Round3/Page4'

import C6Unit1EasyRound4P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit4/Round4/Page1'
import C6Unit1EasyRound4P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit4/Round4/Page2'
import C6Unit1EasyRound4P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit4/Round4/Page3'
import C6Unit1EasyRound4P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit4/Round4/Page4'

import C6Unit1EasyRound5P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit5/Round5/Page1'
import C6Unit1EasyRound5P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit5/Round5/Page2'
import C6Unit1EasyRound5P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit5/Round5/Page3'
import C6Unit1EasyRound5P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit5/Round5/Page4'
import C6Unit1EasyEnd from '@/components/chapterMaterials/Chapter6/Easy/Unit1/SubUnit5/Unit1End'

import C6Unit2EasyIntro from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit1/Unit2Intro'
import C6Unit2EasyRound1P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit1/Round1/Page1'
import C6Unit2EasyRound1P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit1/Round1/Page2'
import C6Unit2EasyRound1P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit1/Round1/Page3'
import C6Unit2EasyRound1P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit1/Round1/Page4'

import C6Unit2EasyRound2P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit2/Round2/Page1'
import C6Unit2EasyRound2P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit2/Round2/Page2'
import C6Unit2EasyRound2P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit2/Round2/Page3'
import C6Unit2EasyRound2P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit2/Round2/Page4'

import C6Unit2EasyRound3P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit3/Round3/Page1'
import C6Unit2EasyRound3P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit3/Round3/Page2'
import C6Unit2EasyRound3P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit3/Round3/Page3'
import C6Unit2EasyRound3P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit3/Round3/Page4'

import C6Unit2EasyRound4P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit4/Round4/Page1'
import C6Unit2EasyRound4P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit4/Round4/Page2'
import C6Unit2EasyRound4P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit4/Round4/Page3'
import C6Unit2EasyRound4P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit4/Round4/Page4'
import C6Unit2EasyEnd from '@/components/chapterMaterials/Chapter6/Easy/Unit2/SubUnit4/Unit2End'

import C6Unit3EasyIntro from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit1/Unit3Intro'
import C6Unit3EasyRound1P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit1/Round1/Page1'
import C6Unit3EasyRound1P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit1/Round1/Page2'
import C6Unit3EasyRound1P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit1/Round1/Page3'
import C6Unit3EasyRound1P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit1/Round1/Page4'

import C6Unit3EasyRound2P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit2/Round2/Page1'
import C6Unit3EasyRound2P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit2/Round2/Page2'
import C6Unit3EasyRound2P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit2/Round2/Page3'
import C6Unit3EasyRound2P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit2/Round2/Page4'

import C6Unit3EasyRound3P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit3/Round3/Page1'
import C6Unit3EasyRound3P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit3/Round3/Page2'
import C6Unit3EasyRound3P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit3/Round3/Page3'
import C6Unit3EasyRound3P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit3/Round3/Page4'

import C6Unit3EasyRound4P1 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit4/Round4/Page1'
import C6Unit3EasyRound4P2 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit4/Round4/Page2'
import C6Unit3EasyRound4P3 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit4/Round4/Page3'
import C6Unit3EasyRound4P4 from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit4/Round4/Page4'
import C6Unit3EasyEnd from '@/components/chapterMaterials/Chapter6/Easy/Unit3/SubUnit4/Unit3End'

//////////////////////////////////////////  chap6 Medium
import C6Unit1MediumIntro from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit1/Unit1Intro'
import C6Unit1MediumRound1P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit1/Round1/Page1'
import C6Unit1MediumRound1P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit1/Round1/Page2'
import C6Unit1MediumRound1P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit1/Round1/Page3'
import C6Unit1MediumRound1P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit1/Round1/Page4'

import C6Unit1MediumRound2P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit2/Round2/Page1'
import C6Unit1MediumRound2P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit2/Round2/Page2'
import C6Unit1MediumRound2P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit2/Round2/Page3'
import C6Unit1MediumRound2P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit2/Round2/Page4'

import C6Unit1MediumRound3P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit3/Round3/Page1'
import C6Unit1MediumRound3P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit3/Round3/Page2'
import C6Unit1MediumRound3P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit3/Round3/Page3'
import C6Unit1MediumRound3P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit3/Round3/Page4'

import C6Unit1MediumRound4P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit4/Round4/Page1'
import C6Unit1MediumRound4P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit4/Round4/Page2'
import C6Unit1MediumRound4P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit4/Round4/Page3'
import C6Unit1MediumRound4P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit4/Round4/Page4'

import C6Unit1MediumRound5P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit5/Round5/Page1'
import C6Unit1MediumRound5P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit5/Round5/Page2'
import C6Unit1MediumRound5P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit5/Round5/Page3'
import C6Unit1MediumRound5P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit5/Round5/Page4'
import C6Unit1MediumEnd from '@/components/chapterMaterials/Chapter6/Medium/Unit1/SubUnit5/Unit1End'

import C6Unit2MediumIntro from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit1/Unit2Intro'
import C6Unit2MediumRound1P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit1/Round1/Page1'
import C6Unit2MediumRound1P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit1/Round1/Page2'
import C6Unit2MediumRound1P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit1/Round1/Page3'
import C6Unit2MediumRound1P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit1/Round1/Page4'

import C6Unit2MediumRound2P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit2/Round2/Page1'
import C6Unit2MediumRound2P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit2/Round2/Page2'
import C6Unit2MediumRound2P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit2/Round2/Page3'
import C6Unit2MediumRound2P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit2/Round2/Page4'

import C6Unit2MediumRound3P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit3/Round3/Page1'
import C6Unit2MediumRound3P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit3/Round3/Page2'
import C6Unit2MediumRound3P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit3/Round3/Page3'
import C6Unit2MediumRound3P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit3/Round3/Page4'

import C6Unit2MediumRound4P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit4/Round4/Page1'
import C6Unit2MediumRound4P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit4/Round4/Page2'
import C6Unit2MediumRound4P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit4/Round4/Page3'
import C6Unit2MediumRound4P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit4/Round4/Page4'
import C6Unit2MediumEnd from '@/components/chapterMaterials/Chapter6/Medium/Unit2/SubUnit4/Unit2End'

import C6Unit3MediumIntro from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit1/Unit3Intro'
import C6Unit3MediumRound1P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit1/Round1/Page1'
import C6Unit3MediumRound1P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit1/Round1/Page2'
import C6Unit3MediumRound1P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit1/Round1/Page3'
import C6Unit3MediumRound1P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit1/Round1/Page4'

import C6Unit3MediumRound2P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit2/Round2/Page1'
import C6Unit3MediumRound2P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit2/Round2/Page2'
import C6Unit3MediumRound2P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit2/Round2/Page3'
import C6Unit3MediumRound2P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit2/Round2/Page4'

import C6Unit3MediumRound3P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit3/Round3/Page1'
import C6Unit3MediumRound3P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit3/Round3/Page2'
import C6Unit3MediumRound3P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit3/Round3/Page3'
import C6Unit3MediumRound3P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit3/Round3/Page4'

import C6Unit3MediumRound4P1 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit4/Round4/Page1'
import C6Unit3MediumRound4P2 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit4/Round4/Page2'
import C6Unit3MediumRound4P3 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit4/Round4/Page3'
import C6Unit3MediumRound4P4 from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit4/Round4/Page4'
import C6Unit3MediumEnd from '@/components/chapterMaterials/Chapter6/Medium/Unit3/SubUnit4/Unit3End'

//////////////////////////////////////////  chap6 Hard
import C6Unit1HardIntro from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit1/Unit1Intro'
import C6Unit1HardRound1P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit1/Round1/Page1'
import C6Unit1HardRound1P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit1/Round1/Page2'
import C6Unit1HardRound1P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit1/Round1/Page3'
import C6Unit1HardRound1P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit1/Round1/Page4'

import C6Unit1HardRound2P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit2/Round2/Page1'
import C6Unit1HardRound2P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit2/Round2/Page2'
import C6Unit1HardRound2P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit2/Round2/Page3'
import C6Unit1HardRound2P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit2/Round2/Page4'

import C6Unit1HardRound3P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit3/Round3/Page1'
import C6Unit1HardRound3P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit3/Round3/Page2'
import C6Unit1HardRound3P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit3/Round3/Page3'
import C6Unit1HardRound3P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit3/Round3/Page4'

import C6Unit1HardRound4P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit4/Round4/Page1'
import C6Unit1HardRound4P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit4/Round4/Page2'
import C6Unit1HardRound4P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit4/Round4/Page3'
import C6Unit1HardRound4P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit4/Round4/Page4'

import C6Unit1HardRound5P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit5/Round5/Page1'
import C6Unit1HardRound5P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit5/Round5/Page2'
import C6Unit1HardRound5P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit5/Round5/Page3'
import C6Unit1HardRound5P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit5/Round5/Page4'
import C6Unit1HardEnd from '@/components/chapterMaterials/Chapter6/Hard/Unit1/SubUnit5/Unit1End'

import C6Unit2HardIntro from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit1/Unit2Intro'
import C6Unit2HardRound1P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit1/Round1/Page1'
import C6Unit2HardRound1P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit1/Round1/Page2'
import C6Unit2HardRound1P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit1/Round1/Page3'
import C6Unit2HardRound1P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit1/Round1/Page4'

import C6Unit2HardRound2P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit2/Round2/Page1'
import C6Unit2HardRound2P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit2/Round2/Page2'
import C6Unit2HardRound2P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit2/Round2/Page3'
import C6Unit2HardRound2P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit2/Round2/Page4'

import C6Unit2HardRound3P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit3/Round3/Page1'
import C6Unit2HardRound3P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit3/Round3/Page2'
import C6Unit2HardRound3P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit3/Round3/Page3'
import C6Unit2HardRound3P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit3/Round3/Page4'

import C6Unit2HardRound4P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit4/Round4/Page1'
import C6Unit2HardRound4P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit4/Round4/Page2'
import C6Unit2HardRound4P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit4/Round4/Page3'
import C6Unit2HardRound4P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit4/Round4/Page4'
import C6Unit2HardEnd from '@/components/chapterMaterials/Chapter6/Hard/Unit2/SubUnit4/Unit2End'

import C6Unit3HardIntro from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit1/Unit3Intro'
import C6Unit3HardRound1P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit1/Round1/Page1'
import C6Unit3HardRound1P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit1/Round1/Page2'
import C6Unit3HardRound1P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit1/Round1/Page3'
import C6Unit3HardRound1P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit1/Round1/Page4'

import C6Unit3HardRound2P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit2/Round2/Page1'
import C6Unit3HardRound2P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit2/Round2/Page2'
import C6Unit3HardRound2P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit2/Round2/Page3'
import C6Unit3HardRound2P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit2/Round2/Page4'

import C6Unit3HardRound3P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit3/Round3/Page1'
import C6Unit3HardRound3P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit3/Round3/Page2'
import C6Unit3HardRound3P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit3/Round3/Page3'
import C6Unit3HardRound3P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit3/Round3/Page4'

import C6Unit3HardRound4P1 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit4/Round4/Page1'
import C6Unit3HardRound4P2 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit4/Round4/Page2'
import C6Unit3HardRound4P3 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit4/Round4/Page3'
import C6Unit3HardRound4P4 from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit4/Round4/Page4'
import C6Unit3HardEnd from '@/components/chapterMaterials/Chapter6/Hard/Unit3/SubUnit4/Unit3End'





















































































import UnitSelection from '@/components/chapterMaterials/Chapter1/UnitSelection'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes:[
        {
        path: '/',
        name: 'UnitHome',
        component: UnitHome,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/result',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/test',
        name: 'GMap',
        component: GMap
    },
    {
        path: '/testPage1',
        name: 'TestPage1',
        component: TestPage1
    },
    {
        path: '/result/pre-postchart',
        name: 'PrePostChart',
        component: PrePostChart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    // {
    //     path: '/home',
    //     name: 'UnitHome',
    //     component: UnitHome
    // },













    {
        path: '/pretestIntro',
        name: 'PreTestIntro',
        component: PreTestIntro
    },
    {
        path: '/pretest1',
        name: 'PreTest',
        component: PreTest
    },
    {
        path: '/pretest2',
        name: 'PreTest2',
        component: PreTest2
    },  
    {
        path: '/pretest3',
        name: 'PreTest3',
        component: PreTest3
    },
    {
        path: '/pretest4',
        name: 'PreTest4',
        component: PreTest4
    },
    {
        path: '/pretest5',
        name: 'PreTest5',
        component: PreTest5
    },
    {
        path: '/pretest6',
        name: 'PreTest6',
        component: PreTest6
    },
    {
        path: '/pretest7',
        name: 'PreTest7',
        component: PreTest7
    },
    {
        path: '/pretest8',
        name: 'PreTest8',
        component: PreTest8
    },
    {
        path: '/pretest9',
        name: 'PreTest9',
        component: PreTest9
    },
    {
        path: '/pretest10',
        name: 'PreTest10',
        component: PreTest10
    },
    {
        path: '/pretest11',
        name: 'PreTest11',
        component: PreTest11
    },
    {
        path: '/pretest12',
        name: 'PreTest12',
        component: PreTest12
    },
    {
        path: '/pretestscore',
        name: 'PreTestScore',
        component: PreTestScore
    },


    {
        path: '/posttest1',
        name: 'PostTest',
        component: PostTest
    },
    {
        path: '/posttest2',
        name: 'PostTest2',
        component: PostTest2
    },  
    {
        path: '/posttest3',
        name: 'PostTest3',
        component: PostTest3
    },
    {
        path: '/posttest4',
        name: 'PostTest4',
        component: PostTest4
    },
    {
        path: '/posttest5',
        name: 'PostTest5',
        component: PostTest5
    },
    {
        path: '/posttest6',
        name: 'PostTest6',
        component: PostTest6
    },
    {
        path: '/posttest7',
        name: 'PostTest7',
        component: PostTest7
    },
    {
        path: '/posttest8',
        name: 'PostTest8',
        component: PostTest8
    },
    {
        path: '/posttest9',
        name: 'PostTest9',
        component: PostTest9
    },
    {
        path: '/posttest10',
        name: 'PostTest10',
        component: PostTest10
    },
    {
        path: '/posttest11',
        name: 'PostTest11',
        component: PostTest11
    },
    {
        path: '/posttest12',
        name: 'PostTest12',
        component: PostTest12
    },
    {
        path: '/posttestscore',
        name: 'PostTestScore',
        component: PostTestScore
    },




    {
        path: '/Chapter1/quizintro',
        name: 'Chapter1QuizIntro',
        component: Chapter1QuizIntro
    },
    {
        path: '/Chapter1/quiz1',
        name: 'Chapter1Quiz1',
        component: Chapter1Quiz1
    },
    {
        path: '/Chapter1/quiz2',
        name: 'Chapter1Quiz2',
        component: Chapter1Quiz2
    },
    {
        path: '/Chapter1/quiz3',
        name: 'Chapter1Quiz3',
        component: Chapter1Quiz3
    },
    {
        path: '/Chapter1/quiz4',
        name: 'Chapter1Quiz4',
        component: Chapter1Quiz4
    },
    {
        path: '/Chapter1/quiz5',
        name: 'Chapter1Quiz5',
        component: Chapter1Quiz5
    },
    {
        path: '/Chapter1/quizscore',
        name: 'Chapter1QuizScore',
        component: Chapter1QuizScore
    },


    {
        path: '/Chapter2/quizintro',
        name: 'Chapter2QuizIntro',
        component: Chapter2QuizIntro
    },
    {
        path: '/Chapter2/quiz1',
        name: 'Chapter2Quiz1',
        component: Chapter2Quiz1
    },
    {
        path: '/Chapter2/quiz2',
        name: 'Chapter2Quiz2',
        component: Chapter2Quiz2
    },
    {
        path: '/Chapter2/quiz3',
        name: 'Chapter2Quiz3',
        component: Chapter2Quiz3
    },
    {
        path: '/Chapter2/quiz4',
        name: 'Chapter2Quiz4',
        component: Chapter2Quiz4
    },
    {
        path: '/Chapter2/quiz5',
        name: 'Chapter2Quiz5',
        component: Chapter2Quiz5
    },
    {
        path: '/Chapter2/quizscore',
        name: 'Chapter2QuizScore',
        component: Chapter2QuizScore
    },

    {
        path: '/Chapter3/quizintro',
        name: 'Chapter3QuizIntro',
        component: Chapter3QuizIntro
    },
    {
        path: '/Chapter3/quiz1',
        name: 'Chapter3Quiz1',
        component: Chapter3Quiz1
    },
    {
        path: '/Chapter3/quiz2',
        name: 'Chapter3Quiz2',
        component: Chapter3Quiz2
    },
    {
        path: '/Chapter3/quiz3',
        name: 'Chapter3Quiz3',
        component: Chapter3Quiz3
    },
    {
        path: '/Chapter3/quiz4',
        name: 'Chapter3Quiz4',
        component: Chapter3Quiz4
    },
    {
        path: '/Chapter3/quiz5',
        name: 'Chapter3Quiz5',
        component: Chapter3Quiz5
    },
    {
        path: '/Chapter3/quizscore',
        name: 'Chapter3QuizScore',
        component: Chapter3QuizScore
    },


    {
        path: '/Chapter4/quizintro',
        name: 'Chapter4QuizIntro',
        component: Chapter4QuizIntro
    },
    {
        path: '/Chapter4/quiz1',
        name: 'Chapter4Quiz1',
        component: Chapter4Quiz1
    },
    {
        path: '/Chapter4/quiz2',
        name: 'Chapter4Quiz2',
        component: Chapter4Quiz2
    },
    {
        path: '/Chapter4/quiz3',
        name: 'Chapter4Quiz3',
        component: Chapter4Quiz3
    },
    {
        path: '/Chapter4/quiz4',
        name: 'Chapter4Quiz4',
        component: Chapter4Quiz4
    },
    {
        path: '/Chapter4/quiz5',
        name: 'Chapter4Quiz5',
        component: Chapter4Quiz5
    },
    {
        path: '/Chapter4/quizscore',
        name: 'Chapter4QuizScore',
        component: Chapter4QuizScore
    },

    {
        path: '/Chapter5/quizintro',
        name: 'Chapter5QuizIntro',
        component: Chapter5QuizIntro
    },
    {
        path: '/Chapter5/quiz1',
        name: 'Chapter5Quiz1',
        component: Chapter5Quiz1
    },
    {
        path: '/Chapter5/quiz2',
        name: 'Chapter5Quiz2',
        component: Chapter5Quiz2
    },
    {
        path: '/Chapter5/quiz3',
        name: 'Chapter5Quiz3',
        component: Chapter5Quiz3
    },
    {
        path: '/Chapter5/quiz4',
        name: 'Chapter5Quiz4',
        component: Chapter5Quiz4
    },
    {
        path: '/Chapter5/quiz5',
        name: 'Chapter5Quiz5',
        component: Chapter5Quiz5
    },
    {
        path: '/Chapter5/quizscore',
        name: 'Chapter5QuizScore',
        component: Chapter5QuizScore
    },

    {
        path: '/Chapter6/quizintro',
        name: 'Chapter6QuizIntro',
        component: Chapter6QuizIntro
    },
    {
        path: '/Chapter6/quiz1',
        name: 'Chapter6Quiz1',
        component: Chapter6Quiz1
    },
    {
        path: '/Chapter6/quiz2',
        name: 'Chapter6Quiz2',
        component: Chapter6Quiz2
    },
    {
        path: '/Chapter6/quiz3',
        name: 'Chapter6Quiz3',
        component: Chapter6Quiz3
    },
    {
        path: '/Chapter6/quiz4',
        name: 'Chapter6Quiz4',
        component: Chapter6Quiz4
    },
    {
        path: '/Chapter6/quiz5',
        name: 'Chapter6Quiz5',
        component: Chapter6Quiz5
    },
    {
        path: '/Chapter6/quizscore',
        name: 'Chapter6QuizScore',
        component: Chapter6QuizScore
    },














    {
        path: '/chap1',
        name: 'Chapter1',
        component: Chapter1
    },
    {
        path: '/chap2',
        name: 'Chapter2',
        component: Chapter2
    },
    {
        path: '/chap1E',
        name: 'chap1Easy',
        component: chap1Easy
    },
    {
        path: '/chap1M',
        name: 'chap1Medium',
        component: chap1Medium
    },
    {
        path: '/chap1H',
        name: 'chap1Hard',
        component: chap1Hard
    },
    {
        path: '/chap2E',
        name: 'chap2Easy',
        component: chap2Easy
    },
    {
        path: '/chap2M',
        name: 'chap2Medium',
        component: chap2Medium
    },
    {
        path: '/chap2H',
        name: 'chap2Hard',
        component: chap2Hard
    },


    {
        path: '/chap3',
        name: 'Chapter3',
        component: Chapter3
    },
    {
        path: '/chap3E',
        name: 'chap3Easy',
        component: chap3Easy
    },
    {
        path: '/chap3M',
        name: 'chap3Medium',
        component: chap3Medium
    },
    {
        path: '/chap3H',
        name: 'chap3Hard',
        component: chap3Hard
    },

    {
        path: '/chap4',
        name: 'Chapter4',
        component: Chapter4
    },
    {
        path: '/chap4E',
        name: 'chap4Easy',
        component: chap4Easy
    },
    {
        path: '/chap4M',
        name: 'chap4Medium',
        component: chap4Medium
    },
    {
        path: '/chap4H',
        name: 'chap4Hard',
        component: chap4Hard
    },



    {
        path: '/chap5',
        name: 'Chapter5',
        component: Chapter5
    },
    {
        path: '/chap5E',
        name: 'chap5Easy',
        component: chap5Easy
    },
    {
        path: '/chap5M',
        name: 'chap5Medium',
        component: chap5Medium
    },
    {
        path: '/chap5H',
        name: 'chap5Hard',
        component: chap5Hard
    },

    {
        path: '/chap6',
        name: 'Chapter6',
        component: Chapter6
    },
    {
        path: '/chap6E',
        name: 'chap6Easy',
        component: chap6Easy
    },
    {
        path: '/chap6M',
        name: 'chap6Medium',
        component: chap6Medium
    },
    {
        path: '/chap6H',
        name: 'chap6Hard',
        component: chap6Hard
    },

    












/////////////// Chapter1 Easy Unit 1 Round 1
{
    path: '/chap1E/unit1/u1intro',
    name: 'C1Unit1EasyIntro',
    component: C1Unit1EasyIntro
},
{
    path: '/chap1E/unit1/u1p1',
    name: 'C1Unit1EasyRound1P1',
    component: C1Unit1EasyRound1P1
},
{
    path: '/chap1E/unit1/u1p2',
    name: 'C1Unit1EasyRound1P2',
    component: C1Unit1EasyRound1P2
},
{
    path: '/chap1E/unit1/u1p3',
    name: 'C1Unit1EasyRound1P3',
    component: C1Unit1EasyRound1P3
},
{
    path: '/chap1E/unit1/u1p4',
    name: 'C1Unit1EasyRound1P4',
    component: C1Unit1EasyRound1P4
},

/////////////// Chapter1 Easy Unit 1 Round 2
{
    path: '/chap1E/unit1/u2p1',
    name: 'C1Unit1EasyRound2P1',
    component: C1Unit1EasyRound2P1
},
{
    path: '/chap1E/unit1/u2p2',
    name: 'C1Unit1EasyRound2P2',
    component: C1Unit1EasyRound2P2
},
{
    path: '/chap1E/unit1/u2p3',
    name: 'C1Unit1EasyRound2P3',
    component: C1Unit1EasyRound2P3
},
{
    path: '/chap1E/unit1/u2p4',
    name: 'C1Unit1EasyRound2P4',
    component: C1Unit1EasyRound2P4
},

/////////////// Chapter1 Easy Unit 1 Round 3
{
    path: '/chap1E/unit1/u3p1',
    name: 'C1Unit1EasyRound3P1',
    component: C1Unit1EasyRound3P1
},
{
    path: '/chap1E/unit1/u3p2',
    name: 'C1Unit1EasyRound3P2',
    component: C1Unit1EasyRound3P2
},
{
    path: '/chap1E/unit1/u3p3',
    name: 'C1Unit1EasyRound3P3',
    component: C1Unit1EasyRound3P3
},
{
    path: '/chap1E/unit1/u3p4',
    name: 'C1Unit1EasyRound3P4',
    component: C1Unit1EasyRound3P4
},
{
    path: '/chap1E/unit1/u3p5',
    name: 'C1Unit1EasyRound3P5',
    component: C1Unit1EasyRound3P5
},

/////////////// Chapter1 Easy Unit 1 Round 4
{
    path: '/chap1E/unit1/u4p1',
    name: 'C1Unit1EasyRound4P1',
    component: C1Unit1EasyRound4P1
},
{
    path: '/chap1E/unit1/u4p2',
    name: 'C1Unit1EasyRound4P2',
    component: C1Unit1EasyRound4P2
},
{
    path: '/chap1E/unit1/u4p3',
    name: 'C1Unit1EasyRound4P3',
    component: C1Unit1EasyRound4P3
},
{
    path: '/chap1E/unit1/u4p4',
    name: 'C1Unit1EasyRound4P4',
    component: C1Unit1EasyRound4P4
},
{
    path: '/chap1E/unit1/u4p5',
    name: 'C1Unit1EasyRound4P5',
    component: C1Unit1EasyRound4P5
},

/////////////// Chapter1 Easy Unit 1 Round 5
{
    path: '/chap1E/unit1/u5p1',
    name: 'C1Unit1EasyRound5P1',
    component: C1Unit1EasyRound5P1
},
{
    path: '/chap1E/unit1/u5p2',
    name: 'C1Unit1EasyRound5P2',
    component: C1Unit1EasyRound5P2
},
{
    path: '/chap1E/unit1/u5p3',
    name: 'C1Unit1EasyRound5P3',
    component: C1Unit1EasyRound5P3
},
{
    path: '/chap1E/unit1/u5p4',
    name: 'C1Unit1EasyRound5P4',
    component: C1Unit1EasyRound5P4
},

/////////////// Chapter1 Easy Unit 1 Round 6
{
    path: '/chap1E/unit1/u6p1',
    name: 'C1Unit1EasyRound6P1',
    component: C1Unit1EasyRound6P1
},
{
    path: '/chap1E/unit1/u6p2',
    name: 'C1Unit1EasyRound6P2',
    component: C1Unit1EasyRound6P2
},
{
    path: '/chap1E/unit1/u6p3',
    name: 'C1Unit1EasyRound6P3',
    component: C1Unit1EasyRound6P3
},
{
    path: '/chap1E/unit1/u6p4',
    name: 'C1Unit1EasyRound6P4',
    component: C1Unit1EasyRound6P4
},
{
    path: '/chap1E/unit1/end',
    name: 'C1Unit1EasyEnd',
    component: C1Unit1EasyEnd
},


/////////////// Chapter1 Easy Unit 2 Round 1
{
    path: '/chap1E/unit2/u2intro',
    name: 'C1Unit2EasyIntro',
    component: C1Unit2EasyIntro
},
{
    path: '/chap1E/unit2/u1p1',
    name: 'C1Unit2EasyRound1P1',
    component: C1Unit2EasyRound1P1
},
{
    path: '/chap1E/unit2/u1p2',
    name: 'C1Unit2EasyRound1P2',
    component: C1Unit2EasyRound1P2
},
{
    path: '/chap1E/unit2/u1p3',
    name: 'C1Unit2EasyRound1P3',
    component: C1Unit2EasyRound1P3
},
{
    path: '/chap1E/unit2/u1p4',
    name: 'C1Unit2EasyRound1P4',
    component: C1Unit2EasyRound1P4
},

/////////////// Chapter1 Easy Unit 2 Round 2
{
    path: '/chap1E/unit2/u2p1',
    name: 'C1Unit2EasyRound2P1',
    component: C1Unit2EasyRound2P1
},
{
    path: '/chap1E/unit2/u2p2',
    name: 'C1Unit2EasyRound2P2',
    component: C1Unit2EasyRound2P2
},
{
    path: '/chap1E/unit2/u2p3',
    name: 'C1Unit2EasyRound2P3',
    component: C1Unit2EasyRound2P3
},
{
    path: '/chap1E/unit2/u2p4',
    name: 'C1Unit2EasyRound2P4',
    component: C1Unit2EasyRound2P4
},

/////////////// Chapter1 Easy Unit 2 Round 3
{
    path: '/chap1E/unit2/u3p1',
    name: 'C1Unit2EasyRound3P1',
    component: C1Unit2EasyRound3P1
},
{
    path: '/chap1E/unit2/u3p2',
    name: 'C1Unit2EasyRound3P2',
    component: C1Unit2EasyRound3P2
},
{
    path: '/chap1E/unit2/u3p3',
    name: 'C1Unit2EasyRound3P3',
    component: C1Unit2EasyRound3P3
},
{
    path: '/chap1E/unit2/u3p4',
    name: 'C1Unit2EasyRound3P4',
    component: C1Unit2EasyRound3P4
},

/////////////// Chapter1 Easy Unit 2 Round 4
{
    path: '/chap1E/unit2/u4p1',
    name: 'C1Unit2EasyRound4P1',
    component: C1Unit2EasyRound4P1
},
{
    path: '/chap1E/unit2/u4p2',
    name: 'C1Unit2EasyRound4P2',
    component: C1Unit2EasyRound4P2
},
{
    path: '/chap1E/unit2/u4p3',
    name: 'C1Unit2EasyRound4P3',
    component: C1Unit2EasyRound4P3
},
{
    path: '/chap1E/unit2/u4p4',
    name: 'C1Unit2EasyRound4P4',
    component: C1Unit2EasyRound4P4
},
{
    path: '/chap1E/unit2/u4p5',
    name: 'C1Unit2EasyRound4P5',
    component: C1Unit2EasyRound4P5
},

/////////////// Chapter1 Easy Unit 2 Round 5
{
    path: '/chap1E/unit2/u5p1',
    name: 'C1Unit2EasyRound5P1',
    component: C1Unit2EasyRound5P1
},
{
    path: '/chap1E/unit2/u5p2',
    name: 'C1Unit2EasyRound5P2',
    component: C1Unit2EasyRound5P2
},
{
    path: '/chap1E/unit2/u5p3',
    name: 'C1Unit2EasyRound5P3',
    component: C1Unit2EasyRound5P3
},
{
    path: '/chap1E/unit2/u5p4',
    name: 'C1Unit2EasyRound5P4',
    component: C1Unit2EasyRound5P4
},
{
    path: '/chap1E/unit2/end',
    name: 'C1Unit2EasyEnd',
    component: C1Unit2EasyEnd
},


/////////////// Chapter1 Easy Unit 3 Round 1
{
    path: '/chap1E/unit3/u3intro',
    name: 'C1Unit3EasyIntro',
    component: C1Unit3EasyIntro
},
{
    path: '/chap1E/unit3/u1p1',
    name: 'C1Unit3EasyRound1P1',
    component: C1Unit3EasyRound1P1
},
{
    path: '/chap1E/unit3/u1p2',
    name: 'C1Unit3EasyRound1P2',
    component: C1Unit3EasyRound1P2
},
{
    path: '/chap1E/unit3/u1p3',
    name: 'C1Unit3EasyRound1P3',
    component: C1Unit3EasyRound1P3
},
{
    path: '/chap1E/unit3/u1p4',
    name: 'C1Unit3EasyRound1P4',
    component: C1Unit3EasyRound1P4
},


/////////////// Chapter1 Easy Unit 3 Round 2
{
    path: '/chap1E/unit3/u2p1',
    name: 'C1Unit3EasyRound2P1',
    component: C1Unit3EasyRound2P1
},
{
    path: '/chap1E/unit3/u2p2',
    name: 'C1Unit3EasyRound2P2',
    component: C1Unit3EasyRound2P2
},
{
    path: '/chap1E/unit3/u2p3',
    name: 'C1Unit3EasyRound2P3',
    component: C1Unit3EasyRound2P3
},
{
    path: '/chap1E/unit3/u2p4',
    name: 'C1Unit3EasyRound2P4',
    component: C1Unit3EasyRound2P4
},

/////////////// Chapter1 Easy Unit 3 Round 3
{
    path: '/chap1E/unit3/u3p1',
    name: 'C1Unit3EasyRound3P1',
    component: C1Unit3EasyRound3P1
},
{
    path: '/chap1E/unit3/u3p2',
    name: 'C1Unit3EasyRound3P2',
    component: C1Unit3EasyRound3P2
},
{
    path: '/chap1E/unit3/u3p3',
    name: 'C1Unit3EasyRound3P3',
    component: C1Unit3EasyRound3P3
},
{
    path: '/chap1E/unit3/u3p4',
    name: 'C1Unit3EasyRound3P4',
    component: C1Unit3EasyRound3P4
},

/////////////// Chapter1 Easy Unit 3 Round 4
{
    path: '/chap1E/unit3/u4p1',
    name: 'C1Unit3EasyRound4P1',
    component: C1Unit3EasyRound4P1
},
{
    path: '/chap1E/unit3/u4p2',
    name: 'C1Unit3EasyRound4P2',
    component: C1Unit3EasyRound4P2
},
{
    path: '/chap1E/unit3/u4p3',
    name: 'C1Unit3EasyRound4P3',
    component: C1Unit3EasyRound4P3
},
{
    path: '/chap1E/unit3/u4p4',
    name: 'C1Unit3EasyRound4P4',
    component: C1Unit3EasyRound4P4
},
{
    path: '/chap1E/unit3/u4p5',
    name: 'C1Unit3EasyRound4P5',
    component: C1Unit3EasyRound4P5
},


/////////////// Chapter1 Easy Unit 3 Round 5
{
    path: '/chap1E/unit3/u5p1',
    name: 'C1Unit3EasyRound5P1',
    component: C1Unit3EasyRound5P1
},
{
    path: '/chap1E/unit3/u5p2',
    name: 'C1Unit3EasyRound5P2',
    component: C1Unit3EasyRound5P2
},
{
    path: '/chap1E/unit3/u5p3',
    name: 'C1Unit3EasyRound5P3',
    component: C1Unit3EasyRound5P3
},
{
    path: '/chap1E/unit3/u5p4',
    name: 'C1Unit3EasyRound5P4',
    component: C1Unit3EasyRound5P4
},
{
    path: '/chap1E/unit3/u5p5',
    name: 'C1Unit3EasyRound5P5',
    component: C1Unit3EasyRound5P5
},
{
    path: '/chap1E/unit3/end',
    name: 'C1Unit3EasyEnd',
    component: C1Unit3EasyEnd
},




/////////////// Chapter1 Medium Unit 1 Round 1
{
    path: '/chap1M/unit1/u1intro',
    name: 'C1Unit1MediumIntro',
    component: C1Unit1MediumIntro
},
{
    path: '/chap1M/unit1/u1p1',
    name: 'C1Unit1MediumRound1P1',
    component: C1Unit1MediumRound1P1
},
{
    path: '/chap1M/unit1/u1p2',
    name: 'C1Unit1MediumRound1P2',
    component: C1Unit1MediumRound1P2
},
{
    path: '/chap1M/unit1/u1p3',
    name: 'C1Unit1MediumRound1P3',
    component: C1Unit1MediumRound1P3
},
{
    path: '/chap1M/unit1/u1p4',
    name: 'C1Unit1MediumRound1P4',
    component: C1Unit1MediumRound1P4
},

/////////////// Chapter1 Medium Unit 1 Round 2
{
    path: '/chap1M/unit1/u2p1',
    name: 'C1Unit1MediumRound2P1',
    component: C1Unit1MediumRound2P1
},
{
    path: '/chap1M/unit1/u2p2',
    name: 'C1Unit1MediumRound2P2',
    component: C1Unit1MediumRound2P2
},
{
    path: '/chap1M/unit1/u2p3',
    name: 'C1Unit1MediumRound2P3',
    component: C1Unit1MediumRound2P3
},
{
    path: '/chap1M/unit1/u2p4',
    name: 'C1Unit1MediumRound2P4',
    component: C1Unit1MediumRound2P4
},

/////////////// Chapter1 Medium Unit 1 Round 3
{
    path: '/chap1M/unit1/u3p1',
    name: 'C1Unit1MediumRound3P1',
    component: C1Unit1MediumRound3P1
},
{
    path: '/chap1M/unit1/u3p2',
    name: 'C1Unit1MediumRound3P2',
    component: C1Unit1MediumRound3P2
},
{
    path: '/chap1M/unit1/u3p3',
    name: 'C1Unit1MediumRound3P3',
    component: C1Unit1MediumRound3P3
},
{
    path: '/chap1M/unit1/u3p4',
    name: 'C1Unit1MediumRound3P4',
    component: C1Unit1MediumRound3P4
},
{
    path: '/chap1M/unit1/u3p5',
    name: 'C1Unit1MediumRound3P5',
    component: C1Unit1MediumRound3P5
},

/////////////// Chapter1 Medium Unit 1 Round 4
{
    path: '/chap1M/unit1/u4p1',
    name: 'C1Unit1MediumRound4P1',
    component: C1Unit1MediumRound4P1
},
{
    path: '/chap1M/unit1/u4p2',
    name: 'C1Unit1MediumRound4P2',
    component: C1Unit1MediumRound4P2
},
{
    path: '/chap1M/unit1/u4p3',
    name: 'C1Unit1MediumRound4P3',
    component: C1Unit1MediumRound4P3
},
{
    path: '/chap1M/unit1/u4p4',
    name: 'C1Unit1MediumRound4P4',
    component: C1Unit1MediumRound4P4
},
{
    path: '/chap1M/unit1/u4p5',
    name: 'C1Unit1MediumRound4P5',
    component: C1Unit1MediumRound4P5
},

/////////////// Chapter1 Medium Unit 1 Round 5
{
    path: '/chap1M/unit1/u5p1',
    name: 'C1Unit1MediumRound5P1',
    component: C1Unit1MediumRound5P1
},
{
    path: '/chap1M/unit1/u5p2',
    name: 'C1Unit1MediumRound5P2',
    component: C1Unit1MediumRound5P2
},
{
    path: '/chap1M/unit1/u5p3',
    name: 'C1Unit1MediumRound5P3',
    component: C1Unit1MediumRound5P3
},
{
    path: '/chap1M/unit1/u5p4',
    name: 'C1Unit1MediumRound5P4',
    component: C1Unit1MediumRound5P4
},

/////////////// Chapter1 Medium Unit 1 Round 6
{
    path: '/chap1M/unit1/u6p1',
    name: 'C1Unit1MediumRound6P1',
    component: C1Unit1MediumRound6P1
},
{
    path: '/chap1M/unit1/u6p2',
    name: 'C1Unit1MediumRound6P2',
    component: C1Unit1MediumRound6P2
},
{
    path: '/chap1M/unit1/u6p3',
    name: 'C1Unit1MediumRound6P3',
    component: C1Unit1MediumRound6P3
},
{
    path: '/chap1M/unit1/u6p4',
    name: 'C1Unit1MediumRound6P4',
    component: C1Unit1MediumRound6P4
},
{
    path: '/chap1M/unit1/end',
    name: 'C1Unit1MediumEnd',
    component: C1Unit1MediumEnd
},


/////////////// Chapter1 Medium Unit 2 Round 1
{
    path: '/chap1M/unit2/u2intro',
    name: 'C1Unit2MediumIntro',
    component: C1Unit2MediumIntro
},
{
    path: '/chap1M/unit2/u1p1',
    name: 'C1Unit2MediumRound1P1',
    component: C1Unit2MediumRound1P1
},
{
    path: '/chap1M/unit2/u1p2',
    name: 'C1Unit2MediumRound1P2',
    component: C1Unit2MediumRound1P2
},
{
    path: '/chap1M/unit2/u1p3',
    name: 'C1Unit2MediumRound1P3',
    component: C1Unit2MediumRound1P3
},
{
    path: '/chap1M/unit2/u1p4',
    name: 'C1Unit2MediumRound1P4',
    component: C1Unit2MediumRound1P4
},

/////////////// Chapter1 Medium Unit 2 Round 2
{
    path: '/chap1M/unit2/u2p1',
    name: 'C1Unit2MediumRound2P1',
    component: C1Unit2MediumRound2P1
},
{
    path: '/chap1M/unit2/u2p2',
    name: 'C1Unit2MediumRound2P2',
    component: C1Unit2MediumRound2P2
},
{
    path: '/chap1M/unit2/u2p3',
    name: 'C1Unit2MediumRound2P3',
    component: C1Unit2MediumRound2P3
},
{
    path: '/chap1M/unit2/u2p4',
    name: 'C1Unit2MediumRound2P4',
    component: C1Unit2MediumRound2P4
},

/////////////// Chapter1 Medium Unit 2 Round 3
{
    path: '/chap1M/unit2/u3p1',
    name: 'C1Unit2MediumRound3P1',
    component: C1Unit2MediumRound3P1
},
{
    path: '/chap1M/unit2/u3p2',
    name: 'C1Unit2MediumRound3P2',
    component: C1Unit2MediumRound3P2
},
{
    path: '/chap1M/unit2/u3p3',
    name: 'C1Unit2MediumRound3P3',
    component: C1Unit2MediumRound3P3
},
{
    path: '/chap1M/unit2/u3p4',
    name: 'C1Unit2MediumRound3P4',
    component: C1Unit2MediumRound3P4
},

/////////////// Chapter1 Medium Unit 2 Round 4
{
    path: '/chap1M/unit2/u4p1',
    name: 'C1Unit2MediumRound4P1',
    component: C1Unit2MediumRound4P1
},
{
    path: '/chap1M/unit2/u4p2',
    name: 'C1Unit2MediumRound4P2',
    component: C1Unit2MediumRound4P2
},
{
    path: '/chap1M/unit2/u4p3',
    name: 'C1Unit2MediumRound4P3',
    component: C1Unit2MediumRound4P3
},
{
    path: '/chap1M/unit2/u4p4',
    name: 'C1Unit2MediumRound4P4',
    component: C1Unit2MediumRound4P4
},
{
    path: '/chap1M/unit2/u4p5',
    name: 'C1Unit2MediumRound4P5',
    component: C1Unit2MediumRound4P5
},

/////////////// Chapter1 Medium Unit 2 Round 5
{
    path: '/chap1M/unit2/u5p1',
    name: 'C1Unit2MediumRound5P1',
    component: C1Unit2MediumRound5P1
},
{
    path: '/chap1M/unit2/u5p2',
    name: 'C1Unit2MediumRound5P2',
    component: C1Unit2MediumRound5P2
},
{
    path: '/chap1M/unit2/u5p3',
    name: 'C1Unit2MediumRound5P3',
    component: C1Unit2MediumRound5P3
},
{
    path: '/chap1M/unit2/u5p4',
    name: 'C1Unit2MediumRound5P4',
    component: C1Unit2MediumRound5P4
},
{
    path: '/chap1M/unit2/end',
    name: 'C1Unit2MediumEnd',
    component: C1Unit2MediumEnd
},


/////////////// Chapter1 Medium Unit 3 Round 1
{
    path: '/chap1M/unit3/u3intro',
    name: 'C1Unit3MediumIntro',
    component: C1Unit3MediumIntro
},
{
    path: '/chap1M/unit3/u1p1',
    name: 'C1Unit3MediumRound1P1',
    component: C1Unit3MediumRound1P1
},
{
    path: '/chap1M/unit3/u1p2',
    name: 'C1Unit3MediumRound1P2',
    component: C1Unit3MediumRound1P2
},
{
    path: '/chap1M/unit3/u1p3',
    name: 'C1Unit3MediumRound1P3',
    component: C1Unit3MediumRound1P3
},
{
    path: '/chap1M/unit3/u1p4',
    name: 'C1Unit3MediumRound1P4',
    component: C1Unit3MediumRound1P4
},


/////////////// Chapter1 Medium Unit 3 Round 2
{
    path: '/chap1M/unit3/u2p1',
    name: 'C1Unit3MediumRound2P1',
    component: C1Unit3MediumRound2P1
},
{
    path: '/chap1M/unit3/u2p2',
    name: 'C1Unit3MediumRound2P2',
    component: C1Unit3MediumRound2P2
},
{
    path: '/chap1M/unit3/u2p3',
    name: 'C1Unit3MediumRound2P3',
    component: C1Unit3MediumRound2P3
},
{
    path: '/chap1M/unit3/u2p4',
    name: 'C1Unit3MediumRound2P4',
    component: C1Unit3MediumRound2P4
},

/////////////// Chapter1 Medium Unit 3 Round 3
{
    path: '/chap1M/unit3/u3p1',
    name: 'C1Unit3MediumRound3P1',
    component: C1Unit3MediumRound3P1
},
{
    path: '/chap1M/unit3/u3p2',
    name: 'C1Unit3MediumRound3P2',
    component: C1Unit3MediumRound3P2
},
{
    path: '/chap1M/unit3/u3p3',
    name: 'C1Unit3MediumRound3P3',
    component: C1Unit3MediumRound3P3
},
{
    path: '/chap1M/unit3/u3p4',
    name: 'C1Unit3MediumRound3P4',
    component: C1Unit3MediumRound3P4
},

/////////////// Chapter1 Medium Unit 3 Round 4
{
    path: '/chap1M/unit3/u4p1',
    name: 'C1Unit3MediumRound4P1',
    component: C1Unit3MediumRound4P1
},
{
    path: '/chap1M/unit3/u4p2',
    name: 'C1Unit3MediumRound4P2',
    component: C1Unit3MediumRound4P2
},
{
    path: '/chap1M/unit3/u4p3',
    name: 'C1Unit3MediumRound4P3',
    component: C1Unit3MediumRound4P3
},
{
    path: '/chap1M/unit3/u4p4',
    name: 'C1Unit3MediumRound4P4',
    component: C1Unit3MediumRound4P4
},
{
    path: '/chap1M/unit3/u4p5',
    name: 'C1Unit3MediumRound4P5',
    component: C1Unit3MediumRound4P5
},


/////////////// Chapter1 Medium Unit 3 Round 5
{
    path: '/chap1M/unit3/u5p1',
    name: 'C1Unit3MediumRound5P1',
    component: C1Unit3MediumRound5P1
},
{
    path: '/chap1M/unit3/u5p2',
    name: 'C1Unit3MediumRound5P2',
    component: C1Unit3MediumRound5P2
},
{
    path: '/chap1M/unit3/u5p3',
    name: 'C1Unit3MediumRound5P3',
    component: C1Unit3MediumRound5P3
},
{
    path: '/chap1M/unit3/u5p4',
    name: 'C1Unit3MediumRound5P4',
    component: C1Unit3MediumRound5P4
},
{
    path: '/chap1M/unit3/u5p5',
    name: 'C1Unit3MediumRound5P5',
    component: C1Unit3MediumRound5P5
},
{
    path: '/chap1M/unit3/end',
    name: 'C1Unit3MediumEnd',
    component: C1Unit3MediumEnd
},



/////////////// Chapter1 Hard Unit 1 Round 1
{
    path: '/chap1H/unit1/u1intro',
    name: 'C1Unit1HardIntro',
    component: C1Unit1HardIntro
},
{
    path: '/chap1H/unit1/u1p1',
    name: 'C1Unit1HardRound1P1',
    component: C1Unit1HardRound1P1
},
{
    path: '/chap1H/unit1/u1p2',
    name: 'C1Unit1HardRound1P2',
    component: C1Unit1HardRound1P2
},
{
    path: '/chap1H/unit1/u1p3',
    name: 'C1Unit1HardRound1P3',
    component: C1Unit1HardRound1P3
},
{
    path: '/chap1H/unit1/u1p4',
    name: 'C1Unit1HardRound1P4',
    component: C1Unit1HardRound1P4
},

/////////////// Chapter1 Hard Unit 1 Round 2
{
    path: '/chap1H/unit1/u2p1',
    name: 'C1Unit1HardRound2P1',
    component: C1Unit1HardRound2P1
},
{
    path: '/chap1H/unit1/u2p2',
    name: 'C1Unit1HardRound2P2',
    component: C1Unit1HardRound2P2
},
{
    path: '/chap1H/unit1/u2p3',
    name: 'C1Unit1HardRound2P3',
    component: C1Unit1HardRound2P3
},
{
    path: '/chap1H/unit1/u2p4',
    name: 'C1Unit1HardRound2P4',
    component: C1Unit1HardRound2P4
},

/////////////// Chapter1 Hard Unit 1 Round 3
{
    path: '/chap1H/unit1/u3p1',
    name: 'C1Unit1HardRound3P1',
    component: C1Unit1HardRound3P1
},
{
    path: '/chap1H/unit1/u3p2',
    name: 'C1Unit1HardRound3P2',
    component: C1Unit1HardRound3P2
},
{
    path: '/chap1H/unit1/u3p3',
    name: 'C1Unit1HardRound3P3',
    component: C1Unit1HardRound3P3
},
{
    path: '/chap1H/unit1/u3p4',
    name: 'C1Unit1HardRound3P4',
    component: C1Unit1HardRound3P4
},
{
    path: '/chap1H/unit1/u3p5',
    name: 'C1Unit1HardRound3P5',
    component: C1Unit1HardRound3P5
},

/////////////// Chapter1 Hard Unit 1 Round 4
{
    path: '/chap1H/unit1/u4p1',
    name: 'C1Unit1HardRound4P1',
    component: C1Unit1HardRound4P1
},
{
    path: '/chap1H/unit1/u4p2',
    name: 'C1Unit1HardRound4P2',
    component: C1Unit1HardRound4P2
},
{
    path: '/chap1H/unit1/u4p3',
    name: 'C1Unit1HardRound4P3',
    component: C1Unit1HardRound4P3
},
{
    path: '/chap1H/unit1/u4p4',
    name: 'C1Unit1HardRound4P4',
    component: C1Unit1HardRound4P4
},
{
    path: '/chap1H/unit1/u4p5',
    name: 'C1Unit1HardRound4P5',
    component: C1Unit1HardRound4P5
},

/////////////// Chapter1 Hard Unit 1 Round 5
{
    path: '/chap1H/unit1/u5p1',
    name: 'C1Unit1HardRound5P1',
    component: C1Unit1HardRound5P1
},
{
    path: '/chap1H/unit1/u5p2',
    name: 'C1Unit1HardRound5P2',
    component: C1Unit1HardRound5P2
},
{
    path: '/chap1H/unit1/u5p3',
    name: 'C1Unit1HardRound5P3',
    component: C1Unit1HardRound5P3
},
{
    path: '/chap1H/unit1/u5p4',
    name: 'C1Unit1HardRound5P4',
    component: C1Unit1HardRound5P4
},

/////////////// Chapter1 Hard Unit 1 Round 6
{
    path: '/chap1H/unit1/u6p1',
    name: 'C1Unit1HardRound6P1',
    component: C1Unit1HardRound6P1
},
{
    path: '/chap1H/unit1/u6p2',
    name: 'C1Unit1HardRound6P2',
    component: C1Unit1HardRound6P2
},
{
    path: '/chap1H/unit1/u6p3',
    name: 'C1Unit1HardRound6P3',
    component: C1Unit1HardRound6P3
},
{
    path: '/chap1H/unit1/u6p4',
    name: 'C1Unit1HardRound6P4',
    component: C1Unit1HardRound6P4
},
{
    path: '/chap1H/unit1/end',
    name: 'C1Unit1HardEnd',
    component: C1Unit1HardEnd
},


/////////////// Chapter1 Hard Unit 2 Round 1
{
    path: '/chap1H/unit2/u2intro',
    name: 'C1Unit2HardIntro',
    component: C1Unit2HardIntro
},
{
    path: '/chap1H/unit2/u1p1',
    name: 'C1Unit2HardRound1P1',
    component: C1Unit2HardRound1P1
},
{
    path: '/chap1H/unit2/u1p2',
    name: 'C1Unit2HardRound1P2',
    component: C1Unit2HardRound1P2
},
{
    path: '/chap1H/unit2/u1p3',
    name: 'C1Unit2HardRound1P3',
    component: C1Unit2HardRound1P3
},
{
    path: '/chap1H/unit2/u1p4',
    name: 'C1Unit2HardRound1P4',
    component: C1Unit2HardRound1P4
},

/////////////// Chapter1 Hard Unit 2 Round 2
{
    path: '/chap1H/unit2/u2p1',
    name: 'C1Unit2HardRound2P1',
    component: C1Unit2HardRound2P1
},
{
    path: '/chap1H/unit2/u2p2',
    name: 'C1Unit2HardRound2P2',
    component: C1Unit2HardRound2P2
},
{
    path: '/chap1H/unit2/u2p3',
    name: 'C1Unit2HardRound2P3',
    component: C1Unit2HardRound2P3
},
{
    path: '/chap1H/unit2/u2p4',
    name: 'C1Unit2HardRound2P4',
    component: C1Unit2HardRound2P4
},

/////////////// Chapter1 Hard Unit 2 Round 3
{
    path: '/chap1H/unit2/u3p1',
    name: 'C1Unit2HardRound3P1',
    component: C1Unit2HardRound3P1
},
{
    path: '/chap1H/unit2/u3p2',
    name: 'C1Unit2HardRound3P2',
    component: C1Unit2HardRound3P2
},
{
    path: '/chap1H/unit2/u3p3',
    name: 'C1Unit2HardRound3P3',
    component: C1Unit2HardRound3P3
},
{
    path: '/chap1H/unit2/u3p4',
    name: 'C1Unit2HardRound3P4',
    component: C1Unit2HardRound3P4
},

/////////////// Chapter1 Hard Unit 2 Round 4
{
    path: '/chap1H/unit2/u4p1',
    name: 'C1Unit2HardRound4P1',
    component: C1Unit2HardRound4P1
},
{
    path: '/chap1H/unit2/u4p2',
    name: 'C1Unit2HardRound4P2',
    component: C1Unit2HardRound4P2
},
{
    path: '/chap1H/unit2/u4p3',
    name: 'C1Unit2HardRound4P3',
    component: C1Unit2HardRound4P3
},
{
    path: '/chap1H/unit2/u4p4',
    name: 'C1Unit2HardRound4P4',
    component: C1Unit2HardRound4P4
},
{
    path: '/chap1H/unit2/u4p5',
    name: 'C1Unit2HardRound4P5',
    component: C1Unit2HardRound4P5
},

/////////////// Chapter1 Hard Unit 2 Round 5
{
    path: '/chap1H/unit2/u5p1',
    name: 'C1Unit2HardRound5P1',
    component: C1Unit2HardRound5P1
},
{
    path: '/chap1H/unit2/u5p2',
    name: 'C1Unit2HardRound5P2',
    component: C1Unit2HardRound5P2
},
{
    path: '/chap1H/unit2/u5p3',
    name: 'C1Unit2HardRound5P3',
    component: C1Unit2HardRound5P3
},
{
    path: '/chap1H/unit2/u5p4',
    name: 'C1Unit2HardRound5P4',
    component: C1Unit2HardRound5P4
},
{
    path: '/chap1H/unit2/end',
    name: 'C1Unit2HardEnd',
    component: C1Unit2HardEnd
},


/////////////// Chapter1 Hard Unit 3 Round 1
{
    path: '/chap1H/unit3/u3intro',
    name: 'C1Unit3HardIntro',
    component: C1Unit3HardIntro
},
{
    path: '/chap1H/unit3/u1p1',
    name: 'C1Unit3HardRound1P1',
    component: C1Unit3HardRound1P1
},
{
    path: '/chap1H/unit3/u1p2',
    name: 'C1Unit3HardRound1P2',
    component: C1Unit3HardRound1P2
},
{
    path: '/chap1H/unit3/u1p3',
    name: 'C1Unit3HardRound1P3',
    component: C1Unit3HardRound1P3
},
{
    path: '/chap1H/unit3/u1p4',
    name: 'C1Unit3HardRound1P4',
    component: C1Unit3HardRound1P4
},


/////////////// Chapter1 Hard Unit 3 Round 2
{
    path: '/chap1H/unit3/u2p1',
    name: 'C1Unit3HardRound2P1',
    component: C1Unit3HardRound2P1
},
{
    path: '/chap1H/unit3/u2p2',
    name: 'C1Unit3HardRound2P2',
    component: C1Unit3HardRound2P2
},
{
    path: '/chap1H/unit3/u2p3',
    name: 'C1Unit3HardRound2P3',
    component: C1Unit3HardRound2P3
},
{
    path: '/chap1H/unit3/u2p4',
    name: 'C1Unit3HardRound2P4',
    component: C1Unit3HardRound2P4
},

/////////////// Chapter1 Hard Unit 3 Round 3
{
    path: '/chap1H/unit3/u3p1',
    name: 'C1Unit3HardRound3P1',
    component: C1Unit3HardRound3P1
},
{
    path: '/chap1H/unit3/u3p2',
    name: 'C1Unit3HardRound3P2',
    component: C1Unit3HardRound3P2
},
{
    path: '/chap1H/unit3/u3p3',
    name: 'C1Unit3HardRound3P3',
    component: C1Unit3HardRound3P3
},
{
    path: '/chap1H/unit3/u3p4',
    name: 'C1Unit3HardRound3P4',
    component: C1Unit3HardRound3P4
},

/////////////// Chapter1 Hard Unit 3 Round 4
{
    path: '/chap1H/unit3/u4p1',
    name: 'C1Unit3HardRound4P1',
    component: C1Unit3HardRound4P1
},
{
    path: '/chap1H/unit3/u4p2',
    name: 'C1Unit3HardRound4P2',
    component: C1Unit3HardRound4P2
},
{
    path: '/chap1H/unit3/u4p3',
    name: 'C1Unit3HardRound4P3',
    component: C1Unit3HardRound4P3
},
{
    path: '/chap1H/unit3/u4p4',
    name: 'C1Unit3HardRound4P4',
    component: C1Unit3HardRound4P4
},
{
    path: '/chap1H/unit3/u4p5',
    name: 'C1Unit3HardRound4P5',
    component: C1Unit3HardRound4P5
},


/////////////// Chapter1 Hard Unit 3 Round 5
{
    path: '/chap1H/unit3/u5p1',
    name: 'C1Unit3HardRound5P1',
    component: C1Unit3HardRound5P1
},
{
    path: '/chap1H/unit3/u5p2',
    name: 'C1Unit3HardRound5P2',
    component: C1Unit3HardRound5P2
},
{
    path: '/chap1H/unit3/u5p3',
    name: 'C1Unit3HardRound5P3',
    component: C1Unit3HardRound5P3
},
{
    path: '/chap1H/unit3/u5p4',
    name: 'C1Unit3HardRound5P4',
    component: C1Unit3HardRound5P4
},
{
    path: '/chap1H/unit3/u5p5',
    name: 'C1Unit3HardRound5P5',
    component: C1Unit3HardRound5P5
},
{
    path: '/chap1H/unit3/end',
    name: 'C1Unit3HardEnd',
    component: C1Unit3HardEnd
},















    /////////////// Chapter2 Easy Unit 1 Round 1
    {
        path: '/chap2E/unit1/u1intro',
        name: 'C2Unit1EasyIntro',
        component: C2Unit1EasyIntro
    },
    {
        path: '/chap2E/unit1/u1p1',
        name: 'C2Unit1EasyRound1P1',
        component: C2Unit1EasyRound1P1
    },
    {
        path: '/chap2E/unit1/u1p2',
        name: 'C2Unit1EasyRound1P2',
        component: C2Unit1EasyRound1P2
    },
    {
        path: '/chap2E/unit1/u1p3',
        name: 'C2Unit1EasyRound1P3',
        component: C2Unit1EasyRound1P3
    },
    {
        path: '/chap2E/unit1/u1p4',
        name: 'C2Unit1EasyRound1P4',
        component: C2Unit1EasyRound1P4
    },

    /////////////// Chapter2 Easy Unit 1 Round 2
    {
        path: '/chap2E/unit1/u2p1',
        name: 'C2Unit1EasyRound2P1',
        component: C2Unit1EasyRound2P1
    },
    {
        path: '/chap2E/unit1/u2p2',
        name: 'C2Unit1EasyRound2P2',
        component: C2Unit1EasyRound2P2
    },
    {
        path: '/chap2E/unit1/u2p3',
        name: 'C2Unit1EasyRound2P3',
        component: C2Unit1EasyRound2P3
    },
    {
        path: '/chap2E/unit1/u2p4',
        name: 'C2Unit1EasyRound2P4',
        component: C2Unit1EasyRound2P4
    },


    /////////////// Chapter2 Easy Unit 1 Round 3
    {
        path: '/chap2E/unit1/u3p1',
        name: 'C2Unit1EasyRound3P1',
        component: C2Unit1EasyRound3P1
    },
    {
        path: '/chap2E/unit1/u3p2',
        name: 'C2Unit1EasyRound3P2',
        component: C2Unit1EasyRound3P2
    },
    {
        path: '/chap2E/unit1/u3p3',
        name: 'C2Unit1EasyRound3P3',
        component: C2Unit1EasyRound3P3
    },
    {
        path: '/chap2E/unit1/u3p4',
        name: 'C2Unit1EasyRound3P4',
        component: C2Unit1EasyRound3P4
    },
    {
        path: '/chap2E/unit1/u3p5',
        name: 'C2Unit1EasyRound3P5',
        component: C2Unit1EasyRound3P5
    },


    /////////////// Chapter2 Easy Unit 1 Round 4
    {
        path: '/chap2E/unit1/u4p1',
        name: 'C2Unit1EasyRound4P1',
        component: C2Unit1EasyRound4P1
    },
    {
        path: '/chap2E/unit1/u4p2',
        name: 'C2Unit1EasyRound4P2',
        component: C2Unit1EasyRound4P2
    },
    {
        path: '/chap2E/unit1/u4p3',
        name: 'C2Unit1EasyRound4P3',
        component: C2Unit1EasyRound4P3
    },
    {
        path: '/chap2E/unit1/u4p4',
        name: 'C2Unit1EasyRound4P4',
        component: C2Unit1EasyRound4P4
    },

 /////////////// Chapter2 Easy Unit 1 Round 5
    {
        path: '/chap2E/unit1/u5p1',
        name: 'C2Unit1EasyRound5P1',
        component: C2Unit1EasyRound5P1
    },
    {
        path: '/chap2E/unit1/u5p2',
        name: 'C2Unit1EasyRound5P2',
        component: C2Unit1EasyRound5P2
    },
    {
        path: '/chap2E/unit1/u5p3',
        name: 'C2Unit1EasyRound5P3',
        component: C2Unit1EasyRound5P3
    },
    {
        path: '/chap2E/unit1/u5p4',
        name: 'C2Unit1EasyRound5P4',
        component: C2Unit1EasyRound5P4
    },
    {
        path: '/chap2E/unit1/u5p5',
        name: 'C2Unit1EasyRound5P5',
        component: C2Unit1EasyRound5P5
    },
    {
        path: '/chap2E/unit1/end',
        name: 'C2Unit1EasyEnd',
        component: C2Unit1EasyEnd
    },

 /////////////// Chapter2 Easy Unit 2 Round 1
    {
        path: '/chap2E/unit2/u2intro',
        name: 'C2Unit2EasyIntro',
        component: C2Unit2EasyIntro
    },
    {
        path: '/chap2E/unit2/u1p1',
        name: 'C2Unit2EasyRound1P1',
        component: C2Unit2EasyRound1P1
    },
    {
        path: '/chap2E/unit2/u1p2',
        name: 'C2Unit2EasyRound1P2',
        component: C2Unit2EasyRound1P2
    },
    {
        path: '/chap2E/unit2/u1p3',
        name: 'C2Unit2EasyRound1P3',
        component: C2Unit2EasyRound1P3
    },
    {
        path: '/chap2E/unit2/u1p4',
        name: 'C2Unit2EasyRound1P4',
        component: C2Unit2EasyRound1P4
    },

 /////////////// Chapter2 Easy Unit 2 Round 2
    {
        path: '/chap2E/unit2/u2p1',
        name: 'C2Unit2EasyRound2P1',
        component: C2Unit2EasyRound2P1
    },
    {
        path: '/chap2E/unit2/u2p2',
        name: 'C2Unit2EasyRound2P2',
        component: C2Unit2EasyRound2P2
    },
    {
        path: '/chap2E/unit2/u2p3',
        name: 'C2Unit2EasyRound2P3',
        component: C2Unit2EasyRound2P3
    },
    {
        path: '/chap2E/unit2/u2p4',
        name: 'C2Unit2EasyRound2P4',
        component: C2Unit2EasyRound2P4
    },
/////////////// Chapter2 Easy Unit 2 Round 3
    {
        path: '/chap2E/unit2/u3p1',
        name: 'C2Unit2EasyRound3P1',
        component: C2Unit2EasyRound3P1
    },
    {
        path: '/chap2E/unit2/u3p2',
        name: 'C2Unit2EasyRound3P2',
        component: C2Unit2EasyRound3P2
    },
    {
        path: '/chap2E/unit2/u3p3',
        name: 'C2Unit2EasyRound3P3',
        component: C2Unit2EasyRound3P3
    },
    {
        path: '/chap2E/unit2/u3p4',
        name: 'C2Unit2EasyRound3P4',
        component: C2Unit2EasyRound3P4
    },

/////////////// Chapter2 Easy Unit 2 Round 4
{
    path: '/chap2E/unit2/u4p1',
    name: 'C2Unit2EasyRound4P1',
    component: C2Unit2EasyRound4P1
},
{
    path: '/chap2E/unit2/u4p2',
    name: 'C2Unit2EasyRound4P2',
    component: C2Unit2EasyRound4P2
},
{
    path: '/chap2E/unit2/u4p3',
    name: 'C2Unit2EasyRound4P3',
    component: C2Unit2EasyRound4P3
},
{
    path: '/chap2E/unit2/u4p4',
    name: 'C2Unit2EasyRound4P4',
    component: C2Unit2EasyRound4P4
},

/////////////// Chapter2 Easy Unit 2 Round 5
{
    path: '/chap2E/unit2/u5p1',
    name: 'C2Unit2EasyRound5P1',
    component: C2Unit2EasyRound5P1
},
{
    path: '/chap2E/unit2/u5p2',
    name: 'C2Unit2EasyRound5P2',
    component: C2Unit2EasyRound5P2
},
{
    path: '/chap2E/unit2/u5p3',
    name: 'C2Unit2EasyRound5P3',
    component: C2Unit2EasyRound5P3
},
{
    path: '/chap2E/unit2/u5p4',
    name: 'C2Unit2EasyRound5P4',
    component: C2Unit2EasyRound5P4
},
{
    path: '/chap2E/unit2/u5p5',
    name: 'C2Unit2EasyRound5P5',
    component: C2Unit2EasyRound5P5
},
{
    path: '/chap2E/unit2/end',
    name: 'C2Unit2EasyEnd',
    component: C2Unit2EasyEnd
},

/////////////// Chapter2 Easy Unit 3 Round 1
{
    path: '/chap2E/unit3/u3intro',
    name: 'C2Unit3EasyIntro',
    component: C2Unit3EasyIntro
},
{
    path: '/chap2E/unit3/u1p1',
    name: 'C2Unit3EasyRound1P1',
    component: C2Unit3EasyRound1P1
},
{
    path: '/chap2E/unit3/u1p2',
    name: 'C2Unit3EasyRound1P2',
    component: C2Unit3EasyRound1P2
},
{
    path: '/chap2E/unit3/u1p3',
    name: 'C2Unit3EasyRound1P3',
    component: C2Unit3EasyRound1P3
},
{
    path: '/chap2E/unit3/u1p4',
    name: 'C2Unit3EasyRound1P4',
    component: C2Unit3EasyRound1P4
},

/////////////// Chapter2 Easy Unit 3 Round 2
{
    path: '/chap2E/unit3/u2p1',
    name: 'C2Unit3EasyRound2P1',
    component: C2Unit3EasyRound2P1
},
{
    path: '/chap2E/unit3/u2p2',
    name: 'C2Unit3EasyRound2P2',
    component: C2Unit3EasyRound2P2
},
{
    path: '/chap2E/unit3/u2p3',
    name: 'C2Unit3EasyRound2P3',
    component: C2Unit3EasyRound2P3
},
{
    path: '/chap2E/unit3/u2p4',
    name: 'C2Unit3EasyRound2P4',
    component: C2Unit3EasyRound2P4
},

/////////////// Chapter2 Easy Unit 3 Round 3
{
    path: '/chap2E/unit3/u3p1',
    name: 'C2Unit3EasyRound3P1',
    component: C2Unit3EasyRound3P1
},
{
    path: '/chap2E/unit3/u3p2',
    name: 'C2Unit3EasyRound3P2',
    component: C2Unit3EasyRound3P2
},
{
    path: '/chap2E/unit3/u3p3',
    name: 'C2Unit3EasyRound3P3',
    component: C2Unit3EasyRound3P3
},
{
    path: '/chap2E/unit3/u3p4',
    name: 'C2Unit3EasyRound3P4',
    component: C2Unit3EasyRound3P4
},

/////////////// Chapter2 Easy Unit 3 Round 4
{
    path: '/chap2E/unit3/u4p1',
    name: 'C2Unit3EasyRound4P1',
    component: C2Unit3EasyRound4P1
},
{
    path: '/chap2E/unit3/u4p2',
    name: 'C2Unit3EasyRound4P2',
    component: C2Unit3EasyRound4P2
},
{
    path: '/chap2E/unit3/u4p3',
    name: 'C2Unit3EasyRound4P3',
    component: C2Unit3EasyRound4P3
},
{
    path: '/chap2E/unit3/u4p4',
    name: 'C2Unit3EasyRound4P4',
    component: C2Unit3EasyRound4P4
},
{
    path: '/chap2E/unit3/end',
    name: 'C2Unit3EasyEnd',
    component: C2Unit3EasyEnd
},


    /////////////// Chapter2 Medium Unit 1 Round 1
    {
        path: '/chap2M/unit1/u1intro',
        name: 'C2Unit1MediumIntro',
        component: C2Unit1MediumIntro
    },
    {
        path: '/chap2M/unit1/u1p1',
        name: 'C2Unit1MediumRound1P1',
        component: C2Unit1MediumRound1P1
    },
    {
        path: '/chap2M/unit1/u1p2',
        name: 'C2Unit1MediumRound1P2',
        component: C2Unit1MediumRound1P2
    },
    {
        path: '/chap2M/unit1/u1p3',
        name: 'C2Unit1MediumRound1P3',
        component: C2Unit1MediumRound1P3
    },
    {
        path: '/chap2M/unit1/u1p4',
        name: 'C2Unit1MediumRound1P4',
        component: C2Unit1MediumRound1P4
    },

    /////////////// Chapter2 Medium Unit 1 Round 2
    {
        path: '/chap2M/unit1/u2p1',
        name: 'C2Unit1MediumRound2P1',
        component: C2Unit1MediumRound2P1
    },
    {
        path: '/chap2M/unit1/u2p2',
        name: 'C2Unit1MediumRound2P2',
        component: C2Unit1MediumRound2P2
    },
    {
        path: '/chap2M/unit1/u2p3',
        name: 'C2Unit1MediumRound2P3',
        component: C2Unit1MediumRound2P3
    },
    {
        path: '/chap2M/unit1/u2p4',
        name: 'C2Unit1MediumRound2P4',
        component: C2Unit1MediumRound2P4
    },


    /////////////// Chapter2 Medium Unit 1 Round 3
    {
        path: '/chap2M/unit1/u3p1',
        name: 'C2Unit1MediumRound3P1',
        component: C2Unit1MediumRound3P1
    },
    {
        path: '/chap2M/unit1/u3p2',
        name: 'C2Unit1MediumRound3P2',
        component: C2Unit1MediumRound3P2
    },
    {
        path: '/chap2M/unit1/u3p3',
        name: 'C2Unit1MediumRound3P3',
        component: C2Unit1MediumRound3P3
    },
    {
        path: '/chap2M/unit1/u3p4',
        name: 'C2Unit1MediumRound3P4',
        component: C2Unit1MediumRound3P4
    },
    {
        path: '/chap2M/unit1/u3p5',
        name: 'C2Unit1MediumRound3P5',
        component: C2Unit1MediumRound3P5
    },


    /////////////// Chapter2 Medium Unit 1 Round 4
    {
        path: '/chap2M/unit1/u4p1',
        name: 'C2Unit1MediumRound4P1',
        component: C2Unit1MediumRound4P1
    },
    {
        path: '/chap2M/unit1/u4p2',
        name: 'C2Unit1MediumRound4P2',
        component: C2Unit1MediumRound4P2
    },
    {
        path: '/chap2M/unit1/u4p3',
        name: 'C2Unit1MediumRound4P3',
        component: C2Unit1MediumRound4P3
    },
    {
        path: '/chap2M/unit1/u4p4',
        name: 'C2Unit1MediumRound4P4',
        component: C2Unit1MediumRound4P4
    },

 /////////////// Chapter2 Medium Unit 1 Round 5
    {
        path: '/chap2M/unit1/u5p1',
        name: 'C2Unit1MediumRound5P1',
        component: C2Unit1MediumRound5P1
    },
    {
        path: '/chap2M/unit1/u5p2',
        name: 'C2Unit1MediumRound5P2',
        component: C2Unit1MediumRound5P2
    },
    {
        path: '/chap2M/unit1/u5p3',
        name: 'C2Unit1MediumRound5P3',
        component: C2Unit1MediumRound5P3
    },
    {
        path: '/chap2M/unit1/u5p4',
        name: 'C2Unit1MediumRound5P4',
        component: C2Unit1MediumRound5P4
    },
    {
        path: '/chap2M/unit1/u5p5',
        name: 'C2Unit1MediumRound5P5',
        component: C2Unit1MediumRound5P5
    },
    {
        path: '/chap2M/unit1/end',
        name: 'C2Unit1MediumEnd',
        component: C2Unit1MediumEnd
    },

 /////////////// Chapter2 Medium Unit 2 Round 1
    {
        path: '/chap2M/unit2/u2intro',
        name: 'C2Unit2MediumIntro',
        component: C2Unit2MediumIntro
    },
    {
        path: '/chap2M/unit2/u1p1',
        name: 'C2Unit2MediumRound1P1',
        component: C2Unit2MediumRound1P1
    },
    {
        path: '/chap2M/unit2/u1p2',
        name: 'C2Unit2MediumRound1P2',
        component: C2Unit2MediumRound1P2
    },
    {
        path: '/chap2M/unit2/u1p3',
        name: 'C2Unit2MediumRound1P3',
        component: C2Unit2MediumRound1P3
    },
    {
        path: '/chap2M/unit2/u1p4',
        name: 'C2Unit2MediumRound1P4',
        component: C2Unit2MediumRound1P4
    },

 /////////////// Chapter2 Medium Unit 2 Round 2
    {
        path: '/chap2M/unit2/u2p1',
        name: 'C2Unit2MediumRound2P1',
        component: C2Unit2MediumRound2P1
    },
    {
        path: '/chap2M/unit2/u2p2',
        name: 'C2Unit2MediumRound2P2',
        component: C2Unit2MediumRound2P2
    },
    {
        path: '/chap2M/unit2/u2p3',
        name: 'C2Unit2MediumRound2P3',
        component: C2Unit2MediumRound2P3
    },
    {
        path: '/chap2M/unit2/u2p4',
        name: 'C2Unit2MediumRound2P4',
        component: C2Unit2MediumRound2P4
    },
/////////////// Chapter2 Medium Unit 2 Round 3
    {
        path: '/chap2M/unit2/u3p1',
        name: 'C2Unit2MediumRound3P1',
        component: C2Unit2MediumRound3P1
    },
    {
        path: '/chap2M/unit2/u3p2',
        name: 'C2Unit2MediumRound3P2',
        component: C2Unit2MediumRound3P2
    },
    {
        path: '/chap2M/unit2/u3p3',
        name: 'C2Unit2MediumRound3P3',
        component: C2Unit2MediumRound3P3
    },
    {
        path: '/chap2M/unit2/u3p4',
        name: 'C2Unit2MediumRound3P4',
        component: C2Unit2MediumRound3P4
    },

/////////////// Chapter2 Medium Unit 2 Round 4
{
    path: '/chap2M/unit2/u4p1',
    name: 'C2Unit2MediumRound4P1',
    component: C2Unit2MediumRound4P1
},
{
    path: '/chap2M/unit2/u4p2',
    name: 'C2Unit2MediumRound4P2',
    component: C2Unit2MediumRound4P2
},
{
    path: '/chap2M/unit2/u4p3',
    name: 'C2Unit2MediumRound4P3',
    component: C2Unit2MediumRound4P3
},
{
    path: '/chap2M/unit2/u4p4',
    name: 'C2Unit2MediumRound4P4',
    component: C2Unit2MediumRound4P4
},

/////////////// Chapter2 Medium Unit 2 Round 5
{
    path: '/chap2M/unit2/u5p1',
    name: 'C2Unit2MediumRound5P1',
    component: C2Unit2MediumRound5P1
},
{
    path: '/chap2M/unit2/u5p2',
    name: 'C2Unit2MediumRound5P2',
    component: C2Unit2MediumRound5P2
},
{
    path: '/chap2M/unit2/u5p3',
    name: 'C2Unit2MediumRound5P3',
    component: C2Unit2MediumRound5P3
},
{
    path: '/chap2M/unit2/u5p4',
    name: 'C2Unit2MediumRound5P4',
    component: C2Unit2MediumRound5P4
},
{
    path: '/chap2M/unit2/u5p5',
    name: 'C2Unit2MediumRound5P5',
    component: C2Unit2MediumRound5P5
},
{
    path: '/chap2M/unit2/end',
    name: 'C2Unit2MediumEnd',
    component: C2Unit2MediumEnd
},

/////////////// Chapter2 Medium Unit 3 Round 1
{
    path: '/chap2M/unit3/u3intro',
    name: 'C2Unit3MediumIntro',
    component: C2Unit3MediumIntro
},
{
    path: '/chap2M/unit3/u1p1',
    name: 'C2Unit3MediumRound1P1',
    component: C2Unit3MediumRound1P1
},
{
    path: '/chap2M/unit3/u1p2',
    name: 'C2Unit3MediumRound1P2',
    component: C2Unit3MediumRound1P2
},
{
    path: '/chap2M/unit3/u1p3',
    name: 'C2Unit3MediumRound1P3',
    component: C2Unit3MediumRound1P3
},
{
    path: '/chap2M/unit3/u1p4',
    name: 'C2Unit3MediumRound1P4',
    component: C2Unit3MediumRound1P4
},

/////////////// Chapter2 Medium Unit 3 Round 2
{
    path: '/chap2M/unit3/u2p1',
    name: 'C2Unit3MediumRound2P1',
    component: C2Unit3MediumRound2P1
},
{
    path: '/chap2M/unit3/u2p2',
    name: 'C2Unit3MediumRound2P2',
    component: C2Unit3MediumRound2P2
},
{
    path: '/chap2M/unit3/u2p3',
    name: 'C2Unit3MediumRound2P3',
    component: C2Unit3MediumRound2P3
},
{
    path: '/chap2M/unit3/u2p4',
    name: 'C2Unit3MediumRound2P4',
    component: C2Unit3MediumRound2P4
},

/////////////// Chapter2 Medium Unit 3 Round 3
{
    path: '/chap2M/unit3/u3p1',
    name: 'C2Unit3MediumRound3P1',
    component: C2Unit3MediumRound3P1
},
{
    path: '/chap2M/unit3/u3p2',
    name: 'C2Unit3MediumRound3P2',
    component: C2Unit3MediumRound3P2
},
{
    path: '/chap2M/unit3/u3p3',
    name: 'C2Unit3MediumRound3P3',
    component: C2Unit3MediumRound3P3
},
{
    path: '/chap2M/unit3/u3p4',
    name: 'C2Unit3MediumRound3P4',
    component: C2Unit3MediumRound3P4
},

/////////////// Chapter2 Medium Unit 3 Round 4
{
    path: '/chap2M/unit3/u4p1',
    name: 'C2Unit3MediumRound4P1',
    component: C2Unit3MediumRound4P1
},
{
    path: '/chap2M/unit3/u4p2',
    name: 'C2Unit3MediumRound4P2',
    component: C2Unit3MediumRound4P2
},
{
    path: '/chap2M/unit3/u4p3',
    name: 'C2Unit3MediumRound4P3',
    component: C2Unit3MediumRound4P3
},
{
    path: '/chap2M/unit3/u4p4',
    name: 'C2Unit3MediumRound4P4',
    component: C2Unit3MediumRound4P4
},
{
    path: '/chap2M/unit3/end',
    name: 'C2Unit3MediumEnd',
    component: C2Unit3MediumEnd
},







/////////////// Chapter2 Hard Unit 1 Round 1
{
    path: '/chap2H/unit1/u1intro',
    name: 'C2Unit1HardIntro',
    component: C2Unit1HardIntro
},
{
    path: '/chap2H/unit1/u1p1',
    name: 'C2Unit1HardRound1P1',
    component: C2Unit1HardRound1P1
},
{
    path: '/chap2H/unit1/u1p2',
    name: 'C2Unit1HardRound1P2',
    component: C2Unit1HardRound1P2
},
{
    path: '/chap2H/unit1/u1p3',
    name: 'C2Unit1HardRound1P3',
    component: C2Unit1HardRound1P3
},
{
    path: '/chap2H/unit1/u1p4',
    name: 'C2Unit1HardRound1P4',
    component: C2Unit1HardRound1P4
},

/////////////// Chapter2 Hard Unit 1 Round 2
{
    path: '/chap2H/unit1/u2p1',
    name: 'C2Unit1HardRound2P1',
    component: C2Unit1HardRound2P1
},
{
    path: '/chap2H/unit1/u2p2',
    name: 'C2Unit1HardRound2P2',
    component: C2Unit1HardRound2P2
},
{
    path: '/chap2H/unit1/u2p3',
    name: 'C2Unit1HardRound2P3',
    component: C2Unit1HardRound2P3
},
{
    path: '/chap2H/unit1/u2p4',
    name: 'C2Unit1HardRound2P4',
    component: C2Unit1HardRound2P4
},


/////////////// Chapter2 Hard Unit 1 Round 3
{
    path: '/chap2H/unit1/u3p1',
    name: 'C2Unit1HardRound3P1',
    component: C2Unit1HardRound3P1
},
{
    path: '/chap2H/unit1/u3p2',
    name: 'C2Unit1HardRound3P2',
    component: C2Unit1HardRound3P2
},
{
    path: '/chap2H/unit1/u3p3',
    name: 'C2Unit1HardRound3P3',
    component: C2Unit1HardRound3P3
},
{
    path: '/chap2H/unit1/u3p4',
    name: 'C2Unit1HardRound3P4',
    component: C2Unit1HardRound3P4
},
{
    path: '/chap2H/unit1/u3p5',
    name: 'C2Unit1HardRound3P5',
    component: C2Unit1HardRound3P5
},


/////////////// Chapter2 Hard Unit 1 Round 4
{
    path: '/chap2H/unit1/u4p1',
    name: 'C2Unit1HardRound4P1',
    component: C2Unit1HardRound4P1
},
{
    path: '/chap2H/unit1/u4p2',
    name: 'C2Unit1HardRound4P2',
    component: C2Unit1HardRound4P2
},
{
    path: '/chap2H/unit1/u4p3',
    name: 'C2Unit1HardRound4P3',
    component: C2Unit1HardRound4P3
},
{
    path: '/chap2H/unit1/u4p4',
    name: 'C2Unit1HardRound4P4',
    component: C2Unit1HardRound4P4
},

/////////////// Chapter2 Hard Unit 1 Round 5
{
    path: '/chap2H/unit1/u5p1',
    name: 'C2Unit1HardRound5P1',
    component: C2Unit1HardRound5P1
},
{
    path: '/chap2H/unit1/u5p2',
    name: 'C2Unit1HardRound5P2',
    component: C2Unit1HardRound5P2
},
{
    path: '/chap2H/unit1/u5p3',
    name: 'C2Unit1HardRound5P3',
    component: C2Unit1HardRound5P3
},
{
    path: '/chap2H/unit1/u5p4',
    name: 'C2Unit1HardRound5P4',
    component: C2Unit1HardRound5P4
},
{
    path: '/chap2H/unit1/u5p5',
    name: 'C2Unit1HardRound5P5',
    component: C2Unit1HardRound5P5
},
{
    path: '/chap2H/unit1/end',
    name: 'C2Unit1HardEnd',
    component: C2Unit1HardEnd
},

/////////////// Chapter2 Hard Unit 2 Round 1
{
    path: '/chap2H/unit2/u2intro',
    name: 'C2Unit2HardIntro',
    component: C2Unit2HardIntro
},
{
    path: '/chap2H/unit2/u1p1',
    name: 'C2Unit2HardRound1P1',
    component: C2Unit2HardRound1P1
},
{
    path: '/chap2H/unit2/u1p2',
    name: 'C2Unit2HardRound1P2',
    component: C2Unit2HardRound1P2
},
{
    path: '/chap2H/unit2/u1p3',
    name: 'C2Unit2HardRound1P3',
    component: C2Unit2HardRound1P3
},
{
    path: '/chap2H/unit2/u1p4',
    name: 'C2Unit2HardRound1P4',
    component: C2Unit2HardRound1P4
},

/////////////// Chapter2 Hard Unit 2 Round 2
{
    path: '/chap2H/unit2/u2p1',
    name: 'C2Unit2HardRound2P1',
    component: C2Unit2HardRound2P1
},
{
    path: '/chap2H/unit2/u2p2',
    name: 'C2Unit2HardRound2P2',
    component: C2Unit2HardRound2P2
},
{
    path: '/chap2H/unit2/u2p3',
    name: 'C2Unit2HardRound2P3',
    component: C2Unit2HardRound2P3
},
{
    path: '/chap2H/unit2/u2p4',
    name: 'C2Unit2HardRound2P4',
    component: C2Unit2HardRound2P4
},
/////////////// Chapter2 Hard Unit 2 Round 3
{
    path: '/chap2H/unit2/u3p1',
    name: 'C2Unit2HardRound3P1',
    component: C2Unit2HardRound3P1
},
{
    path: '/chap2H/unit2/u3p2',
    name: 'C2Unit2HardRound3P2',
    component: C2Unit2HardRound3P2
},
{
    path: '/chap2H/unit2/u3p3',
    name: 'C2Unit2HardRound3P3',
    component: C2Unit2HardRound3P3
},
{
    path: '/chap2H/unit2/u3p4',
    name: 'C2Unit2HardRound3P4',
    component: C2Unit2HardRound3P4
},

/////////////// Chapter2 Hard Unit 2 Round 4
{
path: '/chap2H/unit2/u4p1',
name: 'C2Unit2HardRound4P1',
component: C2Unit2HardRound4P1
},
{
path: '/chap2H/unit2/u4p2',
name: 'C2Unit2HardRound4P2',
component: C2Unit2HardRound4P2
},
{
path: '/chap2H/unit2/u4p3',
name: 'C2Unit2HardRound4P3',
component: C2Unit2HardRound4P3
},
{
path: '/chap2H/unit2/u4p4',
name: 'C2Unit2HardRound4P4',
component: C2Unit2HardRound4P4
},

/////////////// Chapter2 Hard Unit 2 Round 5
{
path: '/chap2H/unit2/u5p1',
name: 'C2Unit2HardRound5P1',
component: C2Unit2HardRound5P1
},
{
path: '/chap2H/unit2/u5p2',
name: 'C2Unit2HardRound5P2',
component: C2Unit2HardRound5P2
},
{
path: '/chap2H/unit2/u5p3',
name: 'C2Unit2HardRound5P3',
component: C2Unit2HardRound5P3
},
{
path: '/chap2H/unit2/u5p4',
name: 'C2Unit2HardRound5P4',
component: C2Unit2HardRound5P4
},
{
path: '/chap2H/unit2/u5p5',
name: 'C2Unit2HardRound5P5',
component: C2Unit2HardRound5P5
},
{
    path: '/chap2H/unit2/end',
    name: 'C2Unit2HardEnd',
    component: C2Unit2HardEnd
},

/////////////// Chapter2 Hard Unit 3 Round 1
{
path: '/chap2H/unit3/u3intro',
name: 'C2Unit3HardIntro',
component: C2Unit3HardIntro
},
{
path: '/chap2H/unit3/u1p1',
name: 'C2Unit3HardRound1P1',
component: C2Unit3HardRound1P1
},
{
path: '/chap2H/unit3/u1p2',
name: 'C2Unit3HardRound1P2',
component: C2Unit3HardRound1P2
},
{
path: '/chap2H/unit3/u1p3',
name: 'C2Unit3HardRound1P3',
component: C2Unit3HardRound1P3
},
{
path: '/chap2H/unit3/u1p4',
name: 'C2Unit3HardRound1P4',
component: C2Unit3HardRound1P4
},

/////////////// Chapter2 Hard Unit 3 Round 2
{
path: '/chap2H/unit3/u2p1',
name: 'C2Unit3HardRound2P1',
component: C2Unit3HardRound2P1
},
{
path: '/chap2H/unit3/u2p2',
name: 'C2Unit3HardRound2P2',
component: C2Unit3HardRound2P2
},
{
path: '/chap2H/unit3/u2p3',
name: 'C2Unit3HardRound2P3',
component: C2Unit3HardRound2P3
},
{
path: '/chap2H/unit3/u2p4',
name: 'C2Unit3HardRound2P4',
component: C2Unit3HardRound2P4
},

/////////////// Chapter2 Hard Unit 3 Round 3
{
path: '/chap2H/unit3/u3p1',
name: 'C2Unit3HardRound3P1',
component: C2Unit3HardRound3P1
},
{
path: '/chap2H/unit3/u3p2',
name: 'C2Unit3HardRound3P2',
component: C2Unit3HardRound3P2
},
{
path: '/chap2H/unit3/u3p3',
name: 'C2Unit3HardRound3P3',
component: C2Unit3HardRound3P3
},
{
path: '/chap2H/unit3/u3p4',
name: 'C2Unit3HardRound3P4',
component: C2Unit3HardRound3P4
},

/////////////// Chapter2 Hard Unit 3 Round 4
{
path: '/chap2H/unit3/u4p1',
name: 'C2Unit3HardRound4P1',
component: C2Unit3HardRound4P1
},
{
path: '/chap2H/unit3/u4p2',
name: 'C2Unit3HardRound4P2',
component: C2Unit3HardRound4P2
},
{
path: '/chap2H/unit3/u4p3',
name: 'C2Unit3HardRound4P3',
component: C2Unit3HardRound4P3
},
{
path: '/chap2H/unit3/u4p4',
name: 'C2Unit3HardRound4P4',
component: C2Unit3HardRound4P4
},
{
    path: '/chap2H/unit3/end',
    name: 'C2Unit3HardEnd',
    component: C2Unit3HardEnd
},


























/////////////// Chapter3 Easy Unit 1 Round 1
{
    path: '/chap3E/unit1/u1intro',
    name: 'C3Unit1EasyIntro',
    component: C3Unit1EasyIntro
},
{
    path: '/chap3E/unit1/u1p1',
    name: 'C3Unit1EasyRound1P1',
    component: C3Unit1EasyRound1P1
},
{
    path: '/chap3E/unit1/u1p2',
    name: 'C3Unit1EasyRound1P2',
    component: C3Unit1EasyRound1P2
},
{
    path: '/chap3E/unit1/u1p3',
    name: 'C3Unit1EasyRound1P3',
    component: C3Unit1EasyRound1P3
},
{
    path: '/chap3E/unit1/u1p4',
    name: 'C3Unit1EasyRound1P4',
    component: C3Unit1EasyRound1P4
},

    /////////////// Chapter3 Easy Unit 1 Round 2
    {
        path: '/chap3E/unit1/u2p1',
        name: 'C3Unit1EasyRound2P1',
        component: C3Unit1EasyRound2P1
    },
    {
        path: '/chap3E/unit1/u2p2',
        name: 'C3Unit1EasyRound2P2',
        component: C3Unit1EasyRound2P2
    },
    {
        path: '/chap3E/unit1/u2p3',
        name: 'C3Unit1EasyRound2P3',
        component: C3Unit1EasyRound2P3
    },
    {
        path: '/chap3E/unit1/u2p4',
        name: 'C3Unit1EasyRound2P4',
        component: C3Unit1EasyRound2P4
    },

/////////////// Chapter3 Easy Unit 1 Round 3
{
    path: '/chap3E/unit1/u3p1',
    name: 'C3Unit1EasyRound3P1',
    component: C3Unit1EasyRound3P1
},
{
    path: '/chap3E/unit1/u3p2',
    name: 'C3Unit1EasyRound3P2',
    component: C3Unit1EasyRound3P2
},
{
    path: '/chap3E/unit1/u3p3',
    name: 'C3Unit1EasyRound3P3',
    component: C3Unit1EasyRound3P3
},
{
    path: '/chap3E/unit1/u3p4',
    name: 'C3Unit1EasyRound3P4',
    component: C3Unit1EasyRound3P4
},


/////////////// Chapter3 Easy Unit 1 Round 4
{
    path: '/chap3E/unit1/u4p1',
    name: 'C3Unit1EasyRound4P1',
    component: C3Unit1EasyRound4P1
},
{
    path: '/chap3E/unit1/u4p2',
    name: 'C3Unit1EasyRound4P2',
    component: C3Unit1EasyRound4P2
},
{
    path: '/chap3E/unit1/u4p3',
    name: 'C3Unit1EasyRound4P3',
    component: C3Unit1EasyRound4P3
},
{
    path: '/chap3E/unit1/u4p4',
    name: 'C3Unit1EasyRound4P4',
    component: C3Unit1EasyRound4P4
},
{
    path: '/chap3E/unit1/end',
    name: 'C3Unit1EasyEnd',
    component: C3Unit1EasyEnd
},

/////////////// Chapter3 Easy Unit 2 Round 1
{
    path: '/chap3E/unit2/u1intro',
    name: 'C3Unit2EasyIntro',
    component: C3Unit2EasyIntro
},
{
    path: '/chap3E/unit2/u1p1',
    name: 'C3Unit2EasyRound1P1',
    component: C3Unit2EasyRound1P1
},
{
    path: '/chap3E/unit2/u1p2',
    name: 'C3Unit2EasyRound1P2',
    component: C3Unit2EasyRound1P2
},
{
    path: '/chap3E/unit2/u1p3',
    name: 'C3Unit2EasyRound1P3',
    component: C3Unit2EasyRound1P3
},
{
    path: '/chap3E/unit2/u1p4',
    name: 'C3Unit2EasyRound1P4',
    component: C3Unit2EasyRound1P4
},

    /////////////// Chapter3 Easy Unit 2 Round 2
    {
        path: '/chap3E/unit2/u2p1',
        name: 'C3Unit2EasyRound2P1',
        component: C3Unit2EasyRound2P1
    },
    {
        path: '/chap3E/unit2/u2p2',
        name: 'C3Unit2EasyRound2P2',
        component: C3Unit2EasyRound2P2
    },
    {
        path: '/chap3E/unit2/u2p3',
        name: 'C3Unit2EasyRound2P3',
        component: C3Unit2EasyRound2P3
    },
    {
        path: '/chap3E/unit2/u2p4',
        name: 'C3Unit2EasyRound2P4',
        component: C3Unit2EasyRound2P4
    },

/////////////// Chapter3 Easy Unit 2 Round 3
{
    path: '/chap3E/unit2/u3p1',
    name: 'C3Unit2EasyRound3P1',
    component: C3Unit2EasyRound3P1
},
{
    path: '/chap3E/unit2/u3p2',
    name: 'C3Unit2EasyRound3P2',
    component: C3Unit2EasyRound3P2
},
{
    path: '/chap3E/unit2/u3p3',
    name: 'C3Unit2EasyRound3P3',
    component: C3Unit2EasyRound3P3
},
{
    path: '/chap3E/unit2/u3p4',
    name: 'C3Unit2EasyRound3P4',
    component: C3Unit2EasyRound3P4
},

/////////////// Chapter3 Easy Unit 2 Round 4
{
    path: '/chap3E/unit2/u4p1',
    name: 'C3Unit2EasyRound4P1',
    component: C3Unit2EasyRound4P1
},
{
    path: '/chap3E/unit2/u4p2',
    name: 'C3Unit2EasyRound4P2',
    component: C3Unit2EasyRound4P2
},
{
    path: '/chap3E/unit2/u4p3',
    name: 'C3Unit2EasyRound4P3',
    component: C3Unit2EasyRound4P3
},
{
    path: '/chap3E/unit2/u4p4',
    name: 'C3Unit2EasyRound4P4',
    component: C3Unit2EasyRound4P4
},
{
    path: '/chap3E/unit2/end',
    name: 'C3Unit2EasyEnd',
    component: C3Unit2EasyEnd
},

/////////////// Chapter3 Easy Unit 3 Round 1
{
    path: '/chap3E/unit3/u1intro',
    name: 'C3Unit3EasyIntro',
    component: C3Unit3EasyIntro
},
{
    path: '/chap3E/unit3/u1p1',
    name: 'C3Unit3EasyRound1P1',
    component: C3Unit3EasyRound1P1
},
{
    path: '/chap3E/unit3/u1p2',
    name: 'C3Unit3EasyRound1P2',
    component: C3Unit3EasyRound1P2
},
{
    path: '/chap3E/unit3/u1p3',
    name: 'C3Unit3EasyRound1P3',
    component: C3Unit3EasyRound1P3
},
{
    path: '/chap3E/unit3/u1p4',
    name: 'C3Unit3EasyRound1P4',
    component: C3Unit3EasyRound1P4
},

   /////////////// Chapter3 Easy Unit 3 Round 2
   {
    path: '/chap3E/unit3/u2p1',
    name: 'C3Unit3EasyRound2P1',
    component: C3Unit3EasyRound2P1
},
{
    path: '/chap3E/unit3/u2p2',
    name: 'C3Unit3EasyRound2P2',
    component: C3Unit3EasyRound2P2
},
{
    path: '/chap3E/unit3/u2p3',
    name: 'C3Unit3EasyRound2P3',
    component: C3Unit3EasyRound2P3
},
{
    path: '/chap3E/unit3/u2p4',
    name: 'C3Unit3EasyRound2P4',
    component: C3Unit3EasyRound2P4
},

    /////////////// Chapter3 Easy Unit 3 Round 3
    {
        path: '/chap3E/unit3/u3p1',
        name: 'C3Unit3EasyRound3P1',
        component: C3Unit3EasyRound3P1
    },
    {
        path: '/chap3E/unit3/u3p2',
        name: 'C3Unit3EasyRound3P2',
        component: C3Unit3EasyRound3P2
    },
    {
        path: '/chap3E/unit3/u3p3',
        name: 'C3Unit3EasyRound3P3',
        component: C3Unit3EasyRound3P3
    },
    {
        path: '/chap3E/unit2/u3p4',
        name: 'C3Unit3EasyRound3P4',
        component: C3Unit3EasyRound3P4
    },

   /////////////// Chapter3 Easy Unit 3 Round 4
   {
    path: '/chap3E/unit3/u4p1',
    name: 'C3Unit3EasyRound4P1',
    component: C3Unit3EasyRound4P1
},
{
    path: '/chap3E/unit3/u4p2',
    name: 'C3Unit3EasyRound4P2',
    component: C3Unit3EasyRound4P2
},
{
    path: '/chap3E/unit3/u4p3',
    name: 'C3Unit3EasyRound4P3',
    component: C3Unit3EasyRound4P3
},
{
    path: '/chap3E/unit3/u4p4',
    name: 'C3Unit3EasyRound4P4',
    component: C3Unit3EasyRound4P4
},
{
    path: '/chap3E/unit3/end',
    name: 'C3Unit3EasyEnd',
    component: C3Unit3EasyEnd
},


/////////////// Chapter3 Medium Unit 1 Round 1
{
    path: '/chap3M/unit1/u1intro',
    name: 'C3Unit1MediumIntro',
    component: C3Unit1MediumIntro
},
{
    path: '/chap3M/unit1/u1p1',
    name: 'C3Unit1MediumRound1P1',
    component: C3Unit1MediumRound1P1
},
{
    path: '/chap3M/unit1/u1p2',
    name: 'C3Unit1MediumRound1P2',
    component: C3Unit1MediumRound1P2
},
{
    path: '/chap3M/unit1/u1p3',
    name: 'C3Unit1MediumRound1P3',
    component: C3Unit1MediumRound1P3
},
{
    path: '/chap3M/unit1/u1p4',
    name: 'C3Unit1MediumRound1P4',
    component: C3Unit1MediumRound1P4
},

    /////////////// Chapter3 Medium Unit 1 Round 2
    {
        path: '/chap3M/unit1/u2p1',
        name: 'C3Unit1MediumRound2P1',
        component: C3Unit1MediumRound2P1
    },
    {
        path: '/chap3M/unit1/u2p2',
        name: 'C3Unit1MediumRound2P2',
        component: C3Unit1MediumRound2P2
    },
    {
        path: '/chap3M/unit1/u2p3',
        name: 'C3Unit1MediumRound2P3',
        component: C3Unit1MediumRound2P3
    },
    {
        path: '/chap3M/unit1/u2p4',
        name: 'C3Unit1MediumRound2P4',
        component: C3Unit1MediumRound2P4
    },

/////////////// Chapter3 Medium Unit 1 Round 3
{
    path: '/chap3M/unit1/u3p1',
    name: 'C3Unit1MediumRound3P1',
    component: C3Unit1MediumRound3P1
},
{
    path: '/chap3M/unit1/u3p2',
    name: 'C3Unit1MediumRound3P2',
    component: C3Unit1MediumRound3P2
},
{
    path: '/chap3M/unit1/u3p3',
    name: 'C3Unit1MediumRound3P3',
    component: C3Unit1MediumRound3P3
},
{
    path: '/chap3M/unit1/u3p4',
    name: 'C3Unit1MediumRound3P4',
    component: C3Unit1MediumRound3P4
},


/////////////// Chapter3 Medium Unit 1 Round 4
{
    path: '/chap3M/unit1/u4p1',
    name: 'C3Unit1MediumRound4P1',
    component: C3Unit1MediumRound4P1
},
{
    path: '/chap3M/unit1/u4p2',
    name: 'C3Unit1MediumRound4P2',
    component: C3Unit1MediumRound4P2
},
{
    path: '/chap3M/unit1/u4p3',
    name: 'C3Unit1MediumRound4P3',
    component: C3Unit1MediumRound4P3
},
{
    path: '/chap3M/unit1/u4p4',
    name: 'C3Unit1MediumRound4P4',
    component: C3Unit1MediumRound4P4
},
{
    path: '/chap3M/unit1/end',
    name: 'C3Unit1MediumEnd',
    component: C3Unit1MediumEnd
},

/////////////// Chapter3 Medium Unit 2 Round 1
{
    path: '/chap3M/unit2/u1intro',
    name: 'C3Unit2MediumIntro',
    component: C3Unit2MediumIntro
},
{
    path: '/chap3M/unit2/u1p1',
    name: 'C3Unit2MediumRound1P1',
    component: C3Unit2MediumRound1P1
},
{
    path: '/chap3M/unit2/u1p2',
    name: 'C3Unit2MediumRound1P2',
    component: C3Unit2MediumRound1P2
},
{
    path: '/chap3M/unit2/u1p3',
    name: 'C3Unit2MediumRound1P3',
    component: C3Unit2MediumRound1P3
},
{
    path: '/chap3M/unit2/u1p4',
    name: 'C3Unit2MediumRound1P4',
    component: C3Unit2MediumRound1P4
},

    /////////////// Chapter3 Medium Unit 2 Round 2
    {
        path: '/chap3M/unit2/u2p1',
        name: 'C3Unit2MediumRound2P1',
        component: C3Unit2MediumRound2P1
    },
    {
        path: '/chap3M/unit2/u2p2',
        name: 'C3Unit2MediumRound2P2',
        component: C3Unit2MediumRound2P2
    },
    {
        path: '/chap3M/unit2/u2p3',
        name: 'C3Unit2MediumRound2P3',
        component: C3Unit2MediumRound2P3
    },
    {
        path: '/chap3M/unit2/u2p4',
        name: 'C3Unit2MediumRound2P4',
        component: C3Unit2MediumRound2P4
    },

/////////////// Chapter3 Medium Unit 2 Round 3
{
    path: '/chap3M/unit2/u3p1',
    name: 'C3Unit2MediumRound3P1',
    component: C3Unit2MediumRound3P1
},
{
    path: '/chap3M/unit2/u3p2',
    name: 'C3Unit2MediumRound3P2',
    component: C3Unit2MediumRound3P2
},
{
    path: '/chap3M/unit2/u3p3',
    name: 'C3Unit2MediumRound3P3',
    component: C3Unit2MediumRound3P3
},
{
    path: '/chap3M/unit2/u3p4',
    name: 'C3Unit2MediumRound3P4',
    component: C3Unit2MediumRound3P4
},

/////////////// Chapter3 Medium Unit 2 Round 4
{
    path: '/chap3M/unit2/u4p1',
    name: 'C3Unit2MediumRound4P1',
    component: C3Unit2MediumRound4P1
},
{
    path: '/chap3M/unit2/u4p2',
    name: 'C3Unit2MediumRound4P2',
    component: C3Unit2MediumRound4P2
},
{
    path: '/chap3M/unit2/u4p3',
    name: 'C3Unit2MediumRound4P3',
    component: C3Unit2MediumRound4P3
},
{
    path: '/chap3M/unit2/u4p4',
    name: 'C3Unit2MediumRound4P4',
    component: C3Unit2MediumRound4P4
},
{
    path: '/chap3M/unit2/end',
    name: 'C3Unit2MediumEnd',
    component: C3Unit2MediumEnd
},

/////////////// Chapter3 Medium Unit 3 Round 1
{
    path: '/chap3M/unit3/u1intro',
    name: 'C3Unit3MediumIntro',
    component: C3Unit3MediumIntro
},
{
    path: '/chap3M/unit3/u1p1',
    name: 'C3Unit3MediumRound1P1',
    component: C3Unit3MediumRound1P1
},
{
    path: '/chap3M/unit3/u1p2',
    name: 'C3Unit3MediumRound1P2',
    component: C3Unit3MediumRound1P2
},
{
    path: '/chap3M/unit3/u1p3',
    name: 'C3Unit3MediumRound1P3',
    component: C3Unit3MediumRound1P3
},
{
    path: '/chap3M/unit3/u1p4',
    name: 'C3Unit3MediumRound1P4',
    component: C3Unit3MediumRound1P4
},

   /////////////// Chapter3 Medium Unit 3 Round 2
   {
    path: '/chap3M/unit3/u2p1',
    name: 'C3Unit3MediumRound2P1',
    component: C3Unit3MediumRound2P1
},
{
    path: '/chap3M/unit3/u2p2',
    name: 'C3Unit3MediumRound2P2',
    component: C3Unit3MediumRound2P2
},
{
    path: '/chap3M/unit3/u2p3',
    name: 'C3Unit3MediumRound2P3',
    component: C3Unit3MediumRound2P3
},
{
    path: '/chap3M/unit3/u2p4',
    name: 'C3Unit3MediumRound2P4',
    component: C3Unit3MediumRound2P4
},

    /////////////// Chapter3 Medium Unit 3 Round 3
    {
        path: '/chap3M/unit3/u3p1',
        name: 'C3Unit3MediumRound3P1',
        component: C3Unit3MediumRound3P1
    },
    {
        path: '/chap3M/unit3/u3p2',
        name: 'C3Unit3MediumRound3P2',
        component: C3Unit3MediumRound3P2
    },
    {
        path: '/chap3M/unit3/u3p3',
        name: 'C3Unit3MediumRound3P3',
        component: C3Unit3MediumRound3P3
    },
    {
        path: '/chap3M/unit2/u3p4',
        name: 'C3Unit3MediumRound3P4',
        component: C3Unit3MediumRound3P4
    },

   /////////////// Chapter3 Medium Unit 3 Round 4
   {
    path: '/chap3M/unit3/u4p1',
    name: 'C3Unit3MediumRound4P1',
    component: C3Unit3MediumRound4P1
},
{
    path: '/chap3M/unit3/u4p2',
    name: 'C3Unit3MediumRound4P2',
    component: C3Unit3MediumRound4P2
},
{
    path: '/chap3M/unit3/u4p3',
    name: 'C3Unit3MediumRound4P3',
    component: C3Unit3MediumRound4P3
},
{
    path: '/chap3M/unit3/u4p4',
    name: 'C3Unit3MediumRound4P4',
    component: C3Unit3MediumRound4P4
},
{
    path: '/chap3M/unit3/end',
    name: 'C3Unit3MediumEnd',
    component: C3Unit3MediumEnd
},

/////////////// Chapter3 Hard Unit 1 Round 1
{
    path: '/chap3H/unit1/u1intro',
    name: 'C3Unit1HardIntro',
    component: C3Unit1HardIntro
},
{
    path: '/chap3H/unit1/u1p1',
    name: 'C3Unit1HardRound1P1',
    component: C3Unit1HardRound1P1
},
{
    path: '/chap3H/unit1/u1p2',
    name: 'C3Unit1HardRound1P2',
    component: C3Unit1HardRound1P2
},
{
    path: '/chap3H/unit1/u1p3',
    name: 'C3Unit1HardRound1P3',
    component: C3Unit1HardRound1P3
},
{
    path: '/chap3H/unit1/u1p4',
    name: 'C3Unit1HardRound1P4',
    component: C3Unit1HardRound1P4
},

    /////////////// Chapter3 Hard Unit 1 Round 2
    {
        path: '/chap3H/unit1/u2p1',
        name: 'C3Unit1HardRound2P1',
        component: C3Unit1HardRound2P1
    },
    {
        path: '/chap3H/unit1/u2p2',
        name: 'C3Unit1HardRound2P2',
        component: C3Unit1HardRound2P2
    },
    {
        path: '/chap3H/unit1/u2p3',
        name: 'C3Unit1HardRound2P3',
        component: C3Unit1HardRound2P3
    },
    {
        path: '/chap3H/unit1/u2p4',
        name: 'C3Unit1HardRound2P4',
        component: C3Unit1HardRound2P4
    },

/////////////// Chapter3 Hard Unit 1 Round 3
{
    path: '/chap3H/unit1/u3p1',
    name: 'C3Unit1HardRound3P1',
    component: C3Unit1HardRound3P1
},
{
    path: '/chap3H/unit1/u3p2',
    name: 'C3Unit1HardRound3P2',
    component: C3Unit1HardRound3P2
},
{
    path: '/chap3H/unit1/u3p3',
    name: 'C3Unit1HardRound3P3',
    component: C3Unit1HardRound3P3
},
{
    path: '/chap3H/unit1/u3p4',
    name: 'C3Unit1HardRound3P4',
    component: C3Unit1HardRound3P4
},


/////////////// Chapter3 Hard Unit 1 Round 4
{
    path: '/chap3H/unit1/u4p1',
    name: 'C3Unit1HardRound4P1',
    component: C3Unit1HardRound4P1
},
{
    path: '/chap3H/unit1/u4p2',
    name: 'C3Unit1HardRound4P2',
    component: C3Unit1HardRound4P2
},
{
    path: '/chap3H/unit1/u4p3',
    name: 'C3Unit1HardRound4P3',
    component: C3Unit1HardRound4P3
},
{
    path: '/chap3H/unit1/u4p4',
    name: 'C3Unit1HardRound4P4',
    component: C3Unit1HardRound4P4
},
{
    path: '/chap3H/unit1/end',
    name: 'C3Unit1HardEnd',
    component: C3Unit1HardEnd
},

/////////////// Chapter3 Hard Unit 2 Round 1
{
    path: '/chap3H/unit2/u1intro',
    name: 'C3Unit2HardIntro',
    component: C3Unit2HardIntro
},
{
    path: '/chap3H/unit2/u1p1',
    name: 'C3Unit2HardRound1P1',
    component: C3Unit2HardRound1P1
},
{
    path: '/chap3H/unit2/u1p2',
    name: 'C3Unit2HardRound1P2',
    component: C3Unit2HardRound1P2
},
{
    path: '/chap3H/unit2/u1p3',
    name: 'C3Unit2HardRound1P3',
    component: C3Unit2HardRound1P3
},
{
    path: '/chap3H/unit2/u1p4',
    name: 'C3Unit2HardRound1P4',
    component: C3Unit2HardRound1P4
},

    /////////////// Chapter3 Hard Unit 2 Round 2
    {
        path: '/chap3H/unit2/u2p1',
        name: 'C3Unit2HardRound2P1',
        component: C3Unit2HardRound2P1
    },
    {
        path: '/chap3H/unit2/u2p2',
        name: 'C3Unit2HardRound2P2',
        component: C3Unit2HardRound2P2
    },
    {
        path: '/chap3H/unit2/u2p3',
        name: 'C3Unit2HardRound2P3',
        component: C3Unit2HardRound2P3
    },
    {
        path: '/chap3H/unit2/u2p4',
        name: 'C3Unit2HardRound2P4',
        component: C3Unit2HardRound2P4
    },

/////////////// Chapter3 Hard Unit 2 Round 3
{
    path: '/chap3H/unit2/u3p1',
    name: 'C3Unit2HardRound3P1',
    component: C3Unit2HardRound3P1
},
{
    path: '/chap3H/unit2/u3p2',
    name: 'C3Unit2HardRound3P2',
    component: C3Unit2HardRound3P2
},
{
    path: '/chap3H/unit2/u3p3',
    name: 'C3Unit2HardRound3P3',
    component: C3Unit2HardRound3P3
},
{
    path: '/chap3H/unit2/u3p4',
    name: 'C3Unit2HardRound3P4',
    component: C3Unit2HardRound3P4
},

/////////////// Chapter3 Hard Unit 2 Round 4
{
    path: '/chap3H/unit2/u4p1',
    name: 'C3Unit2HardRound4P1',
    component: C3Unit2HardRound4P1
},
{
    path: '/chap3H/unit2/u4p2',
    name: 'C3Unit2HardRound4P2',
    component: C3Unit2HardRound4P2
},
{
    path: '/chap3H/unit2/u4p3',
    name: 'C3Unit2HardRound4P3',
    component: C3Unit2HardRound4P3
},
{
    path: '/chap3H/unit2/u4p4',
    name: 'C3Unit2HardRound4P4',
    component: C3Unit2HardRound4P4
},
{
    path: '/chap3H/unit2/end',
    name: 'C3Unit2HardEnd',
    component: C3Unit2HardEnd
},

/////////////// Chapter3 Hard Unit 3 Round 1
{
    path: '/chap3H/unit3/u1intro',
    name: 'C3Unit3HardIntro',
    component: C3Unit3HardIntro
},
{
    path: '/chap3H/unit3/u1p1',
    name: 'C3Unit3HardRound1P1',
    component: C3Unit3HardRound1P1
},
{
    path: '/chap3H/unit3/u1p2',
    name: 'C3Unit3HardRound1P2',
    component: C3Unit3HardRound1P2
},
{
    path: '/chap3H/unit3/u1p3',
    name: 'C3Unit3HardRound1P3',
    component: C3Unit3HardRound1P3
},
{
    path: '/chap3H/unit3/u1p4',
    name: 'C3Unit3HardRound1P4',
    component: C3Unit3HardRound1P4
},

   /////////////// Chapter3 Hard Unit 3 Round 2
   {
    path: '/chap3H/unit3/u2p1',
    name: 'C3Unit3HardRound2P1',
    component: C3Unit3HardRound2P1
},
{
    path: '/chap3H/unit3/u2p2',
    name: 'C3Unit3HardRound2P2',
    component: C3Unit3HardRound2P2
},
{
    path: '/chap3H/unit3/u2p3',
    name: 'C3Unit3HardRound2P3',
    component: C3Unit3HardRound2P3
},
{
    path: '/chap3H/unit3/u2p4',
    name: 'C3Unit3HardRound2P4',
    component: C3Unit3HardRound2P4
},

    /////////////// Chapter3 Hard Unit 3 Round 3
    {
        path: '/chap3H/unit3/u3p1',
        name: 'C3Unit3HardRound3P1',
        component: C3Unit3HardRound3P1
    },
    {
        path: '/chap3H/unit3/u3p2',
        name: 'C3Unit3HardRound3P2',
        component: C3Unit3HardRound3P2
    },
    {
        path: '/chap3H/unit3/u3p3',
        name: 'C3Unit3HardRound3P3',
        component: C3Unit3HardRound3P3
    },
    {
        path: '/chap3H/unit2/u3p4',
        name: 'C3Unit3HardRound3P4',
        component: C3Unit3HardRound3P4
    },

   /////////////// Chapter3 Hard Unit 3 Round 4
   {
    path: '/chap3H/unit3/u4p1',
    name: 'C3Unit3HardRound4P1',
    component: C3Unit3HardRound4P1
},
{
    path: '/chap3H/unit3/u4p2',
    name: 'C3Unit3HardRound4P2',
    component: C3Unit3HardRound4P2
},
{
    path: '/chap3H/unit3/u4p3',
    name: 'C3Unit3HardRound4P3',
    component: C3Unit3HardRound4P3
},
{
    path: '/chap3H/unit3/u4p4',
    name: 'C3Unit3HardRound4P4',
    component: C3Unit3HardRound4P4
},
{
    path: '/chap3H/unit3/end',
    name: 'C3Unit3HardEnd',
    component: C3Unit3HardEnd
},
























/////////////// Chapter4 Easy Unit 1 Round 1
{
    path: '/chap4E/unit1/u1intro',
    name: 'C4Unit1EasyIntro',
    component: C4Unit1EasyIntro
},
{
    path: '/chap4E/unit1/u1p1',
    name: 'C4Unit1EasyRound1P1',
    component: C4Unit1EasyRound1P1
},
{
    path: '/chap4E/unit1/u1p2',
    name: 'C4Unit1EasyRound1P2',
    component: C4Unit1EasyRound1P2
},
{
    path: '/chap4E/unit1/u1p3',
    name: 'C4Unit1EasyRound1P3',
    component: C4Unit1EasyRound1P3
},
{
    path: '/chap4E/unit1/u1p4',
    name: 'C4Unit1EasyRound1P4',
    component: C4Unit1EasyRound1P4
},

/////////////// Chapter4 Easy Unit 1 Round 2
{
    path: '/chap4E/unit1/u2p1',
    name: 'C4Unit1EasyRound2P1',
    component: C4Unit1EasyRound2P1
},
{
    path: '/chap4E/unit1/u2p2',
    name: 'C4Unit1EasyRound2P2',
    component: C4Unit1EasyRound2P2
},
{
    path: '/chap4E/unit1/u2p3',
    name: 'C4Unit1EasyRound2P3',
    component: C4Unit1EasyRound2P3
},
{
    path: '/chap4E/unit1/u2p4',
    name: 'C4Unit1EasyRound2P4',
    component: C4Unit1EasyRound2P4
},

/////////////// Chapter4 Easy Unit 1 Round 3
{
    path: '/chap4E/unit1/u3p1',
    name: 'C4Unit1EasyRound3P1',
    component: C4Unit1EasyRound3P1
},
{
    path: '/chap4E/unit1/u3p2',
    name: 'C4Unit1EasyRound3P2',
    component: C4Unit1EasyRound3P2
},
{
    path: '/chap4E/unit1/u3p3',
    name: 'C4Unit1EasyRound3P3',
    component: C4Unit1EasyRound3P3
},
{
    path: '/chap4E/unit1/u3p4',
    name: 'C4Unit1EasyRound3P4',
    component: C4Unit1EasyRound3P4
},

/////////////// Chapter4 Easy Unit 1 Round 4
{
    path: '/chap4E/unit1/u4p1',
    name: 'C4Unit1EasyRound4P1',
    component: C4Unit1EasyRound4P1
},
{
    path: '/chap4E/unit1/u4p2',
    name: 'C4Unit1EasyRound4P2',
    component: C4Unit1EasyRound4P2
},
{
    path: '/chap4E/unit1/u4p3',
    name: 'C4Unit1EasyRound4P3',
    component: C4Unit1EasyRound4P3
},
{
    path: '/chap4E/unit1/u4p4',
    name: 'C4Unit1EasyRound4P4',
    component: C4Unit1EasyRound4P4
},
{
    path: '/chap4E/unit1/end',
    name: 'C4Unit1EasyEnd',
    component: C4Unit1EasyEnd
},

/////////////// Chapter4 Easy Unit 2 Round 1
{
    path: '/chap4E/unit2/u1intro',
    name: 'C4Unit2EasyIntro',
    component: C4Unit2EasyIntro
},
{
    path: '/chap4E/unit2/u1p1',
    name: 'C4Unit2EasyRound1P1',
    component: C4Unit2EasyRound1P1
},
{
    path: '/chap4E/unit2/u1p2',
    name: 'C4Unit2EasyRound1P2',
    component: C4Unit2EasyRound1P2
},
{
    path: '/chap4E/unit2/u1p3',
    name: 'C4Unit2EasyRound1P3',
    component: C4Unit2EasyRound1P3
},
{
    path: '/chap4E/unit2/u1p4',
    name: 'C4Unit2EasyRound1P4',
    component: C4Unit2EasyRound1P4
},

/////////////// Chapter4 Easy Unit 2 Round 2
{
    path: '/chap4E/unit2/u2p1',
    name: 'C4Unit2EasyRound2P1',
    component: C4Unit2EasyRound2P1
},
{
    path: '/chap4E/unit2/u2p2',
    name: 'C4Unit2EasyRound2P2',
    component: C4Unit2EasyRound2P2
},
{
    path: '/chap4E/unit2/u2p3',
    name: 'C4Unit2EasyRound2P3',
    component: C4Unit2EasyRound2P3
},
{
    path: '/chap4E/unit2/u2p4',
    name: 'C4Unit2EasyRound2P4',
    component: C4Unit2EasyRound2P4
},

/////////////// Chapter4 Easy Unit 2 Round 3
{
    path: '/chap4E/unit2/u3p1',
    name: 'C4Unit2EasyRound3P1',
    component: C4Unit2EasyRound3P1
},
{
    path: '/chap4E/unit2/u3p2',
    name: 'C4Unit2EasyRound3P2',
    component: C4Unit2EasyRound3P2
},
{
    path: '/chap4E/unit2/u3p3',
    name: 'C4Unit2EasyRound3P3',
    component: C4Unit2EasyRound3P3
},
{
    path: '/chap4E/unit2/u3p4',
    name: 'C4Unit2EasyRound3P4',
    component: C4Unit2EasyRound3P4
},

/////////////// Chapter4 Easy Unit 2 Round 4
{
    path: '/chap4E/unit2/u4p1',
    name: 'C4Unit2EasyRound4P1',
    component: C4Unit2EasyRound4P1
},
{
    path: '/chap4E/unit2/u4p2',
    name: 'C4Unit2EasyRound4P2',
    component: C4Unit2EasyRound4P2
},
{
    path: '/chap4E/unit2/u4p3',
    name: 'C4Unit2EasyRound4P3',
    component: C4Unit2EasyRound4P3
},
{
    path: '/chap4E/unit2/u4p4',
    name: 'C4Unit2EasyRound4P4',
    component: C4Unit2EasyRound4P4
},
{
    path: '/chap4E/unit2/end',
    name: 'C4Unit2EasyEnd',
    component: C4Unit2EasyEnd
},

/////////////// Chapter4 Easy Unit 3 Round 1
{
    path: '/chap4E/unit3/u1intro',
    name: 'C4Unit3EasyIntro',
    component: C4Unit3EasyIntro
},
{
    path: '/chap4E/unit3/u1p1',
    name: 'C4Unit3EasyRound1P1',
    component: C4Unit3EasyRound1P1
},
{
    path: '/chap4E/unit3/u1p2',
    name: 'C4Unit3EasyRound1P2',
    component: C4Unit3EasyRound1P2
},
{
    path: '/chap4E/unit3/u1p3',
    name: 'C4Unit3EasyRound1P3',
    component: C4Unit3EasyRound1P3
},
{
    path: '/chap4E/unit3/u1p4',
    name: 'C4Unit3EasyRound1P4',
    component: C4Unit3EasyRound1P4
},

/////////////// Chapter4 Easy Unit 3 Round 2
{
    path: '/chap4E/unit3/u2p1',
    name: 'C4Unit3EasyRound2P1',
    component: C4Unit3EasyRound2P1
},
{
    path: '/chap4E/unit3/u2p2',
    name: 'C4Unit3EasyRound2P2',
    component: C4Unit3EasyRound2P2
},
{
    path: '/chap4E/unit3/u2p3',
    name: 'C4Unit3EasyRound2P3',
    component: C4Unit3EasyRound2P3
},
{
    path: '/chap4E/unit3/u2p4',
    name: 'C4Unit3EasyRound2P4',
    component: C4Unit3EasyRound2P4
},

/////////////// Chapter4 Easy Unit 3 Round 3
{
    path: '/chap4E/unit3/u3p1',
    name: 'C4Unit3EasyRound3P1',
    component: C4Unit3EasyRound3P1
},
{
    path: '/chap4E/unit3/u3p2',
    name: 'C4Unit3EasyRound3P2',
    component: C4Unit3EasyRound3P2
},
{
    path: '/chap4E/unit3/u3p3',
    name: 'C4Unit3EasyRound3P3',
    component: C4Unit3EasyRound3P3
},
{
    path: '/chap4E/unit3/u3p4',
    name: 'C4Unit3EasyRound3P4',
    component: C4Unit3EasyRound3P4
},
/////////////// Chapter4 Easy Unit 3 Round 4
{
    path: '/chap4E/unit3/u4p1',
    name: 'C4Unit3EasyRound4P1',
    component: C4Unit3EasyRound4P1
},
{
    path: '/chap4E/unit3/u4p2',
    name: 'C4Unit3EasyRound4P2',
    component: C4Unit3EasyRound4P2
},
{
    path: '/chap4E/unit3/u4p3',
    name: 'C4Unit3EasyRound4P3',
    component: C4Unit3EasyRound4P3
},
{
    path: '/chap4E/unit3/u4p4',
    name: 'C4Unit3EasyRound4P4',
    component: C4Unit3EasyRound4P4
},
{
    path: '/chap4E/unit3/end',
    name: 'C4Unit3EasyEnd',
    component: C4Unit3EasyEnd
},


/////////////// Chapter4 Medium Unit 1 Round 1
{
    path: '/chap4M/unit1/u1intro',
    name: 'C4Unit1MediumIntro',
    component: C4Unit1MediumIntro
},
{
    path: '/chap4M/unit1/u1p1',
    name: 'C4Unit1MediumRound1P1',
    component: C4Unit1MediumRound1P1
},
{
    path: '/chap4M/unit1/u1p2',
    name: 'C4Unit1MediumRound1P2',
    component: C4Unit1MediumRound1P2
},
{
    path: '/chap4M/unit1/u1p3',
    name: 'C4Unit1MediumRound1P3',
    component: C4Unit1MediumRound1P3
},
{
    path: '/chap4M/unit1/u1p4',
    name: 'C4Unit1MediumRound1P4',
    component: C4Unit1MediumRound1P4
},

/////////////// Chapter4 Medium Unit 1 Round 2
{
    path: '/chap4M/unit1/u2p1',
    name: 'C4Unit1MediumRound2P1',
    component: C4Unit1MediumRound2P1
},
{
    path: '/chap4M/unit1/u2p2',
    name: 'C4Unit1MediumRound2P2',
    component: C4Unit1MediumRound2P2
},
{
    path: '/chap4M/unit1/u2p3',
    name: 'C4Unit1MediumRound2P3',
    component: C4Unit1MediumRound2P3
},
{
    path: '/chap4M/unit1/u2p4',
    name: 'C4Unit1MediumRound2P4',
    component: C4Unit1MediumRound2P4
},

/////////////// Chapter4 Medium Unit 1 Round 3
{
    path: '/chap4M/unit1/u3p1',
    name: 'C4Unit1MediumRound3P1',
    component: C4Unit1MediumRound3P1
},
{
    path: '/chap4M/unit1/u3p2',
    name: 'C4Unit1MediumRound3P2',
    component: C4Unit1MediumRound3P2
},
{
    path: '/chap4M/unit1/u3p3',
    name: 'C4Unit1MediumRound3P3',
    component: C4Unit1MediumRound3P3
},
{
    path: '/chap4M/unit1/u3p4',
    name: 'C4Unit1MediumRound3P4',
    component: C4Unit1MediumRound3P4
},

/////////////// Chapter4 Medium Unit 1 Round 4
{
    path: '/chap4M/unit1/u4p1',
    name: 'C4Unit1MediumRound4P1',
    component: C4Unit1MediumRound4P1
},
{
    path: '/chap4M/unit1/u4p2',
    name: 'C4Unit1MediumRound4P2',
    component: C4Unit1MediumRound4P2
},
{
    path: '/chap4M/unit1/u4p3',
    name: 'C4Unit1MediumRound4P3',
    component: C4Unit1MediumRound4P3
},
{
    path: '/chap4M/unit1/u4p4',
    name: 'C4Unit1MediumRound4P4',
    component: C4Unit1MediumRound4P4
},
{
    path: '/chap4M/unit1/end',
    name: 'C4Unit1MediumEnd',
    component: C4Unit1MediumEnd
},

/////////////// Chapter4 Medium Unit 2 Round 1
{
    path: '/chap4M/unit2/u1intro',
    name: 'C4Unit2MediumIntro',
    component: C4Unit2MediumIntro
},
{
    path: '/chap4M/unit2/u1p1',
    name: 'C4Unit2MediumRound1P1',
    component: C4Unit2MediumRound1P1
},
{
    path: '/chap4M/unit2/u1p2',
    name: 'C4Unit2MediumRound1P2',
    component: C4Unit2MediumRound1P2
},
{
    path: '/chap4M/unit2/u1p3',
    name: 'C4Unit2MediumRound1P3',
    component: C4Unit2MediumRound1P3
},
{
    path: '/chap4M/unit2/u1p4',
    name: 'C4Unit2MediumRound1P4',
    component: C4Unit2MediumRound1P4
},

/////////////// Chapter4 Medium Unit 2 Round 2
{
    path: '/chap4M/unit2/u2p1',
    name: 'C4Unit2MediumRound2P1',
    component: C4Unit2MediumRound2P1
},
{
    path: '/chap4M/unit2/u2p2',
    name: 'C4Unit2MediumRound2P2',
    component: C4Unit2MediumRound2P2
},
{
    path: '/chap4M/unit2/u2p3',
    name: 'C4Unit2MediumRound2P3',
    component: C4Unit2MediumRound2P3
},
{
    path: '/chap4M/unit2/u2p4',
    name: 'C4Unit2MediumRound2P4',
    component: C4Unit2MediumRound2P4
},

/////////////// Chapter4 Medium Unit 2 Round 3
{
    path: '/chap4M/unit2/u3p1',
    name: 'C4Unit2MediumRound3P1',
    component: C4Unit2MediumRound3P1
},
{
    path: '/chap4M/unit2/u3p2',
    name: 'C4Unit2MediumRound3P2',
    component: C4Unit2MediumRound3P2
},
{
    path: '/chap4M/unit2/u3p3',
    name: 'C4Unit2MediumRound3P3',
    component: C4Unit2MediumRound3P3
},
{
    path: '/chap4M/unit2/u3p4',
    name: 'C4Unit2MediumRound3P4',
    component: C4Unit2MediumRound3P4
},

/////////////// Chapter4 Medium Unit 2 Round 4
{
    path: '/chap4M/unit2/u4p1',
    name: 'C4Unit2MediumRound4P1',
    component: C4Unit2MediumRound4P1
},
{
    path: '/chap4M/unit2/u4p2',
    name: 'C4Unit2MediumRound4P2',
    component: C4Unit2MediumRound4P2
},
{
    path: '/chap4M/unit2/u4p3',
    name: 'C4Unit2MediumRound4P3',
    component: C4Unit2MediumRound4P3
},
{
    path: '/chap4M/unit2/u4p4',
    name: 'C4Unit2MediumRound4P4',
    component: C4Unit2MediumRound4P4
},
{
    path: '/chap4M/unit2/end',
    name: 'C4Unit2MediumEnd',
    component: C4Unit2MediumEnd
},

/////////////// Chapter4 Medium Unit 3 Round 1
{
    path: '/chap4M/unit3/u1intro',
    name: 'C4Unit3MediumIntro',
    component: C4Unit3MediumIntro
},
{
    path: '/chap4M/unit3/u1p1',
    name: 'C4Unit3MediumRound1P1',
    component: C4Unit3MediumRound1P1
},
{
    path: '/chap4M/unit3/u1p2',
    name: 'C4Unit3MediumRound1P2',
    component: C4Unit3MediumRound1P2
},
{
    path: '/chap4M/unit3/u1p3',
    name: 'C4Unit3MediumRound1P3',
    component: C4Unit3MediumRound1P3
},
{
    path: '/chap4M/unit3/u1p4',
    name: 'C4Unit3MediumRound1P4',
    component: C4Unit3MediumRound1P4
},

/////////////// Chapter4 Medium Unit 3 Round 2
{
    path: '/chap4M/unit3/u2p1',
    name: 'C4Unit3MediumRound2P1',
    component: C4Unit3MediumRound2P1
},
{
    path: '/chap4M/unit3/u2p2',
    name: 'C4Unit3MediumRound2P2',
    component: C4Unit3MediumRound2P2
},
{
    path: '/chap4M/unit3/u2p3',
    name: 'C4Unit3MediumRound2P3',
    component: C4Unit3MediumRound2P3
},
{
    path: '/chap4M/unit3/u2p4',
    name: 'C4Unit3MediumRound2P4',
    component: C4Unit3MediumRound2P4
},

/////////////// Chapter4 Medium Unit 3 Round 3
{
    path: '/chap4M/unit3/u3p1',
    name: 'C4Unit3MediumRound3P1',
    component: C4Unit3MediumRound3P1
},
{
    path: '/chap4M/unit3/u3p2',
    name: 'C4Unit3MediumRound3P2',
    component: C4Unit3MediumRound3P2
},
{
    path: '/chap4M/unit3/u3p3',
    name: 'C4Unit3MediumRound3P3',
    component: C4Unit3MediumRound3P3
},
{
    path: '/chap4M/unit3/u3p4',
    name: 'C4Unit3MediumRound3P4',
    component: C4Unit3MediumRound3P4
},
/////////////// Chapter4 Medium Unit 3 Round 4
{
    path: '/chap4M/unit3/u4p1',
    name: 'C4Unit3MediumRound4P1',
    component: C4Unit3MediumRound4P1
},
{
    path: '/chap4M/unit3/u4p2',
    name: 'C4Unit3MediumRound4P2',
    component: C4Unit3MediumRound4P2
},
{
    path: '/chap4M/unit3/u4p3',
    name: 'C4Unit3MediumRound4P3',
    component: C4Unit3MediumRound4P3
},
{
    path: '/chap4M/unit3/u4p4',
    name: 'C4Unit3MediumRound4P4',
    component: C4Unit3MediumRound4P4
},
{
    path: '/chap4M/unit3/end',
    name: 'C4Unit3MediumEnd',
    component: C4Unit3MediumEnd
},


/////////////// Chapter4 Hard Unit 1 Round 1
{
    path: '/chap4H/unit1/u1intro',
    name: 'C4Unit1HardIntro',
    component: C4Unit1HardIntro
},
{
    path: '/chap4H/unit1/u1p1',
    name: 'C4Unit1HardRound1P1',
    component: C4Unit1HardRound1P1
},
{
    path: '/chap4H/unit1/u1p2',
    name: 'C4Unit1HardRound1P2',
    component: C4Unit1HardRound1P2
},
{
    path: '/chap4H/unit1/u1p3',
    name: 'C4Unit1HardRound1P3',
    component: C4Unit1HardRound1P3
},
{
    path: '/chap4H/unit1/u1p4',
    name: 'C4Unit1HardRound1P4',
    component: C4Unit1HardRound1P4
},

/////////////// Chapter4 Hard Unit 1 Round 2
{
    path: '/chap4H/unit1/u2p1',
    name: 'C4Unit1HardRound2P1',
    component: C4Unit1HardRound2P1
},
{
    path: '/chap4H/unit1/u2p2',
    name: 'C4Unit1HardRound2P2',
    component: C4Unit1HardRound2P2
},
{
    path: '/chap4H/unit1/u2p3',
    name: 'C4Unit1HardRound2P3',
    component: C4Unit1HardRound2P3
},
{
    path: '/chap4H/unit1/u2p4',
    name: 'C4Unit1HardRound2P4',
    component: C4Unit1HardRound2P4
},

/////////////// Chapter4 Hard Unit 1 Round 3
{
    path: '/chap4H/unit1/u3p1',
    name: 'C4Unit1HardRound3P1',
    component: C4Unit1HardRound3P1
},
{
    path: '/chap4H/unit1/u3p2',
    name: 'C4Unit1HardRound3P2',
    component: C4Unit1HardRound3P2
},
{
    path: '/chap4H/unit1/u3p3',
    name: 'C4Unit1HardRound3P3',
    component: C4Unit1HardRound3P3
},
{
    path: '/chap4H/unit1/u3p4',
    name: 'C4Unit1HardRound3P4',
    component: C4Unit1HardRound3P4
},

/////////////// Chapter4 Hard Unit 1 Round 4
{
    path: '/chap4H/unit1/u4p1',
    name: 'C4Unit1HardRound4P1',
    component: C4Unit1HardRound4P1
},
{
    path: '/chap4H/unit1/u4p2',
    name: 'C4Unit1HardRound4P2',
    component: C4Unit1HardRound4P2
},
{
    path: '/chap4H/unit1/u4p3',
    name: 'C4Unit1HardRound4P3',
    component: C4Unit1HardRound4P3
},
{
    path: '/chap4H/unit1/u4p4',
    name: 'C4Unit1HardRound4P4',
    component: C4Unit1HardRound4P4
},
{
    path: '/chap4H/unit1/end',
    name: 'C4Unit1HardEnd',
    component: C4Unit1HardEnd
},

/////////////// Chapter4 Hard Unit 2 Round 1
{
    path: '/chap4H/unit2/u1intro',
    name: 'C4Unit2HardIntro',
    component: C4Unit2HardIntro
},
{
    path: '/chap4H/unit2/u1p1',
    name: 'C4Unit2HardRound1P1',
    component: C4Unit2HardRound1P1
},
{
    path: '/chap4H/unit2/u1p2',
    name: 'C4Unit2HardRound1P2',
    component: C4Unit2HardRound1P2
},
{
    path: '/chap4H/unit2/u1p3',
    name: 'C4Unit2HardRound1P3',
    component: C4Unit2HardRound1P3
},
{
    path: '/chap4H/unit2/u1p4',
    name: 'C4Unit2HardRound1P4',
    component: C4Unit2HardRound1P4
},

/////////////// Chapter4 Hard Unit 2 Round 2
{
    path: '/chap4H/unit2/u2p1',
    name: 'C4Unit2HardRound2P1',
    component: C4Unit2HardRound2P1
},
{
    path: '/chap4H/unit2/u2p2',
    name: 'C4Unit2HardRound2P2',
    component: C4Unit2HardRound2P2
},
{
    path: '/chap4H/unit2/u2p3',
    name: 'C4Unit2HardRound2P3',
    component: C4Unit2HardRound2P3
},
{
    path: '/chap4H/unit2/u2p4',
    name: 'C4Unit2HardRound2P4',
    component: C4Unit2HardRound2P4
},

/////////////// Chapter4 Hard Unit 2 Round 3
{
    path: '/chap4H/unit2/u3p1',
    name: 'C4Unit2HardRound3P1',
    component: C4Unit2HardRound3P1
},
{
    path: '/chap4H/unit2/u3p2',
    name: 'C4Unit2HardRound3P2',
    component: C4Unit2HardRound3P2
},
{
    path: '/chap4H/unit2/u3p3',
    name: 'C4Unit2HardRound3P3',
    component: C4Unit2HardRound3P3
},
{
    path: '/chap4H/unit2/u3p4',
    name: 'C4Unit2HardRound3P4',
    component: C4Unit2HardRound3P4
},

/////////////// Chapter4 Hard Unit 2 Round 4
{
    path: '/chap4H/unit2/u4p1',
    name: 'C4Unit2HardRound4P1',
    component: C4Unit2HardRound4P1
},
{
    path: '/chap4H/unit2/u4p2',
    name: 'C4Unit2HardRound4P2',
    component: C4Unit2HardRound4P2
},
{
    path: '/chap4H/unit2/u4p3',
    name: 'C4Unit2HardRound4P3',
    component: C4Unit2HardRound4P3
},
{
    path: '/chap4H/unit2/u4p4',
    name: 'C4Unit2HardRound4P4',
    component: C4Unit2HardRound4P4
},
{
    path: '/chap4H/unit2/end',
    name: 'C4Unit2HardEnd',
    component: C4Unit2HardEnd
},

/////////////// Chapter4 Hard Unit 3 Round 1
{
    path: '/chap4H/unit3/u1intro',
    name: 'C4Unit3HardIntro',
    component: C4Unit3HardIntro
},
{
    path: '/chap4H/unit3/u1p1',
    name: 'C4Unit3HardRound1P1',
    component: C4Unit3HardRound1P1
},
{
    path: '/chap4H/unit3/u1p2',
    name: 'C4Unit3HardRound1P2',
    component: C4Unit3HardRound1P2
},
{
    path: '/chap4H/unit3/u1p3',
    name: 'C4Unit3HardRound1P3',
    component: C4Unit3HardRound1P3
},
{
    path: '/chap4H/unit3/u1p4',
    name: 'C4Unit3HardRound1P4',
    component: C4Unit3HardRound1P4
},

/////////////// Chapter4 Hard Unit 3 Round 2
{
    path: '/chap4H/unit3/u2p1',
    name: 'C4Unit3HardRound2P1',
    component: C4Unit3HardRound2P1
},
{
    path: '/chap4H/unit3/u2p2',
    name: 'C4Unit3HardRound2P2',
    component: C4Unit3HardRound2P2
},
{
    path: '/chap4H/unit3/u2p3',
    name: 'C4Unit3HardRound2P3',
    component: C4Unit3HardRound2P3
},
{
    path: '/chap4H/unit3/u2p4',
    name: 'C4Unit3HardRound2P4',
    component: C4Unit3HardRound2P4
},

/////////////// Chapter4 Hard Unit 3 Round 3
{
    path: '/chap4H/unit3/u3p1',
    name: 'C4Unit3HardRound3P1',
    component: C4Unit3HardRound3P1
},
{
    path: '/chap4H/unit3/u3p2',
    name: 'C4Unit3HardRound3P2',
    component: C4Unit3HardRound3P2
},
{
    path: '/chap4H/unit3/u3p3',
    name: 'C4Unit3HardRound3P3',
    component: C4Unit3HardRound3P3
},
{
    path: '/chap4H/unit3/u3p4',
    name: 'C4Unit3HardRound3P4',
    component: C4Unit3HardRound3P4
},
/////////////// Chapter4 Hard Unit 3 Round 4
{
    path: '/chap4H/unit3/u4p1',
    name: 'C4Unit3HardRound4P1',
    component: C4Unit3HardRound4P1
},
{
    path: '/chap4H/unit3/u4p2',
    name: 'C4Unit3HardRound4P2',
    component: C4Unit3HardRound4P2
},
{
    path: '/chap4H/unit3/u4p3',
    name: 'C4Unit3HardRound4P3',
    component: C4Unit3HardRound4P3
},
{
    path: '/chap4H/unit3/u4p4',
    name: 'C4Unit3HardRound4P4',
    component: C4Unit3HardRound4P4
},
{
    path: '/chap4H/unit3/end',
    name: 'C4Unit3HardEnd',
    component: C4Unit3HardEnd
},

















































/////////////// Chapter5 Easy Unit 1 Round 1
{
    path: '/chap5E/unit1/u1intro',
    name: 'C5Unit1EasyIntro',
    component: C5Unit1EasyIntro
},
{
    path: '/chap5E/unit1/u1p1',
    name: 'C5Unit1EasyRound1P1',
    component: C5Unit1EasyRound1P1
},
{
    path: '/chap5E/unit1/u1p2',
    name: 'C5Unit1EasyRound1P2',
    component: C5Unit1EasyRound1P2
},
{
    path: '/chap5E/unit1/u1p3',
    name: 'C5Unit1EasyRound1P3',
    component: C5Unit1EasyRound1P3
},
{
    path: '/chap5E/unit1/u1p4',
    name: 'C5Unit1EasyRound1P4',
    component: C5Unit1EasyRound1P4
},

/////////////// Chapter5 Easy Unit 1 Round 2
{
    path: '/chap5E/unit1/u2p1',
    name: 'C5Unit1EasyRound2P1',
    component: C5Unit1EasyRound2P1
},
{
    path: '/chap5E/unit1/u2p2',
    name: 'C5Unit1EasyRound2P2',
    component: C5Unit1EasyRound2P2
},
{
    path: '/chap5E/unit1/u2p3',
    name: 'C5Unit1EasyRound2P3',
    component: C5Unit1EasyRound2P3
},
{
    path: '/chap5E/unit1/u2p4',
    name: 'C5Unit1EasyRound2P4',
    component: C5Unit1EasyRound2P4
},

/////////////// Chapter5 Easy Unit 1 Round 3
{
    path: '/chap5E/unit1/u3p1',
    name: 'C5Unit1EasyRound3P1',
    component: C5Unit1EasyRound3P1
},
{
    path: '/chap5E/unit1/u3p2',
    name: 'C5Unit1EasyRound3P2',
    component: C5Unit1EasyRound3P2
},
{
    path: '/chap5E/unit1/u3p3',
    name: 'C5Unit1EasyRound3P3',
    component: C5Unit1EasyRound3P3
},
{
    path: '/chap5E/unit1/u3p4',
    name: 'C5Unit1EasyRound3P4',
    component: C5Unit1EasyRound3P4
},

/////////////// Chapter5 Easy Unit 1 Round 4
{
    path: '/chap5E/unit1/u4p1',
    name: 'C5Unit1EasyRound4P1',
    component: C5Unit1EasyRound4P1
},
{
    path: '/chap5E/unit1/u4p2',
    name: 'C5Unit1EasyRound4P2',
    component: C5Unit1EasyRound4P2
},
{
    path: '/chap5E/unit1/u4p3',
    name: 'C5Unit1EasyRound4P3',
    component: C5Unit1EasyRound4P3
},
{
    path: '/chap5E/unit1/u4p4',
    name: 'C5Unit1EasyRound4P4',
    component: C5Unit1EasyRound4P4
},

/////////////// Chapter5 Easy Unit 2 Round 1
{
    path: '/chap5E/unit2/u1intro',
    name: 'C5Unit2EasyIntro',
    component: C5Unit2EasyIntro
},
{
    path: '/chap5E/unit2/u1p1',
    name: 'C5Unit2EasyRound1P1',
    component: C5Unit2EasyRound1P1
},
{
    path: '/chap5E/unit2/u1p2',
    name: 'C5Unit2EasyRound1P2',
    component: C5Unit2EasyRound1P2
},
{
    path: '/chap5E/unit2/u1p3',
    name: 'C5Unit2EasyRound1P3',
    component: C5Unit2EasyRound1P3
},
{
    path: '/chap5E/unit2/u1p4',
    name: 'C5Unit2EasyRound1P4',
    component: C5Unit2EasyRound1P4
},
{
    path: '/chap5E/unit1/end',
    name: 'C5Unit1EasyEnd',
    component: C5Unit1EasyEnd
},

/////////////// Chapter5 Easy Unit 2 Round 2
{
    path: '/chap5E/unit2/u2p1',
    name: 'C5Unit2EasyRound2P1',
    component: C5Unit2EasyRound2P1
},
{
    path: '/chap5E/unit2/u2p2',
    name: 'C5Unit2EasyRound2P2',
    component: C5Unit2EasyRound2P2
},
{
    path: '/chap5E/unit2/u2p3',
    name: 'C5Unit2EasyRound2P3',
    component: C5Unit2EasyRound2P3
},
{
    path: '/chap5E/unit2/u2p4',
    name: 'C5Unit2EasyRound2P4',
    component: C5Unit2EasyRound2P4
},

/////////////// Chapter5 Easy Unit 2 Round 3
{
    path: '/chap5E/unit2/u3p1',
    name: 'C5Unit2EasyRound3P1',
    component: C5Unit2EasyRound3P1
},
{
    path: '/chap5E/unit2/u3p2',
    name: 'C5Unit2EasyRound3P2',
    component: C5Unit2EasyRound3P2
},
{
    path: '/chap5E/unit2/u3p3',
    name: 'C5Unit2EasyRound3P3',
    component: C5Unit2EasyRound3P3
},
{
    path: '/chap5E/unit2/u3p4',
    name: 'C5Unit2EasyRound3P4',
    component: C5Unit2EasyRound3P4
},

/////////////// Chapter5 Easy Unit 2 Round 4
{
    path: '/chap5E/unit2/u4p1',
    name: 'C5Unit2EasyRound4P1',
    component: C5Unit2EasyRound4P1
},
{
    path: '/chap5E/unit2/u4p2',
    name: 'C5Unit2EasyRound4P2',
    component: C5Unit2EasyRound4P2
},
{
    path: '/chap5E/unit2/u4p3',
    name: 'C5Unit2EasyRound4P3',
    component: C5Unit2EasyRound4P3
},
{
    path: '/chap5E/unit2/u4p4',
    name: 'C5Unit2EasyRound4P4',
    component: C5Unit2EasyRound4P4
},
{
    path: '/chap5E/unit2/end',
    name: 'C5Unit2EasyEnd',
    component: C5Unit2EasyEnd
},

/////////////// Chapter5 Easy Unit 3 Round 1
{
    path: '/chap5E/unit3/u1intro',
    name: 'C5Unit3EasyIntro',
    component: C5Unit3EasyIntro
},
{
    path: '/chap5E/unit3/u1p1',
    name: 'C5Unit3EasyRound1P1',
    component: C5Unit3EasyRound1P1
},
{
    path: '/chap5E/unit3/u1p2',
    name: 'C5Unit3EasyRound1P2',
    component: C5Unit3EasyRound1P2
},
{
    path: '/chap5E/unit3/u1p3',
    name: 'C5Unit3EasyRound1P3',
    component: C5Unit3EasyRound1P3
},
{
    path: '/chap5E/unit3/u1p4',
    name: 'C5Unit3EasyRound1P4',
    component: C5Unit3EasyRound1P4
},

/////////////// Chapter5 Easy Unit 3 Round 2
{
    path: '/chap5E/unit3/u2p1',
    name: 'C5Unit3EasyRound2P1',
    component: C5Unit3EasyRound2P1
},
{
    path: '/chap5E/unit3/u2p2',
    name: 'C5Unit3EasyRound2P2',
    component: C5Unit3EasyRound2P2
},
{
    path: '/chap5E/unit3/u2p3',
    name: 'C5Unit3EasyRound2P3',
    component: C5Unit3EasyRound2P3
},
{
    path: '/chap5E/unit3/u2p4',
    name: 'C5Unit3EasyRound2P4',
    component: C5Unit3EasyRound2P4
},

/////////////// Chapter5 Easy Unit 3 Round 3
{
    path: '/chap5E/unit3/u3p1',
    name: 'C5Unit3EasyRound3P1',
    component: C5Unit3EasyRound3P1
},
{
    path: '/chap5E/unit3/u3p2',
    name: 'C5Unit3EasyRound3P2',
    component: C5Unit3EasyRound3P2
},
{
    path: '/chap5E/unit3/u3p3',
    name: 'C5Unit3EasyRound3P3',
    component: C5Unit3EasyRound3P3
},
{
    path: '/chap5E/unit3/u3p4',
    name: 'C5Unit3EasyRound3P4',
    component: C5Unit3EasyRound3P4
},

/////////////// Chapter5 Easy Unit 3 Round 4
{
    path: '/chap5E/unit3/u4p1',
    name: 'C5Unit3EasyRound4P1',
    component: C5Unit3EasyRound4P1
},
{
    path: '/chap5E/unit3/u4p2',
    name: 'C5Unit3EasyRound4P2',
    component: C5Unit3EasyRound4P2
},
{
    path: '/chap5E/unit3/u4p3',
    name: 'C5Unit3EasyRound4P3',
    component: C5Unit3EasyRound4P3
},
{
    path: '/chap5E/unit3/u4p4',
    name: 'C5Unit3EasyRound4P4',
    component: C5Unit3EasyRound4P4
},
{
    path: '/chap5E/unit3/end',
    name: 'C5Unit3EasyEnd',
    component: C5Unit3EasyEnd
},


/////////////// Chapter5 Medium Unit 1 Round 1
{
    path: '/chap5M/unit1/u1intro',
    name: 'C5Unit1MediumIntro',
    component: C5Unit1MediumIntro
},
{
    path: '/chap5M/unit1/u1p1',
    name: 'C5Unit1MediumRound1P1',
    component: C5Unit1MediumRound1P1
},
{
    path: '/chap5M/unit1/u1p2',
    name: 'C5Unit1MediumRound1P2',
    component: C5Unit1MediumRound1P2
},
{
    path: '/chap5M/unit1/u1p3',
    name: 'C5Unit1MediumRound1P3',
    component: C5Unit1MediumRound1P3
},
{
    path: '/chap5M/unit1/u1p4',
    name: 'C5Unit1MediumRound1P4',
    component: C5Unit1MediumRound1P4
},

/////////////// Chapter5 Medium Unit 1 Round 2
{
    path: '/chap5M/unit1/u2p1',
    name: 'C5Unit1MediumRound2P1',
    component: C5Unit1MediumRound2P1
},
{
    path: '/chap5M/unit1/u2p2',
    name: 'C5Unit1MediumRound2P2',
    component: C5Unit1MediumRound2P2
},
{
    path: '/chap5M/unit1/u2p3',
    name: 'C5Unit1MediumRound2P3',
    component: C5Unit1MediumRound2P3
},
{
    path: '/chap5M/unit1/u2p4',
    name: 'C5Unit1MediumRound2P4',
    component: C5Unit1MediumRound2P4
},

/////////////// Chapter5 Medium Unit 1 Round 3
{
    path: '/chap5M/unit1/u3p1',
    name: 'C5Unit1MediumRound3P1',
    component: C5Unit1MediumRound3P1
},
{
    path: '/chap5M/unit1/u3p2',
    name: 'C5Unit1MediumRound3P2',
    component: C5Unit1MediumRound3P2
},
{
    path: '/chap5M/unit1/u3p3',
    name: 'C5Unit1MediumRound3P3',
    component: C5Unit1MediumRound3P3
},
{
    path: '/chap5M/unit1/u3p4',
    name: 'C5Unit1MediumRound3P4',
    component: C5Unit1MediumRound3P4
},

/////////////// Chapter5 Medium Unit 1 Round 4
{
    path: '/chap5M/unit1/u4p1',
    name: 'C5Unit1MediumRound4P1',
    component: C5Unit1MediumRound4P1
},
{
    path: '/chap5M/unit1/u4p2',
    name: 'C5Unit1MediumRound4P2',
    component: C5Unit1MediumRound4P2
},
{
    path: '/chap5M/unit1/u4p3',
    name: 'C5Unit1MediumRound4P3',
    component: C5Unit1MediumRound4P3
},
{
    path: '/chap5M/unit1/u4p4',
    name: 'C5Unit1MediumRound4P4',
    component: C5Unit1MediumRound4P4
},

/////////////// Chapter5 Medium Unit 2 Round 1
{
    path: '/chap5M/unit2/u1intro',
    name: 'C5Unit2MediumIntro',
    component: C5Unit2MediumIntro
},
{
    path: '/chap5M/unit2/u1p1',
    name: 'C5Unit2MediumRound1P1',
    component: C5Unit2MediumRound1P1
},
{
    path: '/chap5M/unit2/u1p2',
    name: 'C5Unit2MediumRound1P2',
    component: C5Unit2MediumRound1P2
},
{
    path: '/chap5M/unit2/u1p3',
    name: 'C5Unit2MediumRound1P3',
    component: C5Unit2MediumRound1P3
},
{
    path: '/chap5M/unit2/u1p4',
    name: 'C5Unit2MediumRound1P4',
    component: C5Unit2MediumRound1P4
},
{
    path: '/chap5M/unit1/end',
    name: 'C5Unit1MediumEnd',
    component: C5Unit1MediumEnd
},

/////////////// Chapter5 Medium Unit 2 Round 2
{
    path: '/chap5M/unit2/u2p1',
    name: 'C5Unit2MediumRound2P1',
    component: C5Unit2MediumRound2P1
},
{
    path: '/chap5M/unit2/u2p2',
    name: 'C5Unit2MediumRound2P2',
    component: C5Unit2MediumRound2P2
},
{
    path: '/chap5M/unit2/u2p3',
    name: 'C5Unit2MediumRound2P3',
    component: C5Unit2MediumRound2P3
},
{
    path: '/chap5M/unit2/u2p4',
    name: 'C5Unit2MediumRound2P4',
    component: C5Unit2MediumRound2P4
},

/////////////// Chapter5 Medium Unit 2 Round 3
{
    path: '/chap5M/unit2/u3p1',
    name: 'C5Unit2MediumRound3P1',
    component: C5Unit2MediumRound3P1
},
{
    path: '/chap5M/unit2/u3p2',
    name: 'C5Unit2MediumRound3P2',
    component: C5Unit2MediumRound3P2
},
{
    path: '/chap5M/unit2/u3p3',
    name: 'C5Unit2MediumRound3P3',
    component: C5Unit2MediumRound3P3
},
{
    path: '/chap5M/unit2/u3p4',
    name: 'C5Unit2MediumRound3P4',
    component: C5Unit2MediumRound3P4
},

/////////////// Chapter5 Medium Unit 2 Round 4
{
    path: '/chap5M/unit2/u4p1',
    name: 'C5Unit2MediumRound4P1',
    component: C5Unit2MediumRound4P1
},
{
    path: '/chap5M/unit2/u4p2',
    name: 'C5Unit2MediumRound4P2',
    component: C5Unit2MediumRound4P2
},
{
    path: '/chap5M/unit2/u4p3',
    name: 'C5Unit2MediumRound4P3',
    component: C5Unit2MediumRound4P3
},
{
    path: '/chap5M/unit2/u4p4',
    name: 'C5Unit2MediumRound4P4',
    component: C5Unit2MediumRound4P4
},
{
    path: '/chap5M/unit2/end',
    name: 'C5Unit2MediumEnd',
    component: C5Unit2MediumEnd
},

/////////////// Chapter5 Medium Unit 3 Round 1
{
    path: '/chap5M/unit3/u1intro',
    name: 'C5Unit3MediumIntro',
    component: C5Unit3MediumIntro
},
{
    path: '/chap5M/unit3/u1p1',
    name: 'C5Unit3MediumRound1P1',
    component: C5Unit3MediumRound1P1
},
{
    path: '/chap5M/unit3/u1p2',
    name: 'C5Unit3MediumRound1P2',
    component: C5Unit3MediumRound1P2
},
{
    path: '/chap5M/unit3/u1p3',
    name: 'C5Unit3MediumRound1P3',
    component: C5Unit3MediumRound1P3
},
{
    path: '/chap5M/unit3/u1p4',
    name: 'C5Unit3MediumRound1P4',
    component: C5Unit3MediumRound1P4
},

/////////////// Chapter5 Medium Unit 3 Round 2
{
    path: '/chap5M/unit3/u2p1',
    name: 'C5Unit3MediumRound2P1',
    component: C5Unit3MediumRound2P1
},
{
    path: '/chap5M/unit3/u2p2',
    name: 'C5Unit3MediumRound2P2',
    component: C5Unit3MediumRound2P2
},
{
    path: '/chap5M/unit3/u2p3',
    name: 'C5Unit3MediumRound2P3',
    component: C5Unit3MediumRound2P3
},
{
    path: '/chap5M/unit3/u2p4',
    name: 'C5Unit3MediumRound2P4',
    component: C5Unit3MediumRound2P4
},

/////////////// Chapter5 Medium Unit 3 Round 3
{
    path: '/chap5M/unit3/u3p1',
    name: 'C5Unit3MediumRound3P1',
    component: C5Unit3MediumRound3P1
},
{
    path: '/chap5M/unit3/u3p2',
    name: 'C5Unit3MediumRound3P2',
    component: C5Unit3MediumRound3P2
},
{
    path: '/chap5M/unit3/u3p3',
    name: 'C5Unit3MediumRound3P3',
    component: C5Unit3MediumRound3P3
},
{
    path: '/chap5M/unit3/u3p4',
    name: 'C5Unit3MediumRound3P4',
    component: C5Unit3MediumRound3P4
},

/////////////// Chapter5 Medium Unit 3 Round 4
{
    path: '/chap5M/unit3/u4p1',
    name: 'C5Unit3MediumRound4P1',
    component: C5Unit3MediumRound4P1
},
{
    path: '/chap5M/unit3/u4p2',
    name: 'C5Unit3MediumRound4P2',
    component: C5Unit3MediumRound4P2
},
{
    path: '/chap5M/unit3/u4p3',
    name: 'C5Unit3MediumRound4P3',
    component: C5Unit3MediumRound4P3
},
{
    path: '/chap5M/unit3/u4p4',
    name: 'C5Unit3MediumRound4P4',
    component: C5Unit3MediumRound4P4
},
{
    path: '/chap5M/unit3/end',
    name: 'C5Unit3MediumEnd',
    component: C5Unit3MediumEnd
},



/////////////// Chapter5 Hard Unit 1 Round 1
{
    path: '/chap5H/unit1/u1intro',
    name: 'C5Unit1HardIntro',
    component: C5Unit1HardIntro
},
{
    path: '/chap5H/unit1/u1p1',
    name: 'C5Unit1HardRound1P1',
    component: C5Unit1HardRound1P1
},
{
    path: '/chap5H/unit1/u1p2',
    name: 'C5Unit1HardRound1P2',
    component: C5Unit1HardRound1P2
},
{
    path: '/chap5H/unit1/u1p3',
    name: 'C5Unit1HardRound1P3',
    component: C5Unit1HardRound1P3
},
{
    path: '/chap5H/unit1/u1p4',
    name: 'C5Unit1HardRound1P4',
    component: C5Unit1HardRound1P4
},

/////////////// Chapter5 Hard Unit 1 Round 2
{
    path: '/chap5H/unit1/u2p1',
    name: 'C5Unit1HardRound2P1',
    component: C5Unit1HardRound2P1
},
{
    path: '/chap5H/unit1/u2p2',
    name: 'C5Unit1HardRound2P2',
    component: C5Unit1HardRound2P2
},
{
    path: '/chap5H/unit1/u2p3',
    name: 'C5Unit1HardRound2P3',
    component: C5Unit1HardRound2P3
},
{
    path: '/chap5H/unit1/u2p4',
    name: 'C5Unit1HardRound2P4',
    component: C5Unit1HardRound2P4
},

/////////////// Chapter5 Hard Unit 1 Round 3
{
    path: '/chap5H/unit1/u3p1',
    name: 'C5Unit1HardRound3P1',
    component: C5Unit1HardRound3P1
},
{
    path: '/chap5H/unit1/u3p2',
    name: 'C5Unit1HardRound3P2',
    component: C5Unit1HardRound3P2
},
{
    path: '/chap5H/unit1/u3p3',
    name: 'C5Unit1HardRound3P3',
    component: C5Unit1HardRound3P3
},
{
    path: '/chap5H/unit1/u3p4',
    name: 'C5Unit1HardRound3P4',
    component: C5Unit1HardRound3P4
},

/////////////// Chapter5 Hard Unit 1 Round 4
{
    path: '/chap5H/unit1/u4p1',
    name: 'C5Unit1HardRound4P1',
    component: C5Unit1HardRound4P1
},
{
    path: '/chap5H/unit1/u4p2',
    name: 'C5Unit1HardRound4P2',
    component: C5Unit1HardRound4P2
},
{
    path: '/chap5H/unit1/u4p3',
    name: 'C5Unit1HardRound4P3',
    component: C5Unit1HardRound4P3
},
{
    path: '/chap5H/unit1/u4p4',
    name: 'C5Unit1HardRound4P4',
    component: C5Unit1HardRound4P4
},

/////////////// Chapter5 Hard Unit 2 Round 1
{
    path: '/chap5H/unit2/u1intro',
    name: 'C5Unit2HardIntro',
    component: C5Unit2HardIntro
},
{
    path: '/chap5H/unit2/u1p1',
    name: 'C5Unit2HardRound1P1',
    component: C5Unit2HardRound1P1
},
{
    path: '/chap5H/unit2/u1p2',
    name: 'C5Unit2HardRound1P2',
    component: C5Unit2HardRound1P2
},
{
    path: '/chap5H/unit2/u1p3',
    name: 'C5Unit2HardRound1P3',
    component: C5Unit2HardRound1P3
},
{
    path: '/chap5H/unit2/u1p4',
    name: 'C5Unit2HardRound1P4',
    component: C5Unit2HardRound1P4
},
{
    path: '/chap5H/unit1/end',
    name: 'C5Unit1HardEnd',
    component: C5Unit1HardEnd
},

/////////////// Chapter5 Hard Unit 2 Round 2
{
    path: '/chap5H/unit2/u2p1',
    name: 'C5Unit2HardRound2P1',
    component: C5Unit2HardRound2P1
},
{
    path: '/chap5H/unit2/u2p2',
    name: 'C5Unit2HardRound2P2',
    component: C5Unit2HardRound2P2
},
{
    path: '/chap5H/unit2/u2p3',
    name: 'C5Unit2HardRound2P3',
    component: C5Unit2HardRound2P3
},
{
    path: '/chap5H/unit2/u2p4',
    name: 'C5Unit2HardRound2P4',
    component: C5Unit2HardRound2P4
},

/////////////// Chapter5 Hard Unit 2 Round 3
{
    path: '/chap5H/unit2/u3p1',
    name: 'C5Unit2HardRound3P1',
    component: C5Unit2HardRound3P1
},
{
    path: '/chap5H/unit2/u3p2',
    name: 'C5Unit2HardRound3P2',
    component: C5Unit2HardRound3P2
},
{
    path: '/chap5H/unit2/u3p3',
    name: 'C5Unit2HardRound3P3',
    component: C5Unit2HardRound3P3
},
{
    path: '/chap5H/unit2/u3p4',
    name: 'C5Unit2HardRound3P4',
    component: C5Unit2HardRound3P4
},

/////////////// Chapter5 Hard Unit 2 Round 4
{
    path: '/chap5H/unit2/u4p1',
    name: 'C5Unit2HardRound4P1',
    component: C5Unit2HardRound4P1
},
{
    path: '/chap5H/unit2/u4p2',
    name: 'C5Unit2HardRound4P2',
    component: C5Unit2HardRound4P2
},
{
    path: '/chap5H/unit2/u4p3',
    name: 'C5Unit2HardRound4P3',
    component: C5Unit2HardRound4P3
},
{
    path: '/chap5H/unit2/u4p4',
    name: 'C5Unit2HardRound4P4',
    component: C5Unit2HardRound4P4
},
{
    path: '/chap5H/unit2/end',
    name: 'C5Unit2HardEnd',
    component: C5Unit2HardEnd
},

/////////////// Chapter5 Hard Unit 3 Round 1
{
    path: '/chap5H/unit3/u1intro',
    name: 'C5Unit3HardIntro',
    component: C5Unit3HardIntro
},
{
    path: '/chap5H/unit3/u1p1',
    name: 'C5Unit3HardRound1P1',
    component: C5Unit3HardRound1P1
},
{
    path: '/chap5H/unit3/u1p2',
    name: 'C5Unit3HardRound1P2',
    component: C5Unit3HardRound1P2
},
{
    path: '/chap5H/unit3/u1p3',
    name: 'C5Unit3HardRound1P3',
    component: C5Unit3HardRound1P3
},
{
    path: '/chap5H/unit3/u1p4',
    name: 'C5Unit3HardRound1P4',
    component: C5Unit3HardRound1P4
},

/////////////// Chapter5 Hard Unit 3 Round 2
{
    path: '/chap5H/unit3/u2p1',
    name: 'C5Unit3HardRound2P1',
    component: C5Unit3HardRound2P1
},
{
    path: '/chap5H/unit3/u2p2',
    name: 'C5Unit3HardRound2P2',
    component: C5Unit3HardRound2P2
},
{
    path: '/chap5H/unit3/u2p3',
    name: 'C5Unit3HardRound2P3',
    component: C5Unit3HardRound2P3
},
{
    path: '/chap5H/unit3/u2p4',
    name: 'C5Unit3HardRound2P4',
    component: C5Unit3HardRound2P4
},

/////////////// Chapter5 Hard Unit 3 Round 3
{
    path: '/chap5H/unit3/u3p1',
    name: 'C5Unit3HardRound3P1',
    component: C5Unit3HardRound3P1
},
{
    path: '/chap5H/unit3/u3p2',
    name: 'C5Unit3HardRound3P2',
    component: C5Unit3HardRound3P2
},
{
    path: '/chap5H/unit3/u3p3',
    name: 'C5Unit3HardRound3P3',
    component: C5Unit3HardRound3P3
},
{
    path: '/chap5H/unit3/u3p4',
    name: 'C5Unit3HardRound3P4',
    component: C5Unit3HardRound3P4
},

/////////////// Chapter5 Hard Unit 3 Round 4
{
    path: '/chap5H/unit3/u4p1',
    name: 'C5Unit3HardRound4P1',
    component: C5Unit3HardRound4P1
},
{
    path: '/chap5H/unit3/u4p2',
    name: 'C5Unit3HardRound4P2',
    component: C5Unit3HardRound4P2
},
{
    path: '/chap5H/unit3/u4p3',
    name: 'C5Unit3HardRound4P3',
    component: C5Unit3HardRound4P3
},
{
    path: '/chap5H/unit3/u4p4',
    name: 'C5Unit3HardRound4P4',
    component: C5Unit3HardRound4P4
},
{
    path: '/chap5H/unit3/end',
    name: 'C5Unit3HardEnd',
    component: C5Unit3HardEnd
},








































/////////////// Chapter6 Easy Unit 1 Round 1
{
    path: '/chap6E/unit1/u1intro',
    name: 'C6Unit1EasyIntro',
    component: C6Unit1EasyIntro
},
{
    path: '/chap6E/unit1/u1p1',
    name: 'C6Unit1EasyRound1P1',
    component: C6Unit1EasyRound1P1
},
{
    path: '/chap6E/unit1/u1p2',
    name: 'C6Unit1EasyRound1P2',
    component: C6Unit1EasyRound1P2
},
{
    path: '/chap6E/unit1/u1p3',
    name: 'C6Unit1EasyRound1P3',
    component: C6Unit1EasyRound1P3
},
{
    path: '/chap6E/unit1/u1p4',
    name: 'C6Unit1EasyRound1P4',
    component: C6Unit1EasyRound1P4
},

/////////////// Chapter6 Easy Unit 1 Round 2
{
    path: '/chap6E/unit1/u2p1',
    name: 'C6Unit1EasyRound2P1',
    component: C6Unit1EasyRound2P1
},
{
    path: '/chap6E/unit1/u2p2',
    name: 'C6Unit1EasyRound2P2',
    component: C6Unit1EasyRound2P2
},
{
    path: '/chap6E/unit1/u2p3',
    name: 'C6Unit1EasyRound2P3',
    component: C6Unit1EasyRound2P3
},
{
    path: '/chap6E/unit1/u2p4',
    name: 'C6Unit1EasyRound2P4',
    component: C6Unit1EasyRound2P4
},

/////////////// Chapter6 Easy Unit 1 Round 3
{
    path: '/chap6E/unit1/u3p1',
    name: 'C6Unit1EasyRound3P1',
    component: C6Unit1EasyRound3P1
},
{
    path: '/chap6E/unit1/u3p2',
    name: 'C6Unit1EasyRound3P2',
    component: C6Unit1EasyRound3P2
},
{
    path: '/chap6E/unit1/u3p3',
    name: 'C6Unit1EasyRound3P3',
    component: C6Unit1EasyRound3P3
},
{
    path: '/chap6E/unit1/u3p4',
    name: 'C6Unit1EasyRound3P4',
    component: C6Unit1EasyRound3P4
},

/////////////// Chapter6 Easy Unit 1 Round 4
{
    path: '/chap6E/unit1/u4p1',
    name: 'C6Unit1EasyRound4P1',
    component: C6Unit1EasyRound4P1
},
{
    path: '/chap6E/unit1/u4p2',
    name: 'C6Unit1EasyRound4P2',
    component: C6Unit1EasyRound4P2
},
{
    path: '/chap6E/unit1/u4p3',
    name: 'C6Unit1EasyRound4P3',
    component: C6Unit1EasyRound4P3
},
{
    path: '/chap6E/unit1/u4p4',
    name: 'C6Unit1EasyRound4P4',
    component: C6Unit1EasyRound4P4
},

/////////////// Chapter6 Easy Unit 1 Round 5
{
    path: '/chap6E/unit1/u5p1',
    name: 'C6Unit1EasyRound5P1',
    component: C6Unit1EasyRound5P1
},
{
    path: '/chap6E/unit1/u5p2',
    name: 'C6Unit1EasyRound5P2',
    component: C6Unit1EasyRound5P2
},
{
    path: '/chap6E/unit1/u5p3',
    name: 'C6Unit1EasyRound5P3',
    component: C6Unit1EasyRound5P3
},
{
    path: '/chap6E/unit1/u5p4',
    name: 'C6Unit1EasyRound5P4',
    component: C6Unit1EasyRound5P4
},
{
    path: '/chap6E/unit1/end',
    name: 'C6Unit1EasyEnd',
    component: C6Unit1EasyEnd
},

/////////////// Chapter6 Easy Unit 2 Round 1
{
    path: '/chap6E/unit2/u1intro',
    name: 'C6Unit2EasyIntro',
    component: C6Unit2EasyIntro
},
{
    path: '/chap6E/unit2/u1p1',
    name: 'C6Unit2EasyRound1P1',
    component: C6Unit2EasyRound1P1
},
{
    path: '/chap6E/unit2/u1p2',
    name: 'C6Unit2EasyRound1P2',
    component: C6Unit2EasyRound1P2
},
{
    path: '/chap6E/unit2/u1p3',
    name: 'C6Unit2EasyRound1P3',
    component: C6Unit2EasyRound1P3
},
{
    path: '/chap6E/unit2/u1p4',
    name: 'C6Unit2EasyRound1P4',
    component: C6Unit2EasyRound1P4
},

/////////////// Chapter6 Easy Unit 2 Round 2
{
    path: '/chap6E/unit2/u2p1',
    name: 'C6Unit2EasyRound2P1',
    component: C6Unit2EasyRound2P1
},
{
    path: '/chap6E/unit2/u2p2',
    name: 'C6Unit2EasyRound2P2',
    component: C6Unit2EasyRound2P2
},
{
    path: '/chap6E/unit2/u2p3',
    name: 'C6Unit2EasyRound2P3',
    component: C6Unit2EasyRound2P3
},
{
    path: '/chap6E/unit2/u2p4',
    name: 'C6Unit2EasyRound2P4',
    component: C6Unit2EasyRound2P4
},

/////////////// Chapter6 Easy Unit 2 Round 3
{
    path: '/chap6E/unit2/u3p1',
    name: 'C6Unit2EasyRound3P1',
    component: C6Unit2EasyRound3P1
},
{
    path: '/chap6E/unit2/u3p2',
    name: 'C6Unit2EasyRound3P2',
    component: C6Unit2EasyRound3P2
},
{
    path: '/chap6E/unit2/u3p3',
    name: 'C6Unit2EasyRound3P3',
    component: C6Unit2EasyRound3P3
},
{
    path: '/chap6E/unit2/u3p4',
    name: 'C6Unit2EasyRound3P4',
    component: C6Unit2EasyRound3P4
},

/////////////// Chapter6 Easy Unit 2 Round 4
{
    path: '/chap6E/unit2/u4p1',
    name: 'C6Unit2EasyRound4P1',
    component: C6Unit2EasyRound4P1
},
{
    path: '/chap6E/unit2/u4p2',
    name: 'C6Unit2EasyRound4P2',
    component: C6Unit2EasyRound4P2
},
{
    path: '/chap6E/unit2/u4p3',
    name: 'C6Unit2EasyRound4P3',
    component: C6Unit2EasyRound4P3
},
{
    path: '/chap6E/unit2/u4p4',
    name: 'C6Unit2EasyRound4P4',
    component: C6Unit2EasyRound4P4
},
{
    path: '/chap6E/unit2/end',
    name: 'C6Unit2EasyEnd',
    component: C6Unit2EasyEnd
},

/////////////// Chapter6 Easy Unit 3 Round 1
{
    path: '/chap6E/unit3/u1intro',
    name: 'C6Unit3EasyIntro',
    component: C6Unit3EasyIntro
},
{
    path: '/chap6E/unit3/u1p1',
    name: 'C6Unit3EasyRound1P1',
    component: C6Unit3EasyRound1P1
},
{
    path: '/chap6E/unit3/u1p2',
    name: 'C6Unit3EasyRound1P2',
    component: C6Unit3EasyRound1P2
},
{
    path: '/chap6E/unit3/u1p3',
    name: 'C6Unit3EasyRound1P3',
    component: C6Unit3EasyRound1P3
},
{
    path: '/chap6E/unit3/u1p4',
    name: 'C6Unit3EasyRound1P4',
    component: C6Unit3EasyRound1P4
},

/////////////// Chapter6 Easy Unit 3 Round 2
{
    path: '/chap6E/unit3/u2p1',
    name: 'C6Unit3EasyRound2P1',
    component: C6Unit3EasyRound2P1
},
{
    path: '/chap6E/unit3/u2p2',
    name: 'C6Unit3EasyRound2P2',
    component: C6Unit3EasyRound2P2
},
{
    path: '/chap6E/unit3/u2p3',
    name: 'C6Unit3EasyRound2P3',
    component: C6Unit3EasyRound2P3
},
{
    path: '/chap6E/unit3/u2p4',
    name: 'C6Unit3EasyRound2P4',
    component: C6Unit3EasyRound2P4
},

/////////////// Chapter6 Easy Unit 3 Round 3
{
    path: '/chap6E/unit3/u3p1',
    name: 'C6Unit3EasyRound3P1',
    component: C6Unit3EasyRound3P1
},
{
    path: '/chap6E/unit3/u3p2',
    name: 'C6Unit3EasyRound3P2',
    component: C6Unit3EasyRound3P2
},
{
    path: '/chap6E/unit3/u3p3',
    name: 'C6Unit3EasyRound3P3',
    component: C6Unit3EasyRound3P3
},
{
    path: '/chap6E/unit3/u3p4',
    name: 'C6Unit3EasyRound3P4',
    component: C6Unit3EasyRound3P4
},

/////////////// Chapter6 Easy Unit 3 Round 4
{
    path: '/chap6E/unit3/u4p1',
    name: 'C6Unit3EasyRound4P1',
    component: C6Unit3EasyRound4P1
},
{
    path: '/chap6E/unit3/u4p2',
    name: 'C6Unit3EasyRound4P2',
    component: C6Unit3EasyRound4P2
},
{
    path: '/chap6E/unit3/u4p3',
    name: 'C6Unit3EasyRound4P3',
    component: C6Unit3EasyRound4P3
},
{
    path: '/chap6E/unit3/u4p4',
    name: 'C6Unit3EasyRound4P4',
    component: C6Unit3EasyRound4P4
},
{
    path: '/chap6E/unit3/end',
    name: 'C6Unit3EasyEnd',
    component: C6Unit3EasyEnd
},

/////////////// Chapter6 Medium Unit 1 Round 1
{
    path: '/chap6M/unit1/u1intro',
    name: 'C6Unit1MediumIntro',
    component: C6Unit1MediumIntro
},
{
    path: '/chap6M/unit1/u1p1',
    name: 'C6Unit1MediumRound1P1',
    component: C6Unit1MediumRound1P1
},
{
    path: '/chap6M/unit1/u1p2',
    name: 'C6Unit1MediumRound1P2',
    component: C6Unit1MediumRound1P2
},
{
    path: '/chap6M/unit1/u1p3',
    name: 'C6Unit1MediumRound1P3',
    component: C6Unit1MediumRound1P3
},
{
    path: '/chap6M/unit1/u1p4',
    name: 'C6Unit1MediumRound1P4',
    component: C6Unit1MediumRound1P4
},

/////////////// Chapter6 Medium Unit 1 Round 2
{
    path: '/chap6M/unit1/u2p1',
    name: 'C6Unit1MediumRound2P1',
    component: C6Unit1MediumRound2P1
},
{
    path: '/chap6M/unit1/u2p2',
    name: 'C6Unit1MediumRound2P2',
    component: C6Unit1MediumRound2P2
},
{
    path: '/chap6M/unit1/u2p3',
    name: 'C6Unit1MediumRound2P3',
    component: C6Unit1MediumRound2P3
},
{
    path: '/chap6M/unit1/u2p4',
    name: 'C6Unit1MediumRound2P4',
    component: C6Unit1MediumRound2P4
},

/////////////// Chapter6 Medium Unit 1 Round 3
{
    path: '/chap6M/unit1/u3p1',
    name: 'C6Unit1MediumRound3P1',
    component: C6Unit1MediumRound3P1
},
{
    path: '/chap6M/unit1/u3p2',
    name: 'C6Unit1MediumRound3P2',
    component: C6Unit1MediumRound3P2
},
{
    path: '/chap6M/unit1/u3p3',
    name: 'C6Unit1MediumRound3P3',
    component: C6Unit1MediumRound3P3
},
{
    path: '/chap6M/unit1/u3p4',
    name: 'C6Unit1MediumRound3P4',
    component: C6Unit1MediumRound3P4
},

/////////////// Chapter6 Medium Unit 1 Round 4
{
    path: '/chap6M/unit1/u4p1',
    name: 'C6Unit1MediumRound4P1',
    component: C6Unit1MediumRound4P1
},
{
    path: '/chap6M/unit1/u4p2',
    name: 'C6Unit1MediumRound4P2',
    component: C6Unit1MediumRound4P2
},
{
    path: '/chap6M/unit1/u4p3',
    name: 'C6Unit1MediumRound4P3',
    component: C6Unit1MediumRound4P3
},
{
    path: '/chap6M/unit1/u4p4',
    name: 'C6Unit1MediumRound4P4',
    component: C6Unit1MediumRound4P4
},

/////////////// Chapter6 Medium Unit 1 Round 5
{
    path: '/chap6M/unit1/u5p1',
    name: 'C6Unit1MediumRound5P1',
    component: C6Unit1MediumRound5P1
},
{
    path: '/chap6M/unit1/u5p2',
    name: 'C6Unit1MediumRound5P2',
    component: C6Unit1MediumRound5P2
},
{
    path: '/chap6M/unit1/u5p3',
    name: 'C6Unit1MediumRound5P3',
    component: C6Unit1MediumRound5P3
},
{
    path: '/chap6M/unit1/u5p4',
    name: 'C6Unit1MediumRound5P4',
    component: C6Unit1MediumRound5P4
},
{
    path: '/chap6M/unit1/end',
    name: 'C6Unit1MediumEnd',
    component: C6Unit1MediumEnd
},

/////////////// Chapter6 Medium Unit 2 Round 1
{
    path: '/chap6M/unit2/u1intro',
    name: 'C6Unit2MediumIntro',
    component: C6Unit2MediumIntro
},
{
    path: '/chap6M/unit2/u1p1',
    name: 'C6Unit2MediumRound1P1',
    component: C6Unit2MediumRound1P1
},
{
    path: '/chap6M/unit2/u1p2',
    name: 'C6Unit2MediumRound1P2',
    component: C6Unit2MediumRound1P2
},
{
    path: '/chap6M/unit2/u1p3',
    name: 'C6Unit2MediumRound1P3',
    component: C6Unit2MediumRound1P3
},
{
    path: '/chap6M/unit2/u1p4',
    name: 'C6Unit2MediumRound1P4',
    component: C6Unit2MediumRound1P4
},

/////////////// Chapter6 Medium Unit 2 Round 2
{
    path: '/chap6M/unit2/u2p1',
    name: 'C6Unit2MediumRound2P1',
    component: C6Unit2MediumRound2P1
},
{
    path: '/chap6M/unit2/u2p2',
    name: 'C6Unit2MediumRound2P2',
    component: C6Unit2MediumRound2P2
},
{
    path: '/chap6M/unit2/u2p3',
    name: 'C6Unit2MediumRound2P3',
    component: C6Unit2MediumRound2P3
},
{
    path: '/chap6M/unit2/u2p4',
    name: 'C6Unit2MediumRound2P4',
    component: C6Unit2MediumRound2P4
},

/////////////// Chapter6 Medium Unit 2 Round 3
{
    path: '/chap6M/unit2/u3p1',
    name: 'C6Unit2MediumRound3P1',
    component: C6Unit2MediumRound3P1
},
{
    path: '/chap6M/unit2/u3p2',
    name: 'C6Unit2MediumRound3P2',
    component: C6Unit2MediumRound3P2
},
{
    path: '/chap6M/unit2/u3p3',
    name: 'C6Unit2MediumRound3P3',
    component: C6Unit2MediumRound3P3
},
{
    path: '/chap6M/unit2/u3p4',
    name: 'C6Unit2MediumRound3P4',
    component: C6Unit2MediumRound3P4
},

/////////////// Chapter6 Medium Unit 2 Round 4
{
    path: '/chap6M/unit2/u4p1',
    name: 'C6Unit2MediumRound4P1',
    component: C6Unit2MediumRound4P1
},
{
    path: '/chap6M/unit2/u4p2',
    name: 'C6Unit2MediumRound4P2',
    component: C6Unit2MediumRound4P2
},
{
    path: '/chap6M/unit2/u4p3',
    name: 'C6Unit2MediumRound4P3',
    component: C6Unit2MediumRound4P3
},
{
    path: '/chap6M/unit2/u4p4',
    name: 'C6Unit2MediumRound4P4',
    component: C6Unit2MediumRound4P4
},
{
    path: '/chap6M/unit2/end',
    name: 'C6Unit2MediumEnd',
    component: C6Unit2MediumEnd
},

/////////////// Chapter6 Medium Unit 3 Round 1
{
    path: '/chap6M/unit3/u1intro',
    name: 'C6Unit3MediumIntro',
    component: C6Unit3MediumIntro
},
{
    path: '/chap6M/unit3/u1p1',
    name: 'C6Unit3MediumRound1P1',
    component: C6Unit3MediumRound1P1
},
{
    path: '/chap6M/unit3/u1p2',
    name: 'C6Unit3MediumRound1P2',
    component: C6Unit3MediumRound1P2
},
{
    path: '/chap6M/unit3/u1p3',
    name: 'C6Unit3MediumRound1P3',
    component: C6Unit3MediumRound1P3
},
{
    path: '/chap6M/unit3/u1p4',
    name: 'C6Unit3MediumRound1P4',
    component: C6Unit3MediumRound1P4
},

/////////////// Chapter6 Medium Unit 3 Round 2
{
    path: '/chap6M/unit3/u2p1',
    name: 'C6Unit3MediumRound2P1',
    component: C6Unit3MediumRound2P1
},
{
    path: '/chap6M/unit3/u2p2',
    name: 'C6Unit3MediumRound2P2',
    component: C6Unit3MediumRound2P2
},
{
    path: '/chap6M/unit3/u2p3',
    name: 'C6Unit3MediumRound2P3',
    component: C6Unit3MediumRound2P3
},
{
    path: '/chap6M/unit3/u2p4',
    name: 'C6Unit3MediumRound2P4',
    component: C6Unit3MediumRound2P4
},

/////////////// Chapter6 Medium Unit 3 Round 3
{
    path: '/chap6M/unit3/u3p1',
    name: 'C6Unit3MediumRound3P1',
    component: C6Unit3MediumRound3P1
},
{
    path: '/chap6M/unit3/u3p2',
    name: 'C6Unit3MediumRound3P2',
    component: C6Unit3MediumRound3P2
},
{
    path: '/chap6M/unit3/u3p3',
    name: 'C6Unit3MediumRound3P3',
    component: C6Unit3MediumRound3P3
},
{
    path: '/chap6M/unit3/u3p4',
    name: 'C6Unit3MediumRound3P4',
    component: C6Unit3MediumRound3P4
},

/////////////// Chapter6 Medium Unit 3 Round 4
{
    path: '/chap6M/unit3/u4p1',
    name: 'C6Unit3MediumRound4P1',
    component: C6Unit3MediumRound4P1
},
{
    path: '/chap6M/unit3/u4p2',
    name: 'C6Unit3MediumRound4P2',
    component: C6Unit3MediumRound4P2
},
{
    path: '/chap6M/unit3/u4p3',
    name: 'C6Unit3MediumRound4P3',
    component: C6Unit3MediumRound4P3
},
{
    path: '/chap6M/unit3/u4p4',
    name: 'C6Unit3MediumRound4P4',
    component: C6Unit3MediumRound4P4
},
{
    path: '/chap6M/unit3/end',
    name: 'C6Unit3MediumEnd',
    component: C6Unit3MediumEnd
},

/////////////// Chapter6 Hard Unit 1 Round 1
{
    path: '/chap6H/unit1/u1intro',
    name: 'C6Unit1HardIntro',
    component: C6Unit1HardIntro
},
{
    path: '/chap6H/unit1/u1p1',
    name: 'C6Unit1HardRound1P1',
    component: C6Unit1HardRound1P1
},
{
    path: '/chap6H/unit1/u1p2',
    name: 'C6Unit1HardRound1P2',
    component: C6Unit1HardRound1P2
},
{
    path: '/chap6H/unit1/u1p3',
    name: 'C6Unit1HardRound1P3',
    component: C6Unit1HardRound1P3
},
{
    path: '/chap6H/unit1/u1p4',
    name: 'C6Unit1HardRound1P4',
    component: C6Unit1HardRound1P4
},

/////////////// Chapter6 Hard Unit 1 Round 2
{
    path: '/chap6H/unit1/u2p1',
    name: 'C6Unit1HardRound2P1',
    component: C6Unit1HardRound2P1
},
{
    path: '/chap6H/unit1/u2p2',
    name: 'C6Unit1HardRound2P2',
    component: C6Unit1HardRound2P2
},
{
    path: '/chap6H/unit1/u2p3',
    name: 'C6Unit1HardRound2P3',
    component: C6Unit1HardRound2P3
},
{
    path: '/chap6H/unit1/u2p4',
    name: 'C6Unit1HardRound2P4',
    component: C6Unit1HardRound2P4
},

/////////////// Chapter6 Hard Unit 1 Round 3
{
    path: '/chap6H/unit1/u3p1',
    name: 'C6Unit1HardRound3P1',
    component: C6Unit1HardRound3P1
},
{
    path: '/chap6H/unit1/u3p2',
    name: 'C6Unit1HardRound3P2',
    component: C6Unit1HardRound3P2
},
{
    path: '/chap6H/unit1/u3p3',
    name: 'C6Unit1HardRound3P3',
    component: C6Unit1HardRound3P3
},
{
    path: '/chap6H/unit1/u3p4',
    name: 'C6Unit1HardRound3P4',
    component: C6Unit1HardRound3P4
},

/////////////// Chapter6 Hard Unit 1 Round 4
{
    path: '/chap6H/unit1/u4p1',
    name: 'C6Unit1HardRound4P1',
    component: C6Unit1HardRound4P1
},
{
    path: '/chap6H/unit1/u4p2',
    name: 'C6Unit1HardRound4P2',
    component: C6Unit1HardRound4P2
},
{
    path: '/chap6H/unit1/u4p3',
    name: 'C6Unit1HardRound4P3',
    component: C6Unit1HardRound4P3
},
{
    path: '/chap6H/unit1/u4p4',
    name: 'C6Unit1HardRound4P4',
    component: C6Unit1HardRound4P4
},

/////////////// Chapter6 Hard Unit 1 Round 5
{
    path: '/chap6H/unit1/u5p1',
    name: 'C6Unit1HardRound5P1',
    component: C6Unit1HardRound5P1
},
{
    path: '/chap6H/unit1/u5p2',
    name: 'C6Unit1HardRound5P2',
    component: C6Unit1HardRound5P2
},
{
    path: '/chap6H/unit1/u5p3',
    name: 'C6Unit1HardRound5P3',
    component: C6Unit1HardRound5P3
},
{
    path: '/chap6H/unit1/u5p4',
    name: 'C6Unit1HardRound5P4',
    component: C6Unit1HardRound5P4
},
{
    path: '/chap6H/unit1/end',
    name: 'C6Unit1HardEnd',
    component: C6Unit1HardEnd
},

/////////////// Chapter6 Hard Unit 2 Round 1
{
    path: '/chap6H/unit2/u1intro',
    name: 'C6Unit2HardIntro',
    component: C6Unit2HardIntro
},
{
    path: '/chap6H/unit2/u1p1',
    name: 'C6Unit2HardRound1P1',
    component: C6Unit2HardRound1P1
},
{
    path: '/chap6H/unit2/u1p2',
    name: 'C6Unit2HardRound1P2',
    component: C6Unit2HardRound1P2
},
{
    path: '/chap6H/unit2/u1p3',
    name: 'C6Unit2HardRound1P3',
    component: C6Unit2HardRound1P3
},
{
    path: '/chap6H/unit2/u1p4',
    name: 'C6Unit2HardRound1P4',
    component: C6Unit2HardRound1P4
},

/////////////// Chapter6 Hard Unit 2 Round 2
{
    path: '/chap6H/unit2/u2p1',
    name: 'C6Unit2HardRound2P1',
    component: C6Unit2HardRound2P1
},
{
    path: '/chap6H/unit2/u2p2',
    name: 'C6Unit2HardRound2P2',
    component: C6Unit2HardRound2P2
},
{
    path: '/chap6H/unit2/u2p3',
    name: 'C6Unit2HardRound2P3',
    component: C6Unit2HardRound2P3
},
{
    path: '/chap6H/unit2/u2p4',
    name: 'C6Unit2HardRound2P4',
    component: C6Unit2HardRound2P4
},

/////////////// Chapter6 Hard Unit 2 Round 3
{
    path: '/chap6H/unit2/u3p1',
    name: 'C6Unit2HardRound3P1',
    component: C6Unit2HardRound3P1
},
{
    path: '/chap6H/unit2/u3p2',
    name: 'C6Unit2HardRound3P2',
    component: C6Unit2HardRound3P2
},
{
    path: '/chap6H/unit2/u3p3',
    name: 'C6Unit2HardRound3P3',
    component: C6Unit2HardRound3P3
},
{
    path: '/chap6H/unit2/u3p4',
    name: 'C6Unit2HardRound3P4',
    component: C6Unit2HardRound3P4
},

/////////////// Chapter6 Hard Unit 2 Round 4
{
    path: '/chap6H/unit2/u4p1',
    name: 'C6Unit2HardRound4P1',
    component: C6Unit2HardRound4P1
},
{
    path: '/chap6H/unit2/u4p2',
    name: 'C6Unit2HardRound4P2',
    component: C6Unit2HardRound4P2
},
{
    path: '/chap6H/unit2/u4p3',
    name: 'C6Unit2HardRound4P3',
    component: C6Unit2HardRound4P3
},
{
    path: '/chap6H/unit2/u4p4',
    name: 'C6Unit2HardRound4P4',
    component: C6Unit2HardRound4P4
},
{
    path: '/chap6H/unit2/end',
    name: 'C6Unit2HardEnd',
    component: C6Unit2HardEnd
},

/////////////// Chapter6 Hard Unit 3 Round 1
{
    path: '/chap6H/unit3/u1intro',
    name: 'C6Unit3HardIntro',
    component: C6Unit3HardIntro
},
{
    path: '/chap6H/unit3/u1p1',
    name: 'C6Unit3HardRound1P1',
    component: C6Unit3HardRound1P1
},
{
    path: '/chap6H/unit3/u1p2',
    name: 'C6Unit3HardRound1P2',
    component: C6Unit3HardRound1P2
},
{
    path: '/chap6H/unit3/u1p3',
    name: 'C6Unit3HardRound1P3',
    component: C6Unit3HardRound1P3
},
{
    path: '/chap6H/unit3/u1p4',
    name: 'C6Unit3HardRound1P4',
    component: C6Unit3HardRound1P4
},

/////////////// Chapter6 Hard Unit 3 Round 2
{
    path: '/chap6H/unit3/u2p1',
    name: 'C6Unit3HardRound2P1',
    component: C6Unit3HardRound2P1
},
{
    path: '/chap6H/unit3/u2p2',
    name: 'C6Unit3HardRound2P2',
    component: C6Unit3HardRound2P2
},
{
    path: '/chap6H/unit3/u2p3',
    name: 'C6Unit3HardRound2P3',
    component: C6Unit3HardRound2P3
},
{
    path: '/chap6H/unit3/u2p4',
    name: 'C6Unit3HardRound2P4',
    component: C6Unit3HardRound2P4
},

/////////////// Chapter6 Hard Unit 3 Round 3
{
    path: '/chap6H/unit3/u3p1',
    name: 'C6Unit3HardRound3P1',
    component: C6Unit3HardRound3P1
},
{
    path: '/chap6H/unit3/u3p2',
    name: 'C6Unit3HardRound3P2',
    component: C6Unit3HardRound3P2
},
{
    path: '/chap6H/unit3/u3p3',
    name: 'C6Unit3HardRound3P3',
    component: C6Unit3HardRound3P3
},
{
    path: '/chap6H/unit3/u3p4',
    name: 'C6Unit3HardRound3P4',
    component: C6Unit3HardRound3P4
},

/////////////// Chapter6 Hard Unit 3 Round 4
{
    path: '/chap6H/unit3/u4p1',
    name: 'C6Unit3HardRound4P1',
    component: C6Unit3HardRound4P1
},
{
    path: '/chap6H/unit3/u4p2',
    name: 'C6Unit3HardRound4P2',
    component: C6Unit3HardRound4P2
},
{
    path: '/chap6H/unit3/u4p3',
    name: 'C6Unit3HardRound4P3',
    component: C6Unit3HardRound4P3
},
{
    path: '/chap6H/unit3/u4p4',
    name: 'C6Unit3HardRound4P4',
    component: C6Unit3HardRound4P4
},
{
    path: '/chap6H/unit3/end',
    name: 'C6Unit3HardEnd',
    component: C6Unit3HardEnd
},


    ]
})


router.beforeEach((to, from, next)=>{
    // check to see if route requires auth
    if(to.matched.some(rec=>rec.meta.requiresAuth)){
        //check auth state user
        let user = firebase.auth().currentUser
        if(user){
            //user sign in,proceed to route
            next()
        }else{
            //no use signed in, rediret to login
            next({name: 'Login'})
        }
    }else{
        next()
    }
})


export default router