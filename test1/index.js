
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Reference Check Questionaire",
    /*pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "What makes the candidate a good fit for this job?",
                    title: "What makes the candidate a good fit for this job?",
                    choices: [
                        "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                    ],
                    correctAnswer: "1850-1900"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Who said 'Give me liberty or give me death?'",
                    choicesOrder: "random",
                    choices: [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ],
                    correctAnswer: "Patrick Henry"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    correctAnswer: "The foundation of the British parliamentary system"
                }
            ]
        }*/
            "pages": [
             {
              "name": "page1",
              "elements": [
               {
                "type": "radiogroup",
                "name": "Question 1",
                "title": "How long have you known this person? ",
                "choices": [
                 {
                  "value": "item1",
                  "text": "less than 12 months"
                 },
                 {
                  "value": "item2",
                  "text": "1-2 years"
                 },
                 {
                  "value": "item3",
                  "text": "Over 3 years"
                 }
                ]
               },
               {
                "type": "text",
                "name": "Question 2",
                "title": "What is your relationship with this applicant?",
                "description": "specify exact relationship"
               }
              ]
             },
             {
              "name": "page2",
              "elements": [
               {
                "type": "comment",
                "name": "Question 3",
                "title": "Do you know of any reason we might not want this person to work with people with mental or physical disabilities? If yes,  what is that reason? "
               },
               {
                "type": "comment",
                "name": "Question 4",
                "title": "Have you ever worked on a project with this individual? If yes, did the applicant\nfollow through with his/her portion of the duties or responsibilities?"
               }
              ]
             },
             {
              "name": "page3",
              "elements": [
               {
                "type": "radiogroup",
                "name": "Question 5",
                "title": "How would you rate the quality of this applicant’s contribution to the project?",
                "choices": [
                 {
                  "value": "item1",
                  "text": "Excellent"
                 },
                 {
                  "value": "item2",
                  "text": "Good"
                 },
                 {
                  "value": "item6",
                  "text": "Average"
                 },
                 {
                  "value": "item4",
                  "text": "Not Enough"
                 },
                 {
                  "value": "item5",
                  "text": "No Contribution"
                 }
                ]
               },
               {
                "type": "comment",
                "name": "Question 6",
                "title": "How would you best describe this individual as?"
               }
              ]
             },
             {
              "name": "page4",
              "elements": [
               {
                "type": "text",
                "name": "Question 7",
                "title": "Does this individual ever had any issues with the team or related work?"
               },
               {
                "type": "radiogroup",
                "name": "Question 8",
                "title": "Is there any disciplinary actions taken against the applicant?",
                "choices": [
                 {
                  "value": "item1",
                  "text": "Yes"
                 },
                 {
                  "value": "item2",
                  "text": "No"
                 }
                ]
               }
              ]
             },
             {
              "name": "page5",
              "elements": [
               {
                "type": "text",
                "name": "Question 9",
                "title": "Is he able to handle conflict?"
               },
               {
                "type": "dropdown",
                "name": "Question 10",
                "title": "Is there anything else you would like to add about (candidate)?",
                "choices": [
                 {
                  "value": "item1",
                  "text": "Yes"
                 },
                 {
                  "value": "item2",
                  "text": "No"
                 },
                 {
                  "value": "item3",
                  "text": "Maybe"
                 }
                ]
               }
              ]
             }
           
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });