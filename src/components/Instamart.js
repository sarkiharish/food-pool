import React, { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  
  return (
    <div className='border m-2 p-2'>
      <h1 className='text-3xl'>{title}</h1>
      {isVisible && <p>{description}</p>}
      <button className='bg-blue-500 text-white rounded-md p-1' onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  )
}

const Instamart = () => {
  
  const [visibleSection, setIsVisibleSection] = useState("about")
  return (
    <>
        <h1 style={{justifyContent:'center', alignItems:'center', backgroundColor:'palegreen'}}>Instamart</h1>
        <Section
         title="About Instamart"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
         isVisible = {visibleSection === "about"}
         setIsVisible={() => setIsVisibleSection(visibleSection === "about" ? null :'about')}
         />
        <Section
         title="Team Instarmart"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
         isVisible = {visibleSection === "team"}
         setIsVisible={() => setIsVisibleSection(visibleSection === "team" ? null : 'team')}
         />
        <Section
         title="Career @ Instamart"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
         isVisible = {visibleSection === "career"}
         setIsVisible={() => setIsVisibleSection(visibleSection === 'career' ? null : 'career')}
         />
    </>
  )
}

export default Instamart