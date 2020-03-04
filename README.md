# march_last

Start Server for backend
cd thirdtime
Cd DjReact
cd backend
virtualenv env
source env/bin/activate
pip install -r requirements.txt
cd src
python manage.py runserver


Start Server for frontend
cd frontend
npm i 
npm start 

Access app with this link: 
http://localhost:3000/login/

After inputing form values in front end, check backend at this url (here you will find Article List that lists out all the values that have been entered by the user): 
http://127.0.0.1:8000/api/ 

If you would like to access Django admin, the admin info is: 

Username: admin
Password: adminlogin
http://127.0.0.1:8000/admin/

        
Clicking on either industry or academic will take you to two separate pages. However, the results will be sent to the same list in http://127.0.0.1:8000/api/ 

Bugs to fix: 
1. The “submit” button in the forms is supposed to be disabled until all inputs are complete because you need to completely fill out the form for the data to be registered in the backend. However, the code is currently defying logic and allowing the button to be enabled after only one entry. 
2. The form currently does catch an invalid email but does not simultaneously disable the “submit” button while pinging the user 

