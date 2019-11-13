
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: " Reference Check Questionaire",
    /*pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "civilwar",
                title: "When was the Civil War?",
                choices: [
                    "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                ],
                correctAnswer: "1850-1900"
            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who said 'Give me liberty or give me death?'",
                choicesOrder: "random",
                choices: [
                    "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                ],
                correctAnswer: "Patrick Henry"
            },
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
            "type": "comment",
            "name": "Question 1",
            "title": "What makes the candidate a good fit for this job?",
            "description": "Briefly describe please."
           },
           {
            "type": "text",
            "name": "Question 2",
            "title": "What are the candidate’s biggest strengths and weaknesses?"
           },
           {
            "type": "text",
            "name": "Question 3",
            "title": "How do you know the job candidate?"
           },
           {
            "type": "text",
            "name": "Question 4",
            "title": "Can you verify the job candidate’s employment, job title, pay, and responsibilities? Why did they leave that job?"
           },
           {
            "type": "radiogroup",
            "name": "Question 5",
            "title": "If you had the opportunity, would you re-hire this job candidate? Why?",
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
           },
           {
            "type": "radiogroup",
            "name": "Question 6",
            "title": "Did the candidate get along with their co-workers and management?",
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
           },
           {
            "type": "comment",
            "name": "Question 7",
            "title": "Tell me what it’s like to work with the job candidate.",
            "description": "Mention some good qualities"
           },
           {
            "type": "text",
            "name": "Question 8",
            "title": "What advice can you give me to successfully manage the job candidate?"
           },
           {
            "type": "text",
            "name": "Question 9",
            "title": "What else do I need to know about the job candidate that I didn’t already ask?"
           },
           {
            "type": "comment",
            "name": "Question 10",
            "title": "Who else should I speak to about the candidate that can provide different insight?",
            "description": "You can mention names and phone numbers."
           }
          ]
         },
         {
          "name": "page2"
         }
        ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });