import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const dummyMeals = {
  breakfast: [
    {
      name: 'Black Forest',
      ingredients: 'blueberry, raspberry, black berry, light yogurt',
      img: 'https://th.bing.com/th/id/OIP.bla-l_agnUAaFI_dPZukzgAAAA?w=378&h=567&rs=1&pid=ImgDetMain',
    },
    {
      name: 'Cinnamon Porridge',
      ingredients: 'banana, almond, milk',
      img: 'https://storage.googleapis.com/fitia_public_images/recipes%2FGR-R-V-00018621_k0um9z3izkbxva39v6eyfus6_large.jpg',
    },
  ],
  lunch: [
    {
      name: 'Pesto Spinach',
      ingredients: 'spinach, pesto',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Pesto-spinach-penne-9942b45.jpg',
    },
    {
      name: 'Butter Bean Wrap',
      ingredients: 'bean, corn',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Butter-bean-curry-wraps-131c7b7.jpg?resize=900%2C471',
    },
  ],
  dinner: [
    {
      name: 'Seared Salmon',
      ingredients: 'Salmon, salt',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWY7VfCSCxCMnqG20wX19DfsZg1lWtBVG0Q&s',
    },
    {
      name: 'Shrimp with Mashed Potato',
      ingredients: 'red shrimp, potato',
      img: 'https://i.pinimg.com/736x/46/20/f0/4620f0e69307ca244b4930bdac6eff62.jpg',
    },
  ],
  snacks: [
    {
      name: 'Green Apple',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf47OQm9Xlyvwrjh3IKSpVz_UzIVtmwOzFqw&s',
    },
    {
      name: 'Almond',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aFbtT1dthmgRVxhynP3-1bhqahLWrzHuIQ&s',
    },
  ],
};

const LoseWeightMeals = () => {
  const navigate = useNavigate();
  const formattedTitle = "Lose Weight"; // hardcoded

  const handleAddMeal = (category) => {
    navigate(`/add-meal/lose-weight/${category}`);
  };

  const categories = Object.keys(dummyMeals);

  return (
    <TrainerLayout pageTitle="Manage Client">
      <h2 className="text-xl font-semibold text-center mb-8">{formattedTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {categories.filter((cat) => cat !== 'snacks').map((category) => (
          <div key={category} className="bg-[#B7E4C7] p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-center capitalize mb-4">{category}</h3>
            <div className="space-y-3">
              {dummyMeals[category].map((meal, index) => (
                <div key={index} className="bg-white flex items-center gap-3 p-2 rounded shadow">
                  <img src={meal.img} alt={meal.name} className="w-12 h-12 object-cover rounded-full" />
                  <div>
                    <p className="font-semibold">{meal.name}</p>
                    {meal.ingredients && (
                      <p className="text-sm text-gray-500">{meal.ingredients}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleAddMeal(category)}
              className="flex justify-center items-center w-8 h-8 rounded-full bg-white mt-4 mx-auto shadow text-xl font-bold"
            >
              +
            </button>
          </div>
        ))}
      </div>

      {/* Snacks Section */}
      <div className="bg-[#B7E4C7] p-4 rounded-xl shadow max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold text-center capitalize mb-4">Snacks</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {dummyMeals.snacks.map((meal, index) => (
            <div key={index} className="bg-white flex items-center gap-3 p-2 rounded shadow w-48">
              <img src={meal.img} alt={meal.name} className="w-10 h-10 object-cover rounded-full" />
              <p className="font-semibold">{meal.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleAddMeal('snacks')}
          className="flex justify-center items-center w-8 h-8 rounded-full bg-white mt-4 mx-auto shadow text-xl font-bold"
        >
          +
        </button>
      </div>
    </TrainerLayout>
  );
};

export default LoseWeightMeals;