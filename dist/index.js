//Run "npm run dev" for compiling any changes


//code to execute bi directional communication with chat bot.
window.onload = function() {

    // code to maximize, minimize chat bot.
    function toggle1() {
        var e = document.getElementById("containerchtbx");
        e.classList.toggle("active");
        var x = document.getElementById("active");
        if (x.style.display == "none" || x.style.display == '') {
            x.style.display = "block";
            appendchatBx(false, "|start|");
            first_toggle = false;
        } else
            x.style.display = "none";
    }

    window.toggle1 = toggle1;
    let first_toggle = true;

    const courses = {
        1: "BBA",
        2: "BCA",
        3: "B.Com",
        4: "BA JMC",
        5: "BALLB"
    }

    const tips_syllabus = "https://www.tips.edu.in/syllabus";
    const tips_success = "https://tips.edu.in/tipsian-success-stories";
    const tips_fee = "https://tips.edu.in/fee-structure";
    const tips_migration_form = "";
    const tips_whatsapp_student_support = "";
    const tips_grace_marks_form = "";
    const tips_dropout_form = "";
    const tips_DDdetails = "";
    const tips_hrd_email = "tipsdwarkahrd@gmail.com";
    const tips_hrd_form = "https://tips.edu.in/download_file/13.pdf";
    const tips_hrd_support_no = "9315911710";

    const options = {
        "0": "Hello, I\'m Bot. <br>I Operate best when asked short, direct questions. <br>What would you like to talk about <br>   1. Admissions <br>   2. Student Support <br>   3. Accounts <br>   4. HR",
        // Admission
        "1": {
            "0": "Courses Offered <br>   1. BBA <br>   2. BCA <br>   3. B.Com <br>   4. BA JMC <br>   5. BA LLB",
            "any": {
                "0": "Choose Action <br>   1. Contact (Admission Counsellor- Email) <br>   2. Syllabus, Duration & Promotion Criteria <br>   3. Placements <br>   4. Fee Structure ",
                "1": "", // Send Email
                "2": "To view syllabus visit <br><a href=\"" + tips_syllabus + "\" target=\"_blank\">This Site</a>",
                "3": "Placement Link <br><a href=\"" + tips_success + "\" target=\"_blank\">This Site</a>",
                "4": "Fee - <a href=\"" + tips_fee + "\" target=\"_blank\">This Site</a>"
            }
        },
        // Student cell
        "2": {
            "0": "Choose From: <br>   1. Degree <br>   2. Bonafide <br>   3. Requirement of Transcripts regarding higher studies <br>   4. Migration <br>   5. Correction of Name <br>   6. Marksheets / Provisional / Consolidated <br>   7. Issuance of Backlog Certificate <br>   8. Issuance of NOC for summer Internship <br>   9. Grace Marks <br>   10. Issuance of Provisioal Certificate <br>   11. Drop Out Form",
            "1": { // send Email
                "1a": "Query about Degree <br>Enter Course",
                "2a": "Enter Batch",
                "3a": "Are you Drop out (Yes/No)"
            },
            "2": { // Send email
                "1a": "Enter Purpose"
            },
            // Email or not
            "3": "Not Complete",
            // Add url
            "4": "Migration <br>Please follow Following instructions: <br>Download migration form from University Site-> <a href=\"" + tips_migration_form + "\" target=\"_blank\">Download Form</a> <br>Submit with Provisional + Consolidated Marksheets <br>Fill it and submit it in the university after getting attested from the Director of the Institute",
            "5": "Correction of Name <br>Please follow Following instructions: <br>Hand written Application + 500 Rs Challan - To be submitted in the university, Along with 10th Certificate, 12th marksheet, All Xerox of Marksheet, Affidavit by the SDM and Adhar Card",
            // Add whatsapp number
            "6": "Marksheets/Provisional/Consolidated <br>Whatsapp No. " + tips_whatsapp_student_support + " of student Cell for further communication student.support@tips.edu.in",
            "7": "Issuance of Backlog CertificateFor backlog <br>Write application to the Director + All Regular and Reappear marksheets or pdf result <br>Then submit it in the institute",
            "8": "Issuance of NOC for summer Internship <br>Write an application in favor of the Director needs to be submitted / Shared with Student Support <br>Then submit it in the institute",
            // Add site
            "9": "Grace Marks <br>Download form from the University Site " + tips_grace_marks_form + " - All Regular + Reappear marksheets(xerox or pdf result) <br>Then Submit it in the univeristy / institute after getting attested from the Director of the Institute.",
            "10": "Issuance of Provisioal Certificate <br>Write application to the Director + Marksheets(regular/ reappear) + pdf result <br>Then Submit it in the institute",
            // Add site
            "11": "Drop Out Form <br>Download form from the University Site " + tips_dropout_form + " - All Regular + Reappear marksheets(xerox or pdf result) <br>Then Submit it in the univeristy / institute after getting attested from the Director of the Institute."
        },
        // Accounts
        "3": {
            "0": "Choose from: <br>   1. Fee Payment <br>   2. Fee Structure <br>   3. Security",
            "1": "DD Details: " + tips_DDdetails, // Add DD details
            "2": "Visit <a href=\"" + tips_fee + "\" target=\"_blank\">this site</a> to see fee structure",
            "3": { // send Email
                "1a": "Enter Batch",
                "2a": "Enter Year"
            }
        },
        // HR
        "4": {
            "0": "Job Options <br>   1. Teaching <br>   2. Non-Teaching",
            "1": "Teaching Jobs are available for: <br>B.COM, BBA, BCA, BA LLB, BA JMC <br>As: <br>Professor, Associate Professor, Assistant Professor <br><br>If Interested send your resume at: " + tips_hrd_email + " <br>Along with this document - <a href=\"" + tips_hrd_form + "\" target=\"_blank\">Click Here</a> <br><br>For Further assistance Contact - " + tips_hrd_support_no,
            "2": "Non-Teaching Jobs include: <br>Accountant <br>HR / Admin Assistant <br>Examination <br>Receptionist <br>IT / Hardware engineer / Audio / Video Lab <br>Librarian <br><br>If Interested send your resume at: " + tips_hrd_email + " <br>Along with this document - <a href=\"" + tips_hrd_form + "\" target=\"_blank\">Click Here</a> <br><br>For Further assistance Contact - " + tips_hrd_support_no
        }
    };

    const submit = document.querySelector(".chat-submit");
    const chatBx = document.querySelector(".chat-box");
    const chatInp = document.querySelector(".chat-input");
    document.getElementById("sub").focus();
    let choice = [0, 0, 0, 0, 0, 0];
    // let user_email = "";
    let user_course = "";
    let index = 0;
    let user_batch = "";
    let user_drop = "";
    let user_purpose = "";
    let user_year = "";
    let taking_input = false;
    let iter = 0;

    function chattemp(botOrhuman) {
        return (
            `
        <div class="bot-human-container">
          <div class="${botOrhuman.class}">
            <p>${botOrhuman.text}</p>
          </div>
          <span class="${botOrhuman.class}-date">${botOrhuman.date}</span>
        </div>
      `
        );
    }

    function callfun() {
        if (chatInp.value != "") {
            document.getElementById("sub").disabled = true;
            appendchatBx(true, chatInp.value);
            setTimeout(function() {
                document.getElementById("sub").disabled = false;
                document.getElementById("sub").focus();
            }, 500);
        }
    }

    submit.addEventListener("click", function(e) {
        callfun();
    });

    document.addEventListener("keypress", function(e) {
        if (e.keyCode == "13")
            callfun();
    });

    async function appendchatBx(fromhuman, input) {
        const date = new Date();

        if (!fromhuman)
            date.setSeconds(date.getSeconds() + 2);

        if (fromhuman && !chatInp.value.trim())
            return;

        const timestamp = date.toLocaleTimeString();
        const newChatDiv = chattemp({
            class: fromhuman ? "human" : "bot",
            text: fromhuman ? chatInp.value.trim() : await botResponse(input),
            date: timestamp
        });

        if (!fromhuman) {
            setTimeout(function() {
                chatBx.innerHTML += newChatDiv;
                chatBx.scrollTop = chatBx.scrollHeight;
            }, 500);
        } else {
            chatBx.innerHTML += newChatDiv;
            chatBx.scrollTop = chatBx.scrollHeight;
        }

        if (fromhuman) {
            chatInp.value = "";
            appendchatBx(false, input);
        }
    }

    async function botResponse(content) {
        console.log("botResponse called " + content);

        content = content.trim();
        console.log("Content = " + content);

        if (content == "reset") {
            choice = [0, 0, 0, 0, 0, 0];
            index = 0;
            iter = 0;
            taking_input = false;
            return options["0"];
        } else if (content == "|start|" && first_toggle) {
            return options["0"];
        }

        let response = "";
        if ((content.length < 3 || taking_input) && Number.isInteger(parseInt(content))) {
            if (!taking_input) {
                choice[index] = parseInt(content);
                index += 1;
            }
            console.log("choice = " + choice)
            return await normalChat(content);
        }

        response = await sendText(content);
        console.log("Back to botResponse = " + response);
        return response;
    }

    async function normalChat(content) {
        let response = "";
        switch (choice[0]) {
            case 1:
                // Admission
                console.log("Admission")
                if (choice[1] == 0) {
                    console.log("Course List")
                    return options["1"]["0"];
                } else {
                    user_course = courses[choice[1]];
                    console.log("Course = " + user_course)

                    if (choice[2] == 0) {
                        console.log("Action List")
                        return options["1"]["any"]["0"];
                    } else {
                        // if (choice[2] == 1) {
                        // response = await sendEmail(1.1);
                        // return response;
                        // }
                        console.log("Info")
                        return options["1"]["any"][choice[index - 1]];
                    }
                }
            case 2:
                // Student Support
                console.log("Student Support")

                switch (choice[1]) {
                    case 0:
                        console.log("Choice List")
                        return options["2"]["0"];

                    case 1:
                        console.log("Degree")
                        taking_input = true;
                        switch (iter) {
                            case 1:
                                // check email
                                user_course = content;
                                console.log("Course = " + user_course);
                                break;
                            case 2:
                                user_batch = content;
                                console.log("Batch = " + user_batch);
                                break;
                            case 3:
                                if (content.charAt(0) == "y")
                                    user_drop = "yes";
                                else
                                    user_drop = "no";
                                taking_input = false;
                                iter = 0;
                                console.log("Drop = " + user_drop);
                                response = await sendEmail(2.1);
                                return response;
                                // return "Email sent";
                        }
                        iter += 1;
                        return options["2"]["1"][iter + "a"];
                    case 2:
                        console.log("Bonafied");
                        taking_input = true;
                        if (iter == 1) {
                            user_purpose = content;
                            console.log("Purpose = " + user_purpose);
                            iter = 0;
                            taking_input = false;
                            response = await sendEmail(2.2);
                            return response;
                            // return "Email sent";
                        }
                        iter = 1;
                        return options["2"]["2"]["1a"];
                    case 3:
                        console.log("2.3 Not Completed")
                        return options["2"]["3"];
                    default:
                        console.log("3 - 11");
                        return options["2"][choice[index - 1]];
                }
            case 3:
                // Accounts
                console.log("Accounts")

                switch (choice[1]) {
                    case 0:
                        console.log("Choice List")
                        return options["3"]["0"];
                    case 3:
                        console.log("DD")
                        taking_input = true;
                        switch (iter) {
                            case 1:
                                user_batch = content;
                                console.log("Batch = " + user_batch);
                                break;
                            case 2:
                                // check year
                                user_year = content;
                                taking_input = false;
                                iter = 0;
                                console.log("Year = " + user_year);
                                response = await sendEmail(3.3);
                                return response;
                                // return "Email sent";
                        }
                        iter += 1;
                        return options["3"]["3"][iter + "a"];
                    default:
                        console.log("1, 2");
                        return options["3"][choice[index - 1]];
                }
            case 4:
                // HR
                console.log("HR")
                if (choice[1] == 0) {
                    return options["4"]["0"];
                } else {
                    console.log("1, 2");
                    return options["4"][choice[index - 1]];
                }
        }
    }

    async function sendText(text) {
        console.log("sendText called " + text);
        const target = "Bot-response-function";
        const content = {
            "method": "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "user-input": text,
                "response": ""
            })
        };
        const response = await https_request(target, content);
        console.log("Sending Response: " + response.body.response);
        return response.body.response;
    }

    async function sendEmail(option) {
        let content = "";
        switch (option) {
            case 1.1:
                console.log("Counsellor (Incomplete)");
                break;
            case 2.1:
                console.log("Degree Email");
                content = {
                    "method": "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "case": 2.1,
                        "course": user_course,
                        "batch": user_batch,
                        "drop": user_drop
                    })
                };
                break;
            case 2.2:
                console.log("Bonafide");
                content = {
                    "method": "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "case": 2.2,
                        "purpose": user_purpose
                    })
                };
                break;
            case 2.3:
                console.log("Transcripts (Incomplete)")
                break;
            case 3.3:
                console.log("Security");
                content = {
                    "method": "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "case": 3.3,
                        "batch": user_batch,
                        "year": user_year
                    })
                };
                break;
            default:
                console.log("Internal error");
                return "Internal error";
        }
        const target = "email-function";
        const response = await https_request(target, content);
        console.log("Sending Response: " + response.body.response);
        return response.body.response;
    }

    function https_request(target, content) {

        console.log("https start");
        const https = require("node-fetch");

        // const url = "https://sharadjain1999.pythonanywhere.com/" + target;
        const url = "http://127.0.0.1:5000/" + target;

        return new Promise(function(resolve, reject) {
            fetch(url, content)
                .then(response => response.json())
                .then(response => {
                    console.log("String " + JSON.stringify(response))
                    resolve(response)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })

    }
}