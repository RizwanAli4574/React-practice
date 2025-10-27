function Hello({ name="Guest", age=34 , city="Hanif Park" , hobbies} ) {
  

  return (
    <>
      <h1>Hello {name}</h1>
      <h2>Age:  {age}</h2>
      <h3>City: {city}</h3>
      <ul>
        {hobbies.map((hobby, index)=>(  
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default Hello;
