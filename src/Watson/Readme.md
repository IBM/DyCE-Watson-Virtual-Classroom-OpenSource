# Watson Assistant Background #
There are many guides out there to describe how to make the right Chatbot, however, this is a progression of how our chatbot was made.

*In the pdf/docx file, you can find the details of how the chatbot was made. It gives you the complete guide of how it was completed with online references. You can use this guide to duplicate or make another chatbot of your choice.*

*In the node.js file, it records the action from IBM along with a trigger and response with the right context. Hence, we used it as an answer to all types of questions.*

PS.This is how we configure the question from student.

If #question_from_student intent is called upon, we then go down the funnel

***The first funnel: Knowledge Base on the website.***

We use a webcrawler system that resides in the Watson Assistant Search Skill to search the web for the knowldge base; if there aren't any responses coming back, we then trigger the next funnel.

***The second funnel: Wikipedia API.***

We call on the node.js with the API call script that we use in IBM Cloud Functions. This would give us some general answer that could be answer online. Such as, what is a Black Hole? Right now, This does not involve any calculation. Such as, what is 1+1? Hence, it currenly has limitations for now.

***The third funnel: Apologize and get the expert to answer***

Just apologize at the end, saying that we couldn't find the topic about certain knowledge. In this case, we can get the teacher to come in and answer the question. After answering the question, record it in the knowledge base, or mention it in the lecture again. In this case, we can use the webcrawler to get to the answer.
