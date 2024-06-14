 // Tasks for each week
        const weeks = [
            // Week 1-4: JavaScript Intermediate
            ["Study JavaScript DOM Manipulation - Hour 1", "Study JavaScript DOM Manipulation - Hour 2", "Study JavaScript DOM Manipulation - Hour 3", "Study JavaScript DOM Manipulation - Hour 4", "Study JavaScript DOM Manipulation - Hour 5"],
            ["Study JavaScript DOM Manipulation - Hour 6", "Study JavaScript DOM Manipulation - Hour 7", "Study JavaScript DOM Manipulation - Hour 8", "Study JavaScript DOM Manipulation - Hour 9", "Study JavaScript DOM Manipulation - Hour 10"],
            ["Study JavaScript DOM Manipulation - Hour 11", "Study JavaScript DOM Manipulation - Hour 12", "Study JavaScript DOM Manipulation - Hour 13", "Study JavaScript DOM Manipulation - Hour 14", "Study JavaScript DOM Manipulation - Hour 15"],
            ["Study Advanced Functions - Hour 1", "Study Advanced Functions - Hour 2", "Study Advanced Functions - Hour 3", "Study Advanced Functions - Hour 4", "Study Advanced Functions - Hour 5"],
            ["Study Advanced Functions - Hour 6", "Study Advanced Functions - Hour 7", "Study Advanced Functions - Hour 8", "Study Advanced Functions - Hour 9", "Study Advanced Functions - Hour 10"],
            ["Study ES6 Features - Hour 1", "Study ES6 Features - Hour 2", "Study ES6 Features - Hour 3", "Study ES6 Features - Hour 4", "Study ES6 Features - Hour 5"],
            ["Study ES6 Features - Hour 6", "Study ES6 Features - Hour 7", "Study ES6 Features - Hour 8", "Study ES6 Features - Hour 9", "Study ES6 Features - Hour 10"],
            ["Study ES6 Features - Hour 11", "Study ES6 Features - Hour 12", "Study ES6 Features - Hour 13", "Study ES6 Features - Hour 14", "Study ES6 Features - Hour 15"],
            ["Study Asynchronous JavaScript - Hour 1", "Study Asynchronous JavaScript - Hour 2", "Study Asynchronous JavaScript - Hour 3", "Study Asynchronous JavaScript - Hour 4", "Study Asynchronous JavaScript - Hour 5"],
            ["Study Asynchronous JavaScript - Hour 6", "Study Asynchronous JavaScript - Hour 7", "Study Asynchronous JavaScript - Hour 8", "Study Asynchronous JavaScript - Hour 9", "Study Asynchronous JavaScript - Hour 10"],
            ["Study Asynchronous JavaScript - Hour 11", "Study Asynchronous JavaScript - Hour 12", "Study Asynchronous JavaScript - Hour 13", "Study Asynchronous JavaScript - Hour 14", "Study Asynchronous JavaScript - Hour 15"],
            ["Study Asynchronous JavaScript - Hour 16", "Study Asynchronous JavaScript - Hour 17", "Study Asynchronous JavaScript - Hour 18", "Study Asynchronous JavaScript - Hour 19", "Study Asynchronous JavaScript - Hour 20"],
            ["Study Object-Oriented JavaScript - Hour 1", "Study Object-Oriented JavaScript - Hour 2", "Study Object-Oriented JavaScript - Hour 3", "Study Object-Oriented JavaScript - Hour 4", "Study Object-Oriented JavaScript - Hour 5"],
            ["Study Object-Oriented JavaScript - Hour 6", "Study Object-Oriented JavaScript - Hour 7", "Study Object-Oriented JavaScript - Hour 8", "Study Object-Oriented JavaScript - Hour 9", "Study Object-Oriented JavaScript - Hour 10"],
            ["Study Object-Oriented JavaScript - Hour 11", "Study Object-Oriented JavaScript - Hour 12", "Study Object-Oriented JavaScript - Hour 13", "Study Object-Oriented JavaScript - Hour 14", "Study Object-Oriented JavaScript - Hour 15"],
            ["Study Object-Oriented JavaScript - Hour 16", "Study Object-Oriented JavaScript - Hour 17", "Study Object-Oriented JavaScript - Hour 18", "Study Object-Oriented JavaScript - Hour 19", "Study Object-Oriented JavaScript - Hour 20"],
            ["Study Error Handling in JavaScript - Hour 1", "Study Error Handling in JavaScript - Hour 2", "Study Error Handling in JavaScript - Hour 3", "Study Error Handling in JavaScript - Hour 4", "Study Error Handling in JavaScript - Hour 5"],
            ["Study Error Handling in JavaScript - Hour 6", "Study Error Handling in JavaScript - Hour 7", "Study Error Handling in JavaScript - Hour 8", "Study Error Handling in JavaScript - Hour 9", "Study Error Handling in JavaScript - Hour 10"],
            ["Study Advanced Data Structures in JavaScript - Hour 1", "Study Advanced Data Structures in JavaScript - Hour 2", "Study Advanced Data Structures in JavaScript - Hour 3", "Study Advanced Data Structures in JavaScript - Hour 4", "Study Advanced Data Structures in JavaScript - Hour 5"],
            ["Study Advanced Data Structures in JavaScript - Hour 6", "Study Advanced Data Structures in JavaScript - Hour 7", "Study Advanced Data Structures in JavaScript - Hour 8", "Study Advanced Data Structures in JavaScript - Hour 9", "Study Advanced Data Structures in JavaScript - Hour 10"],
            ["Study Performance Optimization in JavaScript - Hour 1", "Study Performance Optimization in JavaScript - Hour 2", "Study Performance Optimization in JavaScript - Hour 3", "Study Performance Optimization in JavaScript - Hour 4", "Study Performance Optimization in JavaScript - Hour 5"],
            ["Study Performance Optimization in JavaScript - Hour 6", "Study Performance Optimization in JavaScript - Hour 7", "Study Performance Optimization in JavaScript - Hour 8", "Study Performance Optimization in JavaScript - Hour 9", "Study Performance Optimization in JavaScript - Hour 10"],
            ["Study Performance Optimization in JavaScript - Hour 11", "Study Performance Optimization in JavaScript - Hour 12", "Study Performance Optimization in JavaScript - Hour 13", "Study Performance Optimization in JavaScript - Hour 14", "Study Performance Optimization in JavaScript - Hour 15"],
            ["Study JavaScript Testing - Hour 1", "Study JavaScript Testing - Hour 2", "Study JavaScript Testing - Hour 3", "Study JavaScript Testing - Hour 4", "Study JavaScript Testing - Hour 5"],
            ["Study JavaScript Testing - Hour 6", "Study JavaScript Testing - Hour 7", "Study JavaScript Testing - Hour 8", "Study JavaScript Testing - Hour 9", "Study JavaScript Testing - Hour 10"],
            ["Study JavaScript Testing - Hour 11", "Study JavaScript Testing - Hour 12", "Study JavaScript Testing - Hour 13", "Study JavaScript Testing - Hour 14", "Study JavaScript Testing - Hour 15"],
            ["Study JavaScript Design Patterns - Hour 1", "Study JavaScript Design Patterns - Hour 2", "Study JavaScript Design Patterns - Hour 3", "Study JavaScript Design Patterns - Hour 4", "Study JavaScript Design Patterns - Hour 5"],
            ["Study JavaScript Design Patterns - Hour 6", "Study JavaScript Design Patterns - Hour 7", "Study JavaScript Design Patterns - Hour 8", "Study JavaScript Design Patterns - Hour 9", "Study JavaScript Design Patterns - Hour 10"],["Study JavaScript Design Patterns - Hour 11", "Study JavaScript Design Patterns - Hour 12", "Study JavaScript Design Patterns - Hour 13", "Study JavaScript Design Patterns - Hour 14", "Study JavaScript Design Patterns - Hour 15"],
            ["Study JavaScript Design Patterns - Hour 16", "Study JavaScript Design Patterns - Hour 17", "Study JavaScript Design Patterns - Hour 18", "Study JavaScript Design Patterns - Hour 19", "Study JavaScript Design Patterns - Hour 20"],
            // Week 5-8: JavaScript Professional
            ["Build JavaScript Project - Week 1 - Task 1", "Build JavaScript Project - Week 1 - Task 2", "Build JavaScript Project - Week 1 - Task 3", "Build JavaScript Project - Week 1 - Task 4", "Build JavaScript Project - Week 1 - Task 5"],
            ["Build JavaScript Project - Week 1 - Task 6", "Build JavaScript Project - Week 1 - Task 7", "Build JavaScript Project - Week 1 - Task 8", "Build JavaScript Project - Week 1 - Task 9", "Build JavaScript Project - Week 1 - Task 10"],
            ["Build JavaScript Project - Week 2 - Task 1", "Build JavaScript Project - Week 2 - Task 2", "Build JavaScript Project - Week 2 - Task 3", "Build JavaScript Project - Week 2 - Task 4", "Build JavaScript Project - Week 2 - Task 5"],
            ["Build JavaScript Project - Week 2 - Task 6", "Build JavaScript Project - Week 2 - Task 7", "Build JavaScript Project - Week 2 - Task 8", "Build JavaScript Project - Week 2 - Task 9", "Build JavaScript Project - Week 2 - Task 10"],
            ["Build JavaScript Project - Week 3 - Task 1", "Build JavaScript Project - Week 3 - Task 2", "Build JavaScript Project - Week 3 - Task 3", "Build JavaScript Project - Week 3 - Task 4", "Build JavaScript Project - Week 3 - Task 5"],
            ["Build JavaScript Project - Week 3 - Task 6", "Build JavaScript Project - Week 3 - Task 7", "Build JavaScript Project - Week 3 - Task 8", "Build JavaScript Project - Week 3 - Task 9", "Build JavaScript Project - Week 3 - Task 10"],
            ["Build JavaScript Project - Week 4 - Task 1", "Build JavaScript Project - Week 4 - Task 2", "Build JavaScript Project - Week 4 - Task 3", "Build JavaScript Project - Week 4 - Task 4", "Build JavaScript Project - Week 4 - Task 5"],
            ["Build JavaScript Project - Week 4 - Task 6", "Build JavaScript Project - Week 4 - Task 7", "Build JavaScript Project - Week 4 - Task 8", "Build JavaScript Project - Week 4 - Task 9", "Build JavaScript Project - Week 4 - Task 10"],
            ["Study Node.js Basics - Hour 1", "Study Node.js Basics - Hour 2", "Study Node.js Basics - Hour 3", "Study Node.js Basics - Hour 4", "Study Node.js Basics - Hour 5"],
            ["Study Node.js Basics - Hour 6", "Study Node.js Basics - Hour 7", "Study Node.js Basics - Hour 8", "Study Node.js Basics - Hour 9", "Study Node.js Basics - Hour 10"],
            ["Study Express.js - Hour 1", "Study Express.js - Hour 2", "Study Express.js - Hour 3", "Study Express.js - Hour 4", "Study Express.js - Hour 5"],
            ["Study Express.js - Hour 6", "Study Express.js - Hour 7", "Study Express.js - Hour 8", "Study Express.js - Hour 9", "Study Express.js - Hour 10"],
            ["Study MongoDB Basics - Hour 1", "Study MongoDB Basics - Hour 2", "Study MongoDB Basics - Hour 3", "Study MongoDB Basics - Hour 4", "Study MongoDB Basics - Hour 5"],
            ["Study MongoDB Basics - Hour 6", "Study MongoDB Basics - Hour 7", "Study MongoDB Basics - Hour 8", "Study MongoDB Basics - Hour 9", "Study MongoDB Basics - Hour 10"],
            ["Build RESTful APIs with Node.js and Express - Week 1 - Task 1", "Build RESTful APIs with Node.js and Express - Week 1 - Task 2", "Build RESTful APIs with Node.js and Express - Week 1 - Task 3", "Build RESTful APIs with Node.js and Express - Week 1 - Task 4", "Build RESTful APIs with Node.js and Express - Week 1 - Task 5"],
            ["Build RESTful APIs with Node.js and Express - Week 1 - Task 6", "Build RESTful APIs with Node.js and Express - Week 1 - Task 7", "Build RESTful APIs with Node.js and Express - Week 1 - Task 8", "Build RESTful APIs with Node.js and Express - Week 1 - Task 9", "Build RESTful APIs with Node.js and Express - Week 1 - Task 10"],
            ["Build RESTful APIs with Node.js and Express - Week 2 - Task 1", "Build RESTful APIs with Node.js and Express - Week 2 - Task 2", "Build RESTful APIs with Node.js and Express - Week 2 - Task 3", "Build RESTful APIs with Node.js and Express - Week 2 - Task 4", "Build RESTful APIs with Node.js and Express - Week 2 - Task 5"],
            ["Build RESTful APIs with Node.js and Express - Week 2 - Task 6", "Build RESTful APIs with Node.js and Express - Week 2 - Task 7", "Build RESTful APIs with Node.js and Express - Week 2 - Task 8", "Build RESTful APIs with Node.js and Express - Week 2 - Task 9", "Build RESTful APIs with Node.js and Express - Week 2 - Task 10"],
            ["Build RESTful APIs with Node.js and Express - Week 3 - Task 1", "Build RESTful APIs with Node.js and Express - Week 3 - Task 2", "Build RESTful APIs with Node.js and Express - Week 3 - Task 3", "Build RESTful APIs with Node.js and Express - Week 3 - Task 4", "Build RESTful APIs with Node.js and Express - Week 3 - Task 5"],
            ["Build RESTful APIs with Node.js and Express - Week 3 - Task 6", "Build RESTful APIs with Node.js and Express - Week 3 - Task 7", "Build RESTful APIs with Node.js and Express - Week 3 - Task 8", "Build RESTful APIs with Node.js and Express - Week 3 - Task 9", "Build RESTful APIs with Node.js and Express - Week 3 - Task 10"],
            ["Build RESTful APIs with Node.js and Express - Week 4 - Task 1", "Build RESTful APIs with Node.js and Express - Week 4 - Task 2", "Build RESTful APIs with Node.js and Express - Week 4 - Task 3", "Build RESTful APIs with Node.js and Express - Week 4 - Task 4", "Build RESTful APIs with Node.js and Express - Week 4 - Task 5"],
            ["Build RESTful APIs with Node.js and Express - Week 4 - Task 6", "Build RESTful APIs with Node.js and Express - Week 4 - Task 7", "Build RESTful APIs with Node.js and Express - Week 4 - Task 8", "Build RESTful APIs with Node.js and Express - Week 4 - Task 9", "Build RESTful APIs with Node.js and Express - Week 4 - Task 10"],
            // Week 9-12: PHP Intermediate
            ["Study PHP Basics - Hour 1", "Study PHP Basics - Hour 2", "Study PHP Basics - Hour 3", "Study PHP Basics - Hour 4", "Study PHP Basics - Hour 5"],
            ["Study PHP Basics - Hour 6", "Study PHP Basics - Hour 7", "Study PHP Basics - Hour 8", "Study PHP Basics - Hour 9", "Study PHP Basics - Hour 10"],
            ["Study PHP Arrays and Control Structures - Hour 1", "Study PHP Arrays and Control Structures - Hour 2", "Study PHP Arrays and Control Structures - Hour 3", "Study PHP Arrays and Control Structures - Hour 4", "Study PHP Arrays and Control Structures - Hour 5"],
            ["Study PHP Arrays and Control Structures - Hour 6", "Study PHP Arrays and Control Structures - Hour 7", "Study PHP Arrays and Control Structures - Hour 8", "Study PHP Arrays and Control Structures - Hour 9", "Study PHP Arrays and Control Structures - Hour 10"],
            ["Study PHP Functions and Forms - Hour 1", "Study PHP Functions and Forms - Hour 2", "Study PHP Functions and Forms - Hour 3", "Study PHP Functions and Forms - Hour 4", "Study PHP Functions and Forms - Hour 5"],
            ["Study PHP Functions and Forms - Hour 6", "Study PHP Functions and Forms -Forms - Hour 7", "Study PHP Functions and Forms - Hour 8", "Study PHP Functions and Forms - Hour 9", "Study PHP Functions and Forms - Hour 10"],
            ["Study PHP Object-Oriented Programming Basics - Hour 1", "Study PHP Object-Oriented Programming Basics - Hour 2", "Study PHP Object-Oriented Programming Basics - Hour 3", "Study PHP Object-Oriented Programming Basics - Hour 4", "Study PHP Object-Oriented Programming Basics - Hour 5"],
            ["Study PHP Object-Oriented Programming Basics - Hour 6", "Study PHP Object-Oriented Programming Basics - Hour 7", "Study PHP Object-Oriented Programming Basics - Hour 8", "Study PHP Object-Oriented Programming Basics - Hour 9", "Study PHP Object-Oriented Programming Basics - Hour 10"],
            ["Study PHP MySQL Database Basics - Hour 1", "Study PHP MySQL Database Basics - Hour 2", "Study PHP MySQL Database Basics - Hour 3", "Study PHP MySQL Database Basics - Hour 4", "Study PHP MySQL Database Basics - Hour 5"],
            ["Study PHP MySQL Database Basics - Hour 6", "Study PHP MySQL Database Basics - Hour 7", "Study PHP MySQL Database Basics - Hour 8", "Study PHP MySQL Database Basics - Hour 9", "Study PHP MySQL Database Basics - Hour 10"],
            ["Build PHP Project - Week 1 - Task 1", "Build PHP Project - Week 1 - Task 2", "Build PHP Project - Week 1 - Task 3", "Build PHP Project - Week 1 - Task 4", "Build PHP Project - Week 1 - Task 5"],
            ["Build PHP Project - Week 1 - Task 6", "Build PHP Project - Week 1 - Task 7", "Build PHP Project - Week 1 - Task 8", "Build PHP Project - Week 1 - Task 9", "Build PHP Project - Week 1 - Task 10"],
            ["Build PHP Project - Week 2 - Task 1", "Build PHP Project - Week 2 - Task 2", "Build PHP Project - Week 2 - Task 3", "Build PHP Project - Week 2 - Task 4", "Build PHP Project - Week 2 - Task 5"],
            ["Build PHP Project - Week 2 - Task 6", "Build PHP Project - Week 2 - Task 7", "Build PHP Project - Week 2 - Task 8", "Build PHP Project - Week 2 - Task 9", "Build PHP Project - Week 2 - Task 10"],
            ["Build PHP Project - Week 3 - Task 1", "Build PHP Project - Week 3 - Task 2", "Build PHP Project - Week 3 - Task 3", "Build PHP Project - Week 3 - Task 4", "Build PHP Project - Week 3 - Task 5"],
            ["Build PHP Project - Week 3 - Task 6", "Build PHP Project - Week 3 - Task 7", "Build PHP Project - Week 3 - Task 8", "Build PHP Project - Week 3 - Task 9", "Build PHP Project - Week 3 - Task 10"],
            ["Build PHP Project - Week 4 - Task 1", "Build PHP Project - Week 4 - Task 2", "Build PHP Project - Week 4 - Task 3", "Build PHP Project - Week 4 - Task 4", "Build PHP Project - Week 4 - Task 5"],
            ["Build PHP Project - Week 4 - Task 6", "Build PHP Project - Week 4 - Task 7", "Build PHP Project - Week 4 - Task 8", "Build PHP Project - Week 4 - Task 9", "Build PHP Project - Week 4 - Task 10"]
        ];

        let currentWeek = 0;
        const weekNumberElement = document.getElementById('week-number');
        const taskListElement = document.getElementById('task-list');

        function updateTaskList() {
            taskListElement.innerHTML = ''; // Clear previous tasks

            weeks[currentWeek].forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                taskListElement.appendChild(li);
            });

            weekNumberElement.textContent = currentWeek + 1; // Update week number display
        }

        function previousWeek() {
            if (currentWeek > 0) {
                currentWeek--;
                updateTaskList();
            }
        }

        function nextWeek() {
            if (currentWeek < weeks.length - 1) {
                currentWeek++;
                updateTaskList();
            }
        }

        // Initial task list
        updateTaskList();
        
        
        // JavaScript to simulate the typewriter effect
    const textOne = "Daniel";
    const textTwo = "a passionate developer";
    const textThree= "a creative organizer";
    const textFour="a consistent learner";
    const delay = 2000; // Adjust the delay between lines

    function typeWriter(text, targetId, callback) {
        const target = document.getElementById(targetId);
        let index = 0;
        const typing = setInterval(() => {
            target.textContent += text[index].toUpperCase();
            index++;
            if (index === text.length) {
                clearInterval(typing);
                setTimeout(callback, delay);
            }
        }, 100); // Adjust the typing speed (milliseconds)
    }
start();
    function start(){
    document.getElementById('one').style.display="block";
    document.getElementById('one').innerHTML="";
    typeWriter(textOne, 'one', () => {
        document.getElementById('one').style.display="none";
       document.getElementById('two').innerHTML=""; document.getElementById('two').style.display="block";
        typeWriter(textTwo, 'two', () => {
         document.getElementById('three').innerHTML=""; document.getElementById('three').style.display="block"; document.getElementById('two').style.display="none";
            typeWriter(textThree, 'three', () => {
         document.getElementById('four').innerHTML=""; document.getElementById('four').style.display="block"; document.getElementById('three').style.display="none";
            typeWriter(textFour, 'four', () => {
            document.getElementById('four').style.display="none";
            start();
        });
        });
        });
    });
        
        }