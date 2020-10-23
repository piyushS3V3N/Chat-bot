/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Run \"npm run dev\" for compiling any changes\n//code to execute bi directional communication with chat bot.\nwindow.onload = function () {\n  // code to maximize, minimize chat bot.\n  function toggle1() {\n    var e = document.getElementById(\"containerchtbx\");\n    e.classList.toggle(\"active\");\n    var x = document.getElementById(\"active\");\n\n    if (x.style.display == \"none\" || x.style.display == '') {\n      x.style.display = \"block\";\n\n      if (first_toggle) {\n        appendchatBx(false, \"|start|\");\n        first_toggle = false;\n      }\n    } else x.style.display = \"none\";\n  }\n\n  window.toggle1 = toggle1;\n  let first_toggle = true;\n  let choice = [0, 0, 0, 0, 0, 0]; // let user_email = \"\";\n\n  let user_course = \"\";\n  let user_name = \"\";\n  let user_roll = \"\";\n  let user_mail = \"\";\n  let user_batch = \"\";\n  let user_drop = \"\";\n  let user_purpose = \"\";\n  let user_year = \"\";\n  let taking_input = false;\n  let taking_name = false;\n  let iter = 0;\n  let index = 0;\n  let end = false;\n  const courses = {\n    1: \"BBA\",\n    2: \"BCA\",\n    3: \"B.Com\",\n    4: \"BA JMC\",\n    5: \"BALLB\"\n  };\n  const tips_syllabus = \"https://www.tips.edu.in/syllabus\";\n  const tips_success = \"https://tips.edu.in/tipsian-success-stories\";\n  const tips_fee = \"https://tips.edu.in/fee-structure\";\n  const tips_migration_form = \"\";\n  const tips_whatsapp_student_support = \"\";\n  const tips_student_support_mail = \"studentsupport@tips.edu.in\";\n  const tips_grace_marks_form = \"\";\n  const tips_dropout_form = \"\";\n  const tips_DDdetails = \"\";\n  const tips_hrd_email = \"tipsdwarkahrd@gmail.com\";\n  const tips_hrd_form = \"https://tips.edu.in/download_file/13.pdf\";\n  const tips_hrd_support_no = \"9315911710\";\n  const tips_bca_no = \"9654604666\";\n  const tips_bba_bcom_no = \"9315911713\";\n  const tips_law_no = \"9315911716\";\n  const tips_bjmc_no = \"9315911707\";\n  const wrong_roll = \"Wrong Enrollment Number: <br>Make sure number does not contain any alphabet <br>Enter again\";\n  const wrong_mail = \"Wrong E-mail ID: <br>Please check entered E-mail ID <br>Enter again\";\n  const greetings = \"Hello, I\\'m Chat Bot of Trinity Institute Of Professional Studies. <br>Please enter your name:\";\n  const options = {\n    \"0\": \"Hello |user_name|. <br>I Operate best when asked short, direct questions. <br>Enter \\'reset\\' anytime to reset the options <br>What would you like to talk about <br>   1. Admissions <br>   2. Student Support <br>   3. Accounts <br>   4. HR\",\n    // Admission\n    \"1\": {\n      \"0\": \"Courses Offered <br>   1. BBA <br>   2. BCA <br>   3. B.Com <br>   4. BA JMC <br>   5. BA LLB\",\n      \"any\": {\n        \"0\": \"Choose Action <br>   1. Contact Admission Counsellor <br>   2. Syllabus, Duration & Promotion Criteria <br>   3. Placements <br>   4. Fee Structure \",\n        \"1\": \"Please Contact Admission counsellor of |course| at |c_number|.\",\n        \"2\": \"To view syllabus visit <br><a href=\\\"\" + tips_syllabus + \"\\\" target=\\\"_blank\\\">This Site</a>\",\n        \"3\": \"Placement Link <br><a href=\\\"\" + tips_success + \"\\\" target=\\\"_blank\\\">This Site</a>\",\n        \"4\": \"Fee - <a href=\\\"\" + tips_fee + \"\\\" target=\\\"_blank\\\">This Site</a>\"\n      }\n    },\n    // Student cell\n    \"2\": {\n      \"0\": \"Choose From: <br>   1. Degree <br>   2. Bonafide <br>   3. Requirement of Transcripts regarding higher studies <br>   4. Migration <br>   5. Correction of Name <br>   6. Marksheets / Provisional / Consolidated <br>   7. Issuance of Backlog Certificate <br>   8. Issuance of NOC for summer Internship <br>   9. Grace Marks <br>   10. Issuance of Provisioal Certificate <br>   11. Drop Out Form\",\n      \"1\": {\n        // send Email\n        \"1a\": \"Query about Degree <br>Enter Enrollment number\",\n        \"2a\": \"Enter E-mail ID\",\n        \"3a\": \"Enter Course\",\n        \"4a\": \"Enter Batch\",\n        \"5a\": \"Are you Drop out (Yes/No)\"\n      },\n      \"2\": {\n        // Send email\n        \"1a\": \"Bonafide <br>Enter Enrollment number\",\n        \"2a\": \"Enter E-mail ID\",\n        \"3a\": \"Enter Purpose\"\n      },\n      // Email or not\n      \"3\": \"Not Complete\",\n      // Add url\n      \"4\": \"Migration <br>Please follow Following instructions: <br>Download migration form from University Site-> <a href=\\\"\" + tips_migration_form + \"\\\" target=\\\"_blank\\\">Download Form</a> <br>Submit with Provisional + Consolidated Marksheets <br>Fill it and submit it in the university after getting attested from the Director of the Institute.\",\n      \"5\": \"Correction of Name <br>Please follow Following instructions: <br>Hand written Application + 500 Rs Challan - To be submitted in the university, Along with 10th Certificate, 12th marksheet, All Xerox of Marksheet, Affidavit by the SDM and Adhar Card.\",\n      // Add whatsapp number\n      \"6\": \"Marksheets/Provisional/Consolidated <br>Whatsapp No. \" + tips_whatsapp_student_support + \" of student Cell for further communication email to\" + tips_student_support_mail + \".\",\n      \"7\": \"Issuance of Backlog Certificate <br>Follow these instructions: <br>Write application to the Director + All Regular and Reappear marksheets or pdf result <br>Then submit it in the institute.\",\n      \"8\": \"Issuance of NOC for summer Internship: <br>Write an application in favor of the Director needs to be submitted / Shared with Student Support <br>Then submit it in the institute.\",\n      // Add site\n      \"9\": \"Grace Marks: <br>Download form from the University Site \" + tips_grace_marks_form + \" - All Regular + Reappear marksheets(xerox or pdf result) <br>Then Submit it in the univeristy / institute after getting attested from the Director of the Institute.\",\n      \"10\": \"Issuance of Provisioal Certificate: <br>Write application to the Director + Marksheets(regular/ reappear) + pdf result <br>Then Submit it in the institute.\",\n      // Add site\n      \"11\": \"Drop Out Form <br>Download form from the University Site \" + tips_dropout_form + \" - All Regular + Reappear marksheets(xerox or pdf result) <br>Then Submit it in the univeristy / institute after getting attested from the Director of the Institute.\"\n    },\n    // Accounts\n    \"3\": {\n      \"0\": \"Choose from: <br>   1. Fee Payment <br>   2. Fee Structure <br>   3. Security\",\n      \"1\": \"Visit our official site and click on Pay fee \",\n      // <br> OR <br>DD Details: \" + tips_DDdetails, // Add DD details\n      \"2\": \"Visit <a href=\\\"\" + tips_fee + \"\\\" target=\\\"_blank\\\">this site</a> to see fee structure\",\n      \"3\": {\n        // send Email\n        \"1a\": \"Security <br>Enter Enrollment number\",\n        \"2a\": \"Enter E-mail ID\",\n        \"3a\": \"Enter Batch\",\n        \"4a\": \"Enter Year\"\n      }\n    },\n    // HR\n    \"4\": {\n      \"0\": \"Job Options <br>   1. Teaching <br>   2. Non-Teaching\",\n      \"1\": \"Teaching Jobs are available for: <br>B.COM, BBA, BCA, BA LLB, BA JMC <br>As: <br>Professor, Associate Professor, Assistant Professor <br><br>If Interested send your resume at: \" + tips_hrd_email + \" <br>Along with this document - <a href=\\\"\" + tips_hrd_form + \"\\\" target=\\\"_blank\\\">Click Here</a> <br><br>For Further assistance Contact - \" + tips_hrd_support_no,\n      \"2\": \"Non-Teaching Jobs include: <br>Accountant <br>HR / Admin Assistant <br>Examination <br>Receptionist <br>IT / Hardware engineer / Audio / Video Lab <br>Librarian <br><br>If Interested send your resume at: \" + tips_hrd_email + \" <br>Along with this document - <a href=\\\"\" + tips_hrd_form + \"\\\" target=\\\"_blank\\\">Click Here</a> <br><br>For Further assistance Contact - \" + tips_hrd_support_no\n    }\n  };\n  const submit = document.querySelector(\".chat-submit\");\n  const chatBx = document.querySelector(\".chat-box\");\n  const chatInp = document.querySelector(\".chat-input\");\n  document.getElementById(\"sub\").focus();\n\n  function chattemp(botOrhuman) {\n    return `\n        <div class=\"bot-human-container\">\n          <div class=\"${botOrhuman.class}\">\n            <p>${botOrhuman.text}</p>\n          </div>\n          <span class=\"${botOrhuman.class}-date\">${botOrhuman.date}</span>\n        </div>\n      `;\n  }\n\n  function callfun() {\n    if (chatInp.value != \"\") {\n      document.getElementById(\"sub\").disabled = true;\n      appendchatBx(true, chatInp.value);\n      setTimeout(function () {\n        document.getElementById(\"sub\").disabled = false;\n        document.getElementById(\"sub\").focus();\n      }, 500);\n    }\n  }\n\n  submit.addEventListener(\"click\", function (e) {\n    callfun();\n  });\n  document.addEventListener(\"keypress\", function (e) {\n    if (e.keyCode == \"13\") callfun();\n  });\n\n  async function appendchatBx(fromhuman, input) {\n    const date = new Date();\n    if (!fromhuman) date.setSeconds(date.getSeconds() + 2);\n    if (fromhuman && !chatInp.value.trim()) return;\n    const timestamp = date.toLocaleTimeString();\n    const newChatDiv = chattemp({\n      class: fromhuman ? \"human\" : \"bot\",\n      text: fromhuman ? chatInp.value.trim() : await botResponse(input),\n      date: timestamp\n    });\n\n    if (!fromhuman) {\n      setTimeout(function () {\n        chatBx.innerHTML += newChatDiv;\n        chatBx.scrollTop = chatBx.scrollHeight;\n      }, 500);\n    } else {\n      chatBx.innerHTML += newChatDiv;\n      chatBx.scrollTop = chatBx.scrollHeight;\n    }\n\n    if (fromhuman) {\n      chatInp.value = \"\";\n      appendchatBx(false, input);\n    }\n  }\n\n  function get_roll(content) {\n    if (/^\\d+$/.test(content) && content.length > 8) {\n      user_roll = content;\n      console.log(\"no. = \" + user_roll);\n      return true;\n    }\n\n    return false;\n  }\n\n  function get_mail(content) {\n    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.test(content)) {\n      user_mail = content;\n      console.log(\"Mail = \" + user_mail);\n      return true;\n    }\n\n    return false;\n  }\n\n  async function botResponse(content) {\n    console.log(\"botResponse called \" + content);\n    content = content.trim();\n    console.log(\"Content = \" + content);\n\n    if (content == \"reset\") {\n      choice = [0, 0, 0, 0, 0, 0];\n      index = 0;\n      iter = 0;\n      taking_input = false;\n      end = false;\n      return options[\"0\"];\n    } else if (first_toggle || taking_name) {\n      if (!taking_name) {\n        console.log(\"not taking input\");\n        taking_name = true;\n        return greetings;\n      }\n\n      taking_name = false;\n      console.log(\"user name = \" + content);\n      user_name = content;\n      options[\"0\"] = options[\"0\"].replace(\"|user_name|\", user_name);\n      return options[\"0\"];\n    }\n\n    content = content.toLowerCase();\n    let response = \"\";\n\n    if (content.length < 3 && Number.isInteger(parseInt(content)) || taking_input) {\n      if (end) return \"Enter \\'reset\\' to go back to menu\";\n\n      if (!taking_input) {\n        choice[index] = parseInt(content);\n        index += 1;\n      }\n\n      console.log(\"choice = \" + choice);\n      return await normalChat(content);\n    }\n\n    response = await sendText(content);\n    console.log(\"Back to botResponse = \" + response);\n    return response;\n  }\n\n  async function normalChat(content) {\n    let response = \"\";\n\n    switch (choice[0]) {\n      case 1:\n        // Admission\n        console.log(\"Admission\");\n\n        if (choice[1] == 0) {\n          console.log(\"Course List\");\n          return options[\"1\"][\"0\"];\n        } else {\n          user_course = courses[choice[1]];\n          console.log(\"Course = \" + user_course);\n\n          if (choice[2] == 0) {\n            console.log(\"Action List\");\n            return options[\"1\"][\"any\"][\"0\"];\n          } else {\n            if (choice[2] == 1) {\n              // response = await sendEmail(1.1);\n              // return response;\n              let num = \"\";\n              if (choice[1] == 1 || choice[1] == 3) num = tips_bba_bcom_no;else if (choice[1] == 2) num = tips_bca_no;else if (choice[1] == 4) num = tips_bjmc_no;else if (choice[1] == 5) num = tips_law_no;else num = \"some internal error\";\n              end = true;\n              return options[\"1\"][\"any\"][\"1\"].replace(\"|c_number|\", num).replace(\"|course|\", user_course);\n            }\n\n            console.log(\"Info\");\n            end = true;\n            return options[\"1\"][\"any\"][choice[index - 1]];\n          }\n        }\n\n      case 2:\n        // Student Support\n        console.log(\"Student Support\");\n\n        switch (choice[1]) {\n          case 0:\n            console.log(\"Choice List\");\n            return options[\"2\"][\"0\"];\n\n          case 1:\n            console.log(\"Degree\");\n            taking_input = true;\n\n            switch (iter) {\n              case 1:\n                if (get_roll(content)) break;\n                return wrong_roll;\n\n              case 2:\n                if (get_mail(content)) break;\n                return wrong_mail;\n\n              case 3:\n                user_course = content;\n                console.log(\"Course = \" + user_course);\n                break;\n\n              case 4:\n                user_batch = content;\n                console.log(\"Batch = \" + user_batch);\n                break;\n\n              case 5:\n                if (content.charAt(0) == \"y\") user_drop = \"yes\";else user_drop = \"no\";\n                taking_input = false;\n                iter = 0;\n                end = true;\n                console.log(\"Drop = \" + user_drop);\n                response = await sendEmail(2.1);\n                return response;\n              // return \"Email sent\";\n            }\n\n            iter += 1;\n            return options[\"2\"][\"1\"][iter + \"a\"];\n\n          case 2:\n            console.log(\"Bonafied\");\n            taking_input = true;\n\n            switch (iter) {\n              case 1:\n                if (get_roll(content)) break;\n                return wrong_roll;\n\n              case 2:\n                if (get_mail(content)) break;\n                return wrong_mail;\n\n              case 3:\n                user_purpose = content;\n                console.log(\"Purpose = \" + user_purpose);\n                iter = 0;\n                end = true;\n                taking_input = false;\n                response = await sendEmail(2.2);\n                return response;\n              // return \"Email sent\";\n            }\n\n            iter += 1;\n            return options[\"2\"][\"2\"][iter + \"a\"];\n\n          case 3:\n            console.log(\"2.3 under development\");\n            end = true;\n            return options[\"2\"][\"3\"];\n\n          default:\n            console.log(\"3 - 11\");\n            end = true;\n            return options[\"2\"][choice[index - 1]];\n        }\n\n      case 3:\n        // Accounts\n        console.log(\"Accounts\");\n\n        switch (choice[1]) {\n          case 0:\n            console.log(\"Choice List\");\n            return options[\"3\"][\"0\"];\n\n          case 3:\n            console.log(\"DD\");\n            taking_input = true;\n\n            switch (iter) {\n              case 1:\n                if (get_roll(content)) break;\n                return wrong_roll;\n\n              case 2:\n                if (get_mail(content)) break;\n                return wrong_mail;\n\n              case 3:\n                user_batch = content;\n                console.log(\"Batch = \" + user_batch);\n                break;\n\n              case 4:\n                // check year\n                user_year = content;\n                taking_input = false;\n                iter = 0;\n                end = true;\n                console.log(\"Year = \" + user_year);\n                response = await sendEmail(3.3);\n                return response;\n              // return \"Email sent\";\n            }\n\n            iter += 1;\n            return options[\"3\"][\"3\"][iter + \"a\"];\n\n          default:\n            console.log(\"1, 2\");\n            end = true;\n            return options[\"3\"][choice[index - 1]];\n        }\n\n      case 4:\n        // HR\n        console.log(\"HR\");\n\n        if (choice[1] == 0) {\n          return options[\"4\"][\"0\"];\n        } else {\n          console.log(\"1, 2\");\n          end = true;\n          return options[\"4\"][choice[index - 1]];\n        }\n\n    }\n  }\n\n  async function sendText(text) {\n    console.log(\"sendText called \" + text);\n    const target = \"Bot-response-function\";\n    const content = {\n      \"method\": \"POST\",\n      headers: {\n        \"content-type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        \"user-input\": text,\n        \"response\": \"\"\n      })\n    };\n    const response = await https_request(target, content);\n    console.log(\"Sending Response: \" + response.body.response);\n    return response.body.response;\n  }\n\n  async function sendEmail(option) {\n    let content = \"\";\n\n    switch (option) {\n      // case 1.1:\n      //     console.log(\"Counsellor (Incomplete)\");\n      //     break;\n      case 2.1:\n        console.log(\"Degree Email\");\n        content = {\n          \"method\": \"POST\",\n          headers: {\n            \"content-type\": \"application/json\"\n          },\n          body: JSON.stringify({\n            \"case\": 2.1,\n            \"name\": user_name,\n            \"roll\": user_roll,\n            \"mail\": user_mail,\n            \"course\": user_course,\n            \"batch\": user_batch,\n            \"drop\": user_drop\n          })\n        };\n        break;\n\n      case 2.2:\n        console.log(\"Bonafide\");\n        content = {\n          \"method\": \"POST\",\n          headers: {\n            \"content-type\": \"application/json\"\n          },\n          body: JSON.stringify({\n            \"case\": 2.2,\n            \"name\": user_name,\n            \"mail\": user_mail,\n            \"roll\": user_roll,\n            \"purpose\": user_purpose\n          })\n        };\n        break;\n\n      case 2.3:\n        console.log(\"Transcripts (Incomplete)\");\n        break;\n\n      case 3.3:\n        console.log(\"Security\");\n        content = {\n          \"method\": \"POST\",\n          headers: {\n            \"content-type\": \"application/json\"\n          },\n          body: JSON.stringify({\n            \"case\": 3.3,\n            \"name\": user_name,\n            \"roll\": user_roll,\n            \"mail\": user_mail,\n            \"batch\": user_batch,\n            \"year\": user_year\n          })\n        };\n        break;\n\n      default:\n        console.log(\"Internal error\");\n        return \"Internal error\";\n    }\n\n    const target = \"email-function\";\n    const response = await https_request(target, content);\n    console.log(\"Sending Response: \" + response.body.response);\n    return response.body.response;\n  }\n\n  function https_request(target, content) {\n    console.log(\"https start\");\n\n    const https = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\"); // const url = \"https://sharadjain1999.pythonanywhere.com/\" + target;\n\n\n    const url = \"http://127.0.0.1:5000/\" + target;\n    return new Promise(function (resolve, reject) {\n      fetch(url, content).then(response => response.json()).then(response => {\n        console.log(\"String \" + JSON.stringify(response));\n        resolve(response);\n      }).catch(err => {\n        console.log(err);\n        reject(err);\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });