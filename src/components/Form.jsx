import {useState} from 'react';

const Form = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        contact: ""
    });
   
    const[errors, setErrors] = useState({});
    const[isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const{name, value} = event.target;
        setFormData(prev=> ({...prev, [name]: value}))

    }



    const validateForm = (data) => {

        const newError = {};
        
      
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const contactRegex = /^[0-9]{10}$/;

       // const passwordCharacters = ["@", "#", "$", "%", "&", "!", "^"];

        const specialCharacters = ["@", "#", "$", "%", "&", "!", "^"];

        const containsSpecialCharacter = specialCharacters.some((char) => data.password.includes(char));

        if(!data.email){
           newError.email = "Enter an email";
        }
        else if(!emailRegex.test(data.email)){
            if(!data.email.search("@")){
                newError.email = "@ is missing";
            }
            else if(!data.email.search(".")){
                newError.mail = ". is missing"
            }
            else{
                newError.email = "Enter a valid email";
            }
           
        }
        
        /*
        if(!data.password){
            newError.password = "Enter a password";
       
        }
        else if(!passwordRegex.test(data.password)){
            newError.password = "Enter a valid password";
        }
        
        else if(data.password.length <6 || data.password.length > 12){
            newError.password = "Enter a valid password";
        }
        
        */
        

        
        if(!data.passwpord){
            newError.password = 'Enter a password';
        }
        else if(!containsSpecialCharacter){
            newError.password = "Character is missing";
        }
        else if(!data.password.length < 6){
            newError.password = `Password contains ${data.password.length} letters, must be at least 6`;
        }
        else if(!data.password.length > 12){
            newError.password = `Password contains ${data.password.length} letters, must not be more than 12 `
        }
      
        

        if(!data.contact){
            newError.contact = "Enter a contact";
        }
        else if(!contactRegex.test(data.contact) || data.contact.length!=10){
           newError.contact = "Enter a valid contact";

        }

       return newError;


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationError = validateForm(formData);

        setErrors(validationError);

    }



  return (
    <div className='w-1/2 h-screen mt-20'>
        <h2 className='text-2xl lg:font-bold text-center'>Hello Again!</h2>
        <h3 className='text-xl text-bold text-center'>Welcome back.</h3>

        <form  onSubmit={handleSubmit} >

            <div className=' flex flex-col justify-center items-center' >
              
                <input type="text"
                placeholder="name"
                className='max-w-md border-2 border-solid border-black-600 rounded-2xl m-4 p-1'
                name="name"
                value={formData.name}
                onChange={handleChange}
                 />
            </div>

            <br/>

            <div  className=' flex flex-col justify-center items-center' >
                
                <input type="text"
                placeholder='email@mail.com'
                className='max-w-md border-2 border-solid border-black-600 rounded-2xl m-4 p-1'
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
             
            </div>

            <br/>

            <div  className=' flex flex-col justify-center items-center' >
           
                <input type="password"
                placeholder='password'
                className='max-w-md border-2 border-solid border-black-600 rounded-2xl m-4 p-1'
                name="password"
                value={formData.password}
                onChange={handleChange}
                 />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <br/>

            <div  className=' flex flex-col justify-center items-center' >
                
                <input type="text"
                placeholder='contact'
                className='max-w-md border-2 border-solid border-black-600 rounded-2xl m-4 p-1'
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                 />
                {errors.contact && <p>{errors.contact}</p>} 
            </div>

            <br/>


            <button 
            className='border-2 border-solid border-black-600 px-2 py-2 rounded-2xl text-xl text-white bg-blue-700 position-absolute top-80 left-50' 
            >Submit</button>
        </form>

    </div>
  )
}

export default Form;