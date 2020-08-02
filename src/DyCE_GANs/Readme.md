With the combination of GANs (Generative Adversarial Networks)and Watson NLU, an AI could learn about the student's personality, interests, and learning strengths/weaknesses so that it can create an evolving learning plan in real-time as the student grows in abilities, knowledge and self-confidence. Implementing GANs for our Watson Dynamic Chatbot Engagement in our virtual classroom platform is for helping teachers and students have pictures drawn for them in real time (e.g. during lecture on whiteboard as teacher speaks or while a student is studying) in combination with Watson NLU (Natural Language Understanding) so that we can provide an efficient method of learning new knowledge in creative ways based on each person's unique perspective and styles of learning (e.g. Visual, Auditory, Kinesthetic, Reading/writing, etc.).

In this notebook example, the GANs learn to draw apples so this is evidence that GANs are capable of sensing their environment (e.g. speech) and navigating the creation of content without human input.

Figure 1. DyCE GANs Image Generation
<img width="1026" alt="DyCE GANs Image Generation" src="https://media.github.ibm.com/user/169439/files/59459500-b3e0-11ea-8b67-7bc544447ada">

Figure 2. DyCE GANs Accuracy Graphs
<img width="1026" alt="DyCE GANs Accuracy Graphs" src="https://media.github.ibm.com/user/169439/files/6ebabf00-b3e0-11ea-99a9-555d26cf7e91">

Further, in addition to this image generation, teachers and students can draw their own images to train the model and the GANs can in turn produce output that is in correlation to the knowledge expected to be learned. For example, the AI can ask the student a practice quiz question such as what is the basic unit of quantum information? and then the student can draw any image they believe helps them personally remember that the correct answer is a qubit. This is an example of a learning strategy such as the well known memory palace strategy. So GANs create a storytelling approach to learning where teachers and students collaborate with the AI. 


As an extension to solidify the knowledge of the student and to help the student achieve their learning objectives based on lets say the teacher's expected learning threshold (ahead of learning, satisfactory, behind learning), the AI will be able to enable the implementation of a spaced repetition algorithm so the AI knows how many times the student needs to practice repeating the knowledge according to when they'll be tested on the knowledge (e.g. school exam date). 


Students will have an interactive way to acquiring knowledge using this hands on intelligent GANs technique, not just memorize information. Plus, the AI could incorporate Computer Vision as another future enhancement to see how the student performs (e.g. demonstrates solving a math problem on whiteboard) learning exercises by themselves to make sure teachers know that students are honestly learning the material (e.g. teachers can see where student's make mistakes because the AI detects human errors so then teachers/students can see how to correct mistakes). This can even be applied to the teacher as well so the teacher can have assistance with creating dynamic lesson plans to engage their students in new ways overtime. Classes will be more enjoyable and students' attention will hopefully be improved because of the hyper-personalization aspect of these GANS in direct relation with the students and teachers. 


STEPS for running code in Collab: https://colab.research.google.com/drive/1SMx47nJeXil97JsRon32cP_SOUM_TqfD
* Load dependencies
* Load data
* Create discriminator network
* Create generator network
* Create adversarial network
* Train
* Note: Before beginning to execute the notebook code, it's ideal to enable GPU runtime for the absolute fastest execution of image generation or else it will take a very long time. Go to the "Runtime" tab above, select "Change runtime type." In the Notebook Settings pop-up window, click "GPU" under the hardware accelerator drop down menu and click "Save."
