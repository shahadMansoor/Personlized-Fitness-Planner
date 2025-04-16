import React from 'react';
import UserLayout from '../components/UserLayout';

const meals = {
  breakfast: [
    { name: 'Black Forest', desc: 'blueberry, raspberry, black berry, light yogurt', img: 'https://th.bing.com/th/id/OIP.bla-l_agnUAaFI_dPZukzgAAAA?w=378&h=567&rs=1&pid=ImgDetMain' },
    { name: 'Cinnamon Porridge', desc: 'banana, almond, milk', img:'https://storage.googleapis.com/fitia_public_images/recipes%2FGR-R-V-00018621_k0um9z3izkbxva39v6eyfus6_large.jpg' }
  ],
  lunch: [
    { name: 'Pesto Spinach', desc: 'spinach, pesto', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Pesto-spinach-penne-9942b45.jpg' },
    { name: 'Butter Been Wrap', desc: 'been, corn', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Butter-bean-curry-wraps-131c7b7.jpg?resize=900%2C471' }
  ],
  dinner: [
    { name: 'Seard Salmon', desc: 'Salmon, salt', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWY7VfCSCxCMnqG20wX19DfsZg1lWtBVG0Q&s' },
    { name: 'Shrimp with Mashpoteto', desc: 'red shrimp, poteto', img: 'https://i.pinimg.com/736x/46/20/f0/4620f0e69307ca244b4930bdac6eff62.jpg' }
  ],
  snacks: [
    { name: 'Green Apple', desc: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf47OQm9Xlyvwrjh3IKSpVz_UzIVtmwOzFqw&s' },
    { name: 'Almond', desc: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aFbtT1dthmgRVxhynP3-1bhqahLWrzHuIQ&s'}
  ]
};

const Meal = () => {
  return (
    <UserLayout pageTitle="Meal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold bg-green-300 px-4 py-2 rounded inline-block mb-4">
          Today Meal Suggestions
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          This meal plan is designed to be nutrient-dense, low in calories, and high in protein and fiber to keep you full and energized while promoting weight loss.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-6">Total Calories: 1500 kcal</p>

        {/* Meal Sections */}
        {Object.entries(meals).map(([type, items]) => (
          <div key={type} className="mb-6">
            <div className="flex gap-4 items-start">
              <button className="bg-green-800 text-white font-bold px-4 py-2 rounded min-w-[110px] capitalize">
                {type}
              </button>
              <div className="flex flex-wrap gap-4">
                {items.map((item, index) => (
                  <div
                  key={index}
                  className="w-[250px] flex items-center gap-3 bg-green-200 px-4 py-2 rounded-lg shadow">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Tips */}
        <div className="mt-10">
          <h3 className="font-bold text-md text-green-800 mb-2">Tips:</h3>
          <ul className="list-disc pl-5 text-sm space-y-1 text-green-900">
            <li>Drink at least 2-3 liters of water throughout the day!</li>
            <li>Avoid sugary drinks and opt for herbal teas or infused water.</li>
          </ul>
        </div>
      </div>
    </UserLayout>
  );
};

export default Meal;
