INSERT INTO COURSES(user_id, course_name, course_description, difficulty_level, price, start_date, end_date, reading, homework_problem) VALUES (1, 'Google Like a Pro2', 'Sharpen your googling skills with this great course', 1, 0, 'Today', 'Tomorrow', 'Read this text', 'Solve this homework problem XYZ');
INSERT INTO HOMEWORK(course_id, user_id, user_name, user_answer, graded_status, instructor_comments) VALUES (2, 3, 'kaleb', 'The answer is 3', 'in progress', 'Way off, try even harder')

select * from homework

DELETE FROM homework WHERE user_answer is null;

select * from courses

select distinct course_name, course_description, difficulty_level, price from courses join homework on courses.course_id = homework.course_id
where homework.user_id = 3 

delete from homework where instructor_comments is null

select * from users

INSERT INTO courses (user_id, course_name, course_description, difficulty_level, price, start_date, end_date) VALUES (1, 'How to Google like a pro', 'Learn to use google better than Lebron James plays basketball', 3, 0, null, null);