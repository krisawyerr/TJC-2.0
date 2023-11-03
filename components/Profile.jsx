import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  // Create a copy of the data array and reverse it
  const reversedData = [...data].reverse();

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient nameTooSmall'>{name.toUpperCase()} Profile</span>
      </h1>

      <div className='mt-10 eee'>
        {reversedData.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
