import React from 'react'

function Blog() {
  return (
    <div className='mx-5'>
        <h1 className="text-center my-5">Blogs</h1>
      <h2>1. Difference between javascript and nodejs</h2>
      <p>Ans. Javascript is a programing language and nodejs is a javasccript library. We use nodeJs in server side scripting. Javascript can run only in browser and used in the client side. In the other hand nodejs runs outside of browser. It handles server side script. </p>

      <h2>2. When should you use nodejs and when should you use mongodb</h2>
      <p>Ans. Nodejs is a javascript framework for server side scripting. It uses for api building and many other operations in server side. In the other hand mongo db is a database. It uses for store data in a storage that can be access from anywhere. MOngodb allows to store multiple data in database and mongodb is a nosql based databased. </p>

      <h2>3. Differences between sql and nosql</h2>
      <p>Ans. Sql used in relational database management system. It is structured and can be stored in tables Its schemas are static and it uses to design complex queries. And NoSQL is used for non relational database system. It uses Json data to store information</p>

      <h2>4. What is the purpose of jwt and how does it work</h2>
      <p>Ans. Jwt is used for authorization. We uses Jwt to secure api or server from malicius users. At first when users tries to login the server creates a jwt for user with secret and send it to browser. Then the server checks the jwt token. If the token matches the user can authenticate. </p>
    </div>
  )
}

export default Blog