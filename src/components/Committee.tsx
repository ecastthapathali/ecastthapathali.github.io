import Card from "./Card";

// replace with the object containg all the team member. Current order - image, name, position
const TeamMemberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const Committee = () => {
    return (
        <section className="bg-gradient-to-t from-theme-lqa flex w-full text-center flex-col p-4">
            <h1 className="text-theme text-5xl my-8">Our Committee</h1>
            {/* Team Member Cards Collections */}
            <div className="py-8 grid place-items-center gap-y-16 grid-cols-4">
                {/* replace it with the appropaite object containing team info... */}
                {TeamMemberList.map((memInfo)=>(<Card imgSrc="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" name="Name Here" pos="-Position-" />))}
            </div>
        </section>
    )
  };
  
  export default Committee;
  