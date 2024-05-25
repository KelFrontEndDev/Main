import Profile from "./Profile";
  
   {/*Gallery is a Parent component of Profile() */}
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scietist</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }