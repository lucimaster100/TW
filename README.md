# Proiect-TW
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1>ColB (Collecting Bottles on Web)</h1>
        <dl>
            <dt>Authors</dt>
            <dd>Croitor Robert Constantin (X) , Todica Lucian (X)
            <dt>Coordinator</dt>
            <dd>Amariei Ciprian</dd>
            <dt>Faculty of Computer Science, "Alexandru Ioan Cuza" University, Iași, Romania</dt>
            <dt>Web Tehnologies Course</dt>
        </dl>
    <div role="contentinfo">
        <ol role="directory">
            <li><a href="#1-project__details">Project Details</a> </li>
            <li><a href="#2-introduction">Introduction</a> </li>
            <ol>
                <li><a href="#21-introduction__project">The Project</a></li>
            </ol>
            <li><a href="#3-user-interface">User Interface</a>
                <ol role="structure-directory">
                    <li><a href="#31-structure__login">Login</a></li>
                    <li><a href="#32-structure__register">Register</a></li>
                    <li><a href="#33-structure__home">Home Page</a></li>
                    <li><a href="#34-structure__products">Main Page</a></li>
                    <li><a href="#35-structure__filters">Filters</a></li>
                    <li><a href="#36-structure__myProfile">Admin options</a></li>
                    <ol>
                        <li><a href="#361-structure__myProfile_gallery">User Gallery</a></li>
                        <li><a href="#362-structure__myProfile_description">Change Description</a></li>
                        <li><a href="#363-structure__myProfile_picture">Change Picture</a></li>
                        <li><a href="#364-structure__myProfile_csv">Download CSV</a></li>
                        <li><a href="#365-structure__myProfile_pdf">Download PDF</a></li>
                    </ol>
                     <li><a href="#37-structure__top10">Top 10</a></li>
                    <li><a href="#38-structure__users">Profiles</a></li>
                    <li><a href="#39-structure__admin">Admin Page</a></li>
                </ol>
            </li>
            <li><a href="#4-use-cases">Use-cases</a>
            <ol>
                <li><a href="#41-use-cases__filter">Filtering</a></li>
                <li><a href="#42-use-cases__logout">LogOut</a></li>
                <li><a href="#43-use-cases__delete">Delete Container</a></li>
                <li><a href="#44-use-cases__login">Login</a></li>     
            </ol>
            </li>
            <ol>
                <li><a href="#61-website-overview">Website overview</a></li> 
                <li><a href="#62-how-the-gamification-systems-are-implemented">How the website was created</a></li>
            </ol> 
            </li>
        </ol>
    </div>
    <section id="project-details" role="doc-abstract">
        <h2>1. Project details</h2>
        <p>Sa se dezvolte o aplicatie Web destinata colectionarilor de recipiente (sticle, clondire, butelii, damigene, butelci,...). Pe baza facilitatilor de cautare multi-criteriala implementate, utilizatorii autentificati vor putea crea, inventaria si partaja (sub)colectii de recipiente in functie de diverse caracteristici (tip, imagine, valoare, tara, perioada de utilizare, istoric, existenta etichetei etc.), plus vor putea importa/exporta datele referitoare la recipientele detinute. Se vor genera statistici diverse ce pot fi exportate in formate deschise – minimal, CSV si PDF. Se va realiza, de asemenea, un clasament al celor mai populare recipiente, disponibil si ca flux de date RSS.</p>
    </section>
    <section id="introduction" role="doc-introduction">
        <h2>2. Introduction</h2>
        <p>ColB is a Web Page designed for storing and sharing all kind of beverage containers. Users can store their containers in here, giving details about them. Also, they can see others uploads and check their details</p>
    </section>
    <section id="introduction__project" role="doc-introduction">
        <h3>2.1. The Project</h3>
        <p>ColB is a website that allows users to upload their beverage containers and see what other users collected</p>
        <p>Users can see all the uploaded containers in the main page and also can filter them using different filters</p>
        <p>They can also export their containers in CSV and PDF formats</p>
        <p>Every user has to be registered in order to use the web app</p>
    </section>
    <section id="structure" role="doc-structure">
        <h2>3. User Interface</h2>
        <p>On every page there is a navigation bar that helps the user easily navigate around our page</p>
    </section>
    <section id="structure__login" role="doc-structure">
        <h3>3.1. Login Page</h3>
        <p>In there, the user have to input his login creditentials in order to get acces to our webpage. Their inputs are compared to the ones presend in the user database, and if everything matches, they get acces. If something is wrong, a message will be shown so the users know what they inputed wrong. If the user does not have an account, they can use the Register Button to be redirected to the Register Page</p>
    </section>
    <section id="structure__register" role="doc-structure">
        <h3>3.2. Register Page</h3>
        <p>In there, the user can create a new account by completing the required fields with valid informations. If everything is valid, a new user entry will be created in the database. Then, the users can use the Login Button to go back to the Login Page</p>
    </section>
    <section id="structure__home" role="doc-structure">
        <h3>3.3. Home Page</h3>
        <p>After logging in, the user will be greeted by a nice welcome page. After clicking on the page, the user will be redirected to the Main Page</p>
    </section>
    <section id="structure__products" role="doc-structure">
        <h3>3.4.Main Page</h3>
        <p>In there, the user can see all the uploaded containers that are stored on our webpage. By hovering a container, it will rotate, so the user can see all the informations about that specific container on the back of the card. While hovering , the user can also use the Like Button present there in order to Like that specific container. If the vote is succesfull the user will be redirected to a page in which he hasa back button</p>
    </section>
    <section id="structure__filters" role="doc-structure">
        <h3>3.5. Filtered Page</h3>
        <p>While the user is on the Main Page or another Filtered Page, he can use the Filter Button present in the Navigation Bar in order to select one of the filters that we provide, so he can see only a specific category of containers. Some filters that we provide are : Type, Price, Origin, Condition, Present Label.</p>
    </section>
    <section id="structure__myProfile" role="doc-structure">
        <h3>3.6. User Profile</h3>
        <p>In there, the user will be abble to see his account details, like Profile Picture, Description, and Username. While on that page, the user have 5 more buttons availeable to use. </p>
    </section>
        <section id="structure__myProfile_gallery" role="doc-structure">
            <h4>3.6.1 User Gallery</h4>
            <p>In there, the user will be abble to see his uploaded containers. </p>
        </section>
        <section id="structure__myProfile_description" role="doc-structure">
            <h4>3.6.2 Change Description</h4>
            <p>Using this button, the user will be redirected to a new form that allows him to input a new description for his profile.</p>
        </section>
        <section id="structure__myProfile_picture" role="doc-structure">
            <h4>3.6.3 Change Picture</h4>
            <p>Using this button, the user will be redirected to a new form that allows him to input a new photo url in order to change his profile picture.</p>
        </section>
        <section id="structure__myProfile_csv" role="doc-structure">
            <h4>3.6.4 Download CSV</h4>
            <p>Using this button, a CSV file containing all the user uploaded containers informations will be downloaded</p>
        </section>
        <section id="structure__myProfile_pdf" role="doc-structure">
            <h4>3.6.5 Download PDF</h4>
            <p>Using this button, a PDF file containing all the user uploaded containers informations will be downloaded</p>
        </section>
        <section id="structure__top10" role="doc-structure">
            <h3>3.7. Top 10</h3>
            <p>Using the Top10 button, present on the navigation bar, the user will be redirected to a new page, containing the top 10 most liked containers on the page.</p>
        </section>
    <section id="structure__users" role="doc-structure">
        <h3>3.8. Profiles</h3>
        <p>Using the Profiles button, present on the navigation bar, the user will be redirected to a new page, containing all the users that are currently registered on the websit, along with their profile picture.</p>
    </section>
    <section id="structure__admin" role="doc-structure">
    <h3>3.9. Admin Page</h3>
        <p>If the user have admin privileges, he can acces the admin page, where he can user commands like delete user and delete photo </p>
    </section>
        <h2>4. Use cases</h2>
    </section>
    <section id="use-cases__filter" role="doc-structure">
        <h3>4.1. The user wants to see only details about Casks</h3>
        <p>After logging in, the user can use the Filter button in the navigation menu , hover over Types and then click on Cask in order to be redirected to a page that shows only details about Casks</p>
    </section>
    <section id="use-cases__logout" role="doc-structure">
        <h3>4.2. The user wants to logout</h3>
        <p>After loggin in, the user can use the LogOut button in the navigation menu in order to log out of his account</p>
    </section>
    <section id="use-cases__delete" role="doc-structure">
        <h3>4.3. The user want to delete a specific photo</h3>
        <p>After loggin in, if the user have admin privileges, he can acces the Admin page, and complete the Delete Photo form in order to delete a specific container</p>
    </section>
    <section id="use-cases__login" role="doc-structure">
        <h3>4.4. The user wants to login</h3>
        <p>While on the login page, the user can input his account details in order to login. If he uses a name that is not registered, he will be propmted with a "Wrong Username" message. If he does not complete a field, a message saying "No empty field is allowed" will be showed. If he uses a password that does now match the username password present in the database, a message saying that the password is incorrect will be shown. If everything is ok, the user will be logged in</p>
    </section>
     <section id="use-cases__documentation" role="doc-structure">
        <h2>5. Documentation</h2>
        <p>The user can register only using unique names and emails. After registering, the user password will be encrypted and sent to the database. While trying to login, the user inputed password will be encrypted and compared to the one present in the database</p>
        <p> For routing, we used HTTP protocols</p>
        <p>For encryption we used a custom made alhorithm</p>
        <p>In order to retrieve data from the database we used the Fetch function.</p>
        <p>In order to add a image, the user have to input the Image Url</p>
    </section>
   
</header>
</body>
</html>
